import React from 'react';
import {Text,View} from 'react-native';

export default class WriteScreen extends React.Component{
    render(){
        return(
            <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
            <Text>Write your Story</Text>
            </View>
        );
    }
}