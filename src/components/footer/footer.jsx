import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';
import kokushibo from '../../utils/kokushibo.jpg';

export default function Footer() {
  return (
    <div className={styles.footer}>
        <span>Contact me: kelvinward1010@gmail.com</span>
        <Image width={30} height={15} 
          src={kokushibo}
          alt='Kokushibo'
        />
    </div>
  )
}
