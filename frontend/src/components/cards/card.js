import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Holder } from './styles';
import { ReactComponent as Like } from '../../assets/like icon.svg';


export default class Card extends Component{
    render(){
        return(
            <Holder>
                <Link to={this.props.to}><h3>{this.props.title}</h3></Link>
                <Link to={this.props.to}><p>{this.props.description}</p></Link>
                <label><Like />{this.props.avaliation}</label>
            </Holder>
        );
    }
}