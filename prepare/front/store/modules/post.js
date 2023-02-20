// 1. 리듀서 모듈 만들기
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainPosts: [
    {
      id: 1,
      // 유저 정보
      User: {
        id: 1,
        nickname: "히승이",
      },
      content: "첫 번째 게시글 #오운완 #성수 데이트",
      // 이미 게시글에 업로드 왼료된 이미지
      Images: [
        {
          src: "https://cdn.pixabay.com/photo/2022/01/27/16/14/heart-6972452_1280.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2017/06/23/12/10/flower-2434471_960_720.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2022/02/11/14/52/waffles-7007465_1280.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2022/01/11/18/46/rose-6931259_1280.jpg",
        },
      ],
      // 댓글
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "오빠 잘생겼어요~",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "얼른 만나고 싶어요!",
        },
      ],
    },
  ],

  // mainPosts 외 다른 속성
  // 현재 게시글을 쓰는 중 업로드된 이미지 경로
  imagePaths: ["https://cdn.pixabay.com/photo/2022/01/27/16/14/heart-6972452_1280.jpg", "https://cdn.pixabay.com/photo/2022/02/11/14/52/waffles-7007465_1280.jpg", "https://cdn.pixabay.com/photo/2017/06/23/12/10/flower-2434471_960_720.jpg"], // 게시글에 이미지를 업로드 할 때, 이미지의 경로들이 저장되는 공간
  postAdded: false, // 게시글 추가가 완료되었을 때 true 로 전환
}

// 더미데이터
const dummyPost = {
  id: 2,
  content: '더미데이터 입니다',
  User : {
    id: 2,
    nickname: '혜지닝',
  },
  Images: [],
  Comments: [],
}

const postSlice = createSlice({
  name : 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.mainPosts = state.mainPosts.concat(dummyPost);
      state.postAdded = true;
    }
  }
})

export const { addPost } = postSlice.actions; // 액션 생성 함수
export default postSlice.reducer; // 리듀서