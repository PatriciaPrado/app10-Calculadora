import React, {useState} from 'react';
import { Text, View } from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export const Painel = props => {

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [selecionado, setSelecionado] = useState(0);

    const selectedHandle = (item) => {
        setSelecionado(item);
    }

    const onChangeTextHandler = (nomeCampo, valor) => {
        
        if(nomeCampo === 'num1') {
            setNumero1(valor);
        } else if (nomeCampo === 'num2') {
            setNumero2(valor);
        }
    }

    const calculate = () => {
        let resultado = 0;
        if(selecionado === 1) {
            resultado = parseFloat(numero1) + parseFloat(numero2);
        } else if (selecionado === 2) {
            resultado = parseFloat(numero1) - parseFloat(numero2);
        } else if (selecionado === 3) {
            resultado = parseFloat(numero1) * parseFloat(numero2);  
        } else if (selecionado === 4) {
            if(numero2 === 0) {
                resultado = 'Nenhum # é divisível por 0!';
            } else {
                resultado = parseFloat(numero1) / parseFloat(numero2);
            }    
        } else {
            resultado = `Por favor, selecione uma operação...`;
        }

        props.resultadoVisor(resultado);
     }

    return (
    <View>
        <Entrada 
            num1={numero1} 
            num2={numero2} 
            onChangeTextHandler={onChangeTextHandler}/>
        <Operacao sinal={selecionado} onValueChangeHandler={selectedHandle} />
        <Comando calcular={calculate}/>
    </View>
    );
}