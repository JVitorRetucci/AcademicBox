import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import {ReactComponent as Cube} from '../../assets/academic_cube.svg';
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

    render() {
        return (
          <Container>
            <Link to="/">
              <Cube className="cube" />
            </Link>

            <SearchContainer>
              <SearchBar>
                <Input className="txt" type="text" />
                <Link to="/main">
                  <GoSearch className="sButton" onClick={this.mensagem} />
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
                    <div className="box">
                      <div className="loginInput">
                        <User className="myIcon" />
                        <input placeholder="username" />
                      </div>
                      <div className="loginInput">
                        <Lock className="myIcon" />
                        <input placeholder="password" type="password" />
                      </div>
                      <button>Continuar ></button>
                    </div>
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
    }
}