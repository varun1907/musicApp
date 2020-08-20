import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView,TouchableOpacity  } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import {connect} from 'react-redux'
export class Cards extends Component {


    render() {
        // const width = Dimensions.get('window').width
        // const height = Dimensions.get('window').height
        const ITEM_WIDTH = (Dimensions.get('window').width / 3) - 30
        const ITEM_HEIGHT = ITEM_WIDTH + 50
        const { data, navigation } = this.props
        const len = data.length
        // console.log(navigation)
        
        return (
            data.map((item,index) => {
                let trackName = ''
                if(item.trackName)
                     trackName = item.trackName.length < 10  ? item.trackName : item.trackName.slice(0,7)+'...'
                else
                    trackName = item.artistName
                return <TouchableOpacity key={index} onPress={() => {navigation.navigate('Details', { item })}}><Card
                
                containerStyle={{width:ITEM_WIDTH,height:ITEM_HEIGHT}}
                image={{uri : item.artworkUrl100} }
                imageStyle={{width:ITEM_WIDTH,height:ITEM_WIDTH}}
                >
                    
                <Text style={{marginBottom: 10,marginLeft:0,paddingLeft:0}}>
                    {trackName}
                </Text>
                
            </Card>
            </TouchableOpacity>
            })
            
           
        )
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {data: state.songs};
  }
export default connect(mapStateToProps, {  })(Cards);

