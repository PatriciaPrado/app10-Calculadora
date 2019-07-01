import React, {useState} from 'react';
import { Picker, StyleSheet } from 'react-native';

export default props => {
   
    return (
        <Picker 
            selectedValue={props.sinal}
            onValueChange={(item) => {props.onValueChangeHandler(item)}}
        >
            <Picker.Item label='Escolha a opção' value={0} />
            <Picker.Item label='Somar' value={1} />
            <Picker.Item label='Subtração' value={2} />
            <Picker.Item label='Multiplicação' value={3} />
            <Picker.Item label='Divisão' value={4} />
        </Picker>
)

}