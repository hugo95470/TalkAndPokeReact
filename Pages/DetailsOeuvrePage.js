import React from 'react';
import { Image, StyleSheet, Text, ImageBackground, View, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";

import NavBarre from '../Components/NavBarre';
import { ScrollView } from 'react-native-gesture-handler';
import ReactionsView from '../Components/ReactionsView';
import LiensView from '../Components/LiensView'
    

    const DetailsOeuvrePage = ({ route, navigation }) => {

        const { OeuvreId } = route.params;

        var [affiche, setAffiche] = useState("");

        var [news, setNews] = useState("");


        //Charger la photo de L'utilisateur
        useEffect(() => {

            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Oeuvre/GetInfosOeuvres.php?OeuvreId=' + OeuvreId)
            .then((response) => response.json())
            .then((data) => setAffiche(data));

            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Oeuvre/GetInfosOeuvres.php?OeuvreId=' + OeuvreId)
            .then((response) => response.json())
            .then((data) => setNews(data));
            
        }, []);
    
        return (

            <View>

                <View style={styles.container}>
                    {/* <TopBarre/> */}

                    <ImageBackground source={{uri : affiche.Image}} style={styles.image}>

                        <ScrollView >

                            <LinearGradient style={{height: 700}} colors={['rgba(0,0,0,0)','#000']}>

                            <TouchableOpacity style={{backgroundColor: '#fffa', height: 50, width: 50, marginTop: 50, marginLeft: 20, borderRadius: 100}} onPress={() => navigation.pop()}>
                                <Image style={{height: 50, width: 50, opacity: 0.5}} source={{uri: 'https://www.esnaturopathiemaroc.com/wp-content/uploads/2017/11/chevron_left_black.png'}}/>
                            </TouchableOpacity>

                            <Text style={{marginTop: 'auto', marginBottom: 0, marginLeft: 30, fontSize: 30, color: 'white'}}>{affiche.Titre}</Text>
                            <Text style={styles.TitreBlanc}>{affiche.Description}</Text>

                            </LinearGradient>

                            <View style={{backgroundColor: 'black'}}>
                                <View style={{backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
                                    <ReactionsView/>

                                    <View style={{flexDirection: 'row', margin: 15}}>

                                        <TouchableOpacity style={{marginLeft: 'auto',}}>
                                            <View style={{backgroundColor: '#C70039', height: 60, width: 60, elevation: 5, borderRadius: 19, alignSelf: 'flex-end', marginRight: 30}}>
                                                <Image style={{height: 50, width: 50, marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto'}} source={{uri: 'https://i.pinimg.com/originals/a4/2f/21/a42f211a678bb2a2264cefa6e55b2ac2.png'}}></Image>
                                            </View>
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity style={{ marginRight: 'auto'}}>
                                            <LinearGradient colors={['#C70039','#FF5733','#FFC30F']}start={{x: 0, y: 0.5}} end={{x: 1, y: 1}} style={{height: 60, width: 220, borderRadius: 19, alignSelf: 'flex-end'}}>
                                                <Text style={styles.follow}>Following</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        
                                    </View>                                    

                                    <Text style={styles.TitreNoir}>News</Text>

                                    <LiensView navigation={navigation} oeuvreId={OeuvreId}/>

                                    <View style={{height: 300}}/>

                                </View>
                            </View>
                            

                            


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
    image: {
        height: '93%',
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
        backgroundColor: 'white',
        borderRadius: 100,
    },
    title: {
        margin: 10,
        marginBottom: 10,
        fontSize: 20,
    },
    TitreBlanc: {
        margin: 30,
        fontSize: 20,
        color: 'white',
    },
    TitreNoir: {
        margin: 30,
        fontSize: 20,
        color: 'black'
    },
    containerReaction: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 8,
        flexDirection:'row',
        alignItems:'center'
    },    
    follow: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 20,
        color: 'white',
    }
  });

  
export default DetailsOeuvrePage