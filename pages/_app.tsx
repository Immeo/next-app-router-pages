import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';
import Head from 'next/head';
import '../styles/globals.css';

const notoSansKr = Noto_Sans_KR({
	subsets: ['latin']
});

export default function App({
	Component,
	pageProps,
	router
}: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Mytop - наш лучший топ</title>
				<meta
					property='og:url'
					content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
				/>
				<meta property='og:locale' content='ru_RU' />
			</Head>
			<div className={notoSansKr.className}>
				<Component {...pageProps} />
			</div>
		</>
	);
}
