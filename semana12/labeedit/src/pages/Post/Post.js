import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { PostCard, PostVotes } from 'components/index';
import CommentForm from 'components/Post/CommentForm';
import CommentCard from 'components/Post/CommentCard';
import styled from 'styled-components';
import labeddit from 'services/labeddit';
import GlobalStateContext from 'global/GlobalStateContext';
import { ReactComponent as Chat } from 'assets/chat.svg';
import LoadingAnimation from 'components/LoadingAnimation';

const PageContainer = styled.main`
  display: flex;
  justify-content: center;
  background-color: var(--post-page-background);
  min-height: 94vh;
`;

const PostContainer = styled.section`
  width: 900px;
  display: flex;
  flex-direction: column;
`;

const PostHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 0 45px;
  height: 50px;
  background-color: var(--post-header);
  color: var(--secondary);

  & > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  & > button {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 70px;
    height: 30px;
    margin-left: auto;
    color: #ff1818;
    border-radius: 12px;
    background: transparent;

    &:hover {
      background: #ff1818;
      color: black;
    }

    & > span {
      font-size: 1.25rem;
      font-weight: 500;
    }
  }
`;

const PostWrapper = styled.section`
  min-height: 600px;
  padding: 40px 95px 40px 55px;
  display: flex;
  flex-direction: column;
  background-color: var(--post-background);
`;

const PostBackground = styled.div`
  background: white;
  & > * {
    width: 100%;
  }
`;

const Divider = styled.div`
  margin-top: -10px;
  height: 15px;
  background-color: var(--post-divider);
`;

const CommentsWrapper = styled.div`
  padding: 24px 80px 24px 30px;
`;

const CommentsContainer = styled.section`
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Post = () => {
  const { id } = useParams();
  const { token, userData } = useContext(GlobalStateContext);
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      labeddit
        .getPostDetails(token, id)
        .then((response) => {
          setPost(response.post);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    }
  }, [token, id]);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <PageContainer>
      <PostContainer>
        <PostHeader>
          <PostVotes post={post} token={token} />
          <div>
            <Chat />
            <p>{post ? post.title : ''}</p>
          </div>
          <button>
            <Link to="/feed">
              <span>X</span> Close
            </Link>
          </button>
        </PostHeader>
        <PostWrapper>
          <PostBackground>
            <PostCard post={post} token={token} />
            <Divider />
            <CommentsWrapper>
              <CommentForm
                post={post}
                username={userData.username}
                token={token}
              />
              <CommentsContainer>
                {post.comments.map((comment) => {
                  return (
                    <CommentCard
                      key={comment.id}
                      comment={comment}
                      token={token}
                      postId={post.id}
                    />
                  );
                })}
              </CommentsContainer>
            </CommentsWrapper>
          </PostBackground>
        </PostWrapper>
      </PostContainer>
    </PageContainer>
  );
};

export default Post;
