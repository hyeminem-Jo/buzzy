import React, {useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../store/modules/user"

const Test = () => {
  const dispatch = useDispatch();
  const name = useSelector(({user}) => user.name) // useSelector: 스토어의 상태값을 반환

  const changeNickname = useCallback((name) => {
    dispatch(userActions.changeNickname('heeseong'))
  }, [dispatch])

  return (
    <>
      <h1>test</h1>
      <span>{name}</span>
      <button onClick={() => changeNickname()}>이름 변경</button>
    </>
  );
};

export default Test;