import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <img src={"/logos/name_logo.png"} alt="Logo"/>
          <h2>Mumair</h2>
        </div>
        <nav className={styles.nav}>
          <Link href="#home">Home</Link>
          <Link href="#about">About Me</Link>
          <Link href="#service">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className={styles.social}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={"/logos/facebook_logo.png"} width={20} height={20} alt=""/>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={"/logos/X_logo.png"} width={20} height={20} alt=""/>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={"/logos/instagram_logo.png"} width={20} height={20} alt=""/>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={"/logos/linkedIn_logo.png"} width={20} height={20} alt=""/>
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; 2023 <span className={styles.brand}>Mumair</span> All Rights
        Reserved, Inc.
      </div>
    </footer>
  );
}
