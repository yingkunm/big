import React, { useEffect, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head1 from '../components/Head/head1'
import Feed from '../components/feed/feed'

export async function getServerSideProps(context){
  const res = await fetch("http://localhost:3000/api/news")
  const result = await res.json()
  return{
      props:{
        data:result
      }
  }
}
export default function Home(props) {
  return (
    <div className={styles.container}>
    
    <Head1/>
    
    <Feed data={props.data}/>
    </div>
    
    
   
  )
}
