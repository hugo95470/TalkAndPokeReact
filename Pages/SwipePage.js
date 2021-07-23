import React from 'react';
import { StyleSheet, Text, ImageBackground, View, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from "react";
import SwipeCards from 'react-native-swipe-cards-deck';

import NavBarre from '../Components/NavBarre';
import TopBarre from '../Components/TopBarre';


function MainPage({ navigation }) {

         var [cards, setCards] = useState();

        //CHARGER LES NEWS
        useEffect(() => {

            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Oeuvre/GetOeuvresAleatoire.php?Nombre=3')
            .then((response) => response.json())
            .then((data) => {
                setCards(data);
            });
        }, []);

        //NAVIGATION
        loadAffiches = () => {
            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Oeuvre/GetOeuvresAleatoire.php?Nombre=1')
            .then((response) => response.json())
            .then((data) => {
                cards.shift()
                let newstate = [...cards, ...data]
                setCards(newstate);
            });            
        }

        function Card({ data }) {
            return (
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('DetailsOeuvrePage', {OeuvreId: data.OeuvreId})}>
                <ImageBackground imageStyle={{ borderRadius: 15}} source={{uri: data.Image}} resizeMode="cover" style={styles.affiche}>
                    <Image style={{height: 50, width: 50, margin: 20, borderRadius: 100}} source={require('../Images/IllustrationLieu.png')}/>
                    <View style={styles.TitreContainer}>
                        <Text style={styles.Titre} blurRadius={1}>{data.Titre}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            );
          }

          function StatusCard({ text }) {
            return (
              <View>
                <Text style={styles.cardsText}>{text}</Text>
              </View>
            );
          }

          function handleYup(card) {
            loadAffiches();
            return true; // return false if you wish to cancel the action
          }
          function handleNope(card) {
            loadAffiches();
            return true;
          }
          function handleMaybe(card) {
            loadAffiches();
            return true;
          }
        return (

            <View>

                <View style={styles.container}>
                    <TopBarre/>

                    <ImageBackground source={require('../Images/Pluie.png')} resizeMode="cover" style={styles.container}>

                    <SwipeCards
                        cards={cards}
                        renderCard={(cardData) => <Card data={cardData} />}
                        keyExtractor={(cardData) => String(cardData.text)}
                        renderNoMoreCards={() => <StatusCard text="No more cards..." />}
                        actions={{
                            nope: { onAction: handleNope },
                            yup: { onAction: handleYup },
                            maybe: { onAction: handleMaybe },
                        }}
                        swipeThreshold={50}
                        hasMaybeAction={true}
                        onAction
                        stack={true}
                        stackDepth={3}
                        />

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
    card: {
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 300,
      },
    cardsText: {
        fontSize: 22,
      },
    Titre: {
        backgroundColor: "#fff",
        borderRadius: 19,
        padding: 10,
        width: 'auto',
        fontSize: 25,
    },
    TitreContainer: {
        padding: 10,
        marginBottom: -20,
        marginRight: -20,
        position: 'absolute', right: '0%', bottom: '0%',
    },
    affiche: {
        height: 450,
        width: 300,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'flex-end',
    },
  });

  export default MainPage;

