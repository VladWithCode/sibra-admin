import React from 'react';

function Button({
  label,
  type = 'button',
  onClick,
  className,
  replaceClassName = false,
  ...props
}) {
  const getClassName = () => {
    return replaceClassName && className
      ? className
      : `btn ${className || ''}`.trim();
  };

  return (
    <button type={type} className={getClassName()} onClick={onClick} {...props}>
      {label}
    </button>
  );
}

export default Button;
