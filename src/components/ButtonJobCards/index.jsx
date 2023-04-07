import { Container } from "./styles";

export default function ButtonJobCard({ title, image, onClick }) {
  return (
    <Container onClick={onClick} type="button" image={image}>
      <h1>{title}</h1>
    </Container>
  );
}
