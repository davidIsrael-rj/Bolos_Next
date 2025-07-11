import axios from "axios";
import Main from "../template/Main";
import React, { Component } from "react";
import { list } from "postcss";
import bolos from "@/pages/bolos";

const headerProps = {
    icon: 'birthday-cake',
    title: 'Bolos',
    subtitle: 'Cadastro de Bolos: Incluir, Listar, Alterar e Excluir!!!'
}

const baseUrl = 'http://localhost:3001/bolos'

const initialState = {
    bolos: { name: '', recheio: '', preco: '' },
    list: []
}


export default class BolosCrud extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    load(bolos) {
        this.setState({ bolos })
    }

    remove(bolos) {
        axios.delete(`${baseUrl}/${bolos.id}`).then(resp => {
            const list = this.getUpdateList(bolos, false)
            this.setState({ list })
        })
    }

    clear(){
        this.setState({bolos: initialState.bolos})
    }
    



    render() {
        return (
            <Main {...headerProps}>
                <h1>Bolos</h1>
            </Main>
        )
    }
}