import Image from "next/image";
import styles from "./projectSection.module.css";
export default function ProjectSection() {
  return (
    <div className={styles.container} id="projects">
      <section className={styles.info}>
        <h1>My Projects</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          animi a vitae cum cumque. Dolores!
        </p>
      </section>
      <section className={styles.filters}>
        <button className={styles.btn1}>All</button>
        <button className={styles.btn2}>UI/UX</button>
        <button className={styles.btn3}>Web Design</button>
        <button className={styles.btn4}>App Design</button>
        <button className={styles.btn5}>Graphic Design</button>
      </section>
      <section className={styles.cards}>
        <div>
          <div className={styles.projectImageContainer}>
            <Image
              src={"/projectImages/Web Designs.png"}
              width={180}
              height={320}
              className={styles.firstImage}
              alt=""
              />
            <Image
              src={"/projectImages/Web Designs (1).png"}
              width={180}
              height={349}
              className={styles.secondImage}
              alt=""
            />
          </div>
          <h6>Web Design</h6>
          <h5>AirCalling Landing Page Design</h5>
        </div>
        <div>
          <div className={styles.projectImageContainer}>
            <Image
              src={"/projectImages/Web Designs (2).png"}
              width={180}
              height={320}
              className={styles.firstImage}
              alt=""
              />
            <Image
              src={"/projectImages/Web Designs (3).png"}
              width={180}
              height={349}
              className={styles.secondImage}
              alt=""
            />
          </div>
          <h6>Web Design</h6>
          <h5>Business Landing Page Design</h5>
        </div>
        <div>
          <div className={styles.projectImageContainer}>
            <Image
              src={"/projectImages/Web Designs (4).png"}
              width={180}
              height={320}
              className={styles.firstImage}
              alt=""
              />
            <Image
              src={"/projectImages/Web Designs (5).png"}
              width={180}
              height={349}
              className={styles.secondImage}
              alt=""
            />
          </div>
          <h6>Web Design</h6>
          <h5>Ecom Web Page Design</h5>
        </div>
      </section>
    </div>
  );
}
