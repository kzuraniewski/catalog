import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider } from '@mui/material';
import baseTheme from '../themes/base';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={baseTheme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
