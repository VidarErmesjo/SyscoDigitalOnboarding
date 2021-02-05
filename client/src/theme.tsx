import { createMuiTheme } from '@material-ui/core/styles';
  
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#121921',    // Sysco Black
        },  
        secondary: {
            main: '#00FF97',    // Sysco Green
        },  
        error: {
            main: '#FF4E00',    // Sysco Red
             //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
        },  
        warning: {
            main: '#FFF200',    // Sysco Yellow
            //backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
        },  
        info: {
            main: '#27F7FF',    // Sysco Blue
            //backgroundImage: 'linear-gradient( 136deg, #79FFFF 0%, #27F7FF 50%, #00C4CC 100%)',
        },  
        success: {
            main: '#00FF97',    // Sysco Green
            //backgroundImage: 'linear-gradient( 136deg, #6CFFC8 0%, #00FF97 50%, #00CA68 100%)',
        },
        text: {
            primary: '#FFF',    // White
            secondary: '#000',  // Black
        },  
        background: {
            default: '#000',    // Black
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