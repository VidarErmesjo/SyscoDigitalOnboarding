import React from "react";

import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default function ShieldIcon(props: SvgIconProps) {
    return (
        <SvgIcon
            fill="none"
            viewBox="0 0 52 52"
            {...props}
            >
            <path
                d="M26 2.167L6.5 10.833v13c0 12.025 8.32 23.27 19.5 26 11.18-2.73 19.5-13.975 19.5-26v-13L26 2.167zm0 23.811h15.167C40.018 34.905 34.06 42.857 26 45.348V26H10.833V13.65L26 6.912v19.066z"
            />
        </SvgIcon>
    );
}