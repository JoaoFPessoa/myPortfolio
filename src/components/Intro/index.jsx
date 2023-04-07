import { Container, Skills } from "./styles";
import skills from "../../assets/icons/skills.svg";
import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation();
  return (
    <Container>
      <p>{t("introTitle")}</p>
      <span>{t("introSubtitle")}</span>
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
