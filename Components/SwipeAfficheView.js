import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ImageBackground, View, Image} from 'react-native';
import { useEffect, useState } from 'react';
import SwipeCards from 'react-native-swipe-cards-deck';
import { BlurView } from 'expo-blur';

function SwipeAfficheView(props) {

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
        <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('DetailsOeuvrePage', {OeuvreId: data.OeuvreId})}>
            <ImageBackground imageStyle={{ borderRadius: 15}} source={{uri: data.Image}} resizeMode="cover" style={styles.affiche}>
                <Image style={{height: 50, width: 50, margin: 20, marginBottom: 380, borderRadius: 100}} source={require('../Images/IllustrationLieu.png')}/>
                <BlurView intensity={250} style={styles.TitreContainer}>
                    <Text style={styles.Titre}>{data.Titre}</Text>
                </BlurView>
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
                        stackDepth={3}/>
        )
}

const styles = StyleSheet.create({
    cardsText: {
        fontSize: 22,
      },
    Titre: {
        borderRadius: 100,
        padding: 10,
        paddingHorizontal: 30,
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
  TitreContainer: {
    padding: 0,
    paddingHorizontal: 15,
    marginBottom: 20,
    position: 'absolute', right: '0%', bottom: '0%',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
},
})


export default SwipeAfficheView