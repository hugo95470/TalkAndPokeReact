import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Text, Image, View} from 'react-native';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';


function AffinitesCollectionView(props) {

         //AFFICHAGE DES AFFINITES
         var [affinites, setAffinites] = useState("");

                
        var ItemAffinite = ({ pseudo, image, pourcentage, contactId }) => (
            
            <TouchableOpacity style={{marginLeft: 10, marginRight: 10}} onPress={() => props.navigation.navigate('MessagePage', {utilisateurId: contactId})}>
                <View style={styles.shadow}>
                    <Image source={{uri: image}} resizeMode="cover" style={styles.affiniteImage}/>
                    <Text style={{marginLeft: 'auto', marginRight: 'auto', color: 'black', textAlign: 'center'}}>{pseudo} - {pourcentage}%</Text>
                </View>
            </TouchableOpacity>
        );

        var renderItemAffinite = ({ item }) => (
            <ItemAffinite style={styles.containerAffiches, {margin: 10}} pseudo={item.Pseudo} image={item.Image} pourcentage={item.Pourcentage} contactId={item.UtilisateurId} />
        );


        useEffect(() => {

            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Utilisateur/GetAffinite.php?UtilisateurId=8&Nombre=5')
            .then((response) => response.json())
            .then((data) => {
                setAffinites(data)
            });         
            
        }, []);
        
        

        return (

            <FlatList style={{height: '140%'}} data={affinites} renderItem={renderItemAffinite} keyExtractor={item => item.OeuvreId} numColumns="10"/>

        )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        maxWidth: 150,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 25,
        marginLeft: 10,
        color: 'white',
      },
      affiniteImage: {
        height: 80,
        width: 80,
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'flex-end',
          borderRadius: 100,          
      },
    containerAffiches: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      TitreContainer: {
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
    },
    shadow: {
        height: 84,
        width: 84,
        padding: 2,
        backgroundColor: 'white',
        borderRadius: 100, 
        elevation: 10, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,  
    },
})


export default AffinitesCollectionView