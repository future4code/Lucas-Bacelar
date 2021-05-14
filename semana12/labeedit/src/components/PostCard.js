import styled from 'styled-components';
import { useHistory } from 'react-router';
import { PostUserInfo, PostText, PostVotes } from './index';
import { ReactComponent as CommentIcon } from 'assets/comment.svg';
import { goToPostPage } from 'routes/coordinator';

const CardContainer = styled.article`
  width: 100%;
  min-height: 150px;
  margin: 10px 0;
  display: grid;
  grid-template-rows: 40px 1fr 32px;
  background: white;
  border-radius: 8px;

  & > div:last-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 23px;
    border-top: 1px solid var(--border);

    & > div {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

const PostCard = ({ post, token }) => {
  const history = useHistory();

  return (
    <CardContainer>
      <PostUserInfo post={post} />
      <PostText
        post={post}
        handleClick={() => goToPostPage(history, post.id)}
      />
      <div>
        <PostVotes post={post} token={token} />
        <div onClick={() => goToPostPage(history, post.id)}>
          <CommentIcon />
          <p>{post.commentsCount} comentarios</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default PostCard;
