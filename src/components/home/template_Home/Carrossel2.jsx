import Image from "next/image";
import styles from './Carrosel.module.css'
import { useEffect, useState } from "react";
import bolo1 from '../../../assets/imgs/bolo_rosa1.jpg'
import bolo2 from '../../../assets/imgs/bolo_rosa2.jpg'
import bolo3 from '../../../assets/imgs/bolo_rosa3.jpg'
import bolo4 from '../../../assets/imgs/bolo_rosa4.jpg'

export default function Carrossel(props) {
const [translateX, setTranslateX] = useState(0);
  const imagens = [
    { src: bolo1, alt: 'Imagem 1' },
    { src: bolo2, alt: 'Imagem 2' },
    { src: bolo3, alt: 'Imagem 3' },
    { src: bolo4, alt: 'Imagem 4' },
    { src: bolo1, alt: 'Imagem 1' },
    { src: bolo2, alt: 'Imagem 2' },
    { src: bolo3, alt: 'Imagem 3' },
    { src: bolo4, alt: 'Imagem 4' },
    { src: bolo1, alt: 'Imagem 1' },
    { src: bolo2, alt: 'Imagem 2' },
    { src: bolo3, alt: 'Imagem 3' },
    { src: bolo4, alt: 'Imagem 4' },
    { src: bolo1, alt: 'Imagem 1' },
    { src: bolo2, alt: 'Imagem 2' },
    { src: bolo3, alt: 'Imagem 3' },
    { src: bolo4, alt: 'Imagem 4' },
  ]

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTranslateX((prevTranslateX) => prevTranslateX - 1);
      if (translateX < -imagens.length * 25) {
        setTranslateX(0);
      }
    }, 300);
    return () => clearInterval(intervalo);
  }, [translateX, imagens.length]);

  return (
    <div className={styles.carrossel}>
      <div className={styles.carrosselItens} style={{ transform: `translateX(${translateX}%)` }}>
        {imagens.map((imagem, indice) => (
          <div key={indice} className={styles.carrosselItem}>
            <Image className={styles.imag} src={imagem.src} alt={imagem.alt} />
          </div>
        ))}
        {imagens.map((imagem, indice) => (
          <div key={indice + imagens.length} className={styles.carrosselItem}>
            <Image className={styles.imag} src={imagem.src} alt={imagem.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}