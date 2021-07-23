import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useEffect, useState } from 'react';


function TopBarre() {

        var [photo, setPhoto] = useState("");

        //Charger la photo de L'utilisateur
        useEffect(() => {

            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Utilisateur/GetUtilisateur.php?UtilisateurId=8')
            .then((response) => response.json())
            .then((data) => setPhoto(data));


        }, []);

        return (

            <View style={styles.containerNavBarre}>
                <Image style={{height: 50, width: 200, marginLeft: 20, marginTop: 13, backgroundColor: 'rgba(255, 255, 255, 0)',}} source={require('../Images/TalkAndPokeLogo.png')}/>


                <View style={{backgroundColor: 'white', height: 60, width: 60, borderRadius: 100, margin: 5, alignItems: 'center'}}>
                                        <Image style={{height: 50, width: 50, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={{uri : photo.Image}}/>

                </View>



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
        justifyContent: 'space-between'
    },
})


export default TopBarre