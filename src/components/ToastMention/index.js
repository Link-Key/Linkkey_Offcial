import { toast, cssTransition } from "react-toastify";
import "animate.css";

const Slide = cssTransition({
  enter: "animate__animated animate__slideInDown animate__faster",
  exit: "animate__animated animate__slideOutUp animate__faster",
  appendPosition: false,
  collapse: true,
  collapseDuration: 300,
});

const ToastMention = (props) => {
  const {
    message,
    type = "warn",
    onClose,
    duration = 3000,
    showClose = false,
  } = props;

  return toast(<span>{message}</span>, {
    position: "top-center",
    type,
    autoClose: duration,
    pauseOnHover: true,
    closeButton: showClose,
    hideProgressBar: true,
    pauseOnFocusLoss: false,
    limit: 3,
    transition: Slide,
    style: {
      maxWidth: "345px",
      minHeight: "48px",
      borderRadius: "12px",
      padding: "0 16px",
      wordBreak: "break-word",
      color: "#FD6262",
      fontWeight: 500,
      top: "10vh",
    },

    onClose: () => {
      onClose && typeof onClose === "function" && onClose();
    },
  });
};
export default ToastMention;
