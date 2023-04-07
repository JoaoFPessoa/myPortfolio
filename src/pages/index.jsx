import lightThemeIcon from "../assets/icons/light-theme.svg";
import darkThemeIcon from "../assets/icons/dark-theme.svg";
import { Container } from "./styles";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Jobs from "../components/Jobs";

export default function MainPage({ getTheme, theme }) {
  return (
    <Container>
      <header>
        <img
          alt="theme"
          title="Change theme"
          onClick={() => {
            theme === "dark" && getTheme("light");
            theme === "light" && getTheme("dark");
          }}
          src={theme === "light" ? lightThemeIcon : darkThemeIcon}
        />
      </header>
      <Banner />
      <Intro />
      <Jobs />
    </Container>
  );
}
