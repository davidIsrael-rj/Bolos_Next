import Image from 'next/image';
import bolo1 from '../../../assets/imgs/bolo_rosa1.jpg' 
import bolo2 from '../../../assets/imgs/bolo_rosa2.jpg'
import bolo3 from '../../../assets/imgs/bolo_rosa3.jpg'
import bolo4 from '../../../assets/imgs/bolo_rosa4.jpg'
import styles from '../template_Home/Carrosel4.module.css'
import { useEffect, useRef } from 'react'

export default function Carrossel4({
  largura = 300,
  altura = 200,
  velocidade = 0.5,
}) {
  const imagens = [bolo1, bolo2, bolo3, bolo4,bolo1, bolo2, bolo3, bolo4];
  const imagensDuplicadas = [...imagens, ...imagens, ...imagens];

  const trackRef = useRef(null);
  const posicao = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    let animacao;

    function mover() {
      posicao.current -= velocidade;
      track.style.transform = `translateX(${posicao.current}px)`;

      const primeiroItem = track.children[0];
      const larguraItem = primeiroItem.offsetWidth;

      if (posicao.current <= -larguraItem) {
        track.appendChild(primeiroItem);
        posicao.current += larguraItem;
      }

      animacao = requestAnimationFrame(mover);
    }

    animacao = requestAnimationFrame(mover);
    return () => cancelAnimationFrame(animacao);
  }, [velocidade]);

  return (
    <div className={styles.carrossel}>
      <div className={styles.track} ref={trackRef}>
        {imagens.map((src, i) => (
          <div
            key={i}
            className={styles.item}
            style={{
              width: `${largura}px`,
              height: `${altura}px`,
            }}
          >
            <Image
              src={src}
              alt={`img-${i}`}
              width={largura}
              height={altura}
              style={{ objectFit: "cover" }} // removi "fill"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
