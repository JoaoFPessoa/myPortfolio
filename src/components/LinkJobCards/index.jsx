import { Container } from "./styles";

export default function LinkJobCard({ link, title, image }) {
  return (
    <Container href={link} target="_blank" image={image}>
      <h1>{title}</h1>
    </Container>
  );
}
