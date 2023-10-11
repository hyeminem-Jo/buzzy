import AppLayout from '../components/AppLayout';
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const profile = () => {
  const me = useSelector(({user}) => user.me)
  const router = useRouter();

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

  useEffect(() => {
    if(!me) {
      alert('로그인 후 이용하실 수 있습니다')
      router.push('/')
    }
  }, [])

  return (
    <>
      <Head>
        <title>내 프로필 | Buzzy</title>
      </Head>
      <AppLayout>
        {me &&
          <>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={followerList} />
            <FollowList header="팔로워 목록" data={followingList} />
          </>
        }
      </AppLayout>
    </>
  );
};

export default profile;