import React, { Component } from "react";
import {
  Container,
  MainBody,
  SuggestionCard,
  SuggestionForm,
  ProfileImage
} from "./styles";
import Header from "../../components/header/header";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AvatarInput from "../../components/avatarInput/avatarInput";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      oldPassword: "",
      password: "",
      confirmPassword: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeOldPassword = this.handleChangeOldPassword.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeOldPassword(event) {
    this.setState({ oldPassword: event.target.value });
  }

    handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

    handleChangeConfirmPassword(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  async sendProfile(e) {
    e.preventDefault();
    const { email, name, oldPassword, password, confirmPassword } = this.state;

    const response = await api.put("/users", {
      usuario_nome: name,
      usuario_email: email,
      senha_antiga: oldPassword,
      senha: password,
      confirmar_senha: confirmPassword,
      usuario_id_avatar: localStorage.getItem("avatarId"),
    });

    console.log(response);
    localStorage.removeItem("avatarId");
    window.location.reload(false);
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <Header history={this.props.history} />
        <MainBody>
          <SuggestionCard>
            <button>
              <Link to="/main">
                <FaArrowCircleLeft />
              </Link>
            </button>
            <h1>Alterar Perfil</h1>
          </SuggestionCard>
          <SuggestionForm onSubmit={e => this.sendProfile(e)}>
            <label for="nome">Imagem de Perfil</label>
            <ProfileImage></ProfileImage>
            <label for="nome">Nome</label>
            <input type="text" id="nome" onChange={this.handleChangeName} />
            <label for="email">E-mail</label>
            <input type="email" id="email" onChange={this.handleChangeEmail} />
            <label for="old-password">Senha Antiga</label>
            <input
              type="password"
              id="old-password"
              onChange={this.handleChangeOldPassword}
            />
            <label for="password">Senha</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChangePassword}
            />
            <label for="confirm-password">Confirmar Senha</label>
            <input
              type="password"
              id="confirm-password"
              onChange={this.handleChangeConfirmPassword}
            />
            <button type="submit">Enviar</button>
          </SuggestionForm>
        </MainBody>
      </Container>
    );
  }
}
