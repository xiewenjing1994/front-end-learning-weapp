import { createSlice } from '@reduxjs/toolkit';
import {createAsyncRequest} from "@/utils/http/createAsyncRequest";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  data: object;
  error: object;
}

// 创建登录请求的异步 thunk
export const login = createAsyncRequest<LoginResponse>('user/login', {
  url: '/api/login',
  method: 'POST',
});

const initialState = {
  userInfo: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.userInfo = action.payload.data;
      })

  }
});

export default userSlice.reducer;
