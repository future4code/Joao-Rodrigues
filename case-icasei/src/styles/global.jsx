import { createTheme} from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

export const theme = createTheme({
    palette:{
        primary:{
            light: '#464649',
            main: '#1F1F23',
            dark: '#18181B'
        },

        secondary:{
            light: '#B98AFF',
            main: '#A970FF',
            dark: '#6C3DB3'
        },

        background:{
            default:'#18181B'
        }
    }
});

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    li{
        list-style: none;
    }
`