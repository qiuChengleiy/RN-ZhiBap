/**
 * Created by yangu on 2018/8/4.
 * generated by qiuchenglei on 2018/8/13
 * 银行卡 ------ 填写银行卡信息
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
    KeyboardAvoidingView,
    TextInput,
} from 'react-native';

// 适配X
import { isIphoneX, ifIphoneX,USERNAME, phoneReg } from '../../../utils';

// 隐藏软键盘
const dismissKeyboard = require('dismissKeyboard');

const Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

 //  填写银行卡信息
export class BankCardInfoVC extends Component{

    constructor(props) {
        super(props);

        this.state = {  
            type:'中国工商银行储蓄卡', // 是否经过后台验证 卡类型
            phone:'',
            isOpen: false,
        }
    }

    // 返回
    back(option) {
        if(option == '返回') {
            this.props.navigation.goBack()
        }
    }

    focus(e) {
            this.refs.phone.focus();
    }

    // 协议相关
    isAgree(key) {
        switch (key) {
            case 0:
            this.props.navigation.navigate('BankCardKuaijieVC')
              this.setState({isOpen:false})
              break;
            case 1:
            this.props.navigation.navigate('BankCardJiansheVC')
              this.setState({isOpen:false})
              break;
            case 2:
              this.setState({isOpen:false})
              break;
            default:
              break;
        } 
          
    }

    // next
    next(type,phone) {
        dismissKeyboard();
        if(type && phone ) {
            if(phoneReg(phone)) {
               // next
               const cardObj = {...this.props.navigation.state.params.cardObj,phone,type};

               this.props.navigation.navigate('BankCardPhoneVC',{cardObj});
            }else {
                Alert.alert('提示','手机号不正确',[{text:'我知道了',
                onPress: this.setState({phone:''})
              }])
                   
            }

        }else {
            Alert.alert('提示','手机号不能为空',[{text:'我知道了',
                onPress: this.refs.phone.focus()
        }])
        }
    }



    componentDidMount() {
        // ....some api here 
    }

    render() {
        const item = ['快捷支付服务相关协议','建设银行储蓄卡快捷支付业务线上服务协议','取消']
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

                <Text style={{fontSize:17,fontWeight:"600",color:"#333333"}}>填写银行卡信息</Text>

              </View>
    
             </View>


       {/* 模态背景 */}
          {this.state.isOpen? <View style={styles.modalView}></View> : null}
          
          {/* 模态框 按钮 */}
            {
                  this.state.isOpen ?
                         <View style={styles.menu}>    
                             <View style={styles.modalViewStyle}>  
                        { item.map((val,key) =>
                            <TouchableHighlight onPress={() => this.isAgree(key)} underlayColor="#ffffff" style={[styles.item,key == 2 ?{} : {borderBottomWidth:1,borderBottomColor:'#f7f7f7'}]}>
                                 <Text style={{fontSize:14,fontWeight: '400',color:'#3285D2'}}>{val}</Text>
                             </TouchableHighlight>

                        )}   



                             </View>
                         </View> 
                         :
                         <View></View>
               }
          
        
          
            {/* 表单 */}
            
              <View style={styles.step}>

                <View style={styles.form}>
                {/* 持卡人 */}
                <TouchableHighlight underlayColor="#ffffff" style={[styles.inpu_,]}>
                    <View style={[styles.inpu_,{ borderBottomWidth:0,}]}>
                        <Text style={{fontSize:16,fontWeight: 'normal',color:'#333333',marginLeft:14}}>卡类型</Text>
                        <Text style={{fontSize:16,fontWeight: 'normal',color:'#333333',marginLeft:14,position:'absolute',left:'18%',}}>{this.state.type}</Text>

                    </View>
                </TouchableHighlight>

                  {/* 卡号 */}
                <TouchableHighlight onPress={() => this.focus('bank_number')} underlayColor="#ffffff" style={[styles.inpu_,{ borderBottomWidth:0,}]}>
                    <View style={[styles.inpu_,{ borderBottomWidth:0,}]}>
                        <Text style={{fontSize:16,color:'#333333',fontWeight: 'normal',marginLeft:14}}>手机号</Text>

                        <KeyboardAvoidingView behavior="padding" style={styles.inpus_}>
                                <TextInput
                                    underlineColorAndroid={'#ffffff'}
                                    placeholder="请输入手机号"
                                    style={{alignSelf:'flex-start',fontSize:16,}} 
                                    ref="phone"
                                    value={this.state.phone}
                                //获取焦点
                                //    onFocus={() => this.setState({isFocus:true})}
                                // 失去焦点
                                //    onBlur={() =>Reg()}
                                    onChangeText={(phone) => { this.setState({phone,});phone ? '' : dismissKeyboard()}}
                                // 限制只能输入数字
                                    keyboardType='numeric'
                                />
                         </KeyboardAvoidingView>
                    </View>
                </TouchableHighlight>

                </View>

                <View style={styles.tips}>
                   <Text style={{fontSize:14,color:'#999999'}}>查看</Text>
                    <TouchableHighlight onPress={() => this.setState({isOpen: true})} underlayColor='none' style={styles.promise}>
                        <Text style={[{fontSize:14,fontWeight:'600',color:'#D23247'},]}>《服务协议》</Text>
                    </TouchableHighlight>

                </View>


                {/* next */}
                <TouchableHighlight onPress={() => this.state.type && this.state.phone && this.next(this.state.type,this.state.phone)} underlayColor={this.state.type && this.state.phone ? '#D23247' :'#E6E6E6'} style={[styles.btn_,this.state.type && this.state.phone ? {backgroundColor: '#D23247',} :{}]}>
                    <Text style={[{fontSize:18,fontWeight:'600',color:'#999999'},this.state.type && this.state.phone ? {color: '#ffffff',} :{}]}>同意协议并绑定</Text>
                </TouchableHighlight>


                
              </View>
            
            </View>
        );
    }
}



// const Tab=createBottomTabNavigator(
//     {


//     })



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
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
    tips: {
        width:'90%',
        height:40,
        justifyContent: 'center',
        alignItems:'flex-start',
    },
    form: {
        width:'100%',
        height:'17%',
        backgroundColor: '#ffffff',
    },
    inpu_: {
        width:'100%',
        height:'50%',
        justifyContent:'center',
        alignItems:'flex-start',
        borderBottomWidth:.7,
        borderBottomColor:'#f7f7f7'
    },
    inpus_: {
        width:"80%",
        height:'100%',
        justifyContent:'center',
        alignItems:'flex-start',
        position:'absolute',
        left:"22%",
    },
    btn_: {
        width:'93%',
        height: 55,
        backgroundColor: '#E6E6E6',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 5,
        marginTop:10,
    },
    promise: {
        width:100,
        height:'50%',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        left:'10%'
    },
    modalView: {
        width:width,
        height:height,
        zIndex: 60,
        position:'absolute',
        backgroundColor: '#000000',
        opacity:.4,
        zIndex:333,
    },
    menu: {
        width: width,
        height:height,
        marginTop:-60,
        zIndex:7777,
        position:'absolute',
        alignItems:'center',
        justifyContent: 'center',
    },
    modalViewStyle: {
        width:'80%',
        height:"18%",
        position:'absolute',
        backgroundColor: '#ffffff',
        zIndex:444,
        marginTop:12,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
    },
    item: {
        width:'95%',
        height:"30%",
        justifyContent: 'center',
        alignItems: 'center',
    }
   


    
});
