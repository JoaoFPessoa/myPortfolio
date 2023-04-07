import { Container, ImageContainer } from "./styles";
import avatar from "../../assets/icons/avatar.svg";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>
        {t("bannerTitle")}
        <h2>{t("bannerSubtitle")}</h2>
      </h1>
      <ImageContainer>
        <img src={avatar} alt="avatar" />
      </ImageContainer>
    </Container>
  );
}
