import React, { Component } from 'react'
import { View, Text,StyleSheet,ScrollView,ActivityIndicator } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Cards from './Cards'
import { getSongs } from '../actions'
import {connect} from 'react-redux'
export class Home extends Component {
    state = {
        search: '',
        showLoader:false
    }

    updateSearch = search => {
        console.log(search)
        this.setState({ search,showLoader:true });
        this.props.getSongs(search,() => {
            this.setState({showLoader: false})
        })
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
                
                    {this.state.showLoader && <ActivityIndicator/>}
                    {this.props.data.length ? <View style={styles.grid}><Cards navigation = {this.props.navigation}/></View> : null}
                
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
 
