import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';

function NavBarre(props) {
        return (

            <View style={styles.containerNavBarre}>
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('MainPage')}>
                    <Image style={{height: 40, width: 40, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/Menu.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('SwipePage')}>
                    <Image style={{height: 40, width: 40, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/Likes.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('MainMenuPage')}>
                    <Image style={{height: 40, width: 40, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/Oeuvres.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('MessagesPage')}>
                    <Image style={{height: 40, width: 40, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/IllustrationMessage2.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('LikesPage')}>
                    <Image style={{height: 40, width: 40, borderRadius: 100, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/IllustrationEmoji.png')}/>
                </TouchableOpacity>
            </View>

        )
}

const styles = StyleSheet.create({
    containerNavBarre: {
        width: '100%',
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})


export default NavBarre