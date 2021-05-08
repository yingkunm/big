import styles from "./feed.module.css"
import React,{useEffect,useState} from "react";

export default function feed(){
    const [state,setState]=useState({
        list: [],
    });

    useEffect(() => {
        fetch("/api/news").then(async (res) => {
          const resp = await res.json();
          setState({
            list: resp.data,
          });
        });
      }, []);

      return(
          <div className={styles.news_container}>
            {state.list.map((i) => {
                if(i.mode==="top"){
                    return (
                        <div className={styles.singlecontainer}>
                         <div className={styles.single}>
                             <h2 className={styles.h}>{i.title}</h2>
                             <div className={styles.footbar}>
                                 <div className={styles.set_top}>置顶</div>
                                 <a>&nbsp;{i.media}</a>
                                 <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                 <a>&nbsp;{i.time}</a>
                             </div>
                         </div>
                        </div>
                    ); 
                    }else if(i.mode==="single"){
                        return(
                            <div className={styles.singlecontainer}>
                         <div className={styles.single}>
                             <h2 className={styles.h}>{i.title}</h2>
                             <div className={styles.footbar}>
                                 <a>&nbsp;{i.media}</a>
                                 <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                 <a>&nbsp;{i.time}</a>
                             </div>
                         </div>
                        </div>
                        );
                                                    
                }else if(i.mode==="words&pic"){
                    return (
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
                                <img src={i.pic} />
                            </div>
                        </div>
                    );
                }else if(i.mode==="three_pic"){
                    return(
                        <div className={styles.threepiccontainer}>
                            <h2 className={styles.h}>{i.title}</h2>
                            <ul className={styles.pics}>
                                <img src={i.pic[0]} />
                                <img src={i.pic[1]} />
                                <img src={i.pic[2]} />
                            </ul>
                            <div className={styles.footbar}>
                                   <a>&nbsp;{i.media}</a>
                                   <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                   <a>&nbsp;{i.time}</a>
                            </div>
                        </div>
                    );
                }else if(i.mode==="big_pic"){
                    return(
                        <div className={styles.bigpiccontainer}>
                            <h2 className={styles.h}>{i.title}</h2>
                            <img src={i.pic} />
                            <div className={styles.footbar}>
                                   <a>&nbsp;{i.media}</a>
                                   <a>&nbsp;评论&nbsp;{i.recommend}</a>
                                   <a>&nbsp;{i.time}</a>
                            </div>
                        </div>
                    );
                }
            })}
        
      
      </div>
      );
}