import styles from "../Head/head.module.css"

export default function head1() {
    return (
        <div className={styles.head}>
            <div className={styles.header}>
                <img src="/xin.png" className={styles.img1}/>
                <img src="/zi.png" className={styles.img2}></img>
                <img src="/sousuo.jpg" className={styles.img3}></img>
        </div>
        <div className={styles.navbar}>
        <ul className={styles.nav}>
                <a className={styles.first}>推荐</a>
                <a>视频</a>
                <a>热点</a>
                <a>社会</a>
                <a>娱乐</a>
                <a>军事</a>
                <a>科技</a>
                <a>汽车</a>
                <a>房产</a>
                <a>家居</a>
                
            </ul>

        </div>
        </div>
    )
}