import {useForm} from "react-hook-form";
import {useCallback, useRef} from "react";
import styled from "styled-components";

const Form = styled.form`
  padding: 0;
  margin: 20px 0;

  textarea {
    display: block;
    width: 95%;
    height: 100px;
    padding: 15px;
    margin-bottom: 10px;
    outline: none;
  }
  
  .btn {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`

const PostForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      text: ''
    }
  })

  const imageInput = useRef() // 실제 돔에 접근
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current])

  const onSubmit = useCallback(() => {
    
  }, [])

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register('text')}
          maxLength="150"
          placeholder="글을 작성해주세요">
        </textarea>
        <input type="file" multiple hidden ref={imageInput} />
        <div className="btn">
          <button type="button" onClick={onClickImageUpload}>이미지 업로드</button>
          <button type="submit">윙윙</button>
        </div>
      </Form>
    </>
  );
};

export default PostForm;