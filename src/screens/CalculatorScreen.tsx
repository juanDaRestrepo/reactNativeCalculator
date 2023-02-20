import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {CalcButton} from '../components/CalcButton';
import {styles} from '../theme/appTheme';

enum Operators {
  sum,
  substract,
  divide,
  multiply,
}

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    // No aceptar doble punto
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //punto decimal
      if (textNumber === '.') {
        setNumber(number + textNumber);
        // Evaluar si es otro cero y hay un punto
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
        //Evaluar si es difrente de cero y no tiene un punto
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
        //Evaluar si es diferente de cero y tiene punto
      } else if (textNumber !== '0' && number.includes('.')) {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const btnDelete = () => {
    if (number.length < 3 && number.includes('-')) {
      setNumber('0');
      return;
    }
    if (number.length < 2) {
      if (parseInt(number) > 0) {
        setNumber('0');
        return;
      }
    }
    setNumber(number.slice(0, -1));
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeNumberForPrevious = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const btnMultiply = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.multiply;
  };

  const btnDivide = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.divide;
  };

  const btnSubtract = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.substract;
  };

  const btnSum = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.sum;
  };

  return (
    <View style={styles.calculatorContainer}>
      {
        (previousNumber !== '0') && (
          <Text style={styles.resultLittleText}>{previousNumber}</Text>
        )
      }

      <Text
        style={styles.resultNumbersText}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <CalcButton text="C" color="#9B9B9B" action={clean} />
        <CalcButton text="+/-" color="#9B9B9B" action={positiveNegative} />
        <CalcButton text="del" color="#9B9B9B" action={btnDelete} />
        <CalcButton text="/" color="#FF9427" action={btnDivide} />
      </View>
      <View style={styles.row}>
        <CalcButton text="7" action={buildNumber} />
        <CalcButton text="8" action={buildNumber} />
        <CalcButton text="9" action={buildNumber} />
        <CalcButton text="×" color="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <CalcButton text="4" action={buildNumber} />
        <CalcButton text="5" action={buildNumber} />
        <CalcButton text="6" action={buildNumber} />
        <CalcButton text="-" color="#FF9427" action={btnSubtract} />
      </View>
      <View style={styles.row}>
        <CalcButton text="1" action={buildNumber} />
        <CalcButton text="2" action={buildNumber} />
        <CalcButton text="3" action={buildNumber} />
        <CalcButton text="+" color="#FF9427" action={btnSum} />
      </View>
      <View style={styles.row}>
        <CalcButton text="0" action={buildNumber} isWide />
        <CalcButton text="." action={buildNumber} />
        <CalcButton text="=" color="#FF9427" action={clean} />
      </View>
    </View>
  );
};
