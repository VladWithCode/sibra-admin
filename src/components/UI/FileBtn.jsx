import React, { useState } from 'react';
import { FILE_SERVER_URL, SERVER_URL } from '../../config/globals';
import getClassname from '../../utils/getClassname';
import Button from './Button';

function FileBtn({ children, path, className, onClick, ...props }) {
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);

    const _onClick = e => {
        typeof onClick === 'function' && onClick(e);

        if (!props.forceCustomHandler) {
            // Use default logic if not especified otherwise
            if (window.electronAPI) {
                // If on electron use main process to access file
                const serverPath =
                    FILE_SERVER_URL +
                    String(path).replace('static', 'public').replace('/', '\\');

                electronAPI.openFile(
                    SERVER_URL.includes('localhost')
                        ? SERVER_URL + path
                        : serverPath
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
    const onSecondaryClick = e => {
        e.preventDefault();

        setShowContextMenu(true);
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    };

    return (
        <>
            <Button
                className={getClassname(
                    'border-2 rounded-md border-zinc-600 text-zinc-600 bg-transparent px-2 py-1',
                    className
                )}
                onClick={_onClick}
                onContextMenu={onSecondaryClick}
            >
                {children}
            </Button>
            <div
                className={getClassname(
                    'absolute top-0 left-0 right-0 bottom-0 pointer-events-none'
                )}
                onClick={() => setShowContextMenu(false)}
            >
                {showContextMenu && (
                    <ContextMenu cursorX={cursorX} cursorY={cursorY} />
                )}
            </div>
        </>
    );
}

export default FileBtn;

function ContextMenu({ cursorX, cursorY }) {
    return (
        <div
            className="fixed w-32 py-2 bg-zinc-200 shadow-md shadow-zinc-300"
            style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
        ></div>
    );
}
