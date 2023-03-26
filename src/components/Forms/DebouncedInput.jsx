import React, { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import Input from './Input';

function DebouncedInput({ onChangeCb, delay = 600, ...props }) {
    const [value, setValue] = useState('');

    useDebounce(() => onChangeCb(value), delay, [value]);

    const onInputChange = e => {
        setValue(e.target.value);
    };

    return <Input onChange={onInputChange} {...props} />;
}

export default DebouncedInput;
