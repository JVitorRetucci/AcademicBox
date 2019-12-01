import React, { Component } from "react";
import { Container, MainBody, SuggestionCard, SuggestionForm } from "./styles";
import Header from "../../components/header/header";
import { FaArrowCircleLeft } from "react-icons/fa";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header />
        <MainBody>
          <SuggestionCard>
            <button><FaArrowCircleLeft /></button>
            <h1>Sugestões</h1>
          </SuggestionCard>
          <SuggestionForm>
            <label for="nome">Nome</label>
            <input type="text" id="nome" />
            <label for="email">E-mail</label>
            <input type="email" id="email" />
            <label for="telefone">Assunto</label>
            <input type="text" id="telefone" />
            <label for="mensag">Mensagem</label>
            <textarea id="mensag"></textarea>
            <button type="submit" class="botao-verde">Enviar</button>
          </SuggestionForm>
        </MainBody>
      </Container>
    );
  }
}
