import React from 'react';
import { useState } from 'react';

function Input({ type = 'text', onChange, ...props }) {
  const [value, setValue] = useState('');
  const _onChange = (e) => {
    const { value: eventValue } = e.target;

    setValue(eventValue);
    onChange(e);
  };

  return (
    <input
      type={type}
      onChange={_onChange}
      value={value}
      className="border-2 border-zinc-200 rounded-full px-4 py-1"
      {...props}
    />
  );
}

export default Input;
