import React from "react";

import {
	SvgIcon,
	SvgIconProps,
	useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';

import { SyscoCard } from './../../../components/Custom';
import { AccountIcon } from './../../../components/Icons';

function Stepper({color, strokeDashoffset, ...props}: SvgIconProps) {
	const theme = useTheme();

	return (
		<svg
			fill={color === "primary" ? theme.palette.primary.main : theme.palette.secondary.main}
			stroke={color === "primary" ? theme.palette.primary.main : theme.palette.secondary.main}
			width="1300"
			height="359"			
			viewBox="0 0 1300 359"
			strokeDashoffset={strokeDashoffset}
			>
			<path strokeWidth="7" d="M23.996 339.5L234.006 339.5"/>
			<path strokeWidth="7" d="M227 279.5L437.01 279.5"/>
			<path strokeWidth="7" d="M430 219.5L640.01 219.5"/>
			<path strokeWidth="7" d="M633 159.5L843.01 159.5"/>
			<path strokeWidth="7" d="M1039 39.5L1249.01 39.5"/>
			<path strokeWidth="7" d="M836 99.5L1046.01 99.5"/>
			<path strokeWidth="7" d="M230.5 343L230.5 283"/>
			<path strokeWidth="7" d="M433.504 283L433.504 223"/>
			<path strokeWidth="7" d="M636.504 223L636.504 163"/>
			<path strokeWidth="7" d="M839.504 163L839.504 103"/>
			<path strokeWidth="7" d="M1042.5 103L1042.5 43"/>
			{/* <circle cx="20.5" cy="338.5" r="20.5" fill="#00FF97"/>
			<circle cx="230.5" cy="310.5" r="10.5" fill="#00FF97"/>
			<circle cx="433.504" cy="250.5" r="10.5" fill="#00FF97"/>
			<circle cx="636.504" cy="190.5" r="10.5" fill="#00FF97"/>
			<circle cx="839.504" cy="130.5" r="10.5" fill="#00FF97"/>
			<circle cx="1042.5" cy="70.5" r="10.5" fill="#00FF97"/>
			<path id="arrow" d="M1247.33 16.458v46.084l36.21-23.042-36.21-23.042z"/> */}
		</svg>
	);
}

function Content() {
	const theme = useTheme();

	return (
		<React.Fragment>
			<Spring
				from={{ x: 100 }}
				to={{ x: 0 }}
				//config={{ duration: theme.transitions.duration.enteringScreen + 1000 }}
				>
				{props => <Stepper color="secondary" strokeDashoffset={props.x}/>}
			</Spring>
		</React.Fragment>
	);
}

export default function StepByStep(): JSX.Element {
	return (
		<React.Fragment>
			<SyscoCard
				title="Step - By - Step"
				category="Brukerkontoer"
				icon={<AccountIcon/>}
				content={<Content/>}
				color="primary"
			/>
		</React.Fragment>
	);
}