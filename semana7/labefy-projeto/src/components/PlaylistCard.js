import React from "react";
import styled from "styled-components";

const CardContainer = styled.article`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 2px black;

    &:hover {
        transform: translateY(-2px);
        transition: all 0.3s ease-in-out;
        box-shadow: 0 0 6px black;
    }

    & > div {
        flex: 3;
        font-size: 4rem;
        background: ${props => props.color}
    }

    & > p {
        text-align: center;
        font-size: 2rem;
        flex: 1;
    }
`

export default class PlaylistCard extends React.Component {
    random_rgba = () => {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    render() {
        return (
            <CardContainer onClick={() => this.props.fetchDetail(this.props.id, this.props.name)} color={this.random_rgba()}>
                <div>{this.props.index}</div>
                <p>{this.props.name}</p>
            </CardContainer>
        )
    }
}