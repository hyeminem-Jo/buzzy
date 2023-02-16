import styled from "styled-components";
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import {useCallback} from "react";
import * as userActions from "../store/modules/user"

const Form = styled.form`
  //padding: 20px;
  
  .field {
    margin-bottom: 10px;
    
    input{
      width: 90%;
      margin-bottom: 3px;
    }
    
    p {
      color: crimson;
    }
  }

  button:nth-of-type(1){
    display: inline-block;
    margin-right: 10px;
  }
`

const LoginForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm({
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <input
            {...register('email', { required: true,
              validate: {
                noAdmin: (value) => !value.includes("admin") || "admin 이라는 아이디는 사용할 수 없습니다.",
              },
            })}
            maxLength="15"
            type="text"
            placeholder='아이디' />
          <p>
            {errors.email && <span>* 아이디를 입력해주세요</span>}
          </p>
        </div>
        <div className="field">
          <input
            {...register('password', { required: true })}
            type="password"
            maxLength="15"
            placeholder='비밀번호'/>
          <p>
            {errors.password && <span>* 비밀번호를 입력해주세요</span>}
          </p>
        </div>
        <button className="btn-primary" type="submit">로그인</button>
        <button className="btn-sub" type="button">회원가입</button>
      </Form>
    </>
  );
};

export default LoginForm;