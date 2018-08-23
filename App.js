/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


// 路由配置
//import Router from './project/router';

// 用户界面
//import Main from './project/ZBMain/MainVC'

//import MineVC from './project/ZBMine/MineVC'; // 个人中心 --- 主界面

// 选项卡 --- 我的余额模块
// import { BuyerMoneyVC, DetailVC, CashVC,SuccessCashVC } from './project/ZBMine/pages/myMoney';  // 个人中心 ---- 我的余额
// 备注: 该模块缺少 银行卡选择子模块


// 选项卡 --- 银行卡
//import { BankCardVC, BankCardManagerVC,BankCardAddVC,BankCardInfoVC ,BankCardKuaijieVC, BankCardJiansheVC,BankCardPhoneVC, BankCardSuccessVC} from './project/ZBMine/pages/bankCard/index';
// 备注：该模块缺少银行卡解同意并解除子模块   

// 账单--- 个人挂账
import { BillVC, BillDetailVC } from './project/ZBMine';


// 选项卡 ---- 关于质保
// import AboutVC from './project/ZBMine/pages/About';

// 登录相关
//import { LoginVC }from './project/ZBlogin/loginVC';   // 密码登录
//import MesLoginVc from './project/ZBlogin/mesLoginVc';  // 短信登录

// 密码找回流程
//import BackPassword from './project/ZBlogin/backPassword'; // 第一阶段 --- 验证手机
//import BackPasswordSet from './project/ZBlogin/backPasswordSet'; // 第二阶段 --- 设置新密码

// 注册相关
//import RegisterVc from './project/ZBregister/RegisterVC';   // 注册流程1 -----  选择用户类型
// import RegisterDealerVc from './project/ZBregister/RegisterDealerVc';  // 注册流程 ---  选择商户类型

// 注册接口
//import RegisterIndex from './project/ZBregister/RegisterIndex';

//普通用户
//import RegisterLocationVc from './project/ZBregister/RegisterLocationVc';  // 注册流程2------ 定位
//import RegUserInfo from './project/ZBregister/buyer/RegUserInfo';   // 注册流程 3 ----  上传用户信息及头像



export default class App extends Component{

  render() {
    return (
     //  <Router />  //应用入口
     //  <Main/>  // 首页
    //   <LoginVC />
    // <MesLoginVc />
     // <RegisterVc />
     //  <RegisterLocationVc />
    //   <RegisterDealerVc />
    //  <RegisterIndex />
    //   <BackPassword />
   // <BackPasswordSet />
   //   <MineVC />
   //   <BuyerMoneyVC />
    // <DetailVC />
     //  <CashVC />
    //   <SuccessCashVC />
    //   <BankCardVC />
    //    <BankCardManagerVC />
    //    <BankCardAddVC />
    //   <BankCardInfoVC />
    //    <BankCardKuaijieVC />
     //     <BankCardJiansheVC />
    //     <BankCardPhoneVC />
    //  <BankCardSuccessVC />
    //   <AboutVC />
   //    <BillVC />
        <BillDetailVC />
    );
  }
}

