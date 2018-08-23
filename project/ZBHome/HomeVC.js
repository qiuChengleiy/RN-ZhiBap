/**
 * Created by yangu on 2018/8/4.
 */
import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage,
    Alert,
} from 'react-native';

import {SafeAreaView} from 'react-navigation';

var Dimensions=require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class HomeVC extends Component{

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <View style={styles.container}>
            <View style={styles.topview}>
                <Text style={styles.toptext}>首页</Text>
            </View>
                <View>
                    <Image source={{uri:'banner'}} style={styles.banner}/>

                </View>
            </View>
            </SafeAreaView>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topview:
    {
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#D23247',
        width:ScreenWidth,
        ...Platform.select(
            {
                ios:
                {
                  height:44
                },
                android:
                {
                    height:54
                }

            }
        )
    },
    toptext:
    {
        fontSize:20,
        color:'#FFFFFF',
        marginTop:10
    },
    banner:
    {
        height:250,
        width:ScreenWidth
    }

});