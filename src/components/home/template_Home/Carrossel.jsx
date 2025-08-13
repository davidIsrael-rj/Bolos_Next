import Image from "next/image";
import styles from '../Home.module.css'
import { useEffect, useRef, useState } from "react";
import bolo1 from '../../../assets/imgs/bolo_rosa1.jpg'
import bolo2 from '../../../assets/imgs/bolo_rosa2.jpg'
import bolo3 from '../../../assets/imgs/bolo_rosa3.jpg'
import bolo4 from '../../../assets/imgs/bolo_rosa4.jpg'

export default function Carrossel(props) {

    const [indiceAtual, setIndiceAtual] = useState(0);
    const indiceRef = useRef(indiceAtual);
    const intervaloRef = useRef(null);

    const imagens = [
        { src: bolo1, alt: 'Imagem 1' },
        { src: bolo2, alt: 'Imagem 2' },
        { src: bolo3, alt: 'Imagem 3' },
        { src: bolo4, alt: 'Imagem 4' },
    ];

    useEffect(() => {
        indiceRef.current = indiceAtual;
    }, [indiceAtual]);

    useEffect(() => {
        intervaloRef.current = setInterval(() => {
            setIndiceAtual((indiceRef.current + 1) % imagens.length);
        }, 3000);

        return () => clearInterval(intervaloRef.current);
    }, [imagens.length]);

    const handleAnterior = () => {
        setIndiceAtual((indiceAtual - 1 + imagens.length) % imagens.length);
    };

    const handleProximo = () => {
        setIndiceAtual((indiceAtual + 1) % imagens.length);
    };

    return (

        < div className={styles.carrossel} >
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
        </div >

    )
}