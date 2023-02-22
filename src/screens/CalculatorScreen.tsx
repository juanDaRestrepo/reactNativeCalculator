import {View, Text} from 'react-native';
import {CalcButton} from '../components/CalcButton';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  
  const {
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
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.resultLittleText}>{previousNumber}</Text>
      )}

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
        <CalcButton text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
