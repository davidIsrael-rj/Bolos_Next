import React, { Component } from "react";
import Main from "../template/Main";
import axios from "axios";

const headerProps = {
    icon: 'address-card',
    title: 'Clientes',
    subtitle: 'Cadastro de Clientes : Incluir, Listar, Alterar e Excluir!!!'
}

const baseUrl = 'http://localhost:3001/clientes'

const initialState = {
    clientes: {
        name: "",
        endereco: "",
        numero: "",
        bairro: "",
        municipio: "",
        estado: ""
    },
    list: []
}

export default class ClientesCrud extends Component {

    state = {...initialState}

    componentDidMount(){
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                <h1>Clientes</h1>
            </Main>
        )
    }
}