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

    updateField(event) {
        const bolos = { ...this.state.bolos }
        bolos[event.target.name] = event.target.value
        this.setState({ bolos })
    }


    renderForm() {
        return (
            <div className="form">
                <dir className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.bolos.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Recheio</label>
                            <input type="text" className="form-control"
                                name="recheio"
                                value={this.state.bolos.recheio}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o recheio..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Preço</label>
                            <input type="text" className="form-control"
                                name="preco"
                                value={this.state.bolos.preco}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o preço..." />
                        </div>
                    </div>
                </dir>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Recheio</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(bolo => {
            return(
                <tr key={bolo.id}>
                    <td>{bolo.id}</td>
                    <td>{bolo.name}</td>
                    <td>{bolo.recheio}</td>
                    <td>{bolo.preco}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(bolo)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(bolo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}