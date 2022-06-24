import React from 'react';
import { SERVER_URL } from '../../config/globals';
import { getClassName } from '../../utils/helpers';
import Button from './Button';

function FileBtn({ children, path, className, onClick, ...props }) {
  const _onClick = e => {
    typeof onClick === 'function' && onClick(e);
    if (!props.forceCustomHandler) {
      if (window.electronAPI) {
        electronAPI.openFile(SERVER_URL + path);
      } else {
        window.open(
          SERVER_URL + path,
          '_blank',
          'frame=true,nodeIntegration=no'
        );
      }
    }
  };

  return (
    <Button
      className={getClassName('btn--border px-2 py-1', className)}
      onClick={_onClick}>
      {children}
    </Button>
  );
}

export default FileBtn;
