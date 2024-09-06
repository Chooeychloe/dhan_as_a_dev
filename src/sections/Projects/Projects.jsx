import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Chooeychloe/mental_health_app"
          h3="MenTal"
          p="Mental Health App"
        ></ProjectCard>
        <ProjectCard
          src={viberr}
          link="https://github.com/Chooeychloe/mental_health_app"
          h3="MenTal"
          p="Mental Health App"
        ></ProjectCard>{" "}
        <ProjectCard
          src={viberr}
          link="https://github.com/Chooeychloe/mental_health_app"
          h3="MenTal"
          p="Mental Health App"
        ></ProjectCard>{" "}
        <ProjectCard
          src={viberr}
          link="https://github.com/Chooeychloe/mental_health_app"
          h3="MenTal"
          p="Mental Health App"
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
