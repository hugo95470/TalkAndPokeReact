import React from 'react';
import { StyleSheet, ImageBackground, View,Text } from 'react-native';

import NavBarre from '../Components/NavBarre';
import TopBarre from '../Components/TopBarre';
import SwipeAfficheView from '../Components/SwipeAfficheView';
import ReactionsView from '../Components/ReactionsView';

function MainPage({ navigation }) {

        return (

            <View>

                <View style={styles.container}>
                    <TopBarre navigation={navigation}/>

                    <ImageBackground source={require('../Images/Pluie.png')} resizeMode="cover" style={styles.container}>

                      <View style={styles.container}>
                        
                        <SwipeAfficheView navigation={navigation}/>
                        
                        <View style={styles.containerReactions}>
                          <ReactionsView/>

                        </View>

                      </View>

                    </ImageBackground>
                </View>
    
                <NavBarre navigation={navigation}/>
            </View>
            
    
        )
    }


const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      height: '100%',
      width: '100%',
    },
    containerReactions: {
      height: 300,
    }
  });

  export default MainPage;

