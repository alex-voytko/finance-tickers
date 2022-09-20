function Button({ tip, className = "btn", onClick, disabled, children }) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
      <span className="tip">{tip}</span>
    </button>
  );
}

export default Button;
