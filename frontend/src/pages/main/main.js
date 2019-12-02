import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, MainBody } from './styles';
import Header from '../../components/header/header';
import Card from '../../components/cards/card';
import Tag from '../../components/tag/tag';
import api from '../../services/api';

export default class Main extends Component{
    state = {
        contents: []
    }

    componentDidMount(){
        this.loadMaterials();
    }

    loadMaterials = async () => {
        
        const response = await api.get(`/contents/`);

        const contents = response.data;
        contents.sort(function(a,b){
            return b.material_avaliacao - a.material_avaliacao;
        })

        this.setState({contents});
    }

    render(){
        const { contents } = this.state;
        return(
            <Container>
                <Header />
                <MainBody>
                    <Tag name="Teste de Título"/>
                    <div className="content">
                        {contents.map( content => (
                            <Link key={content._id} to={`/contents/${content._id}`}>
                            <Card title={content.material_titulo} description={content.material_descricao} avaliation={content.material_avaliacao}/>
                            </Link>
                        ))}

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