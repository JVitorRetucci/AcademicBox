import React, { Component } from 'react';
import { Container } from './styles';

export default class Tag extends Component{
    render(){
        return(
            <Container>
                <label>{this.props.name}</label>
            </Container>
        )
    }
}