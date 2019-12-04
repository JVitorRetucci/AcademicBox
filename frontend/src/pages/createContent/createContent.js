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
      title: "",
      message: "",
      link: "",
      categoria: "Documentação",
      materia: "1",
      subjects: []
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleChangeLink = this.handleChangeLink.bind(this);
    this.handleChangeCategoria = this.handleChangeCategoria.bind(this);
    this.handleChangeMateria = this.handleChangeMateria.bind(this);
  }

  componentDidMount(){
        this.loadSubjects();
    }

    loadSubjects = async () => {
      api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
        "cool-jwt"
      )}`;
        
        const response = await api.get(`subjects`);

        console.log(response);

        const subjects = response.data;

        this.setState({ subjects });
    }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleChangeLink(event) {
    this.setState({ link: event.target.value });
  }

  handleChangeCategoria(event) {
    this.setState({ categoria: event.target.value });
  }

    handleChangeMateria(event) {
    this.setState({ materia: event.target.value });
  }

  handleDestroyStorage() {
    localStorage.removeItem("avatarId");
  }

  async sendContent(e) {
    e.preventDefault();

    api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
      "cool-jwt"
    )}`;
    const { title, message, link, categoria, materia } = this.state;

    if (localStorage.getItem("avatarId") === null) {
      const response = await api.post("/contents", {
        material_titulo: title,
        material_descricao: message,
        material_link: link,
        material_categoria: categoria,
        material_materia_id: materia
      });
      console.log(response);
    }
    else {
      const response = await api.post("/contents", {
        material_titulo: title,
        material_descricao: message,
        material_link: link,
        material_imagem_id: localStorage.getItem("avatarId"),
        material_categoria: categoria,
        material_materia_id: 1
      });
      console.log(response);
    }

    localStorage.removeItem("avatarId");
    window.location.reload(false);
  }

  render() {
    const { subjects } = this.state;
    console.log(this.state);
      console.log(AvatarInput);
    return (
      <Container>
        <Header history={this.props.history} />
        <MainBody>
          <SuggestionCard>
            <button>
              <Link to="/main" onClick={this.handleDestroyStorage}>
                <FaArrowCircleLeft />
              </Link>
            </button>
            <h1>Adicionar Conteúdo</h1>
          </SuggestionCard>
          <SuggestionForm onSubmit={e => this.sendContent(e)}>
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
            <input type="text" id="nome" onChange={this.handleChangeLink} />
            <label for="nome">Categoria</label>
            <select id="nome" onChange={this.handleChangeCategoria}>
              <option value="Documentação">Documentação</option>
              <option value="Livro">Livro</option>
              <option value="Curso">Curso</option>
              <option value="Vídeo">Vídeo</option>
              <option value="Palestras">Palestra</option>
            </select>
            <label for="nome">Matéria</label>
            <select id="nome" onChange={this.handleChangeMateria}>
              {subjects.map(subject => (
                <option key={subject._id} value={subject.id} to={`/subjects/${subject.id}`}>{subject.materia_nome}</option>
              ))}
            </select>
            <button type="submit">Enviar</button>
          </SuggestionForm>
        </MainBody>
      </Container>
    );
  }
}
