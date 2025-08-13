import Image from "next/image";
import styles from '../Home.module.css'

export default function Servicos(props) {
    return (
        <section id="servicos">
            <div className={`container-fluid text-center ${styles.margin} ${styles.servicos}`}>
                <a className="nav-link" href="#" onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); return false;">
                    <h3 className={styles.margin}>{props.titulo}</h3>
                </a>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <p>Quem ainda não tem, pode começar justamente pelos nossos aplicativos.</p>
                            <Image src={props.logo} width="100%" />
                        </div>
                        <div className="col-lg-4">
                            <p>E criamos os melhores site do mercado WEB, para te atender da melhor forma possivel.</p>
                            <Image src={props.logo} width="100%" />
                        </div>
                        <div className="col-lg-4">
                            <p>Melhor equipe para realizar o seu sonho, com muita criatividade e desempenho.</p>
                            <Image src={props.logo} width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}