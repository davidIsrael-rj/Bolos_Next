import React, { Component } from "react";
import Main from "../template/Main";
import axios from "axios";
import clientes from "@/pages/clientes";

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

    state = { ...initialState }

    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    load(clientes) {
        this.setState({ clientes })
    }

    remove(clientes) {
        axios.delete(`${baseUrl}/${clientes.id}`).then(resp => {
            const list = this.getUpdatedList(clientes, false)
            this.setState({ list })
        })
    }

    clear() {
        this.setState({ clientes: initialState.clientes })
    }

    save() {
        const clientes = this.state.clientes
        const method = clientes.id ? 'put' : 'post'
        const url = clientes.id ? `${baseUrl}/${clientes.id}` : baseUrl
        axios[method](url, clientes)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ clientes: initialState.clientes, list })
            })
    }

    getUpdatedList(clientes, add = true) {
        const list = this.state.list.filter(c => c.id !== clientes.id)
        if (add) list.unshift(clientes)
        return list
    }

    updateField(event) {
        const clientes = { ...this.state.clientes }
        clientes[event.target.name] = event.target.value
        this.setState({ clientes })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-7 col-sm-12">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.clientes.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Nome..." />
                        </div>
                    </div>
                    <div className="col-7 col-md-10">
                        <div className="form-group">
                            <label>Endereço</label>
                            <input type="text" className="form-control"
                                name="endereco"
                                value={this.state.clientes.endereco}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Endereço" />
                        </div>
                    </div>
                    <div className="col-7 col-md-2">
                        <div className="form-group">
                            <label>Numero</label>
                            <input type="text" className="form-control"
                                name="numero"
                                value={this.state.clientes.numero}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Numero" />
                        </div>
                    </div>
                    <div className="col-7 col-md-4">
                        <div className="form-group">
                            <label>Bairro</label>
                            <input type="text" className="form-control" 
                                name="bairro"
                                value={this.state.clientes.bairro}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Bairro"/>
                        </div>
                    </div>
                    <div className="col-7 col-md-4">
                        <div className="form-group">
                            <label>Municipio</label>
                            <input type="text" className="form-control" 
                            name="municipio"
                            value={this.state.clientes.municipio}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o Municipio"/>
                        </div>
                    </div>
                    <div className="col-7 col-md-4">
                        <div className="form-group">
                            <label>Estado</label>
                            <input type="text" className="form-control" 
                            name="estado"
                            value={this.state.clientes.estado}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o Estado"/>

                        </div>
                    </div>
                </div>
                <hr />
                <dir className="row">
                    <div className="col-6 col-sm-12 col-md-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </dir>
            </div>
        )
    }
    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Numero</th>
                        <th>Bairro</th>
                        <th>Município</th>
                        <th>Estado</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    renderRows() {
        return this.state.list.map(clientes => {
            return (
                <tr key={clientes.id}>
                    <td>{clientes.id}</td>
                    <td>{clientes.name}</td>
                    <td>{clientes.endereco}</td>
                    <td>{clientes.numero}</td>
                    <td>{clientes.bairro}</td>
                    <td>{clientes.municipio}</td>
                    <td>{clientes.estado}</td>
                    <td>
                        <button className="btn btn-warning"
                        onClick={() => this.load(clientes)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(clientes)}>
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