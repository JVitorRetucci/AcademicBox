import React, { Component } from 'react';
import { Holder } from './styles';
import { ReactComponent as Like } from '../../assets/like icon.svg';


export default class Card extends Component{
    render(){
        return(
            <Holder>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <label><button><Like /></button>{this.props.avaliation}</label>
            </Holder>
        );
    }
}