"use client"
import { Typography } from 'antd'
import React from 'react'

export default function PortfolioLayout({children}) {
  return (
    <div>
        <Typography.Title style={{color: 'white', textAlign:'center'}}>Series Demon Slayers</Typography.Title>
        {children}
    </div>
  )
}
