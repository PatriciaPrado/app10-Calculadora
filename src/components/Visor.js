import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
    <View style={styles.resultado} >
        <TextInput style={styles.visor} placeholder='Resultado' value={props.resultado.toString() || '0'} />
    </View>
);

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30,
    },
    resultado: {
        alignItems: 'center'
    }
})
