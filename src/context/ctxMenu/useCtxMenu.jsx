import shallow from 'zustand/shallow';

const INITIAL_CTX_MENU_STATE = {
    cursorX: 0,
    cursorY: 0,
    content: undefined,
};

const useCtxMenuStore = create(set => ({
    ...INITIAL_CTX_MENU_STATE,

    setCursorPosition: (x, y) => {
        set(() => ({ cursorPosX: x, cursorPosY: y }));
    },

    setMenuContent: list => {
        set(() => ({ content: list }));
    },
}));

function CtxMenuWrapper() {
    const { cursorX, y, content } = useCtxMenuStore(
        state => ({
            x: state.cursorX,
            y: state.cursorY,
            content: state.content,
        }),
        shallow
    );

    return <div className="absolute z-50" style={{ top: `${y}px`, left: `${x}px` }}>
        {content}
    </div>;
}
