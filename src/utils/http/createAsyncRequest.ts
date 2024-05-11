// 一个通用的异步请求创建函数
import { createAsyncThunk } from '@reduxjs/toolkit';

interface RequestArgs {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: any;
}

/**
 * 创建一个异步请求的函数，专门适配微信小程序环境
 * @param typePrefix - Redux action 的类型前缀
 * @param requestArgs - 包含URL和方法的请求参数
 * @returns 返回一个异步 thunk
 */
export const createAsyncRequest = <ReturnType>(typePrefix: string, requestArgs: RequestArgs) => {
  return createAsyncThunk<ReturnType, { data?: any }, { rejectValue: any }>(
    typePrefix,
    async (args, { rejectWithValue }) => {
      try {
        // 返回一个新的Promise对象
        return await new Promise<ReturnType>((resolve, reject) => {
          wx.request({
            url: requestArgs.url,
            method: requestArgs.method,
            data: args.data,
            header: requestArgs.header || { 'content-type': 'application/json' },
            success: (res) => {
              if (res.statusCode >= 200 && res.statusCode < 300) {
                resolve(res.data);
              } else {
                rejectWithValue(res.data);
              }
            },
            fail: (error) => {
              rejectWithValue(error);
            }
          });
        });
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
};
