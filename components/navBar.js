import Image from "next/image";
import styles from "./navBar.module.css";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
});

export default function NavBar() {
  return (
    <section className={styles.container}>
      <div className={styles.logoSection}>
        <Image src={"/logos/name_logo.png"} width={50} height={50} alt="" />
        <h1 className={`${styles.name} ${mont.style}`}>M<span className={styles.last_letters}>umair</span></h1>
      </div>
      <div className={styles.navs}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="/Resume.pdf" download="Resume.pdf">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
