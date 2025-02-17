import Image from 'next/image';
import styles from './ImageGrid.module.scss';

export default function ImageGrid() {
  const images = [
    'leferme1.png',
    'leferme2.png',
    'leferme3.png',
    'leferme4.png',
    'leferme5.png',
    'leferme6.png', 
  ];

  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image
            src={`/img/heroSection/${image}`}
            alt={`Œuvre d'art d'Adélaïde Leferme - Collection 2025 - Pièce ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}