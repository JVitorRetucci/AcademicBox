import React, { Component } from "react";
import { Container, MainBody, SuggestionCard, SuggestionForm } from "./styles";
import Header from "../../components/header/header";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AvatarInput from '../../components/avatarInput/avatarInput';

export default class CreateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  async sendSuggestion(e) {
    e.preventDefault();
    const { email, name, message } = this.state;

    const response = await api.post("/suggestionMail", {
      mail_address: email,
      mail_text: `Nome: ${name} \nMensagem: ${message}`
    });

    console.log(response);
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
            <h1>Adicionar Conteúdo</h1>
          </SuggestionCard>
          <SuggestionForm onSubmit={e => this.sendSuggestion(e)}>
            <label for="nome">Título</label>
            <input type="text" id="nome" onChange={this.handleChangeTitle} />
            <label for="mensag">Descrição</label>
            <textarea
              id="mensag"
              onChange={this.handleChangeMessage}
            ></textarea>
            <label for="nome">Anexo (Opicional)</label>
            <AvatarInput name="avatar_id"></AvatarInput>
            <label for="nome">Link (Opicional)</label>
            <input type="text" id="nome" onChange={this.handleLink} />
            <label for="nome">Categoria</label>
            <select id="nome" onChange={this.handleChangeCategoria}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <label for="nome">Matéria</label>
            <select id="nome" onChange={this.handleChangeMateria}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <button type="submit">Enviar</button>
          </SuggestionForm>
        </MainBody>
      </Container>
    );
  }
}
