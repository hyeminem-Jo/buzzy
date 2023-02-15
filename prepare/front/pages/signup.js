import AppLayout from '../components/AppLayout';
import Head from "next/head";
import { useForm } from "react-hook-form";
import {useCallback, useMemo} from "react";
import styled from "styled-components";
import * as userActions from "../store/modules/user";

const Form = styled.form`
  .field:not(:nth-child(2)) {
    margin-bottom: 30px;
  }
  label:not([for="term"]) {
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 18px;
  }
  
  input:not([type="checkbox"]) {
    width: 90%;
  }
`

// let renderCount = 0
const signup = () => {
  const { register, watch, getValues, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      id: '',
      password: '',
      passwordCheck: '',
    }
  })
  // renderCount++
  // console.log('에러: ', errors)
  const { id, password, passwordCheck } = watch()

  const onSubmit = useCallback( (data) => {
    console.log(data)
    // dispatch(userActions.loginAction(data))
    reset();
  }, [id, password, passwordCheck])

  return (
    <>
      <AppLayout>
        <Head>
          <title>회원가입 | Buzzy</title>
        </Head>
        {/*<div>{renderCount}</div>*/}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="id">아이디</label>
            <input
              {...register('id', {
                required: '아이디를 입력해주세요',
                minLength: {
                  value: 5,
                  message: '5자 이상으로 입력해주세요'
                },
                validate: {
                  noAdmin: (value) => value !== "admin" || "admin 이라는 아이디는 사용할 수 없습니다.",
                },
              })}
              id="id"
              maxLength="15"
              type="text"
              placeholder='아이디(5자 이상)' />
            <p>
              {errors.id && <span>* {errors.id.message}</span>}
            </p>
          </div>
          <div className="field">
            <label htmlFor="password">비밀번호</label>
            <input
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                  message: '영문, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요'
                }
              })}
              type="password"
              maxLength="15"
              placeholder='비밀번호(영문, 숫자, 특수문자 포함 8자 ~ 20자)'/>
            <p>
              {errors.password && <span>* {errors.password.message}</span>}
            </p>
          </div>
          <div className="field">
            <input
              {...register('passwordCheck', {
                required: "비밀번호를 확인해주세요",
                validate: {
                  matchPassword: (value) => {
                    const { password } = getValues();
                    return password === value || '비밀번호가 일치하지 않습니다'
                  }
                }
              })}
              type="password"
              maxLength="15"
              placeholder='비밀번호 확인' />
            <p>
              {errors.passwordCheck && <span>* {errors.passwordCheck.message}</span>}
            </p>
          </div>
          <div className="field">
            <input
              {...register('term', {
                required: "약관에 동의해주세요",
              })}
              type="checkbox"
              id="term"/>
            <label htmlFor="term">조혜진에게 복종할 것에 동의합니다</label>
            <p>
              {errors.term && <span>* {errors.term.message}</span>}
            </p>
          </div>
          <button type="submit">회원가입</button>
        </Form>
      </AppLayout>
    </>
  );
};

export default signup;