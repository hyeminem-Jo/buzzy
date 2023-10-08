import AppLayout from '../components/AppLayout';
import Head from "next/head";
import SignupForm from "../components/SignupForm";

const signup = () => {
  return (
    <>
      <Head>
        <title>회원가입 | Buzzy</title>
      </Head>
      <AppLayout>
        <SignupForm />
      </AppLayout>
    </>
  );
};

export default signup;