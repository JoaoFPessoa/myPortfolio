import LinkJobCards from "../LinkJobCards";
import { CardsContainer, Container } from "./style";
import prma from "../../assets/images/prma.png";
import bws from "../../assets/images/bws.png";
import bwssoft from "../../assets/images/bwssoft.png";
import Modal from "../Modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Jobs() {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Container>
      <h1>{t("recentProjects")}</h1>
      <p>{t("projectsWithContributors")}</p>
      <CardsContainer>
        <LinkJobCards
          link="https://prmafederal.com/"
          title="PRMA Federal"
          image={prma}
        />

        <LinkJobCards
          link="https://bws-institucional.web.app/"
          title="BWS IoT *"
          image={bws}
          contributor="https://github.com/giovanedann"
        />
        {/* <ButtonJobCard
          image={bwssoft}
          title="Dashboard"
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
        <ButtonJobCard
          image={bwssoft}
          title="Dashboard"
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
        <Modal
          image={bwssoft}
          title="Tracking company dashboard"
          subtitle="Its blurred because of customer privacy "
          visible={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        /> */}
      </CardsContainer>
    </Container>
  );
}
