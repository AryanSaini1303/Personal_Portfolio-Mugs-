"use client";
import styles from "./contact.module.css";

export default function Contact() {
  function handleFormSubmission(e) {
    e.preventDefault();
    console.log(e.target.email.value); // Assuming you want to log the email input value
  }

  return (
    <div className={styles.container} id="contact">
      <h1>Let&apos;s Design Together</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        eveniet quam ut, sapiente eum voluptatem modi nam expedita sequi
        perspiciatis.
      </p>
      <form className={styles.formElement} onSubmit={handleFormSubmission}>
        <input type="email" name="email" placeholder="Enter Your Email" />
        <button type="submit">Contact Me</button>
      </form>
    </div>
  );
}
