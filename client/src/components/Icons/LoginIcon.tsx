import React from "react";

import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default function LoginIcon(props: SvgIconProps) {
    return (
        <SvgIcon
            viewBox="0 0 43 43"
            {...props}
            >
            <path d="M19.708 12.542L17.2 15.05l4.658 4.658H3.583v3.584h18.275L17.2 27.95l2.508 2.508 8.958-8.958-8.958-8.958zm16.125 21.5H21.5v3.583h14.333a3.594 3.594 0 003.583-3.583V8.958a3.594 3.594 0 00-3.583-3.583H21.5v3.583h14.333v25.084z"/>
        </SvgIcon>
    );
}