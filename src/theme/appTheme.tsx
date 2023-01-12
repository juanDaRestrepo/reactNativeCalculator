import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainBackground: {
        flex: 1,
        backgroundColor: 'black'
      
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    resultNumbersText:{
        fontSize: 60,
        color: 'white',
        textAlign: 'right'
    },
    resultLittleText: {
        fontSize: 30,
        color: 'rgba(255,255,255, 0.5)',
        textAlign: 'right'
    },
   
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    }

});