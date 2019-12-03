import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Title, HomeHeader, ProfileImg, Nav, NavLinks, HomeBody, Container, Input, LoginBox } from './styles';
import logoBOX from '../../assets/logoBOX.png';
import { ReactComponent as Arrow} from '../../assets/arrow.svg';
import { ReactComponent as User} from '../../assets/user.svg';
import { ReactComponent as Lock} from '../../assets/password.svg';
import { GoSearch } from 'react-icons/go';
//Link protótipo https://xd.adobe.com/view/2baa7041-64ea-417a-73cc-67e46a20d339-5d9b/?fullscreen

export default class Home extends Component{
    componentDidMount(){
        let box = document.querySelector('#login');
        console.log(box.getAttribute('class'));
    }
    
    mensagem = () => {
        let txt = document.querySelector('.txt');
        console.log(txt.value);
    }

    showLogin = () => {
        let box = document.querySelector('#login');
        let classValue = box.getAttribute('class');
        console.log(box.getAttribute('class'));
        
        if(!classValue.includes('shown')){
            classValue += " shown";
            console.log('entrou +: ' + classValue);
        }else{
            classValue = classValue.slice(0,classValue.indexOf(' shown'));
            console.log('entrou -: ' + classValue);
        }
        console.log('FIM: ' + classValue);
        box.setAttribute('class', classValue);
        console.log('ATRIBUTO REAL: ' + box.getAttribute('class'));
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
                                <button className="buttonLogin" onClick={this.showLogin}>
                                <a href="#login">Login</a>
                                </button>
                                <LoginBox id="login" className="loginBox">
                                    <Arrow className="arrowDown"/>
                                    <div className="box">
                                        <div className="loginInput">
                                            <User className="myIcon"/>
                                            <input placeholder="username"/>
                                        </div>
                                        <div className="loginInput">
                                            <Lock className="myIcon"/>
                                            <input placeholder="password" type="password"/>
                                        </div>
                                        <button>Continuar ></button>
                                    </div>
                                </LoginBox>
                            </li>
                        </NavLinks>
                        
                        {/* <ProfileImg src="https://api.adorable.io/avatars/285/orange.png"/> */}
                        <ProfileImg><User /></ProfileImg>
                    </Nav>
                </HomeHeader>
                <HomeBody>
                    <div className="label">
                        <Title>Qual a sua dúvida?</Title>
                    </div>
                    <div className="input">
                        <Input className="txt" type="text"/>
                        <Link to="/main"><GoSearch className="sButton" onClick={this.mensagem}/></Link>
                    </div>
                </HomeBody>
            </Container>
        );
    }
};