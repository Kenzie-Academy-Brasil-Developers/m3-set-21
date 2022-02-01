const Button = ({ className, children }) => (
  <button className={`button-${className}`}>{children}</button>
);

export default Button;
