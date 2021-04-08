import React from "react";

import {
    createStyles,
    makeStyles,
    Theme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        outerWave: {
            position: 'absolute',
            width: 1832,
            height: 585,
            left: -101,
            top: 408,
        },
        innerWave: {
            position: 'absolute',
            width: 1732,
            height: 553.31,
            left: -101,
            top: 521,
        },
	}),
);

export default function Wave() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <svg
                width="1540"
                height="499"
                viewBox="0 0 1540 499"
                fill="none"
                className={classes.outerWave}
                >
                <path d="M278.199 366.672C103.619 424.666 -88.4216 476.105 -101 477.456V487.591L438.461 542.208L1415.46 585L1731 414.957C1592.02 405.573 1526.12 409.689 1655.37 328.609C1784.63 247.529 1508.51 219.301 1494.07 171.075C1425.84 -56.7693 1335.85 0.985798 1305.79 23.0554C1271.94 47.9015 1212.71 102.164 1195.33 115.975C1051.3 230.463 773.741 408.538 815.813 204.938C868.404 -49.5635 721.39 112.924 609.799 196.449C498.208 279.975 343.763 344.891 278.199 366.672Z" fill="url(#paint0_linear)"/>
                <defs>
                    <linearGradient id="paint0_linear" x1="-326" y1="316.555" x2="1491.8" y2="102.369" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#386781"/>
                    <stop offset="0.0001" stop-color="#C4C4C4" stop-opacity="0"/>
                    <stop offset="1" stop-color="#386781"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg
                width="1540"
                height="299"
                viewBox="0 0 1549 299"
                fill="none"
                className={classes.innerWave}
                >
                <path offset="0 -50" d="M257.5 346.806C92.4502 401.659 -89.1082 450.311 -101 451.589V461.175L409.015 512.832L1332.68 553.306L1631 392.476C1499.61 383.6 1437.3 387.493 1559.5 310.806C1681.7 234.119 1420.65 207.419 1407 161.806C1342.5 -53.6937 1257.42 0.932388 1229 21.8063C1197 45.3063 1141 96.6292 1124.57 109.692C988.399 217.977 725.993 386.405 765.769 193.835C815.489 -46.8783 676.5 106.806 571 185.806C465.5 264.806 319.485 326.206 257.5 346.806Z" fill="url(#paint0_linear)"/>
                <defs>
                    <linearGradient id="paint0_linear" x1="1184.3" y1="282.847" x2="-94.8169" y2="344.034" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#386781"/>
                    <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </React.Fragment>
    );
}