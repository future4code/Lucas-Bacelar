import React from "react"
import styled from 'styled-components'

export default class Botao extends React.Component {
    render() {
        return (
            <button onClick={this.props.onclick}>{this.props.texto}</button>
        )
    }
}