import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="description" content="Catalog" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;400;500&display=swap"
					rel="stylesheet"
				/>

				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
