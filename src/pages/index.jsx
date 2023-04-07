import lightThemeIcon from "../assets/icons/light-theme.svg";
import darkThemeIcon from "../assets/icons/dark-theme.svg";
import brasilFlag from "../assets/icons/flag-brazil.svg";
import usaFlag from "../assets/icons/flag-us.svg";
import { Container } from "./styles";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Jobs from "../components/Jobs";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { english } from "../utils/english";
import { portuguese } from "../utils/portuguese";

export default function MainPage({ getTheme, theme }) {
  const [language, setLanguage] = useState("portuguese");

  async function fetchLanguage() {
    await initI18();
  }
  fetchLanguage();

  function initI18(userLanguage = language) {
    i18n.use(initReactI18next).init({
      resources: {
        english: { translation: english },
        portuguese: { translation: portuguese },
      },
      lng: userLanguage,
      fallbackLng: "portuguese",
    });
  }

  function changeLanguage(selectedLanguage) {
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  }
  return (
    <Container>
      <header>
        <div></div>
        <div>
          <img
            onClick={() => {
              // changeLanguage("portuguese");
            }}
            className="flag"
            src={brasilFlag}
          />
          <img
            onClick={() => {
              console.log(language);
              // changeLanguage("english");
            }}
            className="flag"
            src={usaFlag}
          />
        </div>
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
      <Footer />
    </Container>
  );
}
