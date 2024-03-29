import React from "react";

import {
	createStyles,
	makeStyles,
	SvgIconProps,
	Theme,
	Typography,
	useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import { SyscoPage } from 'components/Custom';
import { AccountIcon } from 'components/Icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
		content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
		linkText: {
			transition: theme.transitions.duration.standard + 'ms',
			color: theme.palette.info.main,
			'&:hover': {
				color: theme.palette.info.dark,
				transform: `scale(1.25)`,
				marginLeft: theme.spacing(4),
			},
			fontSize: 14,
			lineHeight: '16px',
			marginTop: theme.spacing(3),
		},
    })
);

type Point = [number, number];

interface IStepByStep {
	offset: Point;
	title: string;
	text: string;
	linkText?: string;
	link?: string;
}

const steps: IStepByStep[] = [
	{
		offset: [517, 200],
		title: "Lage passord...",
		text: "Det første du må gjøre, er å lage deg et passord, Passordet ditt oppretter du på portalen til SYSCO (Se link under). Her bruker du epostadressen din som brukernavn. Følg veiledningen på nettsiden for å sette passordet.",
		linkText: "Portalen: pwportal.sysco.no.",
		link: "http://pwportal.sysco.no"
	},
	{
		offset: [462, 416],
		title: "Last ned Office-pakken",
		text: "Laget deg passord i portalen? Herlig! Da må du laste ned Office Pakken!",
		linkText: "Inn på: portal.office.com",
		link: "http://portal.office.com",
	},
	{
		offset: [394, 618],
		title: "Logger på WIKI",
		text: "Din epostadresse er: navn.navnesent@sysco.no	Brukernavn til Wiki er: xxxxx",
		linkText: "Inn på: wiki.sysco.no",
		link: "http://wiki.sysco.no",
	},
	{
		offset: [344, 813],
		title: "Logger på Sharefile",
		text: "Dette er SYSCO`s løsning til fillagring. Du bruker passord og brukernavn fra tidligere.",
		linkText: "Inn på: sysco.sharefile.eu",
		link: "http://sysco.sharefile.eu",
	},
	{
		offset: [278, 1017],
		title: "Logger på Visma Severa",
		text: "Dette er SYSCO`s løsning til timeregistrering. Passord skal ha kommet på mail.",
		linkText: "Inn på: secure.severa.com",
		link: "http://secure.severa.com",
	},
	{
		offset: [219, 1215],
		title: "Logg på Workspace",
		text: "...",
		linkText: "Inn på: sysco.facebook.com",
		link: "http://sysco.facebook.com",
	},
]

function Steps() {
	const offsetShift = 24;
	const classes = useStyles();
	const theme = useTheme();

	return (
		<React.Fragment>
			{steps.map((step, index) => (
				<span
					key={index}
					style={{
						position: 'absolute',
						top: step.offset[0] - offsetShift,
						left: step.offset[1] - offsetShift,
						zIndex: 1000,
					}}
					>
					<Typography
						color="textPrimary"
						style={{ fontSize: 14, lineHeight: '16px' }}
						>
						{step.title}
					</Typography>
					<Typography
						color="secondary"
						style={{
							width: 196,
							fontSize: 12,
							lineHeight: '16px',
							marginTop: theme.spacing(1),
						}}
						>
						{step.text}
					</Typography>
					<a
						href={step.link}
						target="_blank"
						rel="noreferrer"
						style={{ textDecoration: 'none' }}
						>
						<Typography
							className={classes.linkText}
							>
							{step.linkText}
						</Typography>
					</a>
				</span>
			))}
		</React.Fragment>
	);
}

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

			<circle cx="20.5" cy="338.5" r="20.5" fill="#00FF97"/>
			<circle cx="230.5" cy="310.5" r="10.5" fill="#00FF97"/>
			<circle cx="433.504" cy="250.5" r="10.5" fill="#00FF97"/>
			<circle cx="636.504" cy="190.5" r="10.5" fill="#00FF97"/>
			<circle cx="839.504" cy="130.5" r="10.5" fill="#00FF97"/>
			<circle cx="1042.5" cy="70.5" r="10.5" fill="#00FF97"/>
			<path id="arrow" d="M1247.33 16.458v46.084l36.21-23.042-36.21-23.042z"/>
		</svg>
	);
}

/*
*
*	Tanken her er å animere stegene.
*
*/
function Content() {
	return (
		<React.Fragment>
			<Spring
				from={{ x: 100 }}
				to={{ x: 0 }}
				//config={{ duration: theme.transitions.duration.enteringScreen + 1000 }}
				>
				{props => <Stepper color="secondary" strokeDashoffset={props.x}/>}
			</Spring>
			<Steps/>
		</React.Fragment>
	);
}

export default function Page6(): JSX.Element {
	const classes = useStyles();

	const Title = () => <div className={classes.content}>
		<Typography
			color="secondary"
			style={{
				fontSize: 60,
				lineHeight:"68.99px"
			}}
			>
			Step - By - Step
		</Typography>
	</div>

	const Component = () => {
		return (
			<SyscoPage
				title={<Title/>}
				category="Brukerkontoer"
				icon={<AccountIcon/>}
				content={<Content/>}
				color="primary"
			/>
		);
	}

	return (
		<React.Fragment>
			<div className={classes.root}>
				<Component/>
			</div>
		</React.Fragment>
	);
}