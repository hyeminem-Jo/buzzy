import AppLayout from '../components/AppLayout';
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | Buzzy</title>
      </Head>
      <AppLayout>
        <div>내 프로필</div>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" />
        <FollowList header="팔로워 목록" />
      </AppLayout>
    </>
  );
};

export default profile;