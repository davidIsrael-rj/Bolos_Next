import Image from "next/image";
import styles from '../Home.module.css'
import fone from '../../../assets/imgs/fone.png'
import email from '../../../assets/imgs/email.png'

export default function Contatos(props) {
    return (
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
    )
}