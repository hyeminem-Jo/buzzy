import React from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";
import Button from "./common/Button";

const List = styled.div`
  margin: 40px 0 0;
  background-color: #fff;
  
  .title {
    padding: 15px;
    font-size: 20px;
    font-weight: 700 ;
  }
  
  .list-data {
    display: flex;
    padding: 30px 15px;
    background-color: #eee;
    border-radius: 10px;
    
    li {
      position: relative;
      padding: 10px;
      border: 1px solid #ccc;
      cursor: default;
      background-color: #fff;
      border-radius: 5px;
      
      &:not(:last-child) {
        margin-right: 10px;
      }
      
      button {
        position: absolute;
        top: 0%;
        left: 100%;
        transform: translate(-50%, -50%);
        display: none;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 22px;
        padding: 0;
        line-height: 0;
        border-radius: 50%;
        background-color: #bbb;
        border: 1px solid #bbb;
        cursor: pointer;
        transition: background-color .1s;

        &:hover {
          color: #bbb;
          background-color: #fff;
        }
      }
      
      &:hover button {
        display: flex;
      }
      
    }
  }

`

const FollowList = ({ header, data }) => {
  return (
    <>
      <List>
        <div className="title">{ header }</div>
        <ul className="list-data">
          {
            data.map((el) => (
              <li key={el.nickname}>
                {el.nickname}
                <button type="button">x</button>
              </li>
            ))
          }
        </ul>
      </List>
      <Button
        type="submit"
        size={`sm`}
        color={`secondary`}
      >
        더보기
      </Button>
    </>
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

export default FollowList;