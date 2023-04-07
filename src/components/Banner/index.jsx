import { Container } from "./styles";
import avatar from "../../assets/icons/avatar.svg";

export default function Banner() {
  return (
    <Container>
      <h1>
        Frontend <br /> Developer.
        <h2>Specialized in creating amazing and functional user interfaces.</h2>
      </h1>

      <img src={avatar} alt="avatar" />
    </Container>
  );
}
