import React from 'react';
import {TextInput, StyleSheet } from 'react-native';

export default props => (
    <TextInput 
        style={styles.numero} 
        keyboardType={'numeric'} 
        value={props.num.toString()}
        onChangeText={(text) => {props.onChangeTextHandler(props.nome, parseFloat(text || 0))}} 
     />
)

const styles = StyleSheet.create({
    numero:{
        width: 140,
        height: 80,
        fontSize: 20,
        borderWidth: 1,
    }
})