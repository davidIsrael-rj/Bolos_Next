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

    clear() {
        this.setState({ bolos: initialState.bolos })
    }

    save() {
        const bolos = this.state.bolos
        const method = bolos.id ? 'put' : 'post'
        const url = bolos.id ? `${baseUrl}/${bolos.id}` : baseUrl
        axios[method](url, bolos)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ bolos: initialState.bolos, list })
            })
    }

    getUpdateList(bolos, add = true) {
        const list = this.state.list.filter(b => b.id !== bolos.id)
        if (add) list.unshift(bolos)
        return list
    }



    render() {
        return (
            <Main {...headerProps}>
                <h1>Bolos</h1>
            </Main>
        )
    }
}