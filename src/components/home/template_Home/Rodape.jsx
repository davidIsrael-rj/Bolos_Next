import styles from '../Home.module.css'
export default function Rodape() {
    return (
        <footer className={`container-fluid text-center ${styles.bgFooter} ${styles.margin}`}>
            <p>Desenvolvido por David Santos</p>
        </footer>
    )
}