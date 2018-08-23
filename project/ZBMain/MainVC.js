/**
 * Created by yangu on 2018/8/4.
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {createStackNavigator,createBottomTabNavigator,TabBarBottom} from 'react-navigation';

// tabBar相关组件
import Home from '../ZBHome/HomeVC';
import Message from '../ZBMessage/MessageVC';
import Merchants from '../ZBMerchants/MerchantsVC';
import Shop from '../ZBShop/ShopVC';
import { MineVC } from '../ZBMine';


// tabBar 底部导航栏
export const Tab = createBottomTabNavigator({
    Home:{
        screen:Home,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'首页',
            tabBarIcon:({focused,tintColor}) => (
                <Image source={focused? {uri:"icon_home_select"} :
                {uri:"icon_home_disselect"}}
                       style={styles.tabBarIconStyle}
                />

            )
        }),
    },

    Message:{
        screen:Message,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'消息',
            tabBarIcon:({focused,tintColor}) => (
                <Image source={focused? {uri:"icon_news_select"} :
                {uri:"icon_news_disselect"}}
                       style={styles.tabBarIconStyle}
                />
            )
        }),
    },

    Merchants:{
        screen:Merchants,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'经销商',
            tabBarIcon:({focused,tintColor}) => (
                <Image source={focused? {uri:"icon_dealers_select"} :
        {uri:"icon_dealers_disselect"}}
        style={styles.tabBarIconStyle}
    />
            )
        }),
    },

    Shop:{
        screen:Shop,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'购物车',
            tabBarIcon:({focused,tintColor}) => (
      <Image source={focused? {uri:"icon_shoppingcart_select"} :
        {uri:"icon_shoppingcart_disselect"}}
        style={styles.tabBarIconStyle}
      />
            )
        }),
    },

    Mine:{
        screen:MineVC,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'个人中心',
            tabBarIcon:({focused,tintColor}) => (
                <Image
            source={focused? {uri:"icon_personnalcenter_select"} :
            {uri:"icon_personnalcenter_disselect"}}
           style={styles.tabBarIconStyle}
    />

            )
        }),
    }
},
    {
    //  initialRouteName: "Home",
        tabBarPosition:'bottom',
      //  lazy: true,
        tabBarOptions:{
            activeTintColor:'#D23247',
            style: {
                backgroundColor: '#ffffff', // TabBar 背景色
                paddingBottom:5,
                paddingTop:2,
            },
        }

    })



const styles = StyleSheet.create({
    tabBarIconStyle: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
});
