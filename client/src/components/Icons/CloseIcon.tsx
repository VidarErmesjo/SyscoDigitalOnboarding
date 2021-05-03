import React from "react";

import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default function CloseIcon(props: SvgIconProps) {
    return (
        <SvgIcon
            fill="none"
            fontSize="large"
            viewBox="0 0 42 42"
            {...props}
            >
            <path
                fill="#323232"
                d="M33.25 11.217L30.782 8.75 21 18.532 11.217 8.75 8.75 11.217 18.532 21 8.75 30.782l2.467 2.468L21 23.468l9.782 9.782 2.468-2.468L23.468 21l9.782-9.783z"
            />
        </SvgIcon>
    );
}