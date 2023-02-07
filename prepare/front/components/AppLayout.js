import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
import GlobalStyles from "./GlobalStyles";

const navLinks = [
  {title: 'Home', path: '/'},
  {title: 'Profile', path: '/profile'},
  {title: 'Signup', path: '/signup'},
]

const GlobalMenu = createGlobalStyle`
  .nav-wrap {
    height: 50px;
    
    .nav {
      display: flex;
      
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
        margin-top: 5px;
        height: 30px;
      }
      
      button {
        display: inline-block;
        border: 1px solid gray;
        height: 33px;
        width: 50px;
      }
    }
  }
`

const AppLayout = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      <GlobalStyles />
      <GlobalMenu />
        <div className="nav-wrap">
          <ul className="nav">
            {
              navLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.path} className={router.pathname === link.path ? "activeLink" : ""}>{link.title}</Link>
                </li>
              ))
            }
            <li className="input-wrap">
              <input type="text"/>
              <button type="button">찾기</button>
            </li>
          </ul>
        </div>
      { children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;