import React, { useEffect, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head1 from '../components/Head/head1'
import Feed from '../components/feed/feed'
export default function Home() {
  return (
    <div className={styles.container}>
    
    <Head1/>
    
    <Feed/>
    </div>
    
    
   
  )
}
