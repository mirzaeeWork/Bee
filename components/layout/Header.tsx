'use client'
import styles from '@/components/layout/Header.module.css'
import { FiAlignJustify } from "react-icons/fi";
import Image from 'next/image'
import Link from 'next/link';

function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>فواید زنبور</h1>
      </div>
    </header>
  )
}

export default Header