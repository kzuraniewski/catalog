import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

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
		background: {
			paper: grey[50],
		},
	},
	typography: {
		fontFamily: 'Kanit, sans-serif',
		h1: {
			fontWeight: 400,
			fontSize: 40,
		},
		h3: {
			fontSize: 20,
		},
		h6: {
			fontWeight: 500,
			fontSize: 15,
		},
	},
	shape: {
		borderRadius: '6px',
	},
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableTouchRipple: true,
			},
		},
	},
});

// theme = responsiveFontSizes(theme);

export default theme;
