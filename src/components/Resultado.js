import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Visor from './Visor';

export const Resultado = props => {
    return (
        <View>
            <Visor resultado={props.resultado} />
        </View>
    );
}


