import React, { Component } from "react";
import { Container, MainBody, SuggestionCard, SuggestionForm } from "./styles";
import Header from "../../components/header/header";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from '../../services/api';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeName(event){
    this.setState({ name: event.target.value });
  }

  handleChangeEmail(event){
    this.setState({ email: event.target.value });
  }

  handleChangeMessage(event){
    this.setState({ message: event.target.value });
  }

  async sendSuggestion(e){
    e.preventDefault();
    const {email, name, message} = this.state;

    const response = await api.post('/suggestionMail', {
      mail_address: email,
      mail_text: `Nome: ${name} \nMensagem: ${message}`
    })

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
            <h1>Sugestões</h1>
          </SuggestionCard>
          <SuggestionForm onSubmit={e => this.sendSuggestion(e)}>
            <label for="nome">Nome</label>
            <input type="text" id="nome" onChange={this.handleChangeName} />
            <label for="email">E-mail</label>
            <input type="email" id="email" onChange={this.handleChangeEmail} />
            <label for="mensag">Mensagem</label>
            <textarea
              id="mensag"
              onChange={this.handleChangeMessage}
            ></textarea>
            <button type="submit">Enviar</button>
          </SuggestionForm>
        </MainBody>
      </Container>
    );
  }
}
