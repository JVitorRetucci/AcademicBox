import React from 'react';
import Header from "../../components/header/header";
import { Container, Comments, MainBody } from "./styles";
import { ReactComponent as Like } from "../../assets/like icon.svg";
import { ReactComponent as User } from "../../assets/user.svg";



export default function content() {
  return (
    <Container>
      <Header></Header>
        <MainBody>
          <h1>Titulo</h1>
          <h2>Titulo Conteudo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            eligendi quae modi sed porro. Perferendis facere aliquid quo velit,
            vel quisquam odio libero minus saepe, ipsum, aut ad voluptatibus!
            Tempore?
          </p>
          <div>
            <a href="#link">Link</a>
            <div>
              <div>
                <Like /> 19
              </div>
              <div>
                <Like /> 11
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
