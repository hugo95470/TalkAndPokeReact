import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Text, ImageBackground} from 'react-native';
import { useEffect, useState } from 'react';


function AffinitesCollectionView() {

         //AFFICHAGE DES AFFINITES
         var [affinites, setAffinites] = useState("");

                
        var ItemAffinite = ({ pseudo, image, pourcentage, contactId }) => (
            <TouchableOpacity style={{marginLeft: 10, marginRight: 10}} activeOpacity={1} onPress={() => navigation.navigate('DetailsOeuvrePage', {ContactId: contactId})}>
                <ImageBackground imageStyle={{ borderRadius: 100}} source={{uri: image}} resizeMode="cover" style={styles.affiniteImage}/>
                <Text style={{marginLeft: 'auto', marginRight: 'auto', color: 'white'}} blurRadius={1}>{pseudo} - {pourcentage}%</Text>
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
          marginTop: 20,
          marginBottom: 5,
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'flex-end',
      },
    containerAffiches: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
})


export default AffinitesCollectionView