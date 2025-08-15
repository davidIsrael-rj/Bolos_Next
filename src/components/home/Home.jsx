import React from "react";
import Main from "../template/Main";
import logo from '../../assets/imgs/logo.png'
import styles from './Home.module.css'
import QuemSomos from "./template_Home/QuemSomos";
import Parceiros from "./template_Home/Parceiros";
import Servicos from "./template_Home/Servicos";
import Carrossel from "./template_Home/Carrossel";
import Carrossel4 from "./template_Home/Carrossel4";
import Carrossel5 from "./template_Home/Carrossel5";
import Contatos from "./template_Home/Contatos";
import Rodape from "./template_Home/Rodape";
import Menu from "./template_Home/Menu";

export default function Home(props) {
    return (

            <Main icon="home" title="Início"
                subtitle="Bolos feitos com carinhos" >
                <div id="bemVindo" className="display-4">Bem Vindo!</div>
                <hr />
                <div className={styles.conteudo}>
                <Carrossel4 />
                <Carrossel5 />
                    <Menu />
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
                    {/* <Carrossel /> */}
                <Carrossel />
                    <Contatos />
                    <Rodape />
                </div>
            </Main>
    )
}