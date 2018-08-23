/**
 * Created by yangu on 2018/8/4.
 * generated by qiuchenglei on 2018/8/11
 * 个人中心------ 提现成功
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,   
    Text, 
    View, 
    Image,
    Alert,
    TouchableHighlight,
} from 'react-native';

// 适配X
import { isIphoneX, ifIphoneX,clearNoNum,checkRate } from '../../../utils';

const Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

 //  提现
export class SuccessCashVC extends Component{

    constructor(props) {
        super(props);

        this.state = {   
         
        }
    }

    // 返回
    back(option) {
        if(option == '返回') {
            this.props.navigation.goBack()
        }
    }


    componentDidMount() {
        // ....some api here 
    }

    render() {
        return (
            <View style={styles.container}>
             
             {/* 标题 */}
             <View style={styles.title}>

             <View style={{ width:"100%",height:ifIphoneX(90,75),alignItems: 'center',marginTop:10,justifyContent:'center',alignItems:'center'}}>
              <TouchableHighlight onPress={() => this.back('返回')} underlayColor="#ffffff" style={[styles.step_left,{width:30,marginLeft:20,zIndex:111}]}>
                <View style={[styles.step_left,{width:12,}]}>
                   <Image source={{uri:'icon_passback'}} style={{width:'100%',height:"100%",resizeMode:'contain'}}/>
                </View>
              </TouchableHighlight>
              </View>
    
             </View>
            
          
            {/* 提现成功返回的icon */}
              <View style={styles.step}>
                 <View style={styles.successIcon}>
                   <Image source={{uri:'icon_success'}} style={{width:'100%',height:"100%",resizeMode:'contain'}}/> 
                 </View>
                 <Text style={{fontSize:21,color:'#333333',fontWeight:'600',marginTop:30,}}>提现成功!</Text>
              </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: { 
        width:"100%",
        height:75,
        marginTop: 0,
        alignItems: 'center',
        position:'absolute',
        zIndex:11,
        backgroundColor: "#ffffff",
        borderBottomWidth: 0.4,
        borderBottomColor: "#cccccc",
    },
    step: {
        width: '100%',
        height: '85%',
        marginTop:75,
        zIndex: 60,
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    step_left: {
        width:"15%",
        height:30,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-start',
        position:'absolute'
    },
    successIcon: {
       width:70,
       height:70,
       marginTop:40,
    }
   


    
});
