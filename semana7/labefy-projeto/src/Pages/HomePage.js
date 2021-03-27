import React from "react";
import styled from "styled-components";

const HomeContainer = styled.article`
    background: #121212;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    font-size: 3rem;

`

export default class LibraryPage extends React.Component {
    render() {
        return (
            <HomeContainer>
                <h1>Bem Vindo Ao Labefy</h1>
                <p>Put the phones and feel the good vibes</p>
            </HomeContainer>
        )
    }
}