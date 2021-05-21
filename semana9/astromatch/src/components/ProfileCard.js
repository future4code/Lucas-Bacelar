import styled from 'styled-components'

const ProfileContainer = styled.article`
    border-radius: 5px;
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;

    display: flex;
    align-items: center;
    overflow: hidden;

    position: relative;

    &::before {
        content: "";
        background: url(${props => props.link}) no-repeat center;
        background-size: cover;
        filter: blur(30px);
        position: absolute;

        width: 100%;
        height: 100%;
    }

    
    & > img {
        width: 100%;
        z-index: 2;
    }
`

const ProfileDetails = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;

    width: 100%;
    min-height: 90px;
    
    padding: 0 16px;
    background: rgba(0, 0, 0, 0.2);
    color: white;
`

export default function ProfileCard (props) {
    console.log(props)
    return(
        <ProfileContainer link={props.photo}>
            <img src={props.photo} alt="profile of the user" />
            <ProfileDetails>
                <h2>{props.name}, <span>{props.age}</span></h2>
                <p>{props.bio}</p>
            </ProfileDetails>
        </ProfileContainer>
    )
}