import React from 'react';
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme,
    Typography
} from '@material-ui/core';
import {
    AccountBox,
    Assignment,
    DoneOutline
} from '@material-ui/icons';
import Logo from './Logo'


 /* Styles */
 const iconSize = 35;
 const useStyles = makeStyles((theme: Theme) =>
 createStyles({
     /* Icons */
     iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '4em'
     },
     icons: {
        color: theme.palette.secondary.main,
        fontSize: theme.typography.pxToRem(iconSize),
        width: theme.typography.pxToRem(iconSize),
        height: theme.typography.pxToRem(iconSize),
        marginRight: '5px'
     },
     /* --------------  */
     container: {
         display: 'flex',
         flexDirection: 'column',
     },
     infoBoxes: {
         display: 'flex',
         flexDirection: 'row',
     },
     mainHeader: {
        color: theme.palette.secondary.main,
        height: '78px',
        width: '384px',
        left: '456px',
        top: '52px',
        fontSize: '60px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '69px',
        letterSpacing: '0em',
        textAlign: 'center'
     },
     headers: {
        color: theme.palette.secondary.main,
        fontSize: '34px !important',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '39px',
        letterSpacing: '0em',
        textAlign: 'center',
     },
     paragraphs: {
        height: '225px',
        width: '288px',
        top: '334px',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '28px',
        letterSpacing: '0em',
        textAlign: 'center',
        margin: '35px 30px !important'

     }
 })
);

export default function Part1(props: any) {
    const [open, setOpen] = React.useState(false);
    /* Bringing styles into component */
    const theme = useTheme();
    const classes = useStyles();
    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    function LeftComponent() {
        return (
            <Typography color="secondary" variant="body1">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </Typography>
        )
    }

    function RightComponent() {
        return (
            <React.Fragment>
                <img src="https://picsum.photos/200"/>
                <img src="https://picsum.photos/100"/>
                <img src="https://picsum.photos/400/200"/>
            </React.Fragment>
        );
    }

   
    return (
        <React.Fragment>
            <Typography color="textPrimary">
                <div className={classes.container}>
                    {/* Header med Logo */}
                    <div className={classes.infoBoxes}>
                        <h1 className={classes.mainHeader}>
                            Dette er
                        </h1>
                        <Logo />
                    </div>
                    {/* Info boxes */}
                    <div className={classes.infoBoxes}>
                        {/* Hvem er vi? */}
                        <div>
                            <div className={classes.iconContainer}>
                                <AccountBox className={classes.icons} />
                                <h2 className={classes.headers}>
                                    Hvem er vi?
                                </h2>
                            </div>
                            
                            <p className={classes.paragraphs}>
                                Vi er 200 spesialister fra 20 land, fordelt på 8 kontorer i Skandinavia.
                                Sammen skaper vi digitale suksesshistorier i meningsfulle bransjer.
                            </p>
                        </div>
                        {/* Hva vi gjør */}
                        <div>
                            <div className={classes.iconContainer}>
                                <Assignment className={classes.icons} />
                                <h2 className={classes.headers}>
                                    Hva vi gjør
                                </h2>
                            </div>
                            <p className={classes.paragraphs}>
                                Vi leverer smarte applikasjoner til energibransjen, spesialiserte konsulenter og
                                sikker drift og overvåkning av IT-infrastuktur og databaser.
                            </p>
                        </div>
                        {/* Vi er problemløsere */}
                        <div>
                            <div className={classes.iconContainer}>
                                <DoneOutline className={classes.icons} />
                                <h2 className={classes.headers}>
                                    Problemløsere
                                </h2>
                            </div>
                            <p className={classes.paragraphs}>
                                Med teknologiske superkrefter og dyp bransjekunnskap hjelper vi deg med å snu kompliserte 
                                utfordringer til digitale suksesshistorier.
                            </p>
                        </div>
                    </div>
                </div>
            </Typography>
        </React.Fragment>
    );
};


{/* <React.Fragment>
            <button onClick={handleOpen}>Modal</button>
            <SyscoModal
                title="Tittel på modalen"
                icon={<InfoIcon/>}
                left={<LeftComponent/>}
                right={<RightComponent/>}
                open={open}
                handleClose={handleClose}
                />
        </React.Fragment> */}