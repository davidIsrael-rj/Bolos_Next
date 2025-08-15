import Image from 'next/image'
import bolo1 from '../../../assets/imgs/bolo_rosa1.jpg'
import bolo2 from '../../../assets/imgs/bolo_rosa2.jpg'
import bolo3 from '../../../assets/imgs/bolo_rosa3.jpg'
import bolo4 from '../../../assets/imgs/bolo_rosa4.jpg'
import styles from '../template_Home/Carrosel3.module.css'

const images = [
   bolo1,
   bolo2,
   bolo3,
   bolo4,
   bolo1,
   bolo2,
   bolo3,
   bolo4
  ]


const Carrossel3 = () => {
  // Duplica as imagens para o loop infinito
  const doubledImages = [...images, ...images];

  return (

    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {doubledImages.map((src, index) => (
          <div key={index} className={styles.carouselItem}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={100} // Ajuste a largura conforme necessário
              height={150} // Ajuste a altura conforme necessário
              layout="fixed"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrossel3;