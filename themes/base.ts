import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
	palette: {
		primary: {
			main: '#212121',
			light: '#484848',
			dark: '#000000',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#0d7377',
			light: '#4ca2a6',
			dark: '#00474b',
			contrastText: '#ffffff',
		},
	},
});

// theme = responsiveFontSizes(theme);

export default theme;
