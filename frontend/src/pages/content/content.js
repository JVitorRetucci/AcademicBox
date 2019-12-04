import React, { Component } from 'react';
import Header from "../../components/header/header";
import { Container, Comments, MainBody, SuggestionForm } from "./styles";
import { ReactComponent as Like } from "../../assets/like icon.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import api from '../../services/api';



export default class Content extends Component {
  constructor(props){
    super(props);
      this.state = {
        content: {},
        comment: [],
        message: ""
      };

      this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  async componentDidMount(){
    const { id } = this.props.match.params;

    const response = await api.get(`/contents/${id}`);

    this.setState({ 
      content: response.data.content,
      comment: response.data.comment
     });
  }

    handleChangeMessage(event){
    this.setState({ message: event.target.value });
  }

  async sendComment(e){
    const { id } = this.props.match.params;

    e.preventDefault();
    api.defaults.headers.Authorization = `Bearer ${localStorage.getItem('cool-jwt')}`;
    const {message} = this.state;

    const response = await api.post(`/comments/${id}`, {
      comentario_texto: message
    });

    console.log(response);
    window.location.reload(false);
  }

  render(){
  const { content } = this.state;
  const { comment } = this.state;

  return (
    <Container>
      <Header history={this.props.history}></Header>
      <MainBody>
        <h1>{content.material_titulo}</h1>
        <p>{content.material_descricao}</p>
        <div>
          <a href="#link">{content.material_link}</a>
          <div className="likes">
            <div>
              <Like className="like" />
            </div>
            <span>{content.material_avaliacao}</span>
            <div className="dislike">
              <Like />
            </div>
          </div>
        </div>
        <Comments>
          <h2>Comentários</h2>
          <ul>
            {comment.map(comment => (
              <li key={comment.id}>
                <User /> <span>{comment.comentario_texto}</span>
              </li>
            ))}
          </ul>
          <SuggestionForm onSubmit={e => this.sendComment(e)}>
            <label for="comentario">Enviar Comentario</label>
            <textarea
              id="comentario"
              onChange={this.handleChangeMessage}
            ></textarea>
            <button type="submit">Enviar</button>
          </SuggestionForm>
        </Comments>
      </MainBody>
    </Container>
  );
  }
}
