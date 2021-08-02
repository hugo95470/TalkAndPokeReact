
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

function ReactionsView() {

        var [ coeurIsPress, setCoeurIsPress ] = React.useState(false);
        var [ likeIsPress, setLikeIsPress ] = React.useState(false);
        var [ dislikeIsPress, setDislikeIsPress ] = React.useState(false);

        var touchCoeur = {
            style: coeurIsPress ? styles.opacityStrong : styles.opacityWeak,
            onPress: () => coeurIsPress ? setCoeurIsPress(false) : setCoeurIsPress(true),
        };
        var touchLike = {
            style: likeIsPress ? styles.opacityStrong : styles.opacityWeak,
            onPress: () => likeIsPress ? setLikeIsPress(false) : setLikeIsPress(true),
        };
        var touchDislike = {
            style: dislikeIsPress ? styles.opacityStrong : styles.opacityWeak,
            onPress: () => dislikeIsPress ? setDislikeIsPress(false) : setDislikeIsPress(true),
        };

        return (

                <View style={styles.container}>

                    <View style={styles.containerReaction}>
                        <TouchableOpacity  {...touchLike}>
                            <Image style={styles.image} source={{uri: 'https://emojis.wiki/emoji-pics/apple/thumbs-up-apple.png'}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerReaction}>
                        <TouchableOpacity  {...touchCoeur}>
                            <Image style={styles.image} source={{uri: 'https://i.pinimg.com/originals/17/72/8f/17728faefb1638f17586ea58645b4e7e.png'}}/>
                        </TouchableOpacity >
                    </View>

                    <View style={styles.containerReaction}>
                        <TouchableOpacity  {...touchDislike}>
                            <Image style={styles.image} source={{uri: 'https://emojis.wiki/emoji-pics/apple/thumbs-down-apple.png'}}/>
                        </TouchableOpacity>
                    </View>

                </View>

        )
}

var opacityCoeur = 1;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        padding: 8,
        flexDirection:'row',
        alignItems:'center'        
        },
        TitreContainer: {
        borderRadius: 100,
        },
        image: {
            height: 40,
            width: 40, 
            margin: 15,
        },
        opacityWeak: {
            opacity: 0.3,
        },
        opacityStrong: {
            opacity: 1,
        },
        containerReaction: {
            backgroundColor: '#eee',
            borderRadius: 100,
            elevation: 5,
            margin: 10,
        },
})


export default ReactionsView