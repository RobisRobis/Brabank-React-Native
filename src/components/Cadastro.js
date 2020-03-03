import React, { Component } from 'react';
import { cadastrar as cadastrarUsuario } from '../services/auth-service'

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity, Alert, AsyncStorage
} from 'react-native';

export default class Cadastro extends Component {

    constructor() {
        super()
        this.state = {
            nome: '',
            email: '',
            senha: '',
            sexo: '',
            cpf: ''
        }
    }

    cadastrar = async (e) => {
        if (!this.validar()) return

        const usuario = this.state
        usuario.nome = "Hoaquin"
        usuario.sexo = "A"
        usuario.cpf = "123456789"

        console.log('passou')
        const response = await cadastrarUsuario(usuario)

        if (!response.ok)
            return Alert.alert('Erro ao cadastrar');

        console.log(usuario);

        Alert.alert("Cadastro com sucesso");
        this.props.navigation.navigate('Home')
    }

    validar = () => {
        const { email, senha } = this.state;

        if (!email || !senha) {
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
                        onChangeText={texto => this.setState({ email: texto })} />
                    <TextInput
                        style={styles.input}
                        placeholder="Sua Senha :"
                        onChangeText={senha => this.setState({ senha: senha })} />
                    <TouchableOpacity style={styles.button} onPress={this.cadastrar}>
                        <Text>Salvar</Text>
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