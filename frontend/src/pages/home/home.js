import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Title, HomeHeader, ProfileImg, Nav, NavLinks, HomeBody, Container, Input, LoginBox } from './styles';
import logoBOX from '../../assets/logoBOX.png';
import api from '../../services/api';
import { getJwt } from '../../helpers/jwt';
import { ReactComponent as Arrow} from '../../assets/arrow.svg';
import { ReactComponent as User} from '../../assets/user.svg';
import { ReactComponent as Lock} from '../../assets/password.svg';
import { GoSearch } from 'react-icons/go';
//Link protótipo https://xd.adobe.com/view/2baa7041-64ea-417a-73cc-67e46a20d339-5d9b/?fullscreen

export default class Home extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            username: '',
            password: '',
        }
    
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
        console.log(this.state.username);
      }
    
    handleChangePassword(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
    }
  
      async submit(e) {
        e.preventDefault();
        console.log(this.state);
        const response = await api
          .post("/sessions", {
            usuario_email: this.state.username,
            senha: this.state.password
          });
    
          const {token, user} = response.data;
    
    
          localStorage.setItem('cool-jwt', token);
          localStorage.setItem('logged-user', user.usuario_nome);
    
          console.log(token);
          console.log(user);
          window.location.reload(false);
      }
    
    search = () => {
        let txt = document.querySelector('.txt');
        if(txt.value !== ''){
            localStorage.setItem('search', txt.value);
        }else{
            localStorage.setItem('search', '...');
        }
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

    is

    render(){
        let jwt = getJwt();
        if(!jwt){
            return(
                <Container>
                    <HomeHeader>
                        <img className="logo" src={logoBOX} alt="logo" />
                        <Nav>
                            <NavLinks>
                                <li className ="register"><a href="/register">Cadastro</a></li>
                                <li>
                                    <button className="buttonLogin" onClick={this.showLogin}>
                                    <a href="#login">Login</a>
                                    </button>
                                    <LoginBox id="login" className="loginBox">
                                        <Arrow className="arrowDown"/>
                                        <form onSubmit={e => this.submit(e)}>
                                        <div className="box">
                                            <div className="loginInput">
                                                <User className="myIcon" />
                                                <input
                                                placeholder="username"
                                                onChange={this.handleChangeUsername}
                                                />
                                            </div>
                                            <div className="loginInput">
                                                <Lock className="myIcon" />
                                                <input
                                                placeholder="password"
                                                type="password"
                                                onChange={this.handleChangePassword}
                                                />
                                            </div>
                                            <button type="submit">Continuar ></button>
                                        </div>
                                    </form>
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
                            <Input className="txt" type="text" maxLength='100'/>
                            <Link to="/main"><GoSearch className="sButton" onClick={this.search}/></Link>
                        </div>
                    </HomeBody>
                </Container>
            );
        }else{
            return(
                <Container>
                    <HomeHeader>
                        <img className="logo" src={logoBOX} alt="logo" />
                        <Nav>
                            <NavLinks>
                                <a href="#">{localStorage.getItem("logged-user")}</a>
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
                            <Input className="txt" type="text" maxLength='100'/>
                            <Link to="/main"><GoSearch className="sButton" onClick={this.search}/></Link>
                        </div>
                    </HomeBody>
                </Container>
            );
        }
    }
};