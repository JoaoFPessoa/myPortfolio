import { Container } from "./styles";

export default function JobCard({ link, title, image, button }) {
  return (
    <Container href={link} target="_blank" image={image}>
      <h1>{title}</h1>
    </Container>
  );
}
