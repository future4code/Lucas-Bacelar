import React from "react"
import styled from 'styled-components'

const Heading = styled.h2`
    font-size: 19px;
    font-family: sans-serif;
`

export default class Header extends React.Component {
    render() {
        return (
            <Heading>{this.props.texto}</Heading>
        )
    }
}