import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  color?: string;
  isWide?: boolean;
  action: (numberText: string) => void;
}

export const CalcButton = ({
  text,
  color = '#2D2D2D',
  isWide = false,
  action
}: Props) => {
  return (
    <TouchableOpacity
      onPress={ () => action(text) }
    >
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: isWide ? 180 : 80,
        }}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
