// 1. 리듀서 모듈 만들기
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null,
  signupData: {},
  loginData: {},
}

// 가짜 유저
const dummyUser = (data) => ({
  ...data, // { email, password } 삽입(concat)
  nickname: "혜지닝",
  id: 2,
  Posts: [{ id: 1 }],
  Followings: [
    { nickname: "subin" },
    { nickname: "hyejin" },
    { nickname: "heeseung" },
  ],
  Followers: [
    { nickname: "subin" },
    { nickname: "hyejin" },
    { nickname: "heeseung" },
  ],
});

const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.me = dummyUser(action.payload);
    },
    logoutAction: (state, action) => {
      state.me = null;
    }
    // changeNickname: (state, action) => { state.name = action.payload }
  }
})

export const { loginAction, logoutAction } = userSlice.actions; // 액션 생성 함수
export default userSlice.reducer; // 리듀서