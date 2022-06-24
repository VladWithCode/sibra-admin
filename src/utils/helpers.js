import clone from 'just-clone';
import { API_URL } from '../config/globals';

export const isEmptyObject = o => {
  if (!o || Object.keys(o).length === 0) return true;

  return false;
};

export const getClassName = (baseClassName, className, replaceClassName) => {
  return replaceClassName && className
    ? className
    : `${baseClassName} ${className || ''}`.trim();
};

export const safeClone = input => clone(input);

export const makeServerRequest = async (
  endpoint,
  config = {
    method: 'GET',
    useAuth: false,
    headers: undefined,
    body: undefined,
  }
) => {
  const fetchOptions = {
    method: config.method,
  };

  if (config.useAuth) {
    fetchOptions.credentials = 'include';
    fetchOptions.mode = 'cors';
  }

  if (config.body && !isEmptyObject(config.body))
    fetchOptions.body = JSON.stringify(config.body);
  if (config.headers && !isEmptyObject(config.headers))
    fetchOptions.headers = config.headers;

  try {
    const res = await fetch(API_URL + endpoint, fetchOptions);
    return await res.json();
  } catch (err) {
    return { error: err };
  }
};

export const dateToReadableString = date => {
  if (!date || isNaN(Date.parse(date))) return '';
  const safeDate = date instanceof Date ? date : new Date(date);

  return new Intl.DateTimeFormat('es-mx', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(safeDate);
};
