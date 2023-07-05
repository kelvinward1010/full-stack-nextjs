"use client"
import React from 'react';
import { Typography, Button } from 'antd';
import styles from './page.module.css';
import blog1 from '../../utils/everest.jpeg';
import Image from 'next/image';
import ButtonCustom from '@/components/button/button';

const blogs = [
  {
    url: 'blog/blog_1',
    title: 'Đỉnh Everest',
    imgSrc: blog1,
    content: 'Đỉnh Everest nằm trong khối núi Mahalangur Himal thuộc dãy Himalaya, là đỉnh núi cao nhất trên Trái Đất so với mực nước biển, tính đến thời điểm hiện tại là 8848,86 mét, nó đã giảm độ cao 2,4 cm sau trận động đất tại Nepal ngày 25/04/2015 và đã dịch chuyển 3 cm về phía tây nam.',
  },
  {
    url: 'blog/blog_1',
    title: 'Đỉnh Everest',
    imgSrc: blog1,
    content: 'Đỉnh Everest nằm trong khối núi Mahalangur Himal thuộc dãy Himalaya, là đỉnh núi cao nhất trên Trái Đất so với mực nước biển, tính đến thời điểm hiện tại là 8848,86 mét, nó đã giảm độ cao 2,4 cm sau trận động đất tại Nepal ngày 25/04/2015 và đã dịch chuyển 3 cm về phía tây nam.',
  },
  {
    url: 'blog/blog_1',
    title: 'Đỉnh Everest',
    imgSrc: blog1,
    content: 'Đỉnh Everest nằm trong khối núi Mahalangur Himal thuộc dãy Himalaya, là đỉnh núi cao nhất trên Trái Đất so với mực nước biển, tính đến thời điểm hiện tại là 8848,86 mét, nó đã giảm độ cao 2,4 cm sau trận động đất tại Nepal ngày 25/04/2015 và đã dịch chuyển 3 cm về phía tây nam.',
  },
]

export default function Blog() {
  const cutDataInArr = blogs?.slice(2);
  return (
    <div className={styles.blog}>
      {cutDataInArr.map((item, index) => (
        <div key={index} className={styles.box}>
          <Image src={item?.imgSrc} className={styles.boxImg} />
          <div className={styles.boxRight}>
            <Typography.Title style={{color: 'white'}}>{item?.title}</Typography.Title>
            <Typography.Text style={{color: 'white'}}>{item?.content}</Typography.Text>
            <ButtonCustom url={item?.url} text={'Explor'}/>
          </div>
        </div>
      ))}
      <Button className={styles.seeMore}>See More</Button>
    </div>
  )
}
