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
             //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
        },  
        warning: {
            light: '#FFFF57',
            main: '#FFF200',    // Sysco Yellow
            dark: '#C7C000',
            //backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
        },  
        info: {
            light: '#79FFFF',
            main: '#27F7FF',    // Sysco Blue
            dark: '#00C4CC',
            //backgroundImage: 'linear-gradient( 136deg, #79FFFF 0%, #27F7FF 50%, #00C4CC 100%)',
        },  
        success: {
            light: '#6CFFC8',
            main: '#00FF97',    // Sysco Green
            dark: '#00CA68',
            //backgroundImage: 'linear-gradient( 136deg, #6CFFC8 0%, #00FF97 50%, #00CA68 100%)',
        },
        text: {
            primary: '#FFF',    // White
            secondary: '#000',  // Black
        },  
        background: {
            default: '#121921', // Sysco Black '#000',    // Black
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