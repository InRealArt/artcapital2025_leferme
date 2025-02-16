import Image from 'next/image';
import styles from './ImageGrid.module.scss';

export default function ImageGrid() {
  const images = [
    'boyer1.jpg',
    'boyer2.jpg',
    'boyer3.jpg',
    'boyer4.jpg',
    'boyer5.jpg',
    'boyer6.jpg', 
  ];

  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image
            src={`/img/heroSection/${image}`}
            alt={`Œuvre d'art de Monique Laville - Collection 2025 - Pièce ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}