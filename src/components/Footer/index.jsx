import { Container, Location, LocationContainer } from "./styles";
import pin from "../../assets/icons/pin.svg";
import mail from "../../assets/icons/mail.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>Information</h1>
      <LocationContainer>
        <Location>
          <img src={pin} />
          <h3>{t("location")}</h3>
          <p>Barueri</p>
          <p>São Paulo</p>
          <p>{t("brasil")}</p>
        </Location>
        <Location>
          <img src={mail} />
          <h3>{t("mail")}</h3>
          <p>joaoppessoa@uol.com.br</p>
        </Location>
        <Location>
          <a href="https://wa.me/5511992400586" target="_blank">
            <img src={whatsapp} />
            <h3>Whatsapp</h3>
            <p>(+55) 11 99240-0586</p>
          </a>
        </Location>
      </LocationContainer>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "0 5rem",
          gap: "50px",
        }}
      >
        <a
          href="https://www.linkedin.com/in/jppessoa/"
          style={{ cursor: "pointer" }}
          target="_blank"
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={linkedin}
            alt=""
          />
        </a>
        <a
          href="https://github.com/JoaoFPessoa"
          style={{ cursor: "pointer" }}
          target="_blank"
        >
          <img style={{ width: "50px", height: "50px" }} src={github} alt="" />
        </a>
      </div>
    </Container>
  );
}
