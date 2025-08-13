import Image from "next/image";
import styles from '../Home.module.css'

export default function QuemSomos(props) {
    return (
        <section id="quemsomos">
            <div className={`container-fluid text-center ${styles.margin} ${styles.quemSomos}`}>
                <a className="nav-link" href="#bemVindo">
                    <h3 className={styles.margin}>{props.titulo}</h3>
                </a>
                <Image
                    src={props.logo}
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
                <h3 className="mt-5">{props.subt}</h3>
            </div>
        </section>
    )
}