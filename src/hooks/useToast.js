import { useContext } from 'react';
import ToastContext from '../context/toast/useToast';

export const useToast = () => useContext(ToastContext);
