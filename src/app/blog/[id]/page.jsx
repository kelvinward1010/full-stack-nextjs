"use client"
import { EiffelImg, EverestImg, PhusiImg } from '@/utils';
import React from 'react';
import styles from './page.module.css';
import { Typography } from 'antd';
import Image from 'next/image';


const contentBlogs = [
  {
    url: 'blog_1',
    title: 'Đỉnh Everest',
    imgSrc: EverestImg,
    content: 'Đỉnh Everest nằm trong khối núi Mahalangur Himal thuộc dãy Himalaya, là đỉnh núi cao nhất trên Trái Đất so với mực nước biển, tính đến thời điểm hiện tại là 8848,86 mét, nó đã giảm độ cao 2,4 cm sau trận động đất tại Nepal ngày 25/04/2015 và đã dịch chuyển 3 cm về phía tây nam.',
  },
  {
    url: 'blog_2',
    title: 'Tháp Eiffel',
    imgSrc: EiffelImg,
    content: 'Đỉnh Everest nằm trong khối núi Mahalangur Himal thuộc dãy Himalaya, là đỉnh núi cao nhất trên Trái Đất so với mực nước biển, tính đến thời điểm hiện tại là 8848,86 mét, nó đã giảm độ cao 2,4 cm sau trận động đất tại Nepal ngày 25/04/2015 và đã dịch chuyển 3 cm về phía tây nam.',
  },
  {
    url: 'blog_3',
    title: 'Núi Phú Sĩ',
    imgSrc: PhusiImg,
    content: 'Đỉnh Everest nằm trong khối núi Mahalangur Himal thuộc dãy Himalaya, là đỉnh núi cao nhất trên Trái Đất so với mực nước biển, tính đến thời điểm hiện tại là 8848,86 mét, nó đã giảm độ cao 2,4 cm sau trận động đất tại Nepal ngày 25/04/2015 và đã dịch chuyển 3 cm về phía tây nam.',
  },
]


export default function BlogPost({params}) {
  const dataContent = contentBlogs.find((i) => i.url === params.id)

  return (
    <div className={styles?.blog}>
      <Typography.Title style={{color: "white"}}>{dataContent?.title}</Typography.Title>
      <Image src={dataContent?.imgSrc} className={styles?.imgContent} alt={dataContent?.category_id}/>
      <Typography.Text className={styles.content}>{dataContent?.content}</Typography.Text>
    </div>
  )
}
