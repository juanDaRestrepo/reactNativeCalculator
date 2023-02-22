import React, {useRef, useState} from 'react';

enum Operators {
    sum,
    substract,
    divide,
    multiply,
  }

export const useCalculator = () => {
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
  
    const calculate = () => {
      const num1 = Number(number);
      const num2 = Number(previousNumber);
  
      switch (lastOperation.current) {
        case Operators.sum:
          setNumber(`${num1 + num2}`);
          break;
        case Operators.divide:
          setNumber(`${num2 / num1}`);
          break;
        case Operators.multiply:
          setNumber(`${num1 * num2}`);
          break;
        case Operators.substract:
          setNumber(`${num2 - num1}`);
          break;
        default:
          break;
      }
      setPreviousNumber('0');
    };

    return {
        number,
        previousNumber,
        clean,
        buildNumber,
        btnDelete,
        positiveNegative,
        btnMultiply,
        btnDivide, 
        btnSubtract,
        btnSum,
        calculate
    }
}
