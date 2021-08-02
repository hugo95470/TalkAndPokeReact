import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Text, ImageBackground} from 'react-native';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';

function AfficheCollectionView(props) {

        //AFFICHAGE DES NEWS
        
        //Affiches
        var [affiches, setAffiches] = useState("");


                
        var ItemAffiche = ({ title, image, oeuvreId, categorie }) => {

            return(
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('DetailsOeuvrePage', {OeuvreId: oeuvreId})}>
                    <View style={styles.shadow}>
                        <ImageBackground imageStyle={{ borderRadius: 15}} source={{uri: image}} resizeMode="cover" style={styles.affiche}>
                            <Image style={{height: 50, width: 50, margin: 10, marginBottom: 220, borderRadius: 100}} source={{uri: 'https://hugocabaret.onthewifi.com/TalkAndPoke/Affiches/illustrations/Illustration' + categorie + '.jpg'}}/>
                            <BlurView intensity={250} style={styles.TitreContainer}>
                                <Text style={styles.Titre} blurRadius={1}>{title}</Text>
                            </BlurView>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            );
        }



        var renderItemAffiche = ({ item }) => (
            <ItemAffiche style={styles.containerAffiches} title={item.Titre} image={item.Image} oeuvreId={item.OeuvreId} categorie={item.Code} />
        );


        //CHARGER LES NEWS
        useEffect(() => {

            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/News/getNews.php?UtilisateurId=8&Date=2021-06-12 00:00:00&Nombre=20')
            .then((response) => response.json())
            .then((data) => {
                setAffiches(data)
            });            
            
        }, []);

        //Cherger nouvelles News
        loadAffiches = () => {
            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/News/getNews.php?UtilisateurId=8&Date=2021-06-12 00:00:00&Nombre=20')
            .then((response) => response.json())
            .then((data) => {

                let newstate = [...affiches, ...data]

                setAffiches(newstate);
                
            });            
        }

        return (

            <FlatList ListHeaderComponent={props.header} data={affiches} renderItem={renderItemAffiche} keyExtractor={item => item.OeuvreId} numColumns="2" onEndReachedThreshold={0.3} onEndReached={() =>{loadAffiches()}}/>

        )
}

const styles = StyleSheet.create({
    
    TitreContainer: {
        padding: 0,
        paddingHorizontal: 5,
        paddingVertical: 5,
        minWidth: 100,
        marginRight: -9,
        position: 'absolute', right: '5%', bottom: '5%',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        elevation: 3,
    },
    Titre: {
        borderRadius: 19,
        padding: 10,
        width: 'auto',
    },
    affiche: {
        height: 280,
        width: 170,
        justifyContent: 'flex-end',
    },
    containerAffiches: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      shadow: {
          borderRadius: 19,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        height: 280,
        width: 170,
        backgroundColor : '#0000',
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 9.51,

        elevation: 15, 
    },
})


export default AfficheCollectionView