import React, { Component } from 'react';
import { Title, HomeHeader, ProfileImg, Nav, NavLinks, HomeBody, Container, Input } from './styles';
import logoBOX from '../../assets/logoBOX.png';
import { GoSearch } from 'react-icons/go';
//Link protótipo https://xd.adobe.com/view/2baa7041-64ea-417a-73cc-67e46a20d339-5d9b/?fullscreen

export default class Home extends Component{
    mensagem = () => {
        console.log('Apertou!');
    }

    render(){
        return(
            <Container>
                <HomeHeader>
                    <img className="logo" src={logoBOX} alt="logo" />
                    <Nav>
                        <NavLinks>
                            <li className ="register"><a href="#">Cadastro</a></li>
                            <li><a href="#">Login</a></li>
                        </NavLinks>
                        <ProfileImg src="https://api.adorable.io/avatars/285/orange.png"/>
                    </Nav>
                </HomeHeader>
                <HomeBody>
                    <div className="label">
                        <Title>Qual a sua dúvida?</Title>
                    </div>
                    <div className="input">
                        <Input type="text"/><GoSearch className="sButton" onClick={this.mensagem}/>
                    </div>
                </HomeBody>
            </Container>
        );
    }
};