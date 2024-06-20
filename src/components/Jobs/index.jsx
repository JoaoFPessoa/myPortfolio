import LinkJobCards from "../LinkJobCards";
import { CardsContainer, Container } from "./style";
import prma from "../../assets/images/prma.png";
import prmalogo from "../../assets/images/prmalogo.png";
import bwsdashboard from "../../assets/images/bwsdashboard.png";
import paktor from "../../assets/images/logo-verde-branco.png";
import renans from "../../assets/images/renan-logo.jpg";
import officeit from "../../assets/images/officeit.jpg";
import dora from "../../assets/images/dora.jpg";
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
      <CardsContainer>
        <LinkJobCards
          link="https://prmafederal.com/"
          title="PRMA Federal"
          image={prmalogo}
        />
        <LinkJobCards 
        link="https://www.officeit.com.br/"
        title="OfficeIT"
        image={officeit}
        />
        <LinkJobCards
          link="https://paktor.vercel.app/"
          title="Paktor"
          image={paktor}
        />

        <LinkJobCards
          link="https://lp-personal-trainer.vercel.app/"
          title="Personal Trainer Renan"
          image={renans}
        />
        <ButtonJobCard 
        image={dora}
        title="Media Dashboard"
        onClick={() => {
          setIsModalOpen("dora");
        }}
        />
        <ButtonJobCard
          image={bwsdashboard}
          title="Tracking Dashboard *"
          onClick={() => {
            setIsModalOpen("bws");
          }}
        />
        <ButtonJobCard
          image={prma}
          title="Patrolling Dashboard *"
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
        <Modal
          image={dora}
          title="Media company dashboard"
          subtitle="Its blurred because of customer privacy "
          visible={isModalOpen === "dora"}
          closeModal={() => setIsModalOpen("")}
        />
      </CardsContainer>
    </Container>
  );
}
