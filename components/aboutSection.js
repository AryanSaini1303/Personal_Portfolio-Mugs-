import Image from "next/image";
import styles from "./aboutSection.module.css";
export default function AboutSection() {
  return (
    <div className={styles.container} id="about">
      <section className={styles.photoSection}>
        <div className={styles.block}></div>
        <div className={styles.frame}>
          <Image
            src={"/portraits/second_image/image21.png"}
            width={310}
            height={310}
            className={styles.firstImage}
            alt=""
          />
          <Image
            src={"/portraits/second_image/image22.png"}
            width={376}
            height={220}
            className={styles.secondImage}
            alt=""
          />
        </div>
      </section>
      <section className={styles.infoSection}>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          similique autem non est incidunt, eaque voluptatum placeat, voluptas
          veniam recusandae repudiandae vero nostrum quo a temporibus architecto
          laudantium vel explicabo.
        </p>
        <section className={styles.skillSection}>
          <div>
            <h4>UX</h4>
            <div className={`${styles.bar} ${styles.bar1}`}></div>
          </div>
          <div>
            <h4>Website Design</h4>
            <div className={`${styles.bar} ${styles.bar2}`}></div>
          </div>
          <div>
            <h4>App Design</h4>
            <div className={`${styles.bar} ${styles.bar3}`}></div>
          </div>
          <div>
            <h4>Graphic Design</h4>
            <div className={`${styles.bar} ${styles.bar4}`}></div>
          </div>
        </section>
      </section>
    </div>
  );
}
