import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';
import {ReactComponent as Cube} from '../../assets/academic_cube.svg';
import { getJwt } from '../../helpers/jwt';
import {
  Title,
  HomeHeader,
  ProfileImg,
  Nav,
  NavLinks,
  HomeBody,
  Input,
  LoginBox,
  SearchBar,
  AddContentButton,
  SearchContainer
} from "./styles";
import { ReactComponent as Lock } from "../../assets/password.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { GoSearch } from "react-icons/go";


export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
        username: '',
        password: '',
        user: {}
    }

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

    showLogin = () => {
        let box = document.querySelector("#login");
        let classValue = box.getAttribute("class");
        console.log(box.getAttribute("class"));

        if (!classValue.includes("shown")) {
            classValue += " shown";
            console.log("entrou +: " + classValue);
        } else {
            classValue = classValue.slice(
            0,
            classValue.indexOf(" shown")
            );
            console.log("entrou -: " + classValue);
        }
        console.log("FIM: " + classValue);
        box.setAttribute("class", classValue);
        console.log("ATRIBUTO REAL: " + box.getAttribute("class"));
    };

    search = () => {
      let txt = document.querySelector('.txt');
      if(txt.value !== ''){
          localStorage.setItem('search', txt.value);
      }else{
          localStorage.setItem('search', '...');
      }
    }

    change(e){
      this.setState({
          [e.target.name]: e.target.value
      });
    }

    submit(e){
      e.preventDefault();
      api.post('/sessions', {
          username: this.state.username,
          password: this.state.password
      }).then(res => {
          localStorage.setItem('cool-jwt', res.data.token);
          this.setState({ user: res.data.user });
      });
    }

    render() {
      let jwt = getJwt();
      if(!jwt) {     
        return (
          <Container>
            <Link to="/">
              <Cube className="cube" />
            </Link>

            <SearchContainer>
              <SearchBar>
                <Input className="txt" type="text" />
                <Link to="/main">
                  <GoSearch className="sButton" onClick={this.search} />
                </Link>
              </SearchBar>
              <AddContentButton>+</AddContentButton>
            </SearchContainer>

            <Nav>
              <NavLinks>
                <li className="register">
                  <a href="#">Cadastro</a>
                </li>
                <li>
                  <button className="buttonLogin" onClick={this.showLogin}>
                    <a href="#login">Login</a>
                  </button>
                  <LoginBox id="login" className="loginBox">
                    <Arrow className="arrowDown" />
                    <form onSubmit={ e => this.submit(e)}>
                      <div className="box">
                        <div className="loginInput">
                          <User className="myIcon" />
                          <input placeholder="username" onChange={ e => this.change(e)} value={this.state.username}/>
                        </div>
                        <div className="loginInput">
                          <Lock className="myIcon" />
                          <input placeholder="password" type="password" onChange={e => this.change(e)} value={this.state.password}/>
                        </div>
                        <button type="submit">Continuar ></button>
                      </div>
                    </form>
                  </LoginBox>
                </li>
              </NavLinks>

              {/* <ProfileImg src="https://api.adorable.io/avatars/285/orange.png"/> */}
              <ProfileImg>
                <User />
              </ProfileImg>
            </Nav>
          </Container>
        );
      }else{
        return(
          <Container>
              <Link to="/">
                <Cube className="cube" />
              </Link>

              <SearchContainer>
                <SearchBar>
                  <Input className="txt" type="text" />
                  <Link to="/main">
                    <GoSearch className="sButton" onClick={this.search} />
                  </Link>
                </SearchBar>
                <AddContentButton>+</AddContentButton>
              </SearchContainer>

              <Nav>
                <NavLinks>
                    <a href="#">{this.state.user.usuario_nome}</a>
                </NavLinks>
                <ProfileImg>
                  <User />
                </ProfileImg>
              </Nav>
            </Container>
        )
      }
    }
}

/*GrupoAB{senha1}*/