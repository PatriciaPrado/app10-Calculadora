import React, {Component} from 'react';
import {View} from 'react-native';
import { Painel, Resultado, Topo } from './components';
//  const [resultado, setResultado] = useState(0);


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resultado: 0,
    }
 }
 resultadoVisor = (valor) => {
      this.setState ({resultado: valor})
    }
  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado = {this.state.resultado}/>
        <Painel resultadoVisor = {this.resultadoVisor}  />
      </View>
    );
  }
}