import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Text, ImageBackground, View, Image} from 'react-native';
import { useEffect, useState } from 'react';


function LiensView(props) {

        //AFFICHAGE DES AFFINITES
        var [liens, setLiens] = useState("");
                
        var ItemAffiche = ({ image, oeuvreId }) => {
            return(
                <TouchableOpacity style={{marginRight: 'auto', marginLeft: 'auto'}} onPress={() => props.navigation.push('DetailsOeuvrePage', {OeuvreId: oeuvreId})}>
                    <ImageBackground imageStyle={{ borderRadius: 15, height: 150, width: 100}} source={{uri: image}} resizeMode="cover" style={styles.affiche}>
                    </ImageBackground>
                </TouchableOpacity>
            );
        }

        var renderItemAffiche = ({ item }) => (
            <ItemAffiche style={styles.containerAffiches} image={item.Image} oeuvreId={item.OeuvreId} />
        );


        useEffect(() => {
            
            fetch('https://hugocabaret.onthewifi.com/TalkAndPoke/API/requetes/Lien/GetLiens.php?OeuvreId=' + props.oeuvreId)
            .then((response) => response.json())
            .then((data) => {
                
                const _liens = Object.entries(data).map(obj => {
                    var rObj = {};
                    //alert(JSON.stringify(obj))
                    rObj['title'] = obj[1].Lien;
                    rObj['data'] = [{OeuvreId: obj[1].Oeuvre2Id, Image: obj[1].Image}];
                    return rObj;
                  })
                  .reduce((item, { title, data }) => {
                    if (!item[title]) item[title] = [];
                    item[title].push(data[0]);
                    return item;
                  }, {});

                setLiens(_liens)
            });      
        }, []);

        return (

            Object.entries(liens).map(data => {
                return(
                    <View>
                        <Text style={styles.title}>{data[0]}</Text>
                        <FlatList data={data[1]} renderItem={renderItemAffiche} keyExtractor={item => item.OeuvreId} numColumns="3"/>                
                    </View>
                );
                
            })            

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
      header: {
        fontSize: 32,
        backgroundColor: "#fff"
      },
      title: {
        fontSize: 25,
        marginLeft: 30,
        color: 'black',
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
      TitreContainer: {
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
    },
    Titre: {
        fontSize: 10,
    },
    affiche: {
        height: 100,
        width: 100,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 50,
        justifyContent: 'flex-end',
    },
})


export default LiensView