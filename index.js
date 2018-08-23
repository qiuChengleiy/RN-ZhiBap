/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// 开发模式中 屏蔽黄色警告
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
