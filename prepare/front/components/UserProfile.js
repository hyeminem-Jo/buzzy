import { useCallback } from 'react';
import PropTypes from 'prop-types'
import { createGlobalStyle } from "styled-components";

const Profile = createGlobalStyle`
  .profile {
    //border: 1px solid hotpink;
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
  }
`

const UserProfile = ({setIsLoggedIn}) => {
  const logOut = useCallback(() => {
    setIsLoggedIn(false) // 로그아웃
  }, [])

  return (
    <>
      <Profile />
        <div className="profile">
          <div className="profile-user">
            <div className="image">
              <img src="" alt=""/>
            </div>
            <div className="wrap">
              <p className="name">조혜진</p>
              <button onClick={logOut}>로그아웃</button>
            </div>
          </div>
          <div className="profile-amount">
            <div className="buzz">buzz<br />0</div>
            <div className="followings">팔로잉<br />0</div>
            <div className="followers">팔로워<br />0</div>
          </div>
        </div>
    </>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired
}

export default UserProfile;