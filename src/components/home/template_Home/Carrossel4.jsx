import Image from 'next/image';
import bolo1 from '../../../assets/imgs/bolo_rosa1.jpg';
import bolo2 from '../../../assets/imgs/bolo_rosa2.jpg';
import bolo3 from '../../../assets/imgs/bolo_rosa3.jpg';
import bolo4 from '../../../assets/imgs/bolo_rosa4.jpg';
import { useEffect, useRef, useState } from 'react';
import styles from './Carrosel4.module.css'
export default function Carrossel4({ largura = 150,altura = 100, velocidade = 1.5 }) {

  const imagens = [bolo1, bolo2, bolo3, bolo4];
  const trackRef = useRef(null);
  const posicao = useRef(0);
  const [imagensDuplicadas, setImagensDuplicadas] = useState(imagens);

   // animação contínua
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animacao;

    function mover() {
      posicao.current -= velocidade;
      track.style.transform = `translateX(${posicao.current}px)`;

      const primeiroItem = track.children[0];
      if (!primeiroItem) return;
      const larguraItem = primeiroItem.offsetWidth;

      if (posicao.current <= -larguraItem) {
        track.appendChild(primeiroItem);
        posicao.current += larguraItem;
      }

      animacao = requestAnimationFrame(mover);
    }

    animacao = requestAnimationFrame(mover);
    return () => cancelAnimationFrame(animacao);
  }, [velocidade, imagensDuplicadas]);

  return (
    <div className={styles.carrossel}>
      <div className={styles.track} ref={trackRef}>
        {imagensDuplicadas.map((src, i) => (
          <div
            key={i}
            className={styles.item}
            style={{ width: largura, height: altura }}
          >
            <Image
              src={src}
              alt={`img-${i}`}
              width={largura}
              height={altura}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
