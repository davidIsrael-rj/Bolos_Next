import Main from "../template/Main";
import React, { Component } from "react";

const headerProps = {
    icon: 'birthday-cake',
    title: 'Bolos',
    subtitle: 'Cadastro de Bolos: Incluir, Listar, Alterar e Excluir!!!'
}

const baseUrl = 'http://localhost:3001/bolos'

const initialState ={
    bolos:{name:'', recheio:'', preco:''},
    list:[]
}


export default class BolosCrud extends Component {

    state ={...initialState}
    

    render() {
        return (
            <Main {...headerProps}>
                <h1>Bolos</h1>
            </Main>
        )
    }
}