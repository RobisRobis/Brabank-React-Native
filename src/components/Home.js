import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity, Alert, AsyncStorage
} from 'react-native';

import { isSignedIn } from '../services/auth-service'

const lanc = (props) => {
        return(
            <View>
                <Text>{lanc.tipo === 'R' ? 'Receita' : 'Despesa'}</Text>
                <Text>{lanc.descricao}</Text>
                <Text style={{fontSize:16}}>{lanc.valor}</Text>
            </View>
        )
}


export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            session: {},
            lancamentos: []
        }
    }

    componentDidMount = async () => {

        const session = await isSignedIn()
        this.setState({session})

        const params = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: 'Bearer ' + session.token
            }
        }
        const response = await fetch('http://10.107.144.32:3000/lancamentos', params);

        if(!response.ok)
            return console.log('Erro ao buscar lancamentos');

        const lancamentos = await response.json();
        this.setState({lancamentos});
    
    }



    render(){
        const {session} = this.state
        console.log(session)
        const usuario = session.usuario ? session.usuario : ''
        const lancamento = {
            descricao: 'teste'
        }
        return(
            <View style={styles.container}>
                <Text>Bem Vindo a Home {usuario.nome}</Text>
                <Text style={styles.viewLancamento}>Meus Lança</Text>
                
                    {this.state.lancamentos.map(lanc => {
                        return (
                            <lanc key={lanc.id} lancamento={lanc}/>
                        )
                    })}
                
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#548',
        paddingTop: 25
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
    },
    viewLancamento: {
        height: 50,
        backgroundColor: '#fff',
        padding: 8,
        margin: 8
    }
})