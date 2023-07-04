"use client"
import Image from 'next/image'
import styles from './page.module.css';
import kokushibo from '../utils/kokushibo.jpg';
import ButtonCustom from '@/components/button/button';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.texts}>
        <h1>Demon Slayers</h1>
        <p>The best anime movie</p>
        <ButtonCustom text={"See more"} url={"/portfolio"}/>
      </div>
      <Image className={styles.img} src={kokushibo} alt='kokushibo'/>
    </div>
  )
}
