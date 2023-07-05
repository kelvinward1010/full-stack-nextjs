"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
import { Card, Space, Typography } from 'antd';
import Image from 'next/image';
import DemonSlayers1 from '../../utils/demonslayers.jpg';
import DemonSlayers2 from '../../utils/season2.jpg';
import DemonSlayers3 from '../../utils/season3.jpg';
import ButtonCustom from '@/components/button/button';

const cards = [
  {
    title: 'Demon Slayers Season 1',
    imgSrc: DemonSlayers1,
    content: "Demon Slayer, also known by its original name Kimetsu no Yaiba (鬼滅の刃? n.d.: Demon Slayer) is a Japanese manga series written and illustrated by Gotōge Koyoharu. The story follows teenager Kamado Tanjirō's journey to become a demon slayer after his family was murdered by a demon and his sister Nezuko was turned into a demon. The series was serialized in Shūeisha's youth manga magazine Weekly Shōnen Jump from February 2016 to May 2020, after which the chapters were compiled into 23 tankōbon volumes. The work was translated into English and published by Viz Media, and then posted by Shūeisha on their online reading platform Manga Plus.",
    url: 'portfolio/season_one',
  },
  {
    title: 'Demon Slayers Season 2',
    imgSrc: DemonSlayers2,
    content: "Demon Slayer, also known by its original name Kimetsu no Yaiba (鬼滅の刃? n.d.: Demon Slayer) is a Japanese manga series written and illustrated by Gotōge Koyoharu. The story follows teenager Kamado Tanjirō's journey to become a demon slayer after his family was murdered by a demon and his sister Nezuko was turned into a demon. The series was serialized in Shūeisha's youth manga magazine Weekly Shōnen Jump from February 2016 to May 2020, after which the chapters were compiled into 23 tankōbon volumes. The work was translated into English and published by Viz Media, and then posted by Shūeisha on their online reading platform Manga Plus.",
    url: 'portfolio/season_two',
  },
  {
    title: 'Demon Slayers Season 3',
    imgSrc: DemonSlayers3,
    content: "Demon Slayer, also known by its original name Kimetsu no Yaiba (鬼滅の刃? n.d.: Demon Slayer) is a Japanese manga series written and illustrated by Gotōge Koyoharu. The story follows teenager Kamado Tanjirō's journey to become a demon slayer after his family was murdered by a demon and his sister Nezuko was turned into a demon. The series was serialized in Shūeisha's youth manga magazine Weekly Shōnen Jump from February 2016 to May 2020, after which the chapters were compiled into 23 tankōbon volumes. The work was translated into English and published by Viz Media, and then posted by Shūeisha on their online reading platform Manga Plus.",
    url: 'portfolio/season_three',
  },
]

export default function Portfolio() {
  const [ellipsis,] = useState(true);
  return (
    <div className={styles.portfolio}>
      <Space className={styles.boxs} size={120}>
        {cards?.map((card, index) => (
          <Card hoverable className={styles.box} title={card.title} key={index} size={'default'}>
            <Image src={card.imgSrc} alt={card.title} className={styles.imgCard}/>
            <Typography.Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
              {card.content}
            </Typography.Paragraph>
            <ButtonCustom url={card.url} text={'Explor'}/>
          </Card>
        ))}
      </Space>
    </div>
  )
}
