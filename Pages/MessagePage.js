import React from 'react';
import { StyleSheet, Text, ImageBackground, View, FlatList, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import Moment from 'moment';

import NavBarre from '../Components/NavBarre';

function MessagePage({ route, navigation }) {

        Moment.locale('fr')

        const { utilisateurId } = route.params;

        //Affiches
        var [messages, setMessages] = useState("");
        var [date, setDate] = useState("");
        var [utilisateur, setUtilisateur] = useState("");
        const [message, setMessage] = useState("");

        var [lastIdMessage, setLastIdMessage] = useState("");

        const flatlistRef = useRef();
                    
        var ItemAffiche = ({ message, dateEnvoi, expediteurId }) => {

            

            if(expediteurId == '8'){
                return(
                    <View style={styles.shadowRight}>
                        <Text style={styles.Titre} blurRadius={1}>{message}</Text>
                    </View>
                );
            }else{
                return(
                    <View style={styles.shadowLeft}>
                        <Text style={styles.Titre} blurRadius={1}>{message}</Text>
                    </View>
                );
            }

                 
        }



        var renderItemAffiche = ({ item }) => (
            <ItemAffiche style={styles.containerAffiches} message={item.Message} dateEnvoi={item.DateEnvoi} expediteurId={item.ExpediteurId}/>
        );

        useEffect(() => {

            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Message/GetMessagesDiscussion.php?DestinataireId=9&ExpediteurId=8&Nombre=20&DateEnvoi=2021-07-31 22:12:20')
            .then((response) => response.json())
            .then((data) => {
                setMessages(data)
                setDate(data[19].DateEnvoi)
            });     
            
            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Utilisateur/GetAffinite.php?UtilisateurId=8&ContactId=' + utilisateurId)
            .then((response) => response.json())
            .then((data) => {
                setUtilisateur(data)
            });            
            
        }, []);


        var sendMessage = () => (
            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Message/SendMessage.php?ExpediteurId=8&DestinataireId=' + utilisateurId + '&Message=' + message + '&IsOeuvre=0')
            .then((response) => setMessage(""))
            .then(
                fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Message/GetMessagesDiscussion.php?DestinataireId=9&ExpediteurId=8&Nombre=20&DateEnvoi=' + date)
                .then((response) => response.json())
                .then((data) => {
                    setDate(data[0].DateEnvoi)
                    let newstate = [...messages, ...data]
    
                    setMessages(newstate);
                
                })
            )

            
        );

        // https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Message/GetMessageEnvoye.php

        // https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Message/ReadMessage.php

        return (

            <View>

                <View style={styles.container}>

                    <View>
                        <Image style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 50, height: 70, width: 70, borderRadius: 100}} source={{uri: utilisateur.Image}}/>
                        <Text style={{marginLeft: 'auto', marginRight: 'auto', fontSize: 20}}>{utilisateur.Pseudo}, {utilisateur.Pourcentage}%</Text>
                    </View>

                    <ScrollView ref={flatlistRef} onContentSizeChange={() =>  flatlistRef.current.scrollToEnd({animated: true})} style={{maxHeight: '70%', width: '100%'}}>
                        <ImageBackground resizeMode="cover" style={styles.image}>
                                <FlatList style={{marginTop: 20, marginBottom: 17}} data={messages} renderItem={renderItemAffiche} keyExtractor={item => item.UtilisateurId} numColumns="1"/>
                        </ImageBackground>
                    </ScrollView>

                    {/* barre de messages */}
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end',width: '100%', position: 'absolute', bottom: 80, backgroundColor: 'white', borderRadius: 100, elevation: 5, padding: 10, paddingRight: 30}}>
                        <TextInput onChangeText={setMessage} value={message} style={{width: '90%'}}/>
                        <TouchableOpacity onPress={() => sendMessage()}>
                            <Image style={{height: 20, width: 20, marginTop: 'auto', marginBottom: 'auto'}} source={{uri: 'https://image.flaticon.com/icons/png/512/561/561104.png'}}/>
                        </TouchableOpacity>
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
        color: 'white',
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
    shadowLeft: {
        marginHorizontal: 10,
        borderRadius: 19,
        marginBottom: 20,
        marginRight: 'auto',
        padding: 10,
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

    shadowRight: {
        marginHorizontal: 10,
        borderRadius: 19,
        marginBottom: 1,
        marginLeft: 'auto',
        backgroundColor : '#fff',
        padding: 10,
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

  export default MessagePage;

