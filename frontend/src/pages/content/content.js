import React, { Component } from 'react';
import Header from "../../components/header/header";
import { Container, Comments, MainBody } from "./styles";
import { ReactComponent as Like } from "../../assets/like icon.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import api from '../../services/api';



export default class Content extends Component {
  state = {
    content: {},
    comment: []
  }

  async componentDidMount(){
    const { id } = this.props.match.params;

    const response = await api.get(`/contents/${id}`);

    this.setState({ 
      content: response.data.content,
      comment: response.data.comment
     });
  }

  render(){
  const { content } = this.state;

  return (
    <Container>
      <Header history={this.props.history}></Header>
        <MainBody>
          <h1>{content.material_titulo}</h1>
          <p>
            {content.material_descricao}
          </p>
          <div>
            <a href="#link">{content.material_link}</a>
            <div>
              <div>
                <Like /> {content.material_avaliacao}
              </div>
              <div>
                <Like />
              </div>
            </div>
          </div>
          <Comments>
            <h2>Comentários</h2>
            <ul>
              {comment.map( comment => (
                <li key={comment.id}>
                <User /> {comment.comentario_texto}
                </li>
              ))}
              {/* <li>
                <User /> Conteudo muito louco mesmo
              </li>
              <li>
                <User /> Conteudo muito legal
              </li>
              <li>
                <User /> Conteudo complexo
              </li>
              <li>
                <User /> Comentario muito louco mesmo
              </li> */}
            </ul>
          </Comments>
      </MainBody>
    </Container>
  );
  }
}
