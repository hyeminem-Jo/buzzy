import PropTypes from 'prop-types'
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {useCallback, useState} from "react";
// import * as postActions from "../store/modules/post";
import {useDispatch, useSelector} from "react-redux";

const Post = styled.div`
  border: 1px solid #aaa;
  background-color: #fff;
  
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
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        
        textarea {
          display: block;
          width: 82%;
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

const PostCard = ({ post }) => {
  const dispatch = useDispatch()
  const me = useSelector(({user}) => user.me)
  const id = me?.id
  const { register, watch, handleSubmit, reset, formState: { errors } } = useForm({
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
                <textarea {...register('comment', { required: true })}
                          maxLength="150"
                          placeholder="댓글을 작성해주세요">
                </textarea>
                <button className="btn-primary" type="submit">윙윙</button>
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