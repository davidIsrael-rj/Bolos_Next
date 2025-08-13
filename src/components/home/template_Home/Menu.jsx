import styles from '../Home.module.css'

export default function Menu() {
    return (
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
    )
}