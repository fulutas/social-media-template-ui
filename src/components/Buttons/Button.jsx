import "./button.scss";

const Button = ({ type = "button", disabled, onClick, children, textColor, bgColor }) => {
  return (
    <button className={`button ${textColor} ${bgColor}`} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
