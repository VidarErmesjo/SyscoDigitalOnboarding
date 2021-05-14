import React from 'react';
import {
    Box,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    IconButton,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import {
    SyscoCard,
    SyscoPage,
    SyscoLogo
} from '../../components/Custom';

const itemSpacing = 24;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: theme.spacing(-itemSpacing),
            marginBottom: theme.spacing(4),
        },
        config: {
            position: 'relative',
            width: 1540,
            height: 820,
            backgroundColor: theme.palette.primary.main,

            //transform: `scale(0.75)`,
            userSelect: 'none',
        },
        container: {
            display: 'flex',
            flex: '0 0 row',
            gap: theme.spacing(itemSpacing),
            justifyContent: 'center',
            alignContent: 'space-evenly',
            textAlign: 'center',
            marginTop: theme.spacing(-itemSpacing),
            marginLeft: theme.spacing(itemSpacing),
            marginRight: theme.spacing(itemSpacing),
        },
        item: {
            width: '100%',
        },
    })
);

function Content() {
    const classes = useStyles();
    const theme = useTheme();

    const Logo = (): JSX.Element => {
        return (
            <Box
                marginTop={theme.typography.pxToRem(theme.spacing(10))}
                marginLeft={theme.typography.pxToRem(theme.spacing(2))}
                >
                <SyscoLogo color="secondary" style={{ fontSize: 512 }}/>
            </Box>
        );
    }

    const whoAreWeText = "Vi er 200 spesialister fra 20 land, fordelt på 8 kontorer i Skandinavia. Sammen skaper vi digitale suksesshistorier i meningsfulle bransjer.";
    const whatWeDoText = "Vi leverer smarte applikasjoner til energibransjen, spesialiserte konsulenter og sikker drift og overvåkning av IT-infrastruktur og databaser.";
    const weAreProblemSolversText = "Med teknologiske superkrefter og dyp bransjekunnskap hjelper vi deg med å snu kompliserte utfordringer til digitale suksesshistorier.";
 
    return (
        <section className={classes.config}>
            <div className={classes.title}>
                <IconButton style={{ color: theme.palette.secondary.main }} disabled>
                    <Typography color="secondary" variant="h2">Dette er</Typography>
                    <Logo/>
                </IconButton> 
            </div>
            <div className={classes.container}>
                <SyscoCard
                    title="Hvem er vi?"
                    icon={null}
                    content={whoAreWeText}
                    onClick={() => alert(whoAreWeText)}                     
                />
                <SyscoCard
                    title="Hva vi gjør"
                    icon={null}
                    content={whatWeDoText}
                    onClick={() => alert(whatWeDoText)}                     
                />
                <SyscoCard
                    title="Vi er problemløsere"
                    icon={null}
                    content={weAreProblemSolversText}
                    onClick={() => alert(weAreProblemSolversText)}                     
                />
            </div>       
        </section>
    );
}
export default function Presentation(): JSX.Element {
    const classes = useStyles();
    const theme = useTheme();

    const Component = (): JSX.Element => {
        return (
            <React.Fragment>
                <SyscoPage
                    title={null}
                    category="DEL 1"
                    icon={null}
                    content={<Content/>}
                    color="secondary"
                />    
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div className={classes.root} style={props}>
                    <Component/>
                </div>}
            </Spring>
        </React.Fragment>
    );
};