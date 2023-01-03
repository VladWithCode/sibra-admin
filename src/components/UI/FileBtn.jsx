import React from 'react';
import { FILE_SERVER_URL, SERVER_URL } from '../../config/globals';
import { getClassName } from '../../utils/helpers';
import Button from './Button';

function FileBtn({ children, path, className, onClick, ...props }) {
  const _onClick = (e) => {
    typeof onClick === 'function' && onClick(e);

    if (!props.forceCustomHandler) {
      // Use default logic if not especified otherwise
      if (window.electronAPI) {
        // If on electron use main process to access file
        const serverPath =
          FILE_SERVER_URL +
          String(path).replace('static', 'public').replace('/', '\\');

        electronAPI.openFile(
          SERVER_URL.includes('localhost') ? SERVER_URL + path : serverPath
        );
      } else {
        // use regular method otherwise
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
      className={getClassName(
        'border-2 rounded-md border-zinc-600 text-zinc-600 bg-transparent px-2 py-1',
        className
      )}
      onClick={_onClick}
    >
      {children}
    </Button>
  );
}

export default FileBtn;
