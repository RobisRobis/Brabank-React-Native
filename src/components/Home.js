import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity, Alert, AsyncStorage
} from 'react-native';

export default class Home extends Component {


    render(){
        return(
            <View style={styles.container}>
                <Text>Bem Vindo a Home {this.props.route.params.nome}</Text>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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