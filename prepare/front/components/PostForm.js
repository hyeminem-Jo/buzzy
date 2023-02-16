import {useForm} from "react-hook-form";
import {useCallback, useRef} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

import * as postActions from "../store/modules/post"
// import { addPost } from "../store/modules/post";

const Form = styled.form`
  padding: 0;
  margin-top: 20px;
  margin-bottom: 40px;

  textarea {
    display: block;
    width: 95%;
    height: 100px;
    padding: 15px;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #ccc;
    resize: none;
    
    &:focus {
      border: 1px solid #E6B905;
    }
  }
  
  .btn {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .images {
    display: flex;
    background-color: #fff;
    padding: 3px 5px;
    margin-bottom: 10px;
    
    li {
      position: relative;
      margin: 5px;
      width: 100px;
      
      img {
        width: 100%;
      }
      button {
        position: absolute;
        top: 0;
        right: 0;
        //display: none;
        width: 20px;
        height: 20px;
        line-height: 4px;
        border-radius: 50%;
        transform: translate(50%, -50%);
        background-color: #aaa;
        color: #fff;
        z-index: 1;
      }
    }
  } 
`

const PostForm = () => {
  const dispatch = useDispatch();
  const imagePaths = useSelector(({post}) => post.imagePaths)
  const { register, watch, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      text: ''
    }
  })

  const imageInput = useRef() // 실제 돔에 접근
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current])

  const { text } = watch()

  const onSubmit = useCallback((data) => {
    console.log(data)
    dispatch(postActions.addPost());
    reset()
  }, [text])

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register('text', { required: true })}
          maxLength="150"
          placeholder="글을 작성해주세요">
        </textarea>
        <ul className="images">
          {imagePaths.map((el) => (
            <li key={el}>
              <img src={el} alt=""/>
              <button type="button">x</button>
            </li>
          ))}
        </ul>
        <input type="file" multiple hidden ref={imageInput} />
        <div className="btn">
          <button className="btn-sub" type="button" onClick={onClickImageUpload}>이미지 업로드</button>
          <button className="btn-primary" type="submit">윙윙</button>
        </div>
      </Form>
    </>
  );
};

export default PostForm;