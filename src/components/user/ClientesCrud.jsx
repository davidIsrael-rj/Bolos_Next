import React, { Component } from "react";
import Main from "../template/Main";

const headerProps ={
    icon: 'address-card',
    title: 'Clientes',
    subtitle:'Cadastro de Clientes : Incluir, Listar, Alterar e Excluir!!!'
}
export default class ClientesCrud extends Component{
    render(){
        return (
            <Main {...headerProps}>
                <h1>Clientes</h1>
            </Main>
        )
    }
}