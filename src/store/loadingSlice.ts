import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  [key: string]: boolean;
}

const initialState: LoadingState = {};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<{ url: string; isLoading: boolean }>) => {
      const { url, isLoading } = action.payload;
      state[url] = isLoading;
    }
  }
})

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
