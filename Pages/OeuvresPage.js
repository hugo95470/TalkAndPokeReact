import React from 'react';
import { StyleSheet, Text, ImageBackground, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import NavBarre from '../Components/NavBarre';
import TopBarre from '../Components/TopBarre';
import AfficheCollectionview from '../Components/AfficheCollectionView';
import AffinitesCollectionView from '../Components/AffinitesCollectionView';

function OeuvresPage({ route, navigation }) {
    
    const { OeuvreType } = route.params;

        return (

            <View>

                <View style={styles.container}>
                    {/* <TopBarre/> */}

                    
                    <ImageBackground style={{height: '100%'}}>
                        <ImageBackground source={{uri : 'https://hugocabaret.onthewifi.com/TalkAndPoke/Affiches/illustrations/Illustration' + OeuvreType + '.png'}} style={styles.image}>
                            
                        </ImageBackground>
                        <ScrollView>

                            <LinearGradient style={{height: 400}} colors={['rgba(0,0,0,0)','#000']}>

                            <TouchableOpacity style={{backgroundColor: '#fffa', height: 50, width: 50, marginTop: 50, marginLeft: 20, borderRadius: 100}} onPress={() => navigation.pop()}>
                                <Image style={{height: 50, width: 50, opacity: 0.5}} source={{uri: 'https://www.esnaturopathiemaroc.com/wp-content/uploads/2017/11/chevron_left_black.png'}}/>
                            </TouchableOpacity>


                            </LinearGradient>

                            <View style={{backgroundColor: 'black'}}>
                                <View style={{backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30}}>

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
        position: 'absolute',
        height: '70%',
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        marginLeft: 10,
        color: 'black',
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
    follow: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 20,
        color: 'white',
    }
  })

  export default OeuvresPage;

