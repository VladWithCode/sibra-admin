import { useState } from 'react';

export const useArray = (defaultValue = []) => {
    const [array, setArray] = useState(defaultValue);

    function push(element) {
        setArray(a => [...a, element]);
    }

    function filter(cb) {
        setArray(a => a.filter(cb));
    }

    function update(index, newElement) {
        setArray(a => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length - 1),
        ]);
    }

    function remove(index) {
        setArray(a => [
            ...a.slice(0, index),
            ...a.slice(index + 1, a.length - 1),
        ]);
    }

    function clear() {
        setArray([]);
    }

    function reset() {
        setArray(defaultValue);
    }

    return { array, set: setArray, reset, push, filter, update, remove, clear };
};
