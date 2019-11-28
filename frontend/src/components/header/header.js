import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import {ReactComponent as Cube} from '../../assets/academic_cube.svg';

export default class Header extends Component{
    render(){
        return(
            <Container>
                <Link to="/"><Cube className="cube"/></Link>
            </Container>
        );
    }
}