import ReactPortal from "../ReactPortal";
import { Container, Overlay } from "./styles";
import useAnimatedUnmount from "../../utils/useAnimatedUnmount";

export default function Modal({ title, subtitle, image, visible }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible);

  if (!shouldRender) {
    return null;
  }

  let container = document.getElementById("modal-root");
  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", "modal-root");
    document.body.append(container);
  }
  return (
    <ReactPortal containerId="modal-root">
      <Overlay isClosing={!visible} ref={animatedElementRef}>
        <Container isClosing={!visible}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <img src={image} />
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
