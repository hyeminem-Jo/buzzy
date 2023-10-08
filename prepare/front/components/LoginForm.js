import styled from "styled-components";
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import {useCallback} from "react";
import * as userActions from "../store/modules/user"
import Input from "./common/Input";
import Button from "./common/Button";
import LinkButton from "./common/LinkButton";

const LoginForm = () => {
  const dispatch = useDispatch();

  const { control, handleSubmit, reset, formState: { errors }, watch } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const { email, password } = watch()
  // console.log(watch()) // input 창 입력시마다 다음과 같이 찍힘
  // {id: '', password: ''}
  // {id: 'i', password: ''}
  // {id: 'id', password: ''}
  // console.log(watch('id')) // id 속성의 값의 변화만 출력됨

  // register(): html 의 input 태그를 결과 데이터의 속성중 하나로 등록하고, 검증할 때 사용되는 함수
  // handleSubmit(): form 이 submit 되었을 때를 다루는 함수
  const onSubmit = useCallback( (data) => { // 제출버튼을 눌렀을 때 실행
    console.log(data) // {id: 'jinny', password: '1234'} 의 형태로 찍힘
    dispatch(userActions.loginAction(data))
    reset(); // 제출된 값이 유효한 경우 모든 input 내의 값을 초기화시킴
  }, [email, password])

  return (
    <>
      {/*<Form />*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          control={control}
          label="아이디"
          maxLength="30"
          type="text"
          placeholder='아이디'
          rules={{
            required: '아이디를 입력해주세요'
          }}
        />
        <Input
          name="password"
          control={control}
          label="비밀번호"
          maxLength="15"
          type="password"
          placeholder='비밀번호'
          rules={
            {
              required: '비밀번호를 입력해주세요'
            }
          }
        />
        <Button
          type="submit"
          size={`md`}
          color={`primary`}
        >
          로그인
        </Button>
        <LinkButton
          href={`/`}
          size={`md`}
          color={`secondary`}
        >
          회원가입
        </LinkButton>
      </form>
    </>
  );
};

export default LoginForm;