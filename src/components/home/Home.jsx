import React, { useEffect } from "react";
import Main from "../template/Main";
import Image from "next/image";
import logo from '../../assets/imgs/logo.png'
import styles from './Home.module.css'
import Link from "next/link";

export default function Home(props) {

    useEffect(() => {
        // Só roda no navegador
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (

        <Main icon="home" title="Início"
            subtitle="Bolos feitos com carinhos" >
            <div className="display-4">Bem Vindo!</div>
            <hr />
            <p className="mb-0">Loja de Bolos</p>
            <div className={styles.conteudo}>
                <nav className={`navbar navbar-expand-lg navbar-light ${styles.margin} ${styles.navbar}`}>
                    <Link className="navbar-brand" href="/">
                        <Image src={logo} width="200" alt="Logo" />
                    </Link>

                    {/* Botão de toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Itens colapsáveis */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
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
                <section id="quemsomos">
                    <div className={`container-fluid text-center ${styles.margin} ${styles.quemSomos}`}>
                        <h3 className={styles.margin}>Quem Somos</h3>
                        <Image src={logo} className="rounded-circle" width="400" height="400" />
                        <h3>Somos um time comprometido com os resultados, para te ajudar a recomeçar com seu negócio.</h3>
                    </div>
                </section>
                <section id="parceiros">
                    <div className={`container-fluid text-center ${styles.margin} ${styles.parceiros}`}>
                        <h3 className={styles.margin}>PARCEIROS</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <a href="https://digitalinnovation.one/" target="_blank">
                                        <Image src={logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="https://digitalinnovation.one/" target="_blank">
                                        <Image src={logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="https://digitalinnovation.one/" target="_blank">
                                        <Image src={logo} width="50%" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="servicos">
                    <div className={`container-fluid text-center ${styles.margin} ${styles.servicos}`}>
                        <h3 className={styles.margin}>SERVIÇOS</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <p>Quem ainda não tem, pode começar justamente pelos nossos aplicativos, para aumentar suas vendas.</p>
                                    <Image src={logo} width="100%" />
                                </div>
                                <div className="col-lg-4">
                                    <p>E criamos os melhores site do mercado WEB, para te atender da melhor forma possivel.</p>
                                    <Image src={logo} width="100%" />
                                </div>
                                <div className="col-lg-4">
                                    <p>Melhor equipe para realizar o seu sonho, com muita criatividade e desempenho.</p>
                                    <Image src={logo} width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contatos">
                    <div className={`container-fluid text-center ${styles.margin} ${styles.contatos}`}>
                        <h3 className={styles.margin}>CONTATOS</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>
                                        <a href="tel:2199999999" className={styles.telEmail}>Tel.: (21)9999-9999</a>
                                    </p>
                                    <p>
                                        <a href="tel:2199999999"><Image src={logo} width="100" /></a>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p>
                                        <a href="mailto:davidisrael.rj@gmail.com" className={styles.telEmail}>email : davidisrael.rj@gmail.com</a>
                                    </p>
                                    <p>
                                        <a href="mailto:davidisrael.rj@gmail.com" ><Image src={logo} width="100" /></a>
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