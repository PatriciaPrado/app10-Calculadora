import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#2118F3',
        padding: 10,
        alignItems: 'center'
    },
    txtTitulo: {
        fontSize: 25,
        color: '#FFF'
    }
})

export default Cabecalho = props => (
    <View style={styles.topo}>
        <Text style={styles.txtTitulo}>Calculadora 1.0</Text>
    </View>
)