import ReactPortal from "../ReactPortal";
import { Container, Contributors, Overlay } from "./styles";
import useAnimatedUnmount from "../../utils/useAnimatedUnmount";
import { useRef } from "react";
import useClickOutside from "../../utils/useOutsideClick";

export default function Modal({
  title,
  subtitle,
  image,
  closeModal,
  visible,
  contributors,
}) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible);
  const modalRef = useRef(null);

  useClickOutside({
    ref: modalRef,
    onClickOutside: closeModal,
  });

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
        <Container isClosing={!visible} ref={modalRef}>
          <h1>{title}</h1>
          <p>{subtitle}</p>

          <img src={image} />
          {contributors && (
            <Contributors>
              <h4>Contributors:</h4> {contributors}
            </Contributors>
          )}
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
