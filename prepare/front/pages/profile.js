import AppLayout from '../components/AppLayout';
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const profile = () => {
  const followerList = [
    {nickname: "이희승"},
    {nickname: "조수빈"},
    {nickname: "이현지"},
  ]
  const followingList = [
    {nickname: "이희승"},
    {nickname: "조수빈"},
    {nickname: "이현지"},
  ]
  return (
    <>
      <Head>
        <title>내 프로필 | Buzzy</title>
      </Head>
      <AppLayout>
        <div>내 프로필</div>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followerList} />
        <FollowList header="팔로워 목록" data={followingList} />
      </AppLayout>
    </>
  );
};

export default profile;