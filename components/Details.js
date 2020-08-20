import React, { Component } from 'react'
import { View, Text,StyleSheet,Dimensions,ActivityIndicator,ScrollView } from 'react-native'
import { Image } from 'react-native-elements';

function Details({ route, navigation }) {
    const { item } = route.params;
    console.log(item)
    const ITEM_WIDTH = Dimensions.get('window').width
    const ITEM_HEIGHT = Dimensions.get('window').height / 3
    return (
        <ScrollView style={styles.container}>
        <View>
            <Image
            source={{ uri: item.artworkUrl100 }}
            style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
            PlaceholderContent={<ActivityIndicator />}
            />
            {item.artistName && <View style={[styles.description,{marginTop:20}]}>
                <Text style={styles.text}>Artist</Text>
                <Text style={[styles.text,styles.content]}>{item.artistName}</Text>
            </View>
            }
            {item.trackName &&<View style={styles.description}>
                <Text style={styles.text}>Track Name</Text>
                <Text style={[styles.text,styles.content]}>{item.trackName}</Text>
            </View>}
            {item.collectionName &&<View style={styles.description}>
                <Text style={styles.text}>Album</Text>
                <Text style={[styles.text,styles.content]}>{item.collectionName}</Text>
            </View>
            }   
            {item.collectionPrice &&
            <View style={styles.description}>
                <Text style={styles.text}>Album Cost</Text>
                <Text style={[styles.text,styles.content]}>{item.collectionPrice} {item.currency}</Text>
            </View>}
            {item.trackCount &&
            <View style={styles.description}>
                <Text style={styles.text}>Total Tracks</Text>
                <Text style={[styles.text,styles.content]}>{item.trackCount}</Text>
            </View>}
            {item.primaryGenreName &&
            <View style={styles.description}>
                <Text style={styles.text}>Genre</Text>
                <Text style={[styles.text,styles.content]}>{item.primaryGenreName}</Text>
            </View>}
            {item.releaseDate &&
            <View style={styles.description}>
                <Text style={styles.text}>Released On</Text>
                <Text style={[styles.text,styles.content]}>{item.releaseDate.split('T')[0]}</Text>
            </View>}
            {item.shortDescription &&
            <View style={{paddingLeft:30}}>
                <Text style={{fontSize:18}}>Short Description</Text>
                <Text>{item.shortDescription}</Text>
            </View>}
            
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:20
    },
    description:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    text:{
        alignSelf:'flex-start',
        fontSize:18,
        
        maxWidth:'60%',
        // borderWidth:1,
        // borderColor:'black',
    },
    content: {
      minWidth:'50%'
    }
})
export default Details

