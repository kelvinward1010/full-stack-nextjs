"use client"
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import styles from './button.module.css';

export default function ButtonCustom({text, url}) {
  return (
    <Link href={url}>
        <Button type={'default'} className={styles.buttonCustom}>
            {text}
        </Button>
    </Link>
  )
}
