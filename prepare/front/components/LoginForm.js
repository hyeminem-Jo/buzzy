import React from 'react';
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import UserProfile from "./UserProfile";
import {createGlobalStyle} from "styled-components";

const Form = createGlobalStyle`
  form {
    padding: 20px;
  }
  .field {
    margin-bottom: 10px;
    
    input {
      width: 90%;
      margin-bottom: 3px;
    }
    
    p {
      color: crimson;
    }
  }
`

const LoginForm = ({ setIsLoggedIn }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  // register(): html의 input 태그를 결과 데이터의 속성중 하나로 등록하고, 검증할 때 사용되는 함수
  // handleSubmit(): form이 submit 되었을 때를 다루는 함수
  const onSubmit = (data) => { // 제출버튼을 눌렀을 때 실행
    console.log(data) // {id: 'id', password: 'password'} 의 형태로 찍힘
    reset(); // 제출된 값이 유효한 경우 모든 input 내의 값을 초기화시킴
    setIsLoggedIn(true)
  }
  // console.log(watch()) // input 창 입력시마다 다음과 같이 찍힘
  // {id: '', password: ''}
  // {id: 'i', password: ''}
  // {id: 'id', password: ''}
  // console.log(watch('id')) // id 속성의 값의 변화만 출력됨

  return (
    <>
      <Form />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <input
            {...register('id', { required: true,
              validate: {
                noAdmin: (value) => !value.includes("admin") || "admin 이라는 아이디는 사용할 수 없습니다.",
              },
            })}
            maxLength="15"
            type="text"
            placeholder='아이디' />
          <p>
            {errors.id && <span>* 아이디를 입력해주세요</span>}
          </p>
        </div>
        <div className="field">
          <input
            {...register('password', { required: true })}
            type="text"
            maxLength="15"
            placeholder='비밀번호'/>
          <p>
            {errors.password && <span>* 비밀번호를 입력해주세요</span>}
          </p>
        </div>
        <button type="submit">로그인</button>
      </form>
    </>
    // <div>
    //   <form action="">
    //     <fieldset>
    //       <div>
    //         <label htmlFor="">아이디</label>
    //         <input type="text"/>
    //       </div>
    //       <div>
    //         <label htmlFor="">비밀번호</label>
    //         <input type="password"/>
    //       </div>
    //     </fieldset>
    //   </form>
    // </div>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired
}

export default LoginForm;