import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';

function NavBarre(props) {

        var [photo, setPhoto] = useState("");

        //Charger la photo de L'utilisateur
        useEffect(() => {

            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Utilisateur/GetUtilisateur.php?UtilisateurId=8')
            .then((response) => response.json())
            .then((data) => setPhoto(data));
        }, []);


        return (

            <View style={styles.containerNavBarre}>
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('MainPage')}>
                    <Image style={{height: 40, width: 40, opacity: 0.6, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/MainPage.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('SwipePage')}>
                    <Image style={{transform: [{ rotate: '30deg' }],height: 40, width: 42, opacity: 0.6, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/swipe.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('MenuPage')}>
                    <Image style={{height: 40, width: 40, opacity: 0.6, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/Menu.png')}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('LikesPage')}>
                    <Image style={{height: 40, width: 40, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={{uri: photo.Image}}/>
                </TouchableOpacity>
            </View>

        )
}

const styles = StyleSheet.create({
    containerNavBarre: {
        width: '100%',
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopRightRadius: 19,
        borderTopLeftRadius: 19,
    },
})


export default NavBarre