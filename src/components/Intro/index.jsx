import { Container, Skills } from "./styles";
import skills from "../../assets/icons/skills.svg";
export default function Intro() {
  return (
    <Container>
      <p>Hi, I'm João. Welcome to my website!</p>
      <span>
        In this portfolio, you will find some of the projects I've recently
        developed, including landing pages, dashboards, and other web projects.
        I hope you enjoy what you see and feel free to contact me if you need
        help with your next project.
      </span>
      <Skills>
        <img src={skills} alt="skills" />
        <h1>Skills</h1>
        <ul>
          <li>Typescript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>React Native</li>
          <li>Sass</li>
          <li>Styled Components</li>
          <li>Framer Motion</li>
          <li>Git</li>
          <li>Maps API's</li>
        </ul>
      </Skills>
    </Container>
  );
}
