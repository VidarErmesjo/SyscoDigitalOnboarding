import React from 'react';

import {
    Box,
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import {
    SyscoPage,
    SyscoOverlay
} from '../../../components/Custom';

import {
    AssignmentIcon,
    UpRightArrowIcon
} from '../../../components/icons';

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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        item: {
            width: '100%',
        },
        syscoBox: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            backgroundColor: `rgba(42, 52, 63, 0.91)`,
            width: 625,
            height: 600,
        },
        listButton: {
            transition: theme.transitions.duration.standard + 'ms',
            '&:hover': {
                transform: `scale(1.2)`,
                marginLeft: theme.spacing(4),
            },
        },
    })
);

function Overlay1() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay2() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay3() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay4() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay5() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay6() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay7() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay8() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay9() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay10() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay11() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay12() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay13() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

function Overlay14() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

type ListItem = {
    title: string;
    content: JSX.Element | null;
}

const leftContent: ListItem[] = [
    {
        title: "Overordnede retningslinjer",
        content: <Overlay1/>,
    },
    {
        title: "Personvern",
        content: <Overlay2/>,
    },
    {
        title: "Ansettelse",
        content: <Overlay3/>,
    },
    {
        title: "Medarbeiderutvikling",
        content: <Overlay4/>,
    },
    {
        title: "Arbeid og overtid",
        content: <Overlay5/>,
    },
    {
        title: "Permisjon",
        content: <Overlay6/>,
    },
    {
        title: "Pensjon",
        content: <Overlay7/>,
    },
]

const rightContent: ListItem[] = [
    {
        title: "Lønn og permisjon",
        content: <Overlay8/>,
    },
    {
        title: "Personalgoder",
        content: <Overlay9/>,
    },
    {
        title: "Tjenestereiser",
        content: <Overlay10/>,
    },
    {
        title: "Ferie",
        content: <Overlay11/>,
    },
    {
        title: "Arbeidstakers sykdom",
        content: <Overlay12/>,
    },
    {
        title: "Barns sykdom",
        content: <Overlay13/>,
    },
    {
        title: "Helse, miljø og sikkerhet",
        content: <Overlay14/>,
    },
]

interface IListButton {
    value: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ListButton({value, onClick}: IListButton) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <IconButton
                disableRipple
                onClick={onClick}
                className={classes.listButton}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
                >
                <Typography
                    color="textPrimary"
                    style={{ fontSize: '35px', lineHeight: '40.25px' }}
                    >
                    {value}
                </Typography>
                <UpRightArrowIcon color="secondary" style={{ marginLeft: theme.spacing(1) }}/>
            </IconButton>
        </React.Fragment>
    );
}


function ButtonOverlayWrapper({title, content}: ListItem) {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Title = () => <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >
        <Typography style={{
                fontSize: 30,
                lineHeight: '34,5px',
                textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`
            }}>
            {title}
        </Typography>
        <UpRightArrowIcon color="secondary" style={{ marginLeft: theme.spacing(1) }}/>
    </Box>

    const Content = () => content!;

    return (
        <React.Fragment>
            <ListButton value={title} onClick={handleOpen}/>
            <SyscoOverlay
                open={open}
                title={<Title/>}
                content={<Content/>}
                handleClose={handleClose}
            />
        </React.Fragment>
    );
}

interface ISyscoBox {
    listItem: ListItem[];
}

function SyscoBox({listItem}: ISyscoBox) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.syscoBox}>
            <ul style={{
                    color: theme.palette.secondary.main,
                    listStyle: `square`,
                    fontSize: "40px",
                    marginTop: theme.spacing(8)
                }}
                >
                {listItem.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            marginLeft: theme.spacing(4),
                            marginBottom: theme.spacing(0.5)
                        }}>
                        <ButtonOverlayWrapper title={item.title} content={item.content}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Content() {
    const classes = useStyles();

    return (
        <span className={classes.content}>
            <Box
                position="absolute"
                left="98px"
                top="137px"
                >
                <SyscoBox listItem={leftContent}/>
            </Box>
            <Box
                position="absolute"
                left="785px"
                top="137px"
                >
                <SyscoBox listItem={rightContent}/>
            </Box>
        </span>
    );
}

export default function Page10() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >
        <Typography
            color="textPrimary"
            style={{ fontSize: 40, lineHeight: '46px' }}
            >
            Personalhåndboka oppsummert
        </Typography>
        <AssignmentIcon
            color="inherit"
            fontSize="large"
            style={{ marginLeft: theme.spacing(2) }}
        />
    </Box>

    const Component = (): JSX.Element => {
        return (
            <SyscoPage
                title={<Title/>}
                category={null}
                icon={null}
                content={<Content/>}
                color="secondary"
            />           
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
}