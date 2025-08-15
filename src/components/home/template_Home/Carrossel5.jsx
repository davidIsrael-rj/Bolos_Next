import Image from 'next/image';
import bolo1 from '../../../assets/imgs/bolo_rosa1.jpg';
import bolo2 from '../../../assets/imgs/bolo_rosa2.jpg';
import bolo3 from '../../../assets/imgs/bolo_rosa3.jpg';
import bolo4 from '../../../assets/imgs/bolo_rosa4.jpg';
import styles from './Carrosel5.module.css';

export default function Carrossel5({ largura=150, altura = 100, velocidade = 30 }) {
  // imagens originais
  const imagens = [bolo1, bolo2, bolo3, bolo4];

  // duplicamos as imagens para criar loop contínuo
  const imagensDuplicadas = [...imagens, ...imagens];

  return (
    <div className={styles.carrossel}>
      <div
        className={styles.track}
        style={{ animationDuration: `${velocidade}s` }}
      >
        {imagensDuplicadas.map((src, i) => (
          <div key={i} className={styles.item} style={{ width: largura ,height: altura }}>
            <Image
              src={src}
              alt={`img-${i}`}
              width={largura}
              height={altura}
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
