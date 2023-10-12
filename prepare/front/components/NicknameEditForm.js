import React, {useCallback, useEffect} from 'react';
import {useController, useForm} from "react-hook-form";
import Button from "./common/Button";
import {useSelector} from "react-redux";
import Input from "./common/Input";
import styled from "styled-components";

const Form = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  button {
    margin-top: 0;
    margin-left: 5px;
  }
  input {
    padding: 7px;
  }
`

const NicknameEditForm = () => {
  const nickname = useSelector(({user}) => user.me?.nickname)

  const { watch, control, reset, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange"
  })

  useEffect(() => {
    reset({
      nickname: nickname
    })
  }, [nickname])

  const onSubmit = useCallback(() => {
    console.log('닉네임 바뀜')
  }, [])

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nickname" style={{ marginRight: '10px' }}>닉네임</label>
        <Input
          name="nickname"
          control={control}
          label=""
          maxLength="30"
          type="text"
        />
        <Button
          type="submit"
          size={`sm`}
          color={`secondary`}
        >
          수정하기
        </Button>
      </Form>
      
    </>
  );
};

export default NicknameEditForm;