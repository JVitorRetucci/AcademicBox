import React, { Component } from 'react';
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
        
        const response = await api.post(`searchContents`, {
          titulo_pesquisa: localStorage.getItem("search"),
        });

        console.log(response);

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
                <Header history={this.props.history}/>
                <MainBody>
                    <Tag name={localStorage.getItem('search')}/>
                    <div className="content">
                        {contents.map( content => (
                            <Card key={content._id} to={`/contents/${content._id}`} title={content.material_titulo} description={content.material_descricao} avaliation={content.material_avaliacao}/>
                        ))}
                    </div>
                </MainBody>
            </Container>
        );
    }
}