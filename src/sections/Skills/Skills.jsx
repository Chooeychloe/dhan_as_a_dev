import SkillList from "../../common/SkillList";
import styles from "./SkillsStyles.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <p>
        I am a junior Flutter developer with 2 years of experience building
        responsive and efficient mobile applications. My skills include Dart
        programming, UI/UX design, and integrating APIs to create seamless user
        experiences.
      </p>
      <p>
        Passionate about continuous learning and innovation, I enjoy tackling
        new challenges and refining my skills in cross-platform development. I
        am eager to contribute to projects that make a difference through
        technology.
      </p>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="HTML & CSS" width="80%"></SkillList>
        <SkillList skill="Basic Java" width="80%"></SkillList>
        <SkillList skill="Laravel" width="70%"></SkillList>
        <SkillList skill="REACT" width="50%"></SkillList>
        <SkillList skill="Android-Kotlin" width="65%"></SkillList>
        <SkillList skill="Flutter" width="80%"></SkillList>
      </div>
    </section>
  );
}

export default Skills;
