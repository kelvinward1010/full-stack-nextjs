"use client"
import React from 'react';
import { Typography } from 'antd'

export default function BlogLayout({children}) {
  return (
    <div>
        <Typography.Title style={{color: 'white', textAlign:'center'}}>Blogs</Typography.Title>
        {children}
    </div>
  )
}
