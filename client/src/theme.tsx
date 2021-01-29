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
        },  
        warning: {
            main: '#FFF200',    // Sysco Yellow
        },  
        info: {
            main: '#27F7FF',    // Sysco Blue
        },  
        success: {
            main: '#00FF97',    // Sysco Green
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