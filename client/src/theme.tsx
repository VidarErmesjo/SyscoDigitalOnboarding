import { createMuiTheme } from '@material-ui/core/styles';
  
export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#27F7FF',
        },
  
        secondary: {
            main: '#FF4E00',
        },
  
        error: {
            main: '#FF4E00',
        },
  
        warning: {
            main: '#FFF200',
        },
  
        info: {
            main: '#27F7FF',
        },
  
        success: {
            main: '#00FF97',
        },

        text: {
            primary: '#FFF',
            secondary: '#000',
        },
  
        background: {
            default: '#121921', // Sysco black
            paper: '#FFF',
         },
    },

    typography: {
        fontFamily: "Arial",
    },

    props: {
    }
});