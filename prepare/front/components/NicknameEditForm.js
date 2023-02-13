import React, {useCallback} from 'react';
import {useForm} from "react-hook-form";

const NicknameEditForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = useCallback(() => {
    console.log('닉네임 바뀜')
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "20px 0" }}>
        <label htmlFor="nickname" style={{ marginRight: '10px' }}>닉네임</label>
        <input {...register('nickname')} maxLength="15" type="text" />
        <button type="submit">수정하기</button>
      </form>
      
    </>
  );
};

export default NicknameEditForm;