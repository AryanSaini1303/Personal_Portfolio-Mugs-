import Image from "next/image";
import styles from "./introSection.module.css"
export default function IntroSection(){
    return(
        <div className={styles.container}>
            <section className={styles.infoSection}>
                <h4>Hi I am</h4>
                <h3>Muhammad Umair</h3>
                <h1>UI & UX <br/><span className={styles.indent}>Designer</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia doloremque dolore iusto non architecto quisquam voluptatem placeat distinctio fuga.
                </p>
                <button>Hire me</button>
            </section>
            <section className={styles.photoSection}>
                <div className={styles.block}></div>
                <div className={styles.frame}>
                    <Image src={"/portraits/first_image/image11.png"} width={310} height={310} className={styles.firstImage}/>
                    <Image src={"/portraits/first_image/image12.png"} width={340} height={220} className={styles.secondImage}/>
                </div>
            </section>
        </div>
    )
}