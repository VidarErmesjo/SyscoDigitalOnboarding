import React from "react";

import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default function CheckIcon(props: SvgIconProps) {
    return (
        <SvgIcon
            viewBox="0 0 25 27"
            {...props}
            >
            <path d="M20.594 5.458l1.458 1.519-13.27 13.824-5.834-6.077 1.458-1.519 4.375 4.558L20.594 5.458zm0-3.07L8.78 14.691l-4.375-4.558L0 14.724l8.781 9.148L25 6.977l-4.406-4.59z"/>
        </SvgIcon>
    );
}