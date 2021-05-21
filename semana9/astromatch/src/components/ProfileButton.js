import styled from 'styled-components'

const BaseButton = styled.button`
    border-radius: 50%;
    padding: 20px;
    outline: none;
`

export default function ProfileButton ({text, choose}) {
    return(
        <BaseButton onClick={choose}>{text}</BaseButton>
    )
}