/**
 * Created by yangu on 2018/8/4.
 * generated by qiuchenglei on 2018/8/19
 * 个人中心 ---- 账单
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
    ScrollView,
    ListView,
} from 'react-native';

// 引入购物车
import { ShoppingCart } from '../../../Components/index';

// 适配X
import { isIphoneX, ifIphoneX,clearNoNum,checkRate } from '../../../utils';


const Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

 //  账单
export class BillVC extends Component{

    constructor(props) {
        super(props);

         //列表数据渲染
        let datas = [
            { number:'00000000',status:'已支付',url:'https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1M7oApTCWBKNjSZFtXXaC3FXa_!!0-item_pic.jpg_160x160q90.jpg',brand:'好好好品牌',price:'1000',spec:'80cm*80cm',mount:'2'},
            { number:'00000000',status:'未支付',url:'https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1M7oApTCWBKNjSZFtXXaC3FXa_!!0-item_pic.jpg_160x160q90.jpg',brand:'好好好品牌',price:'1000',spec:'80cm*80cm',mount:'2'},
            { number:'00000000',status:'已支付',url:'https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1M7oApTCWBKNjSZFtXXaC3FXa_!!0-item_pic.jpg_160x160q90.jpg',brand:'好好好品牌',price:'1000',spec:'80cm*80cm',mount:'2'},
            { number:'00000000',status:'未支付',url:'https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1M7oApTCWBKNjSZFtXXaC3FXa_!!0-item_pic.jpg_160x160q90.jpg',brand:'好好好品牌',price:'1000',spec:'80cm*80cm',mount:'2'},
            { number:'00000000',status:'已支付',url:'https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1M7oApTCWBKNjSZFtXXaC3FXa_!!0-item_pic.jpg_160x160q90.jpg',brand:'好好好品牌',price:'1000',spec:'80cm*80cm',mount:'2'},
            { number:'00000000',status:'已支付',url:'https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1M7oApTCWBKNjSZFtXXaC3FXa_!!0-item_pic.jpg_160x160q90.jpg',brand:'好好好品牌',price:'1000',spec:'80cm*80cm',mount:'2'},
            { number:'00000000',status:'未支付',url:'https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1M7oApTCWBKNjSZFtXXaC3FXa_!!0-item_pic.jpg_160x160q90.jpg',brand:'好好好品牌',price:'1000',spec:'80cm*80cm',mount:'2'},
            { number:'00000000',status:'已支付',url:'https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1M7oApTCWBKNjSZFtXXaC3FXa_!!0-item_pic.jpg_160x160q90.jpg',brand:'好好好品牌',price:'1000',spec:'80cm*80cm',mount:'2'},
        ]

        this.datas = datas
    
        this.state = {
            server: new ListView.DataSource({       // 服务端
                rowHasChanged: (row1,row2) => row1 !== row2   
            }),
            loaded:false,
            model:0,
            timeout:true,
        }

    }

    // 渲染组件
    renderData(data) {
        return (
            <TouchableHighlight onPress={() => {}} underlayColor='none' style={styles.orderBox}>
                <View style={styles.orderBox}>
                <View style={styles.orderInfo}>
                    <Text style={styles.orderNum}>订单编号：{data.number}</Text>
                    <Text style={[styles.status,data.status=='已支付'?{color:'#43C43B'}:{color:'#F36F1F'}]}>{data.status}</Text>
                </View>
               {/* 购物车组件 */}
                <ShoppingCart data={data} />

                </View>
             </TouchableHighlight>
          )
      }

    // 数据请求
    fetchData(url,data) {   // fetch API  服务端请求
        // fetch(url).
        // then(res => res.json()).
        // then( data => {
      // 模拟服务端
           if(data) {
               this.setState({
                  server:this.state.server.cloneWithRows(data),
                  loaded:true,
                  timeout:false,
              })
           }
           
        // }).
        // done();
    
      }

    // 列表渲染
    renderList() {
        return  <ListView dataSource={this.state.server} renderRow={this.renderData} />
    }

    // 返回
    back(option) {
        if(option == '返回') {
            this.props.navigation.goBack()
        }
    }

    // 切换选项卡
    touch(key) {
      this.setState({model:key});
      let data;
      //对应数据过滤
       if(key == '1') {
          data = this.datas.filter((val) => { return (val.status == '已支付') });
       }else if ( key == '2') {
          data = this.datas.filter((val) => { return (val.status == '未支付') });
       }else {
          data = this.datas;
       }
       
      this.fetchData('',data)
    }


    componentDidMount() {
        // ....some api here 
     // 初始化数据  模拟请求过程
     clearTimeout(timer);
     const timer = setTimeout(() => {  
          this.fetchData('',this.datas); 
        },2000)

    }

    render() {
        return (
            <View style={styles.container}>
             
             {/* 标题 */}
             <View style={styles.title}>

             <View style={{ width:"100%",height:ifIphoneX(90,75),alignItems: 'center',marginTop:10,justifyContent:'center',alignItems:'center'}}>
             
             <TouchableHighlight onPress={() => this.back('返回')} underlayColor="#ffffff" style={[styles.step_lefts,{width:30,marginLeft:20,zIndex:111}]}>
                <View style={[styles.step_lefts,{width:12,}]}>
                   <Image source={{uri:'icon_passback'}} style={{width:'100%',height:"100%",resizeMode:'contain'}}/>
                </View>
              </TouchableHighlight>

              <Text style={{fontSize:16,fontWeight:"400",color:"#333333"}}>应付款的挂账</Text>

             {/* 代收款 */}
             <TouchableHighlight onPress={() => {} } underlayColor="#ffffff" style={[styles.step_left,{width:100,marginRight:20,zIndex:111,alignSelf:'flex-end'}]}>
                    <View style={[styles.step_left,{width:100,}]}>
                       <Text style={{fontSize:13,fontWeight:"500",color:"#333333"}}>待收款的挂账</Text> 
                    </View>
            </TouchableHighlight>
             
              </View>
    
             </View>
            
        
          
            {/* TAB */}
              <View style={styles.step}>
              { 
               ['全部','已支付','未支付'].map((val,key) => 
               <TouchableHighlight onPress={() => this.touch(key)} underlayColor='none' style={[styles.tab,key == 1 ? {alignSelf:'center'} : {},key == 2? {alignSelf:'flex-end'} : {}]}>
                  <View style={[styles.tab,{width:'100%',},]}>
                     <Text style={[styles.txt,this.state.model == key ? { color:'#D23247'} : {} ]}>{val}</Text> 
                     <View style={[styles.line,this.state.model == key ? { borderBottomWidth:2,borderBottomColor:'#D23247',} : {} ]}></View>
                  </View>
               </TouchableHighlight>
               )}
              </View>


               {/* 订单列表 */}
              <View style={styles.shopList}>

                   <ScrollView 
                            ref="scrollerView"  
                            style={styles.list}  
                            // 水平滚动  
                            horizontal={false}  
                            // 是否显示水平滚动条  
                            showsHorizontalScrollIndicator={false}  
                            // 垂直滚动条
                            showsVerticalScrollIndicator = {false}
                            // 安页滚动  
                            pagingEnabled={true}  
  
                            //滚动动画结束时调用此函数  
                         //   onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}  
  
                            //开始拖拽  
                            onScrollBeginDrag={(e)=>this.setState({loaded:false,})}  
  
                            //停止拖拽  
                            onScrollEndDrag={(e)=> this.setState({loaded:true},() => { clearTimeout(tim);const tim = setTimeout(() => this.setState({timeout:false}),800)})}  
                          >  
                         {/* 列表数据渲染 */}
                        {
                         this.state.timeout ?  <Text style={styles.loaded}>{this.state.loaded ? <Text>加载完毕</Text> : <Text>加载中...</Text> }</Text> : <View></View> 
                        }
                          {this.renderList()}  

                      </ScrollView>  

              </View>
            
      

            </View>
        );
    }
}




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
        height: '6%',
        marginTop:75,
        zIndex: 60,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ffffff',
        borderBottomWidth:.2,
        borderBottomColor:'#cccccc',
    },
    step_left: {
        width:"15%",
        height:30,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-start',
        position:'absolute',
    },
    step_lefts: {
        width:"15%",
        height:30,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-start',
        position:'absolute'
    },
    tab: {
        width:'30%',
        height:"100%",
        alignSelf:'flex-start',
        position:'absolute',
        justifyContent: 'center',
        alignItems:'center',
    },
    txt: {
        color:'#333333',
        fontSize:15,
    },
    line: { 
        marginTop:20,
        width:'16%',
        height:40,
        alignSelf:'center',
        position:'absolute'
    },
    list: {
        width: "100%",
   },
   shopList: {
        width: '100%',
        height: '85%',
        zIndex: 60,
   },
   loaded: {
        alignSelf:'center',
        color:'#cccccc',
        fontSize:14,
        marginTop:5,
   },
   orderBox: {
       width:'100%',
   },
   orderInfo:{
       width:'94%',
       height:40,
       alignItems:'center',
       justifyContent:'center'
    },
    orderNum: {
        fontSize:13,
        color:'#333333',
        fontWeight:'normal',
        alignSelf:'flex-start',
        marginLeft:'4%'
    },
    status:{
        fontSize:13,
        fontWeight:'normal',
        alignSelf:'flex-end',
        position:'absolute'
    },

    
});
