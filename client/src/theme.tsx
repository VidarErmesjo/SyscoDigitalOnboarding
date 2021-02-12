import { createMuiTheme } from '@material-ui/core/styles';
  
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#383F48',
            main: '#121921',    // Sysco Black
            dark: '#000',
        },  
        secondary: {
            light: '#6CFFC8',
            main: '#00FF97',    // Sysco Green
            dark: '#00CA68',
        },  
        error: {
            light: '#FF823b',
            main: '#FF4E00',    // Sysco Red
            dark: '#C30500',
        },  
        warning: {
            light: '#FFFF57',
            main: '#FFF200',    // Sysco Yellow
            dark: '#C7C000',
        },  
        info: {
            light: '#79FFFF',
            main: '#27F7FF',    // Sysco Blue
            dark: '#00C4CC',
        },  
        success: {
            light: '#6CFFC8',
            main: '#00FF97',    // Sysco Green
            dark: '#00CA68',
        },
        text: {
            primary: '#FFF',    // White
            secondary: '#000',  // Black
        },  
        background: {
            default: '#121921', // Sysco Black
            paper: '#FFF',      // White
         },
    },
    typography: {
        fontFamily: "Arial Regular",
    },
    overrides: {
    },
    props: {
    }
});

export default theme;