import styled from 'styled-components';
import timePassed from 'utils/timePassed';

const UserInfoWrapper = styled.div`
  padding: 3px 10px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid var(--border);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.75rem;
  background-color: #7587a2;
  width: 35px;
  border-radius: 50%;
`;

const PostUserInfo = ({ post }) => {
  const timeElapsed = timePassed(post.createdAt);

  return (
    <UserInfoWrapper>
      <Icon>{post.username[0]}</Icon>
      <UserInfo>
        <p>{post.username}</p>
        <p>{timeElapsed}</p>
      </UserInfo>
    </UserInfoWrapper>
  );
};

export default PostUserInfo;
