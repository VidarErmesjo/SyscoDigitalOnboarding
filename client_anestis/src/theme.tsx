import { createMuiTheme } from '@material-ui/core/styles';

const syscoBlack = '#121921';

const syscoGreen = '#00FF97';

const syscoRed = '#FF4E00';

const syscoYellow = '#FFF200';

const syscoBlue = '#27F7FF';

const syscoBackground = {
    default: '#000',
    paper: '#FFF'
};

const syscoText = {
    primary: '#FFF',
    secondary: '#000'
};
  
const theme = createMuiTheme({
    palette: {
        primary: { main: syscoBlack },
        secondary: { main: syscoGreen },
        error: { main: syscoRed },  
        warning: { main: syscoYellow },  
        info: { main: syscoBlue },  
        success: { main: syscoGreen },
        text: syscoText,  
        background: syscoBackground,
    },
    typography: {
        fontFamily: "Arial Regular",
    },
    transitions: {
        duration: {
            enteringScreen: 1000,
            standard: 500,
        },
    },
    overrides: {
    },
    props: {
    }
});

export default theme;