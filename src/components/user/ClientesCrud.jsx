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

    load(clientes){
        this.setState({clientes})
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
        return this.state.list.map(clientes =>{
            return(
                <tr key={clientes.id}>
                    <td>{clientes.id}</td>
                    <td>{clientes.name}</td>
                    <td>{clientes.endereco}</td>
                    <td>{clientes.numero}</td>
                    <td>{clientes.bairro}</td>
                    <td>{clientes.municipio}</td>
                    <td>{clientes.estado}</td>
                    <td>
                        <button className="btn btn-warning">
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2">
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
                {this.renderTable()}
            </Main>
        )
    }
}