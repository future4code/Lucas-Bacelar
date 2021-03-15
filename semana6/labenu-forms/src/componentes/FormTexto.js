import React from "react"
import styled from 'styled-components'

const InputContainer = styled.div`
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;

    & > label {
        margin-bottom : 17px;
    }

    & > input {
        margin: 0 auto;
        width: 60%;
    }
`


export default class FormTexto extends React.Component {
    state = {
        valorTexto: ""
    }

    textoHandleChange = (event) => {
        this.setState({valorTexto: event.target.value})
    }


    render() {
        return (
            <InputContainer>
                <label>{this.props.pergunta}</label>
                <input 
                    type="text"
                    value={this.state.valorTexto}
                    onChange={this.textoHandleChange}
                />
            </InputContainer>
        )
    }
}