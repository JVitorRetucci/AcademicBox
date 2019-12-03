import React, { Component } from 'react';
import Header from "../../components/header/header";
import { Container, Comments, MainBody } from "./styles";
import { ReactComponent as Like } from "../../assets/like icon.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import api from '../../services/api';



export default class Content extends Component {
  state = {
    content: {}
  }

  async componentDidMount(){
    const { id } = this.props.match.params;

    const response = await api.get(`/contents/${id}`);

    this.setState({ content: response.data });
  }

  render(){
  const { content } = this.state;

  return (
    <Container>
      <Header></Header>
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
              <li>
                <User /> Comentario muito louco mesmo
              </li>
              <li>
                <User /> Comentario muito louco mesmo
              </li>
              <li>
                <User /> Comentario muito louco mesmo
              </li>
              <li>
                <User /> Comentario muito louco mesmo
              </li>
            </ul>
          </Comments>
      </MainBody>
    </Container>
  );
  }
}
