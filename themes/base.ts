import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
	palette: {
		primary: {
			main: '#134021',
			light: '#3f6b49',
			dark: '#001b00',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#80aa3f',
			light: '#b2dc6e',
			dark: '#507b0a',
			contrastText: '#000000',
		},
	},
});

// theme = responsiveFontSizes(theme);

export default theme;
