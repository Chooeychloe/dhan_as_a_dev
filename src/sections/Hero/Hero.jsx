import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile1.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/ig-dark.svg";
import twitterDark from "../../assets/ig-light.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Dhan"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Dhan <br />
          Belgica
        </h1>
        <h2>Flutter Developer</h2>
        <span>
          <a href="https://www.instagram.com/well_dhan/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Chooeychloe" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/dhan-belgica/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          I'm a flutter developer from Bacoor, Cavite with 3 years of experiece
          in programming and 2 years experience in flutter development.
        </p>
        <a href={CV} download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
