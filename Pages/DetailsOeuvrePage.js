import React from 'react';
import { Image, StyleSheet, Text, ImageBackground, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import NavBarre from '../Components/NavBarre';
import TopBarre from '../Components/TopBarre';
import { ScrollView } from 'react-native-gesture-handler';
    

    const DetailsOeuvrePage = ({ route, navigation }) => {

        const { OeuvreId } = route.params;

        var [affiche, setAffiche] = useState("");

        //Charger la photo de L'utilisateur
        useEffect(() => {

            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Oeuvre/GetInfosOeuvres.php?OeuvreId=' + OeuvreId)
            .then((response) => response.json())
            .then((data) => setAffiche(data));
            
        }, []);
    
        return (

            <View>

                <View style={styles.container}>
                    <TopBarre/>

                    <ImageBackground source={require('../Images/Pluie.png')} resizeMode="cover" style={styles.image}>

                        <ScrollView>
                            <ImageBackground imageStyle={{ borderRadius: 15}} source={{uri : affiche.Image}} resizeMode="cover" style={styles.affiche}>
                                <Image style={{height: 50, width: 50, margin: 20, borderRadius: 100}} source={ require('../Images/IllustrationLieu.png')}/>
                                <View style={styles.TitreContainer}>
                                    <Text style={styles.title}>{affiche.Titre}</Text>
                                </View>
                            </ImageBackground>


                            <View style={styles.container2}>
                                <Image style={{height: 50, width: 50, margin: 20, borderRadius: 100}} source={ require('../Images/IllustrationLieu.png')}/>

                                <Image style={{height: 50, width: 50, margin: 20, borderRadius: 100}} source={ require('../Images/IllustrationLieu.png')}/>

                                <Image style={{height: 50, width: 50, margin: 20, borderRadius: 100}} source={ require('../Images/IllustrationLieu.png')}/>
                            </View>

                            <Text style={styles.Titre}>{affiche.Description}</Text>

                        </ScrollView>
    
                    </ImageBackground>

                </View>
    
                <NavBarre navigation={navigation}/>
            </View>
            
    
        )
    }


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    container2: {
        flex: 1,
        justifyContent: 'space-around',
        padding: 8,
        flexDirection:'row',
        alignItems:'center'
        
        
      },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    affiche: {
        height: 450,
        width: 300,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 50,
        justifyContent: 'flex-end',
    },
    TitreContainer: {
        padding: 10,
        marginBottom: -20,
        marginRight: -20,
        position: 'absolute', right: '0%', bottom: '0%',
    },
    title: {
        backgroundColor: "#aaa",
        borderRadius: 19,
        padding: 10,
        width: 'auto',
        fontSize: 25,
    },
    Titre: {
        margin: 30,
        marginBottom: 300,
        fontSize: 20,
    },
    containerReaction: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 8,
        flexDirection:'row',
        alignItems:'center'
    },    
  });

  
export default DetailsOeuvrePage