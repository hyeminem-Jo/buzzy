import { useForm } from "react-hook-form";
import {useCallback, useEffect} from "react";
import Input from "./common/Input";
import Button from "./common/Button";

const SignupForm = () => {
  const { watch, control, setValue, getValues, handleSubmit, reset, setError, clearErrors, formState: { errors } } = useForm({
    mode: "onChange",
    defaultValues: {
      user: '',
      password: '',
      passwordCheck: '',
      term: false,
    },
  })

  // [비밀번호] value 수정 시 이미 입력된 [비밀번호 확인] value 도 같이 유효성 체크
  useEffect(() => {
    if (watch('password') !== watch('passwordCheck') && watch('passwordCheck')) {
      setError('passwordCheck', {
        type: 'password-mismatch',
        message: '비밀번호가 일치하지 않습니다'
      })
    } else {
      clearErrors('passwordCheck');
    }
  }, [watch('password'), watch('passwordCheck')])

  const onSubmit = useCallback( (data) => {
    console.log(data)
    alert(`가입을 환영합니다, ${data.user} 님!`)
    // dispatch(userActions.loginAction(data))
    reset();
    setValue('term', false)
  }, [watch()])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="user"
          control={control}
          label="아이디"
          maxLength="30"
          type="text"
          placeholder='아이디(5자 이상)'
          rules={{
            required: '아이디를 입력해주세요',
            minLength: {
              value: 5,
              message: '5자 이상으로 입력해주세요'
            },
            validate: {
              noAdmin: (value) => value !== "admin" || "admin 이라는 아이디는 사용할 수 없습니다.",
            },
          }}
        />
        <Input
          name="password"
          control={control}
          label="비밀번호"
          maxLength="15"
          type="password"
          placeholder='비밀번호(영문, 숫자, 특수문자 포함 8자 ~ 20자)'
          rules={
            {
              required: '비밀번호를 입력해주세요',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                message: '영문, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요'
              }
            }
          }
        />
        <Input
          name="passwordCheck"
          control={control}
          label="비밀번호 확인"
          type="password"
          maxLength="15"
          placeholder='비밀번호 확인'
          rules={
            {
              required: "비밀번호를 확인해주세요",
              validate: {
                matchPassword: (value) => {
                  const { password } = getValues();
                  return password === value || '비밀번호가 일치하지 않습니다'
                }
              }
            }
          }
        />
        <Input
          name="term"
          control={control}
          label="약관에 동의합니다"
          type="checkbox"
          rules={
            {
              required: "약관에 동의해주세요",
            }
          }
        />
        <Button
          type="submit"
          size={`md`}
          color={`secondary`}
        >
          회원가입
        </Button>
      </form>
    </>
  );
};

export default SignupForm;