import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';
import { Provider } from 'react-redux';
import {store} from "@/store"; // 确保路径正确
import './app.less';
import './mock/index';

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  return (
    <Provider store={store}>
      {children}
      </Provider>
  );
}


export default App;
