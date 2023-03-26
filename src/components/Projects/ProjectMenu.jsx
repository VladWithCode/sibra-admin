import React from 'react';
import FloatingMenu from '../../components/Floating/FloatingMenu';
import Action from '../Floating/Action';
import SVG from '../UI/SVG';

function ProjectMenu() {
    return (
        <FloatingMenu>
            <Action
                className="p-2 shadow-md shadow-zinc-300 rounded-full hover:shadow-lg bg-white"
                tooltip="Editar proyecto"
            >
                <SVG
                    href="./assets/svg/pencil.svg#pencil"
                    className="h-7 w-7 fill-info"
                />
            </Action>
            <Action
                className="p-2 shadow-md shadow-zinc-300 rounded-full hover:shadow-lg bg-white"
                tooltip="Generar Lotes"
            >
                <SVG
                    href="./assets/svg/land.svg#land"
                    className="h-7 w-7 fill-info"
                />
            </Action>
        </FloatingMenu>
    );
}

export default ProjectMenu;
