import {Button, Form, Image, View, Input, Text} from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import {URLs} from "@/constants/urls";
import userIcon from "@/assets/icons/user-filled-color.png";
import passwordIcon from "@/assets/icons/password-filled-color.png";


import './index.less'

export default function Index() {

  useLoad(() => {
  })

  const handleSubmit = e => {
    const token = Taro.getStorageSync('access_token');
    if (token) {
      const value = e.target.value;
      const { username, password } = value || {};
      if (!username || !password) {
        Taro.showToast({
          title: 'The user name and password cannot be empty',
          icon: 'error',
        })
      } else {
        if (username === 'admin' && password === '123456') {
          Taro.showToast({
            title: 'Login successful',
            icon: 'success',
          })
          Taro.navigateTo({ url: URLs.home });
        } else {
          Taro.showToast({
            title: 'Login failure',
            icon: 'error',
          })
        }
      }
    }
  }

  return (
    <View className='index'>
      <Image
        src='https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
        style={{width: '100px', height: '100px', marginBottom: 35}}
      />

      <View>
        <Form onSubmit={handleSubmit}>
          <View className='form-item-style'>
            <Image src={userIcon} className='icon-style' />
            <Input
              name='username'
              placeholder='User Name'
            />
          </View>

          <View className='form-item-style'>
            <Image src={passwordIcon} className='icon-style' />
            <Input
              name='password'
              placeholder='Password'
              password
            />
          </View>

          <Button
            className='button-style'
            formType='submit'
            size='mini'
          >
            Sign In
          </Button>
        </Form>
      </View>
    </View>
  )
}
