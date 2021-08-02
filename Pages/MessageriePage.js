import React, {useRef} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView, Button } from 'react-native';
import { useEffect, useState } from 'react';
import Wizard from "react-native-wizard"
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import NavBarre from '../Components/NavBarre';
import TopBarre from '../Components/TopBarre';

function MessagesPage({ navigation }) {

        //WIZARD
        const wizard = useRef();
        const [currentStep, setCurrentStep] = useState(0)

        //Affiches
        var [contacts, setcontacts] = useState("");


            
        var ItemAffiche = ({ utilisateurId, image, nom, prenom }) => {

            return(
                <TouchableOpacity onPress={() => navigation.navigate('MessagePage', {utilisateurId: utilisateurId})}>

                    <View style={styles.shadow}>
                        <Image style={{height: 65, width: 65, marginBottom: 'auto', marginTop: 'auto', marginLeft: 10, marginRight: 20, borderRadius: 100}} source={{uri: image}}/>

                        <Text style={styles.Titre}>{prenom} {nom}</Text>
                    </View>
                </TouchableOpacity>
            );
        }



        var renderItemAffiche = ({ item }) => (
            <ItemAffiche style={styles.containerAffiches} utilisateurId={item.UtilisateurId} image={item.Image} nom={item.Nom} prenom={item.Prenom} />
        );

        useEffect(() => {

            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Message/GetContacts.php?UtilisateurId=8')
            .then((response) => response.json())
            .then((data) => {
                setcontacts(data)
            });            
            
        }, []);

        //STEPS
        const stepList = [
            {
              content: <FlatList style={{height: '88%', marginTop: 30}} data={contacts} renderItem={renderItemAffiche} keyExtractor={item => item.ContactId} numColumns="1"/>,
            },
            {
                content: <FlatList style={{height: '88%', marginTop: 30}} data={contacts} renderItem={renderItemAffiche} keyExtractor={item => item.ContactId} numColumns="1"/>,
            },
            {
              content: <FlatList style={{height: '88%', marginTop: 30}} data={contacts} renderItem={renderItemAffiche} keyExtractor={item => item.ContactId} numColumns="1"/>,
            },
          ]


          const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          };

        return (
            <GestureRecognizer
        onSwipeLeft={() => wizard.current.next()}
        onSwipeRight={() => wizard.current.prev()}
        config={config}>
            <View>

            <View style={styles.container}>
                <TopBarre navigation={navigation}/>

                    
                <Text style={styles.title}>Contacts</Text>

                    
                <View style={{height: '78%'}}>
                    <Wizard
                    style={styles.wizard}
                    ref={wizard}
                    nextStepAnimation="slideRight"
                    prevStepAnimation="slideLeft"
                    steps={stepList}
                    currentStep={({ currentStep, isLastStep, isFirstStep }) => {
                        setCurrentStep(currentStep)
                    }}
                    />

                    {/* DOTS */}
                    <View style={{ flexDirection: "row", justifyContent: 'center', margin: 18 }}>
                    {stepList.map((val, index) => (
                        <View
                        key={"step-indicator-" + index}
                        style={{
                            width: 10,
                            marginHorizontal: 6,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: index === currentStep ? "grey" : "#aaa",
                        }}
                        />
                    ))}
                    </View>


                </View>
            </View>

            <NavBarre navigation={navigation}/>
            </View>
        </GestureRecognizer>

            
            
    
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
        marginLeft: 20,
    },
      Titre: {
        marginBottom: 'auto', 
        marginTop: 'auto'
    },
      affiche: {
        height: 70,
        width: 300,
        justifyContent: 'flex-end',
    },
    shadow: {
        borderRadius: 19,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 80,
        width: '90%',
        backgroundColor : '#fff',
        shadowColor: 'black',
        shadowOffset: {
        width: 10,
        height: 10,
        
      },
      flexDirection: 'row',
      shadowOpacity: 1,
      shadowRadius: 9.51,
      elevation: 15, 
    },
    containerAffiches: {
        height: '100%',
    },  
  })

  export default MessagesPage;

