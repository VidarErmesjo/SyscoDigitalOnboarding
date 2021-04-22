import React from "react";

import {
    createStyles,
    makeStyles,
    Theme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        wave: {
            position: 'absolute',
            left: 0,
        },
	}),
);

export default function Wave() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1540"
                height="412"
                fill="n<one"
                viewBox="0 0 1540 412"
                className={classes.wave}
                >
                <g clipPath="url(#clip0)" filter="url(#filter0_d)">
                <path
                    fill="url(#paint0_linear)"
                    d="M257.5 459.806C92.45 514.659-89.108 563.311-101 564.589v9.586l510.015 51.657 923.665 40.474L1631 505.476c-131.39-8.876-193.7-4.983-71.5-81.67 122.2-76.687-138.85-103.387-152.5-149-64.5-215.5-149.58-160.874-178-140-32 23.5-88 74.823-104.43 87.886-136.171 108.285-398.577 276.713-358.801 84.143C815.489 66.122 676.5 219.806 571 298.806s-251.515 140.4-313.5 161z"
                />
                <path
                    fill="url(#paint1_linear)"
                    d="M278.199 366.672C103.619 424.666-88.421 476.105-101 477.456v10.135l539.461 54.617L1415.46 585 1731 414.957c-138.98-9.384-204.88-5.268-75.63-86.348 129.26-81.08-146.86-109.308-161.3-157.534-68.23-227.844-158.22-170.09-188.28-148.02-33.85 24.846-93.08 79.109-110.46 92.92-144.03 114.488-421.589 292.563-379.517 88.963 52.591-254.501-94.423-92.014-206.014-8.489-111.591 83.526-266.036 148.442-331.6 170.223z"
                ></path>
                    </g>
                    <defs>
                    <filter
                        id="filter0_d"
                        width="1548"
                        height="828"
                        x="-4"
                        y="-408"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                        <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                        ></feBlend>
                        <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                        ></feBlend>
                    </filter>
                    <linearGradient
                        id="paint0_linear"
                        x1="-326"
                        x2="1491.8"
                        y1="316.555"
                        y2="102.369"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#386781"></stop>
                        <stop offset="0" stopColor="#C4C4C4" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#386781"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear"
                        x1="-326"
                        x2="1491.8"
                        y1="316.555"
                        y2="102.369"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#386781"></stop>
                        <stop offset="0" stopColor="#C4C4C4" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#386781"></stop>
                    </linearGradient>
                    <clipPath id="clip0">
                        <path
                        fill="#fff"
                        d="M0 0H1540V820H0z"
                        transform="translate(0 -408)"
                        ></path>
                    </clipPath>
                </defs>
            </svg>
        </React.Fragment>
    );
}