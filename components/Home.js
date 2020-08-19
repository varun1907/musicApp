import React, { Component } from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Cards from './Cards'
import { getSongs } from '../actions'
import {connect} from 'react-redux'
export class Home extends Component {
    state = {
        search: '',
    }

    updateSearch = search => {
        // console.log(search)
        this.setState({ search });
        this.props.getSongs(search)
    };

    render() {
        // console.log(this.props.data)
        return (
            <ScrollView style={styles.container}>
            <View style={styles.container}>
                <SearchBar
                    placeholder="Type Artist Name..."
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                />
                
                    
                    {this.props.data.length ? <View style={styles.grid}><Cards/></View> : null}
                
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:20
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    }
})

function mapStateToProps(state) {
    // console.log(state)
    return {data: state.songs};
  }
  
export default connect(mapStateToProps, { getSongs })(Home);
 
