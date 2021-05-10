import styles from "./feed.module.css"
import React,{useEffect,useState} from "react";
import Link from 'next/link'
export default function feed(){
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("/api/news").then(async (res) => {
          const resp = await res.json();
          setList( resp.data);
        });
      }, []);

    const [scrollPosition, setScrollPosition] = useState({});

    useEffect(() => {    
        const handler = () => {
          setScrollPosition({
            scrollH: document.documentElement.scrollHeight, 
            clientH: document.documentElement.clientHeight,
            scrollT: document.documentElement.scrollTop,
          });
        };

        window.addEventListener('scroll', handler, { passive: true });

        return () => {
          window.removeEventListener('scroll', handler);
        };
    }, []);

    if(scrollPosition.scrollH-scrollPosition.clientH<=scrollPosition.scrollT+400) {
        fetch("/api/news").then(async (res) => {
            const resp = await res.json();
            setList(l=>[...l,...resp.data]);
        });
    }

    return(
        <div className={styles.news_container}>
        {list.map((i) => {
            if(i.mode==="top"){
                return (
                    <div className={styles.singlecontainer} >
                    <Link href='/secondpage'>
                    <a>
                         <div className={styles.single}>
                            <h2 className={styles.h}>{i.title}</h2>
                            <div className={styles.footbar}>
                                <span className={styles.set_top}>&nbsp;置顶</span>
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
                        <div className={styles.rightimg}>
                            <img src={i.img} />
                        </div>
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
                            <img src={i.img[0]} />
                            <img src={i.img[1]} />
                            <img src={i.img[2]} />
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
                        <img src={i.img} />
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
    );
}