import { useState } from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "./assets/styles/lightTheme";
import darkTheme from "./assets/styles/darkTheme";
import GlobalStyles from "./assets/styles/global";
import MainPage from "./pages";

function App() {
  const [theme, setTheme] = useState("light");

  function handleTheme(propsTheme) {
    propsTheme === "dark" && setTheme("dark");
    propsTheme === "light" && setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MainPage getTheme={handleTheme} theme={theme} />
    </ThemeProvider>
  );
}

export default App;
