import PropTypes from 'prop-types'

const PostCard = ({ post }) => {
  return (
    <div>
      게시글 입니다
      <p>{post.id}</p>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostCard;