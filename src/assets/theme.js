import {  createMuiTheme } from '@material-ui/core/styles';
import { shadows } from '@material-ui/system';



export const theme = createMuiTheme({
    palette: {
            primary: {
                main: "#c56264",
            },
            secondary: {
                main: "#c56264",
            },

    shadows: {
           boxShadow: 2,
           width: '50rem',
           height: '50rem',
           bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
           color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
           p: 1,
           m: 1,
     
        }}
});