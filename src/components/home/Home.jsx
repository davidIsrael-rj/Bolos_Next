import React, { useEffect, useRef, useState } from "react";
import Main from "../template/Main";
import Image from "next/image";
import logo from '../../assets/imgs/logo.png'


import styles from './Home.module.css'
import Link from "next/link";
import QuemSomos from "./template_Home/QuemSomos";
import Parceiros from "./template_Home/Parceiros";
import Servicos from "./template_Home/Servicos";
import Carrossel from "./template_Home/Carrossel";
import Contatos from "./template_Home/Contatos";
import Rodape from "./template_Home/Rodape";

export default function Home(props) {



    return (
        <Main icon="home" title="Início"
            subtitle="Bolos feitos com carinhos" >
            <div id="bemVindo" className="display-4">Bem Vindo!</div>
            <hr />
            <div className={styles.conteudo}>
                <nav className={`navbar-expand-lg navbar-light ${styles.margin} ${styles.navbar}`}>
                    <div id="navbarNav" className="d-flex justify-content-center w-100" >
                        <ul className="navbar-nav d-flex justify-content-evenly w-100">
                            <li className="nav-item">
                                <a className="nav-link" href="#quemsomos">Quem Somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#parceiros">Parceiros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#servicos">Serviços</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contatos">Contatos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <QuemSomos
                    titulo={"Quem Somos"}
                    logo={logo}
                    subt={"Somos um time comprometido com os resultados, para te ajudar a recomeçar com seu negócio."} />
                <Parceiros
                    titulo={"PARCEIROS"}
                    logo={logo} />
                <Servicos
                    titulo={"SERVIÇOS"}
                    logo={logo}
                />
                <Carrossel />
                <Contatos />
               <Rodape/>
            </div>
        </Main>
    )
}