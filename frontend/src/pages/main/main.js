import React, { Component } from 'react';
import { Container, MainBody } from './styles';
import Header from '../../components/header/header';
import Card from '../../components/cards/card';
import Tag from '../../components/tag/tag';

export default class Main extends Component{
    render(){
        return(
            <Container>
                <Header />
                <MainBody>
                    <Tag name="Teste de Título"/>
                    <div className="content">
                        <Card title="Título 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mattis velit. Donec quis risus sed lectus tempus eleifend. Maecenas sed pretium metus, vitae mattis." avaliation="13"></Card>
                        <Card title="Título 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mattis velit. Donec quis risus sed lectus tempus eleifend. Maecenas sed pretium metus, vitae mattis." avaliation="13"></Card>
                        <Card title="Título 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mattis velit. Donec quis risus sed lectus tempus eleifend. Maecenas sed pretium metus, vitae mattis." avaliation="13"></Card>
                        <Card title="Título 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mattis velit. Donec quis risus sed lectus tempus eleifend. Maecenas sed pretium metus, vitae mattis." avaliation="13"></Card>
                        <Card title="Título 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mattis velit. Donec quis risus sed lectus tempus eleifend. Maecenas sed pretium metus, vitae mattis." avaliation="13"></Card>
                        <Card title="Título 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mattis velit. Donec quis risus sed lectus tempus eleifend. Maecenas sed pretium metus, vitae mattis." avaliation="13"></Card>
                        <Card title="Título 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mattis velit. Donec quis risus sed lectus tempus eleifend. Maecenas sed pretium metus, vitae mattis." avaliation="13"></Card>
                        <Card title="Título 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mattis velit. Donec quis risus sed lectus tempus eleifend. Maecenas sed pretium metus, vitae mattis." avaliation="13"></Card>
                    </div>
                </MainBody>
            </Container>
        );
    }
}