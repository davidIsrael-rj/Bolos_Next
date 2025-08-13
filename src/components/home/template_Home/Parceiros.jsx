import Image from "next/image";
import styles from '../Home.module.css'

export default function Parceiros(props){
    return(
           <section id="parceiros">
                    <div className={`container-fluid text-center ${styles.margin} ${styles.parceiros}`}>
                        <a className="nav-link" href="#" onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); return false;">
                            <h3 className={styles.margin}>{props.titulo}</h3>
                        </a>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <a className="nav-link" href="#bemVindo">
                                        <Image src={props.logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_self">
                                        <Image src={props.logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_top">
                                        <Image src={props.logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_top">
                                        <Image src={props.logo} width="50%" />
                                    </a>
                                </div>

                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-3">
                                    <a className="nav-link" href="#bemVindo">
                                        <Image src={props.logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_self">
                                        <Image src={props.logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_top">
                                        <Image src={props.logo} width="50%" />
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#bemVindo" target="_top">
                                        <Image src={props.logo} width="50%" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
    )
}