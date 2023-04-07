import JobCard from "../JobCards";
import { CardsContainer, Container } from "./style";
import prma from "../../assets/images/prma.png";
import bws from "../../assets/images/bws.png";
import bwssoft from "../../assets/images/bwssoft.png";
import Modal from "../Modal";
import { useState } from "react";

export default function Jobs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Container>
      <h1>My Recent Projects</h1>
      <CardsContainer>
        <JobCard
          link="https://prmafederal.com/"
          title="PRMA Federal"
          image={prma}
        />

        <JobCard
          link="https://bws-institucional.web.app/"
          title="BWS IoT"
          image={bws}
        />
        <JobCard />
        <JobCard onClick={() => setIsModalOpen(true)} />
        <button onClick={() => setIsModalOpen(true)} />
        <Modal
          image={bwssoft}
          title="BWS Software"
          subtitle="Its blurred because of customer privacy "
          visible={isModalOpen}
        />
      </CardsContainer>
    </Container>
  );
}
