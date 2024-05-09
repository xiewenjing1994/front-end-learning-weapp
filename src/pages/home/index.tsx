import React, { useState } from 'react';
import {login} from "@/store/userSlice";
import { useDispatch } from 'react-redux';
import { View, Text, Button, Input } from '@tarojs/components'

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // 确保传递用户名和密码
    // dispatch(login({ username, password }));
    console.log(username, password);
  };

  return (
    <View>
      <Input type='text' value={username} onInput={(e) => setUsername(e.target.value)} placeholder='Username' />
      <Input type='safe-password' password value={password} onInput={(e) => setPassword(e.target.value)} placeholder='Password' />
      <Button onClick={handleLogin}>Login</Button>
    </View>
  );
}
