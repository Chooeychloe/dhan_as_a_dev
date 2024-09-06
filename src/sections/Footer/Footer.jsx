import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        {" "}
        © 2024 Dhan Belgica <br></br> All rights reserved
      </p>
    </section>
  );
}

export default Footer;
