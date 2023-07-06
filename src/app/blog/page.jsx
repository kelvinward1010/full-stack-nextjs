"use client"
import React, { useState } from 'react';
import { Typography, Button } from 'antd';
import styles from './page.module.css';
import Image from 'next/image';
import ButtonCustom from '@/components/button/button';
import { EiffelImg, EverestImg, PhusiImg } from '@/utils';

const blogs = [
  {
    url: 'blog/blog_1',
    title: 'Đỉnh Everest',
    imgSrc: EverestImg,
    content: 'Đỉnh Everest nằm trong khối núi Mahalangur Himal thuộc dãy Himalaya, là đỉnh núi cao nhất trên Trái Đất so với mực nước biển, tính đến thời điểm hiện tại là 8848,86 mét, nó đã giảm độ cao 2,4 cm sau trận động đất tại Nepal ngày 25/04/2015 và đã dịch chuyển 3 cm về phía tây nam.',
  },
  {
    url: 'blog/blog_2',
    title: 'Tháp Eiffel',
    imgSrc: EiffelImg,
    content: 'Đỉnh Everest nằm trong khối núi Mahalangur Himal thuộc dãy Himalaya, là đỉnh núi cao nhất trên Trái Đất so với mực nước biển, tính đến thời điểm hiện tại là 8848,86 mét, nó đã giảm độ cao 2,4 cm sau trận động đất tại Nepal ngày 25/04/2015 và đã dịch chuyển 3 cm về phía tây nam.',
  },
  {
    url: 'blog/blog_3',
    title: 'Núi Phú Sĩ',
    imgSrc: PhusiImg,
    content: 'Đỉnh Everest nằm trong khối núi Mahalangur Himal thuộc dãy Himalaya, là đỉnh núi cao nhất trên Trái Đất so với mực nước biển, tính đến thời điểm hiện tại là 8848,86 mét, nó đã giảm độ cao 2,4 cm sau trận động đất tại Nepal ngày 25/04/2015 và đã dịch chuyển 3 cm về phía tây nam.',
  },
]

export default function Blog() {
  const [sl, setSl] = useState(1);
  const [ellipsis,] = useState(true);
  const cutDataInArr = blogs?.slice(0,sl);

  const handleSeeMore = () => {
    setSl(sl+1);
  }

  const handleHideMore = () => {
    setSl(sl-1);
  }

  return (
    <div className={styles.blog}>
      {cutDataInArr.map((item, index) => (
        <div key={index} className={styles.box}>
          <Image src={item?.imgSrc} className={styles.boxImg} alt='img'/>
          <div className={styles.boxRight}>
            <Typography.Title style={{color: 'white'}}>{item?.title}</Typography.Title>
            <Typography.Paragraph ellipsis={ellipsis ? { rows: 3, expandable: true, symbol: 'more' } : false} style={{color: 'white'}}>{item?.content}</Typography.Paragraph>
            <ButtonCustom url={item?.url} text={'Explor'}/>
          </div>
        </div>
      ))}
      <Button className={styles.seeMore} onClick={handleSeeMore}>See More</Button>
      <Button className={styles.hideMore} onClick={handleHideMore}>Hide More</Button>
    </div>
  )
}
