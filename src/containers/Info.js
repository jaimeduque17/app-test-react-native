import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import Logo from '../components/Logo';

import { Actions } from 'react-native-router-flux';

export default class Info extends Component {

    goBack() {
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                 <Image style={styles.image}
                    source={require('../images/logo.png')} />
                <View style={styles.textCont}>
                    
                    <Text style={{fontWeight: 'bold', fontSize: 22}}>Proceso de compra</Text>
                    <Text>VERIFICACIÓN:</Text>
                    <Text>1. Consulta la disponibilidad del producto a comprar en la talla deseada.</Text>
                    <Text>PAGO:</Text>
                    <Text>2. Escoge el metodo por el cual desees realizar el Pago.</Text>
                    <Text>3. Envía soporte de pago (foto) por Whatsapp.</Text>
                    <Text>4. Entregamos el número de la guía de envío para que puedas rastrear tu mercancía en tránsito.</Text>
                    <Text>5. Envio en la puerta de tu casa.</Text>
                    <Text>6. Confirma el recibido de tu mercancía enviando una foto soporte, califica la calidad tanto del producto como del servicio.</Text>
                    <Text>A TENER EN CUENTA:</Text>
                    <Text>-Unicamente se hacen cambios por talla y el valor del envío va por cuenta del cliente en caso tal.</Text>
                    <Text>-NO se hacen cambios por modelo.</Text>
                    <Text>-Al cancelar el valor del producto por medio de alguna entidad de Giro, el cliente se ve en la obligación de cancelar el valor del envío del dinero.</Text>
                    <Text>-Si el pago es por medio de tarjeta de crédito o pago contraentrega, al valor del producto se le incrementan $10.000.</Text>
                    <Text>PEDIDOS: (+57) 321 831 9448</Text>
                    <TouchableOpacity
                        onPress={this.goBack}
                        style={styles.button}
                    ><Text style={styles.btnText}> VOLVER </Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#58ACFA',
        alignItems: 'center',
        flex: 1
    },
    textCont: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: 100,
        height: 100
    },
    button: {
        width: 200,
        backgroundColor: '#FF0000',
        borderRadius: 25,
        paddingVertical: 16,
        marginVertical: 10
    }
});