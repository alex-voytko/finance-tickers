function Button({ name, className = "btn", onClick, disabled }) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
