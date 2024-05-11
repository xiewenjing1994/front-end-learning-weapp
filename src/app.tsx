import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';
import { Provider } from 'react-redux';
import {store} from "@/store"; // 确保路径正确
import setupInterceptors from './utils/http/axios';
import './utils/polyfill';
import './app.less';
import './mock/index';

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
    setupInterceptors();  // 设置 HTTP 拦截器
  })

  return (
    <Provider store={store}>
      {children}
      </Provider>
  );
}


export default App;
