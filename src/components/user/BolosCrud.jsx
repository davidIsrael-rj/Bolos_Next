import Main from "../template/Main";
import React, { Component } from "react";

const headerProps = {
    icon: 'birthday-cake',
    title: 'Bolos',
    subtitle: 'Cadastro de Bolos: Incluir, Listar, Alterar e Excluir!!!'
}
export default class BolosCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <h1>Bolos</h1>
            </Main>
        )
    }
}