// 1. 리듀서 모듈 만들기
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null,
  signupData: {},
  loginData: {},
}

const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.me = action.payload;
    },
    logoutAction: (state, action) => {
      state.me = null;
    }
    // changeNickname: (state, action) => { state.name = action.payload }
  }
})

export const { loginAction, logoutAction } = userSlice.actions; // 액션 생성 함수
export default userSlice.reducer; // 리듀서