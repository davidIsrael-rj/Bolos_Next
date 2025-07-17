import React, { Component } from "react";
import Main from "../template/Main";

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


    render() {
        return (
            <Main {...headerProps}>
                <h1>Clientes</h1>
            </Main>
        )
    }
}