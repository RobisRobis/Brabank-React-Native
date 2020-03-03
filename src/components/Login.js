import React, { Component } from 'react';
import { isSignedIn, signIn } from '../services/auth-service'

import { 
    StyleSheet,
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, Alert } from 'react-native';

export default class Login extends Component {

    constructor(){
        super()
        this.state = {
            email: '',
            senha: ''
        }
    }

    async componentDidMount (){
        // const session = await isSignedIn();
        // if(session);
        // this.props.navigation.replace('Home');
    }

    entrar = async (e) => {
        Alert.alert('Bem-Vindo');

        const usuario = this.state;

        const response = await signIn(usuario); 

        if(response.ok){
            this.props.navigation.replace('Home')
        }
        //envio dos dados para api
    }

    cadastrar = (e) => {
        this.props.navigation.navigate("Cadastro");
    }

    validar = () => {
        const {email, senha} = this.state;
        if(!email || !senha){
            Alert.alert('Ops...', 'Todos os campos devem ser preenchidos');
            return false;
        }
        return true;
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.titulo}>Tela de Login:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Seu E-mail :" 
                        onChangeText={texto => this.setState({email:texto})}/>
                    <TextInput 
                        style={styles.input}
                        placeholder="Sua Senha :"
                        onChangeText={senha => this.setState({senha:senha})}/>
                    <TouchableOpacity style={styles.button} onPress={this.entrar}>
                        <Text>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.cadastrar}>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    form: {
        margin: 16,
        backgroundColor: 'azure',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    input: {
        marginTop: 8,
        alignSelf: 'Stretch',
        padding: 8,
        backgroundColor: 'white',
        fontSize: 16,
        borderRadius: 8
    },
    button: {
        height: 42,
        marginTop: 16,
        padding: 8,
        borderRadius: 8,
        borderColor: '#222',
        borderWidth: 2
    }
})