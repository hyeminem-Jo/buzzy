import PropTypes from 'prop-types'
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {useCallback, useState} from "react";
// import * as postActions from "../store/modules/post";
import {useDispatch, useSelector} from "react-redux";
import PostImages from "./PostImages";
import {useRouter} from "next/router";
import Button from "./common/Button";
import Textarea from "./common/Textarea";

const Post = styled.div`
  border: 1px solid #ccc;
  
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  
  .top {
    padding: 20px;
    padding-bottom: 30px;
    
    .user {
      display: flex;
      margin-bottom: 20px;

      .avatar {
        background-color: #ccc;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: 10px;
      }

      strong {
        margin-top: 10px;
      }
    }
  }
  
  .bottom {
    .btn {
      display: flex;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      
      button {
        flex: 1;
        padding: 20px 0;
        background-color: #fff;
        
        &:hover {
          background-color: #eee;
        }
        
        &:not(:last-child) {
          border-right: 1px solid #ddd;
        }
      }
    }

    .comment {
      padding: 20px;
      
      .header {
        border-bottom: 1px solid #ddd;
        padding-bottom: 10px;
      }
      
      &-list {
        padding: 20px 0;
        li {
          &:not(:last-child) {
            padding-bottom: 20px;   
          }
        }
      }
      
      form {
        padding: 0;
        margin-bottom: 20px;
        
        textarea {
          display: block;
          width: 92%;
          height: 50px;
          padding: 15px;
          margin-bottom: 10px;
          outline: none;
          border: 1px solid #ccc;
          resize: none;

          &:focus {
            border: 1px solid #E6B905;
          }
        }
        
        button {
          
        }
      }
    }
  }
`
const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  
  button {
    margin-top: 0;
    &:nth-of-type(2) {
      margin-left: 5px;
    }
  }
`

const PostCard = ({ post }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const me = useSelector(({user}) => user.me)
  const id = me?.id
  const { register, watch, control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      comment: ''
    }
  })
  const [isLiked, setLike] = useState()
  const [isOpened, setOpen] = useState(false)

  const openComment = useCallback(() => {
    setOpen((state) => !state)
  }, [isOpened])

  const { comment } = watch()
  const onSubmit = useCallback((data) => {
    if(me) {
      console.log('댓글 제출', data)
      reset()
    } else {
      alert('로그인 후 이용하실 수 있습니다')
      return
    }
  }, [comment, me])

  return (
    <Post>
      <div className="top">
        <div className="user">
          <div className="avatar">
            <img src="" alt=""/>
          </div>
          <strong>{post.User.nickname}</strong>
        </div>
        <div className="contents">
          {/* 이미지가 하나라도 있다면 이미지 게시 */}
          {post.Images[0] && <PostImages images={post.Images} />}
          <p>{post.content}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="btn">
          <button type="button">
            <span>좋아요</span>
          </button>
          <button type="button" onClick={openComment}>
            <span>댓글</span>
          </button>
          <button type="button">
            <span>리윙윙</span>
          </button>
          {
            id && id === post.User.id ? (
              <button type="button">
                <span>수정/삭제</span>
              </button>
            ) : <button type="button">
              <span>신고</span>
            </button>
          }

        </div>
        {
          isOpened && (
            <div className="comment">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Textarea
                  id="comment"
                  control={control}
                  maxLength="150"
                  placeholder="댓글을 작성해주세요"
                  row="5"
                />
                <BtnWrap>
                  <Button
                    type="submit"
                    size={`sm`}
                    color={`secondary`}
                  >
                    취소
                  </Button>
                  <Button
                    type="submit"
                    size={`sm`}
                    color={`primary`}
                  >
                    댓글
                  </Button>
                </BtnWrap>
              </form>
              <div className="header">
                {post.Comments.length} 개의 댓글
              </div>
              <ul className="comment-list">
                {
                  post.Comments.map((el) => (
                    <li key={el.User.nickname}>
                      <strong>{el.User.nickname}</strong>
                      <p>{el.content}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          )
        }
      </div>
    </Post>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object, // 이 object 도 shape 로 꼼꼼하게 검사할 수 있다.
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object), // 객체들의 배열
    Images: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
}

export default PostCard;