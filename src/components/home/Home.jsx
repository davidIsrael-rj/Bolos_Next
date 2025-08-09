import React, { useEffect, useState } from "react";
import Main from "../template/Main";
import Image from "next/image";
import logo from '../../assets/imgs/logo.png'
import bolo1 from '../../assets/imgs/bolo_rosa1.jpg'
import bolo2 from '../../assets/imgs/bolo_rosa2.jpg'
import bolo3 from '../../assets/imgs/bolo_rosa3.jpg'
import bolo4 from '../../assets/imgs/bolo_rosa4.jpg'
import fone from '../../assets/imgs/fone.png'
import email from '../../assets/imgs/email.png'
import styles from './Home.module.css'
import Link from "next/link";

export default function Home(props) {


    const [indiceAtual, setIndiceAtual] = useState(0);
    const imagens = [
        { src: bolo1, alt: 'Imagem 1' },
        { src: bolo2, alt: 'Imagem 2' },
        { src: bolo3, alt: 'Imagem 3' },
        { src: bolo4, alt: 'Imagem 4' },
    ];

    const handleAnterior = () => {
        setIndiceAtual((indiceAtual - 1 + imagens.length) % imagens.length);
    };

    const handleProximo = () => {
        setIndiceAtual((indiceAtual + 1) % imagens.length);
    };
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
                <section id="quemsomos">
                    <div className={`container-fluid text-center ${styles.margin} ${styles.quemSomos}`}>
                        <a className="nav-link" href="#bemVindo">
                            <h3 className={styles.margin}>Quem Somos</h3>
                        </a>
                        <Image
                            src={logo}
                            style={{
                                borderRadius: '50%',
                                objectFit: 'cover',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                maxWidth: 'none',
                                height: '200px',
                                width: '200px',
                                boxShadow: '0px 0px 10px 5px rgba(218, 112, 214, 0.7), 0px 0px 40px 5px rgba(255, 0, 255, 0.3)'
                            }}
                        />
                        <h3 className="mt-5">Somos um time comprometido com os resultados, para te ajudar a recomeçar com seu negócio.</h3>
                    </div>
                </section>
                <section id="parceiros">
                    <div className={`container-fluid text-center ${styles.margin} ${styles.parceiros}`}>
                        <a className="nav-link" href="#" onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); return false;">
                            <h3 className={styles.margin}>PARCEIROS</h3>
                        </a>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <a className="nav-link" href="#bemVindo">
                                        <Image src={logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_self">
                                        <Image src={logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_top">
                                        <Image src={logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_top">
                                        <Image src={logo} width="50%" />
                                    </a>
                                </div>

                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-3">
                                    <a className="nav-link" href="#bemVindo">
                                        <Image src={logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_self">
                                        <Image src={logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_top">
                                        <Image src={logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_top">
                                        <Image src={logo} width="50%" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section id="servicos">
                    <div className={`container-fluid text-center ${styles.margin} ${styles.servicos}`}>
                        <a className="nav-link" href="#" onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); return false;">
                            <h3 className={styles.margin}>SERVIÇOS</h3>
                        </a>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <p>Quem ainda não tem, pode começar justamente pelos nossos aplicativos.</p>
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

                {/* Carrossel */}
                <div className={styles.carrossel}>
                    <div className={styles.carrosselItens}>
                        {imagens.map((imagem, indice) => (
                            <div key={indice} className={`${styles.carrosselItem} ${indice === indiceAtual ? styles.active : ''}`} >
                                <Image className={styles.carrosselItemImg} src={imagem.src} alt={imagem.alt} />
                            </div>
                        ))}
                    </div>
                    <button className={styles.carrosselAnterior} onClick={handleAnterior}> &#10094; </button>
                    <button className={styles.carrosselProximo} onClick={handleProximo}> &#10095; </button>
                    <div className={styles.carrosselPaginacao}>
                        {imagens.map((imagem, indice) => (
                            <span key={indice} className={`${styles.carrosselPagina} ${indice === indiceAtual ? styles.active : ''}`} onClick={() => setIndiceAtual(indice)} />
                        ))}
                    </div>
                </div>


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