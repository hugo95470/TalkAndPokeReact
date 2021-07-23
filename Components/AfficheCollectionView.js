import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Text, ImageBackground, ScrollView} from 'react-native';
import { useEffect, useState } from 'react';

function AfficheCollectionView({header}) {

        //AFFICHAGE DES NEWS
        
        //Affiches
        var [affiches, setAffiches] = useState("");

                
        var ItemAffiche = ({ title, image, oeuvreId, categorie }) => {

            //var Image = require('../Images/Illustration' + categorie + '.png');

            return(
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('DetailsOeuvrePage', {OeuvreId: oeuvreId})}>
                    <ImageBackground imageStyle={{ borderRadius: 15}} source={{uri: image}} resizeMode="cover" style={styles.affiche}>
                    <Image style={{height: 50, width: 50, margin: 20, borderRadius: 100}} source={ require('../Images/IllustrationLieu.png')}/>
                        <View style={styles.TitreContainer}>
                            <Text style={styles.Titre} blurRadius={1}>{title}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            );
        }



        var renderItemAffiche = ({ item }) => (
            <ItemAffiche style={styles.containerAffiches} title={item.Titre} image={item.Image} oeuvreId={item.OeuvreId} categorie={item.Code} />
        );


        //CHARGER LES NEWS
        useEffect(() => {

            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/News/getNews.php?UtilisateurId=8&Date=2021-06-12 00:00:00&Nombre=10')
            .then((response) => response.json())
            .then((data) => {
                setAffiches(data)
            });            
            
        }, []);

        //Cherger nouvelles News
        loadAffiches = () => {
            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/News/getNews.php?UtilisateurId=8&Date=2021-06-12 00:00:00&Nombre=10')
            .then((response) => response.json())
            .then((data) => {

                let newstate = [...affiches, ...data]

                setAffiches(newstate);
                
            });            
        }

        return (

            <FlatList ListHeaderComponent={header} data={affiches} renderItem={renderItemAffiche} keyExtractor={item => item.OeuvreId} numColumns="2" onEndReachedThreshold={0.3} onEndReached={() =>{loadAffiches()}}/>

        )
}

const styles = StyleSheet.create({
    
    TitreContainer: {
        padding: 10,
        marginBottom: -20,
        marginRight: -20,
        position: 'absolute', right: '0%', bottom: '0%',
    },
    Titre: {
        backgroundColor: "#fff",
        borderRadius: 19,
        padding: 10,
        width: 'auto',
    },
    affiche: {
        height: 280,
        width: 170,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'flex-end',
    },
    containerAffiches: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
})


export default AfficheCollectionView