import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from "next/router";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Row, Col } from 'antd';
import {useMemo, useState} from "react";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import {useSelector} from "react-redux";
import Button from "./common/Button";
import Input from "./common/Input";
import {useForm} from "react-hook-form";

const GlobalMenu = styled.div`
  height: 50px;
  margin: 15px 0 20px;
  
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
    display: inline-flex;
    height: 100%;
    padding: 0 20px;
    
    input {
      width: 200px;
      height: 33px;
      padding: 0 0 0 10px;
      margin-top: 10px;
    }
    
    button {
      margin-left: 5px;
      margin-top: 10px;
    }
  }
`

const AppLayout = ({ children }) => {
  const me = useSelector(({user}) => user.me)
  const navLinks = [
    {title: 'Home', path: '/'},
    {title: 'Profile', path: '/profile'},
    {title: 'Signup', path: '/signup'},
  ]
  const router = useRouter();

  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
  })

  const globalStyle = useMemo(() => ({ height: 'calc(100vh - 85px)'}), [])
  const leftStyle = useMemo(() => ({ backgroundColor: '#eee'}), [])
  const middleStyle = useMemo(() => ({ padding: '0 15px' }), [])
  const rightStyle = useMemo(() => ({ minHeight: '150px' }), [])

  return (
    <>
      <GlobalStyles />
      <GlobalMenu>
        <ul className="nav">
          {
            navLinks.map((link) => (
              <li key={link.title} >
                <Link href={link.path}
                  className={router.pathname === link.path ? "activeLink" : ""}>{link.title}
                </Link>
              </li>
            ))
          }
          <li className="input-wrap">
            <Input
              name="findHashTag"
              control={control}
              label=""
              maxLength="30"
              type="text"
              placeholder='해시태그를 입력하세요'
            />
            <Button
              type="submit"
              size={`sm`}
              color={`secondary`}
            >
              찾기
            </Button>
          </li>
        </ul>
      </GlobalMenu>
      <Row gutter={30} style={globalStyle}>
        <Col xs={24} sm={6} style={leftStyle}>
          {/*왼쪽 메뉴*/}
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} sm={12} style={middleStyle}>
          {children}
        </Col>
        <Col xs={24} sm={6} style={rightStyle}>
          <Link href="https://velog.io/@h_jinny" target="_blank" rel="noreferrer noopener">블로그</Link>
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