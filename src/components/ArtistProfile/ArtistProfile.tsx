'use client'
import Image from 'next/image';
import styles from './ArtistProfile.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';

export default function ArtistProfile() {
  const { language, i18n } = useContext(I18nContext)
  return (
    <div className={styles.profile}>
      <div className={`${styles.content} ${styles.contentBackground}`}>

        <div className={styles.text}>
          <div className={styles.artistName}>{parse(i18n[language].artist.title)}</div>
          <div>{parse(i18n[language].artist.text1)}</div>
          <div>{parse(i18n[language].artist.text2)}</div>
        </div>
        <div className={styles.images}>
          <div className={styles.artistArtwork}>
            <Image src="/img/artistProfile/leferme1.png" 
              alt="Œuvre emblématique d'Adélaïde Leferme"  
              width={400} height={4500} style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.artistPhoto}>
            <Image src="/img/artistProfile/AdelaideLeferme.jpeg" 
              alt="Adélaïde Leferme - Artiste cotée - Expositions internationales - Représentée par InRealArt"  
              width={200} height={200} layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}