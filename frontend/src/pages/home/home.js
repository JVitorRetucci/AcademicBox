import React, { Component } from 'react';
import { Title, HomeHeader, ProfileImg, Nav, NavLinks, HomeBody, Container, Input, LoginBox } from './styles';
import logoBOX from '../../assets/logoBOX.png';
import { ReactComponent as Arrow} from '../../assets/arrow.svg';
import { GoSearch } from 'react-icons/go';
//Link protótipo https://xd.adobe.com/view/2baa7041-64ea-417a-73cc-67e46a20d339-5d9b/?fullscreen

export default class Home extends Component{
    mensagem = () => {
        let txt = document.querySelector('.txt');
        console.log(txt.value);
    }

    // isVisible = "hidden";

    showLogin = () => {
        let box = document.querySelector('#login');
        let classValue = box.getAttribute('class');
        console.log(box.getAttribute('class'));
        
        if(classValue == 'sc-htoDjs kKIlVH loginBox'){
            classValue += ' shown';
            console.log('entrou + ' + box.getAttribute('class'));
        }else{
            classValue = 'sc-htoDjs kKIlVH loginBox';
            console.log('entrou - ' + box.getAttribute('class'));
        }
        console.log('FIM ' + box.getAttribute('class'));
        box.setAttribute('class', classValue);
    }

    render(){
        return(
            <Container>
                <HomeHeader>
                    <img className="logo" src={logoBOX} alt="logo" />
                    <Nav>
                        <NavLinks>
                            <li className ="register"><a href="#">Cadastro</a></li>
                            <li>
                                <button className="buttonLogin" onClick={this.showLogin}><a href="#">Login</a>
                                <LoginBox id="login" className="loginBox">
                                    <Arrow className="arrowDown"/>
                                    <div className="box">
                                        <div className="loginInput"><input placeholder="username"/></div>
                                        <div className="loginInput"><input placeholder="password"/></div>
                                    </div>
                                </LoginBox>
                                </button>
                            </li>
                        </NavLinks>
                        
                        <ProfileImg src="https://api.adorable.io/avatars/285/orange.png"/>
                    </Nav>
                </HomeHeader>
                <HomeBody>
                    <div className="label">
                        <Title>Qual a sua dúvida?</Title>
                    </div>
                    <div className="input">
                        <Input className="txt" type="text"/><GoSearch className="sButton" onClick={this.mensagem}/>
                    </div>
                </HomeBody>
            </Container>
        );
    }
};