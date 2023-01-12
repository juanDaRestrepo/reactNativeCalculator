import React from 'react'
import { View, Text } from 'react-native';
import { CalcButton } from '../components/CalcButton';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
        <Text style={styles.resultNumbersText}>1,500.00</Text>
        <Text style={styles.resultLittleText}>1,500.00</Text>
        <View style={ styles.row}>
          <CalcButton text='C'  color="#9B9B9B"/>
          <CalcButton text='+/-' />
          <CalcButton text='del' color="#9B9B9B"/>
          <CalcButton text='/' color="#FF9427"/>
        </View>
    </View>
  )
}
