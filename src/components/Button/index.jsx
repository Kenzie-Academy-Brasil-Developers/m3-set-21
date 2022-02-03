import "./styles.css";

const Button = ({
  children,
  onClick,
  type = "button",
  secondaryColor = false,
}) => (
  <button
    onClick={onClick}
    className={secondaryColor ? "button-secondary" : "button-primary"}
    type={type}
  >
    {children}
  </button>
);

export default Button;
