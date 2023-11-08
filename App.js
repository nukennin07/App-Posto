import React, {Component} from "react";
import {View,StyleSheet,Text, TextInput, TouchableOpacity, Keyboard, Modal, Button, Image } from  'react-native';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alcool: 0,
            gasolina: 0,
            resultado: 0,
            opção: '',
            modalVisible: false,
        };
        this.calcular = this.calcular.bind(this);
        this.gravarAlcool = this.gravarAlcool.bind(this);
        this.gravarGasolina = this.gravarGasolina.bind(this);
    }

    calcular(alcool, gasolina) {

        if (this.state.alcool == 0 || this.state.gasolina == 0) {
            alert('Digite os preços para calcular!');
            return;
        }else{
            let resultado = this.state.alcool / this.state.gasolina;
            if (resultado >= 0.7) {
                this.setState({opção: 'Gasolina'});
            }else{
                this.setState({opção: 'Álcool'});
            }
        }
        this.setState({modalVisible: true});

    }

    gravarAlcool(texto) {
        this.setState({alcool: Number(texto)});
    }

    gravarGasolina(texto) {
        this.setState({gasolina: Number(texto)});
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={
                    require('./src/logo.png')} 
                    style={{width: 150, height: 150}} 
                />
                <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold', marginTop: 10}}>Qual melhor opção?</Text>
                
                <View style={styles.alcool}>
                    <Text style={{marginBottom:-20, marginLeft: 5,fontSize: 10, color: 'black', fontWeight: 'bold'}}>Álcool (preço por litro)</Text>
                    <TextInput 
                        style={{
                            backgroundColor: 'white', 
                            width: 300, 
                            height: 50, 
                            borderRadius: 10, 
                            marginTop: 30, 
                            fontSize: 20, 
                            paddingLeft: 10
                            }} 
                        placeholder="Digite o preço" 
                        keyboardType="numeric" 
                        onChangeText={this.gravarAlcool}
                    />
                </View>
                <View style={styles.gasolina}>
                    <Text style={{marginBottom:-20, marginLeft: 5,fontSize: 10, color: 'black', fontWeight: 'bold'}}>Gasolina (preço por litro)</Text>
                    <TextInput 
                        style={{
                            backgroundColor: 'white',
                            width: 300, 
                            height: 50, 
                            borderRadius: 10, 
                            marginTop: 30, 
                            fontSize: 20, 
                            paddingLeft: 10
                        }} 
                        placeholder="Digite o preço" 
                        keyboardType="numeric" 
                        onChangeText={this.gravarGasolina}
                    />
                </View>
                <TouchableOpacity 
                    style={{
                        backgroundColor: 'orange', 
                        width: 300, 
                        height: 50, 
                        borderRadius: 10, 
                        marginTop: 30, 
                        alignItems: 'center', 
                        justifyContent: 'center'
                        }} 
                    onPress={this.calcular}
                >
                    <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Calcular</Text>   
                </TouchableOpacity>

                <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
                    <View style={styles.container}>
                        <Image source={
                            require('./src/gas.png')} 
                            style={{width: 150, height: 150}}
                        />
                        <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold',marginTop:15}}>Compensa usar {this.state.opção}</Text>
                        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', marginTop: 20}}>com os preços: </Text>
                        <Text style={{fontSize: 10, color: 'black', fontWeight: 'bold', marginTop: 10}}>Álcool: R${this.state.alcool.toFixed(2)}</Text>
                        <Text style={{fontSize: 10, color: 'black', fontWeight: 'bold', marginTop: 10}}>Gasolina: R${this.state.gasolina.toFixed(2)}</Text>
                        <TouchableOpacity 
                            style={{
                                borderColor: 'orange',
                                borderWidth: 2,
                                width: 300, 
                                height: 50, 
                                borderRadius: 10, 
                                marginTop: 30, 
                                alignItems: 'center', 
                                justifyContent: 'center'
                                }} 
                            onPress={() => {
                                this.setState({modalVisible: false});
                            }}
                        >
                            <Text style={{fontSize: 20, color: '#FFAB00', fontWeight: 'bold'}}>calcular novamente</Text>   
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#D3D3D3',  
    },
    alcool: {
        marginTop: 30,
    },
    gasolina: {
        marginTop: 15,
    },
});

export default App;