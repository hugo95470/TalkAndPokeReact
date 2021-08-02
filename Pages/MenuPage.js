import React from 'react';
import { StyleSheet, Text, ImageBackground, View, FlatList, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';

import NavBarre from '../Components/NavBarre';
import TopBarre from '../Components/TopBarre';
import AfficheCollectionview from '../Components/AfficheCollectionView';
import AffinitesCollectionView from '../Components/AffinitesCollectionView';

function MainPage({ navigation }) {

    
        return (

            <View>

                <View style={styles.container}>
                    <Text style={{position: 'absolute', top: 50, left: 30, fontSize: 25}}>Menu</Text>


                    <View style={{height: '100%', width: '100%'}}>


                        <View style={{position: 'absolute', bottom: 520, left: '35%'}}>
                            <Image style={{height: 120, width: 120, borderRadius: 100,}} source={require("../Images/IllustrationQuizz.png")}/>
                            <Text style={{textAlign: 'center'}}>Quizz</Text>
                        </View>

                        <TouchableOpacity style={{position: 'absolute', bottom: 400, left: 10}} onPress={() => navigation.navigate('OeuvresPage', {OeuvreType: 'Culture'})}>
                            <View>
                                <Image style={{height: 120, width: 120, borderRadius: 100,}} source={require("../Images/IllustrationCulture.png")}/>
                                <Text style={{textAlign: 'center'}}>Culture</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{position: 'absolute', bottom: 400, right: 10}} onPress={() => navigation.navigate('OeuvresPage', {OeuvreType: 'Art'})}>
                            <View>
                                <Image style={{height: 120, width: 120, borderRadius: 100,}} source={require("../Images/IllustrationArt.png")}/>
                                <Text style={{textAlign: 'center'}}>Art</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{position: 'absolute', bottom: 230, left: 60}} onPress={() => navigation.navigate('OeuvresPage', {OeuvreType: 'Musique'})}>
                            <View>
                                <Image style={{height: 120, width: 120, borderRadius: 100,}} source={require("../Images/IllustrationMusique.png")}/>
                                <Text style={{textAlign: 'center'}}>Musique</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{position: 'absolute', bottom: 230, right: 60}} onPress={() => navigation.navigate('OeuvresPage', {OeuvreType: 'AudioVisuel'})}>
                            <View>
                                <Image style={{height: 120, width: 120, borderRadius: 100,}} source={require("../Images/IllustrationAudioVisuel.png")}/>
                                <Text style={{textAlign: 'center'}}>Audio visuel</Text>
                            </View>
                        </TouchableOpacity>

                            <View style={{flexDirection: 'row',width: '70%', position: 'absolute', bottom: 80, left: '15%', backgroundColor: 'white', borderRadius: 100, elevation: 5, padding: 10, paddingRight: 30}}>
                                <Image style={{height: 20, width: 20, marginTop: 'auto', marginBottom: 'auto', marginRight: 20}} source={require("../Images/Loupe.png")}/>
                                <TextInput placeholder={"rechercher une oeuvre"}/>
                            </View>

                    </View>

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
        height: '100%',
      width: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        marginLeft: 10,
        color: 'black',
      },
  })

  export default MainPage;

