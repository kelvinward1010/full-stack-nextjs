"use client"
import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import DemonSlayers from '../../utils/demonslayers.jpg';
import { Typography } from 'antd';
import ButtonCustom from '@/components/button/button';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.imgC}>
        <Image src={DemonSlayers} className={styles.img} alt='demon-slayers'/>
      </div>
      <div className={styles.texts}>
        <div className={styles.item}>
          <Typography.Title className={styles.title}>
            Demon Slayer
          </Typography.Title>
          <Typography.Text className={styles.desc}>
            Demon Slayer, also known by its original name Kimetsu no Yaiba 
            (鬼滅の刃? n.d.: "Demon Slayer") is a Japanese manga series 
            written and illustrated by Gotōge Koyoharu. The story follows 
            teenager Kamado Tanjirō's journey to become a demon slayer after 
            his family was murdered by a demon and his sister Nezuko was 
            turned into a demon. The series was serialized in Shūeisha's 
            youth manga magazine Weekly Shōnen Jump from February 2016 to 
            May 2020, after which the chapters were compiled into 23 tankōbon
            volumes. The work was translated into English and published by
              Viz Media, and then posted by Shūeisha on their online reading 
              platform Manga Plus.
          </Typography.Text>
          <ButtonCustom url={"/contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  )
}
