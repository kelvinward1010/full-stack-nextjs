"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css';
import { Button } from 'antd';
import DarkMode from '../DarkMode/DarkMode';


const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 5,
        title: "About",
        url: "/about",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    }
]

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <Link href={'/'} className={styles.logo}>Kelvin Ward</Link>
        <div className={styles.menus}>
            <DarkMode />
            {links.map((item) => (
                <Link className={styles.menu} key={item.id} href={item.url}>{item.title}</Link>
            ))}
        </div>
        <Button className={styles.button_logout}>
            Logout
        </Button>
    </div>
  )
}
