import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Row, Col } from 'antd';
import {useState} from "react";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const GlobalMenu = createGlobalStyle`
  .nav-wrap {
    height: 50px;
    margin-bottom: 30px;
    
    .nav {
      display: flex;
      height: 100%;
      
      li {
        &:not(:nth-child(4)) {
          width: 100px;
        }
        &:nth-child(3) {
          order: 3;
        }
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        text-align: center;
        box-sizing: border-box;
        border-bottom: 2px solid transparent;
        &:hover, &.activeLink {
          color: darkgoldenrod;
          border-bottom: 2px solid gold;
        }
      }
    }
    
    .input-wrap {
      display: inline-block;
      height: 100%;
      padding: 0 20px;
      
      input {
        height: 33px;
        margin-top: 11px;
        padding: 0;
        padding-left: 10px;
        border: 2px solid #ccc;
        border-radius: 5px;
        
        &:focus {
          border: 2px solid darkgoldenrod;
        }
      }
    }
  }
`

const AppLayout = ({ children }) => {
  const navLinks = [
    {title: 'Home', path: '/'},
    {title: 'Profile', path: '/profile'},
    {title: 'Signup', path: '/signup'},
  ]
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  return (
    <>
      <GlobalStyles />
      <GlobalMenu />
      <div className="nav-wrap">
          <ul className="nav">
            {
              navLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.path}
                    className={router.pathname === link.path ? "activeLink" : ""}>{link.title}
                  </Link>
                </li>
              ))
            }
            <li className="input-wrap">
              <input type="text"/>
              <button type="button">찾기</button>
            </li>
          </ul>
        </div>
      <Row gutter={30}>
        <Col xs={24} sm={6} style={{ border: '1px solid #ccc'}}>
          {/*왼쪽 메뉴*/}
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
        </Col>
        <Col xs={24} sm={12} style={{ backgroundColor: '#eee'}}>
          {children}
        </Col>
        <Col xs={24} sm={6}>
          <a href="https://www.naver.com/" target="_blank" rel="noreferrer noopener">네이버</a>
          {/* 다른 페이지에서 접근하는 target _blank 는 보안상의 위험이 있기 때문에 rel="noreferrer" 를 적어주어야 한다. */}
        </Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;