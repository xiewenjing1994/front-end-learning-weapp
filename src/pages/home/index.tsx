import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Button, Input } from '@tarojs/components'
import {login} from "@/store/userSlice";

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // 确保传递用户名和密码
    console.log(username, password);
    // wx.request({
    //   url: '/api/login', //仅为示例，并非真实的接口地址
    //   data: {username, password},
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   method: 'POST',
    //   success (res) {
    //     console.log(res.data)
    //   },
    //   fail: function(error) {
    //     console.log('请求失败:', error);
    //   }
    // })
    // console.log('===>', typeof  window.AbortController)
    dispatch(login({data: {username, password}}));
  };

  return (
    <View>
      <Input type='text' value={username} onInput={(e) => setUsername(e.detail.value)} placeholder='Username' />
      <Input type='safe-password' password value={password} onInput={(e) => setPassword(e.detail.value)} placeholder='Password' />
      <Button onClick={handleLogin}>Login</Button>
    </View>
  );
}
