"use client"
import { Typography } from 'antd'
import React from 'react';
import styles from './page.module.css';
import DemonSlayers1 from '../../../utils/demonslayers.jpg';
import DemonSlayers2 from '../../../utils/season2.jpg';
import DemonSlayers3 from '../../../utils/season3.jpg';
import Image from 'next/image';

const contentCards = [
  {
    category_id: 'season_one',
    title: 'Season One',
    img: DemonSlayers1,
    content: 'The first season adapts the first seven volumes (chapters 1–54) of the manga series, and it aired from April 6 to September 28, 2019, on Tokyo MX, GTV, GYT, BS11, and other channels.[2][3] Haruo Sotozaki directed the anime with scripts by the Ufotable staff. Yuki Kajiura and Go Shiina composed the music, and Akira Matsushima is the character designer. Hikaru Kondo is the producer.',
  },
  {
    category_id: 'season_two',
    title: 'Season Two',
    img: DemonSlayers2,
    content: ' The second season adapts volumes seven to eleven (chapters 55–97) of the manga series and ran for two continuous cours, with the first part titled Demon Slayer: Kimetsu no Yaiba – Mugen Train Arc, a seven-episode recompilation of "Mugen Train" as featured in the 2020 anime film, featuring new music and an all new original episode, which aired from October 10 to November 28, 2021.[1][2] The second part is titled Demon Slayer: Kimetsu no Yaiba – Entertainment District Arc which aired 11 episodes, from December 5, 2021, to February 13, 2022.[3] The season was directed by Haruo Sotozaki, with character designs by Akira Matsushima, and animation produced by Ufotable; staff and cast from the first season and Demon Slayer: Kimetsu no Yaiba – The Movie: Mugen Train also returned.',
  },
  {
    category_id: 'season_three',
    title: 'Season Third',
    img: DemonSlayers3,
    content: 'The third season titled Demon Slayer: Kimetsu no Yaiba – Swordsmith Village Arc,[a] adapts volumes twelve to fifteen (chapters 98–127) of the manga series which aired from April 9 to June 18, 2023.[2][3][4] The season was directed by Haruo Sotozaki, with character designs by Akira Matsushima who also serves as a chief animation director, and animation produced by Ufotable; the main cast from the second season also returned.',
  }
]

export default function Category({params}) {
  const dataContent = contentCards.find((i) => i.category_id === params.category)
  return (
    <div className={styles?.category}>
      <Typography.Title style={{color: "white"}}>{dataContent?.title}</Typography.Title>
      <Image src={dataContent?.img} className={styles?.imgContent} alt={dataContent?.category_id}/>
      <Typography.Text className={styles.content}>{dataContent?.content}</Typography.Text>
    </div>
  )
}