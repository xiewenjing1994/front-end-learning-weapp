// 一个通用的异步请求创建函数
import { createAsyncThunk } from '@reduxjs/toolkit';
import Taro from '@tarojs/taro';

interface RequestArgs {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: any;
}


export const createAsyncRequest = <ReturnType>(typePrefix: string, requestArgs: RequestArgs) => {
  return createAsyncThunk<ReturnType, RequestArgs>(
    typePrefix,
    async (data, { rejectWithValue }) => {
      try {
        const response = await Taro.request({
          url: requestArgs.url,
          method: requestArgs.method,
          data, // 请求参数
        });
        if (response.statusCode === 200) {
          return response.data as ReturnType;
        } else {
          return rejectWithValue('Request failed');
        }
      } catch (error) {
        return rejectWithValue(error.toString());
      }
    }
  )
}
