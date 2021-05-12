import React, { useEffect, useState } from "react";
import fetch from 'isomorphic-unfetch'
import styles from '../styles/Home.module.css'
import Head1 from '../components/Head/head1'
import Feed from '../components/feed/feed'
import Footer from '../components/Footer/footer'
import Link from 'next/link'
import Head from 'next/head'
function Home(props){
    const [list, setList] = useState([]);
    useEffect(() => { 
        const handler = () => {
            let scrollH = document.documentElement.scrollHeight, 
                clientH = document.documentElement.clientHeight,
                scrollT = document.documentElement.scrollTop;
            if(scrollH-clientH<=scrollT+20){
                fetch("/api/news").then(async (res) => {
                    const resp = await res.json();
                    setList(l=>[...l,...resp.data]);
                });

            }
        };

        window.addEventListener('scroll', throttle(handler,500), { passive: true });

        return () => {
          window.removeEventListener('scroll', throttle(handler,500));
        };
    }, []);

    var throttle = function(func, delay){
        var timer = null;
        return function(){
            var context = this;
            var args = arguments;
            if(!timer){
                timer = setTimeout(function(){
                    func.apply(context, args);
                    timer = null;
                },delay);
            }
        }
    }

    return(
  
    <div className={styles.container}>
    <Head>
        <title>今日头条 - TouTiao.com</title>
    </Head>
    <Head1/>
    <Footer/>
    <div className={styles.news_container}>
        {props.feedList.map((i) => {
            if(i.mode==="top"){
                return (
                    
                    <div className={styles.singlecontainer} >
                    <Link href='/secondpage'>
                    <a>
                         <div className={styles.single}>
                            <h2 className={styles.h}>{i.title}</h2>
                            <div className={styles.footbar}>
                                <span className={styles.set_top}>&nbsp;置顶&nbsp;</span>
                                <a>&nbsp;{i.media}</a>
                                <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                <a>&nbsp;{i.time}</a>
                            </div>
                        </div>
                    </a>
                       
                    </Link>
                        
                    </div>
                ); 
            }else if(i.mode==="single"){
                    return(
                        <div className={styles.singlecontainer}>
                        <Link href='/secondpage'>
                        <a>
                            <div className={styles.single}>
                            <h2 className={styles.h}>{i.title}</h2>
                            <div className={styles.footbar}>
                                <a>&nbsp;{i.media}</a>
                                <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                <a>&nbsp;{i.time}</a>
                            </div>
                        </div>
                        </a>
                            
                        </Link>
                        
                    </div>
                    );
                                                
            }else if(i.mode==="words&pic"){
                return (
                    <>
                    <Link href='/secondpage'>
                    <a>
                        <div className={styles.wandpcontainer}>
                        <div className={styles.left}>
                            
                            <h2 className={styles.h}>{i.title}</h2>
                                <div className={styles.footbar}>
                                <a>&nbsp;{i.media}</a>
                                <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                <a>&nbsp;{i.time}</a>
                                </div>
                        
                        </div>
                        
                            <img src={i.img} className={styles.rightimg} />
                        
                    </div>
                    </a>
                        
                    </Link>
                    </>
                    
                );
            }else if(i.mode==="three_pic"){
                return(
                    <>
                    <Link href='/secondpage'>
                    <a>
                        <div className={styles.threepiccontainer}>
                        <h2 className={styles.h}>{i.title}</h2>
                        <ul className={styles.pics}>
                            <img src={i.img[0]} className={styles.threepic}/>
                            <img src={i.img[1]} className={styles.threepic}/>
                            <img src={i.img[2]} className={styles.threepic}/>
                        </ul>
                        <div className={styles.footbar}>
                                <a>&nbsp;{i.media}</a>
                                <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                <a>&nbsp;{i.time}</a>
                        </div>
                    </div>
                    </a>
                        
                    </Link>
                    </>
                    
                );
            }else if(i.mode==="big_pic"){
                return(
                    <div className={styles.bigpiccontainer}>
                    <Link href='/secondpage'>
                    <a>
                        <h2 className={styles.h}>{i.title}</h2>
                        <img src={i.img} className={styles.big_pic}/>
                        <div className={styles.footbar}>
                                <a>&nbsp;{i.media}</a>
                                <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                <a>&nbsp;{i.time}</a>
                        </div>
                    </a>
                        
                    </Link>
                        
                    </div>
                );
            }
        })} 


     
        
        {list.map((i) => {
            if(i.mode==="top"){
                return (
                    
                    <div className={styles.singlecontainer} >
                    <Link href='/secondpage'>
                    <a>
                         <div className={styles.single}>
                            <h2 className={styles.h}>{i.title}</h2>
                            <div className={styles.footbar}>
                                <span className={styles.set_top}>&nbsp;置顶&nbsp;</span>
                                <a>&nbsp;{i.media}</a>
                                <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                <a>&nbsp;{i.time}</a>
                            </div>
                        </div>
                    </a>
                       
                    </Link>
                        
                    </div>
                ); 
            }else if(i.mode==="single"){
                    return(
                        <div className={styles.singlecontainer}>
                        <Link href='/secondpage'>
                        <a>
                            <div className={styles.single}>
                            <h2 className={styles.h}>{i.title}</h2>
                            <div className={styles.footbar}>
                                <a>&nbsp;{i.media}</a>
                                <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                <a>&nbsp;{i.time}</a>
                            </div>
                        </div>
                        </a>
                            
                        </Link>
                        
                    </div>
                    );
                                                
            }else if(i.mode==="words&pic"){
                return (
                    <>
                    <Link href='/secondpage'>
                    <a>
                        <div className={styles.wandpcontainer}>
                        <div className={styles.left}>
                            
                            <h2 className={styles.h}>{i.title}</h2>
                                <div className={styles.footbar}>
                                <a>&nbsp;{i.media}</a>
                                <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                <a>&nbsp;{i.time}</a>
                                </div>
                        
                        </div>
                        
                            <img src={i.img} className={styles.rightimg} />
                        
                    </div>
                    </a>
                        
                    </Link>
                    </>
                    
                );
            }else if(i.mode==="three_pic"){
                return(
                    <>
                    <Link href='/secondpage'>
                    <a>
                        <div className={styles.threepiccontainer}>
                        <h2 className={styles.h}>{i.title}</h2>
                        <ul className={styles.pics}>
                            <img src={i.img[0]} className={styles.threepic}/>
                            <img src={i.img[1]} className={styles.threepic}/>
                            <img src={i.img[2]} className={styles.threepic}/>
                        </ul>
                        <div className={styles.footbar}>
                                <a>&nbsp;{i.media}</a>
                                <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                <a>&nbsp;{i.time}</a>
                        </div>
                    </div>
                    </a>
                        
                    </Link>
                    </>
                    
                );
            }else if(i.mode==="big_pic"){
                return(
                    <div className={styles.bigpiccontainer}>
                    <Link href='/secondpage'>
                    <a>
                        <h2 className={styles.h}>{i.title}</h2>
                        <img src={i.img} className={styles.big_pic}/>
                        <div className={styles.footbar}>
                                <a>&nbsp;{i.media}</a>
                                <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                <a>&nbsp;{i.time}</a>
                        </div>
                    </a>
                        
                    </Link>
                        
                    </div>
                );
            }
        })}


        </div>
    </div>
  )}

  Home.getInitialProps= async function () {
    let res= await fetch ('http://localhost:3000/news.json');
    let data= await res.json();
    console.log(data);
    return{feedList:data};
}

export default Home;
