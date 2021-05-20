import React from "react";

import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default function AvatarIcon(props: SvgIconProps) {
    return (
        <SvgIcon
            viewBox="0 0 36 36"
            >
            <path d="M4.5 7.5v21a3 3 0 003 3h21c1.65 0 3-1.35 3-3v-21c0-1.65-1.35-3-3-3h-21a3 3 0 00-3 3zm18 6c0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5S15.51 9 18 9s4.5 2.01 4.5 4.5zM9 25.5c0-3 6-4.65 9-4.65s9 1.65 9 4.65V27H9v-1.5z"/>
        </SvgIcon>
    );
}