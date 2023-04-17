import LinkJobCards from "../LinkJobCards";
import { CardsContainer, Container } from "./style";
import prma from "../../assets/images/prma.png";
import prmalogo from "../../assets/images/prmalogo.png";
import bws from "../../assets/images/bws.png";
import bwsdashboard from "../../assets/images/bwsdashboard.png";
import bwssoft from "../../assets/images/bwssoft.png";
import Modal from "../Modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonJobCard from "../ButtonJobCards";

export default function Jobs() {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState("");
  return (
    <Container>
      <h1>{t("recentProjects")}</h1>
      <p>{t("projectsWithContributors")}</p>
      <CardsContainer>
        <LinkJobCards
          link="https://prmafederal.com/"
          title="PRMA Federal"
          image={prmalogo}
        />

        <LinkJobCards
          link="https://bws-institucional.web.app/"
          title="BWS IoT *"
          image={bws}
          contributor="Realizado com: https://github.com/giovanedann"
        />
        <ButtonJobCard
          image={bwsdashboard}
          title="Dashboard 1 *"
          onClick={() => {
            setIsModalOpen("bws");
          }}
        />
        <ButtonJobCard
          image={prma}
          title="Dashboard 2 *"
          onClick={() => {
            setIsModalOpen("prma");
          }}
        />
        <Modal
          image={bwsdashboard}
          title="Tracking company dashboard"
          subtitle="Its blurred because of customer privacy "
          visible={isModalOpen === "bws"}
          closeModal={() => setIsModalOpen("")}
          contributors={
            <div>
              <a target="_blank" href="https://github.com/rdgrb">
                Rodrigo Ribeiro
              </a>
              <a target="_blank" href="https://github.com/diego-dps">
                Diego Pereira
              </a>
              <a target="_blank" href="https://github.com/Levi-Melo">
                Levi Melo
              </a>
              <a target="_blank" href="https://github.com/devitalo97">
                Italo Souza
              </a>
              <a target="_blank" href="https://github.com/giovanedann">
                Giovane Daniel
              </a>
              <a target="_blank" href="https://github.com/Lauaneoc">
                Lauane Oliveira
              </a>
            </div>
          }
        />
        <Modal
          image={prma}
          title="Security company dashboard"
          subtitle="Its blurred because of customer privacy "
          visible={isModalOpen === "prma"}
          closeModal={() => setIsModalOpen("")}
          contributors={
            <div>
              <a target="_blank" href="https://github.com/rdgrb">
                Rodrigo Ribeiro
              </a>
              <a target="_blank" href="https://github.com/diego-dps">
                Diego Pereira
              </a>
              <a target="_blank" href="https://github.com/Levi-Melo">
                Levi Melo
              </a>
              <a target="_blank" href="https://github.com/devitalo97">
                Italo Souza
              </a>
              <a target="_blank" href="https://github.com/giovanedann">
                Giovane Daniel
              </a>
              <a target="_blank" href="https://github.com/Lauaneoc">
                Lauane Oliveira
              </a>
            </div>
          }
        />
      </CardsContainer>
    </Container>
  );
}
