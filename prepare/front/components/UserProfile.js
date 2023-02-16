import { useCallback } from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../store/modules/user"

const Profile = styled.div`
  padding: 20px;

  .profile-user {
    display: flex;
    margin-bottom: 15px;

    .image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #ddd;
      margin: 0;
    }

    .wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;

      .name {
        margin-bottom: 5px;
      }
    }

  }

  .profile-amount {
    display: flex;
    height: 70px;
    border: 1.5px solid #ccc;

    &>* {
      flex: 1;
      text-align: center;
      padding-top: 20px;
      border-right: 1.5px solid #ccc;

      &:last-child {
        border: none;
      }
    }
  }
`

const UserProfile = () => {
  const me = useSelector(({user}) => user.me)
  const nickname = me?.nickname
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
     dispatch(userActions.logoutAction()) // 로그아웃
  }, [])

  return (
    <>
      <Profile>
        <div className="profile-user">
          <div className="image">
            <img src="" alt=""/>
          </div>
          <div className="wrap">
            <p className="name">{nickname}</p>
            <button className="btn-primary" onClick={logOut}>로그아웃</button>
          </div>
        </div>
        <div className="profile-amount">
          <div className="buzz">buzz<br />0</div>
          <div className="followings">팔로잉<br />0</div>
          <div className="followers">팔로워<br />0</div>
        </div>
      </Profile>
    </>
  );
};

export default UserProfile;