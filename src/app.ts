import Taro, { Component } from '@tarojs/taro';
import { Provider } from 'react-redux';
import {store} from "@/store"; // 确保路径正确
import './app.less';
import './mock/index';

class App extends Component {
  componentDidMount() {
    console.log('App launched.');
  }

  render() {
    return (
      <Provider store={store}>
        {this.props.children}
        </Provider>
    );
  }
}

export default App;
