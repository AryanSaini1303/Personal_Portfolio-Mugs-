import Image from "next/image";
import styles from "./serviceSection.module.css";
export default function ServiceSection() {
  return (
    <div className={styles.container} id="service">
      <header>
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptate
          dolore soluta odit tenetur vel magni tempora iusto quod dignissimos.
        </p>
      </header>
      <section className={styles.cardContainer}>
        <div className={`${styles.card1} ${styles.card}`}>
          <div className={styles.logo}>
            <Image
              src={"/logos/UI_UX_logo.png"}
              width={39}
              height={45}
              alt=""
            />
          </div>
          <h3>UI/UX</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            facilis nemo vitae quam eius repellat!
          </p>
        </div>
        <div className={`${styles.card2} ${styles.card}`}>
          <div className={styles.logo}>
            <Image
              src={"/logos/web_design_logo.png"}
              width={40}
              height={45}
              alt=""
            />
          </div>
          <h3>Web Design</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            facilis nemo vitae quam eius repellat!
          </p>
        </div>
        <div className={`${styles.card3} ${styles.card}`}>
          <div className={styles.logo}>
            <Image
              src={"/logos/app_design_logo.png"}
              width={25}
              height={45}
              alt=""
            />
          </div>
          <h3>App Design</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            facilis nemo vitae quam eius repellat!
          </p>
        </div>
        <div className={`${styles.car4} ${styles.card}`}>
          <div className={styles.logo}>
            <Image
              src={"/logos/Graphic_Design_logo.png"}
              width={50}
              height={43}
              alt=""
            />
          </div>
          <h3>Graphic Design</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            facilis nemo vitae quam eius repellat!
          </p>
        </div>
      </section>
    </div>
  );
}
