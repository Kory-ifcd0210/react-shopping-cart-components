import React from "react";

function Button({ submitButton, disabled = false, children, ...props }) {
  return (
    <div className="btn btn-primary" type={submitButton ? "submit" : "button"}
    disabled={disabled}
      {...props}>
      {children}
    </div>
  );
}

export default Button;
