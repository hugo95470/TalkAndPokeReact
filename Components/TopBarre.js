import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';


function TopBarre(props) {

        return (

            <View style={styles.containerNavBarre}>

                <Image style={{height: 40, width: 150, marginLeft: 30, marginTop: 13, backgroundColor: 'rgba(255, 255, 255, 0)',}} source={require('../Images/TalkAndPokeLogo.png')}/>                

                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('MessageriePage')}>
                    <View style={styles.logo}>
                        <Image style={{height: 50, width: 50, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={{uri : "https://media.istockphoto.com/vectors/send-message-mail-icon-button-sign-paper-plane-navigation-logo-symbol-vector-id1227514358?k=6&m=1227514358&s=170667a&w=0&h=zK01wrL-BiUQIQv3JAEoUG2AdnDHE0JmWODhU6T2yNE="}}/>
                    </View>
                </TouchableOpacity>

            </View>

        )    
}

const styles = StyleSheet.create({
    containerTopBarre: {
        marginTop: 33,
    },
    containerNavBarre: {
        width: '100%',
        height: 70,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        marginTop: 33,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        backgroundColor: 'white',
        height: 60, 
        width: 60, 
        borderRadius: 100, 
        margin: 5, 
        marginRight: 20, 
        elevation: 10, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,  
        alignItems: 'center'
    }
})


export default TopBarre