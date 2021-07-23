import React from 'react';
import { StyleSheet, Text, ImageBackground, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';

import NavBarre from '../Components/NavBarre';
import TopBarre from '../Components/TopBarre';
import AfficheCollectionview from '../Components/AfficheCollectionView';
import AffinitesCollectionView from '../Components/AffinitesCollectionView';

function MainPage({ navigation }) {

    var headerFlatList = () => {


        return (
            <View>
                <Text style={styles.title}>Affinitées</Text>

                <ScrollView horizontal={true} style={{height: 150}} showsHorizontalScrollIndicator={false}>
                    <AffinitesCollectionView/>
                </ScrollView>

                <Text style={styles.title}>News</Text>
            </View>
            
        );

    };
    
        return (

            <View>

                <View style={styles.container}>
                    <TopBarre/>

                    <ImageBackground source={require('../Images/Pluie.png')} resizeMode="cover" style={styles.image}>
                        <AfficheCollectionview header={headerFlatList}/>
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
        height: '100%',
      width: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        marginLeft: 10,
        color: 'white',
      },
  })

  export default MainPage;

