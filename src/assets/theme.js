import { createTheme } from '@material-ui/core';
import {primaryColor, secondaryColor} from '../assets/colors';



export const theme = createTheme({
    palette: {
            primary: {
                main: primaryColor
             
            },
            secondary: {
                main: secondaryColor
            },

    },
});