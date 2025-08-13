import React, { useEffect, useRef, useState } from "react";
import Main from "../template/Main";
import Image from "next/image";
import logo from '../../assets/imgs/logo.png'

import fone from '../../assets/imgs/fone.png'
import email from '../../assets/imgs/email.png'
import styles from './Home.module.css'
import Link from "next/link";
import QuemSomos from "./template_Home/QuemSomos";
import Parceiros from "./template_Home/Parceiros";
import Servicos from "./template_Home/Servicos";
import Carrossel from "./template_Home/Carrossel";

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

               <Carrossel/>

                <section id="contatos">
                    <div className={`container-fluid text-center ${styles.margin} ${styles.contatos}`}>
                        <a className="nav-link" href="#" onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); return false;">
                            <h3 className={styles.margin}>CONTATOS</h3>
                        </a>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>
                                        <a href="tel:2199999999" className={styles.telEmail}>Tel.: (21)9999-9999</a>
                                    </p>
                                    <p>
                                        <a href="tel:2199999999">
                                            <Image src={fone} width="90"
                                                style={{
                                                    borderRadius: '50%',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                    marginLeft: 'auto',
                                                    marginRight: 'auto',
                                                    maxWidth: 'none',
                                                }} />
                                        </a>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p>
                                        <a href="mailto:davidisrael.rj@gmail.com" className={styles.telEmail}>email : davidisrael.rj@gmail.com</a>
                                    </p>
                                    <p>
                                        <a href="mailto:davidisrael.rj@gmail.com" >
                                            <Image src={email} width="100"
                                                style={{
                                                    borderRadius: '50%',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                    marginLeft: 'auto',
                                                    marginRight: 'auto',
                                                    maxWidth: 'none',
                                                }} />
                                        </a>
                                    </p>
                                </div>
                            </div>

                        </div>


                    </div>

                </section>
                <footer className={`container-fluid text-center ${styles.bgFooter} ${styles.margin}`}>
                    <p>Desenvolvido por David Santos</p>
                </footer>
            </div>
        </Main>
    )
}