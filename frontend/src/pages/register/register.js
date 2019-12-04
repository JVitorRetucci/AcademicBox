import React, { Component } from "react";
import { Container, MainBody, SuggestionCard, SuggestionForm } from "./styles";
import Header from "../../components/header/header";
import api from '../../services/api';

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
          name: '',
          email: '',
          password: ''
        };
    
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeSubject = this.handleChangePassword.bind(this);
      }
    
      handleChangeName(event){
        this.setState({ name: event.target.value });
      }
    
      handleChangeEmail(event){
        this.setState({ email: event.target.value });
      }
    
      handleChangePassword(event){
        this.setState({ password: event.target.value });
      }

      async sendRegister(e){
        e.preventDefault();
        const {name, email, password} = this.state;
    
        const response = await api.post('/users', {
          usuario_nome: name,
          usuario_email: email,
          senha: password
        })
    
        console.log(response);
        window.location.reload(false);
      }
    
    render(){
        return(
            <Container>
                <Header history={this.props.history}/>
                <MainBody>
                <SuggestionForm onSubmit={e => this.sendRegister(e)}>
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" onChange={this.handleChangeName} />
                    <label for="email">E-mail</label>
                    <input type="email" id="email" onChange={this.handleChangeEmail} />
                    <label for="password">Senha</label>
                    <input type="password" id="email" onChange={this.handleChangePassword} />
                    
                    <button type="submit">Enviar</button>
                </SuggestionForm>
                </MainBody>
            </Container>
        )
    }
}