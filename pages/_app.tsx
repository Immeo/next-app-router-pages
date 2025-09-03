import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';
import Head from 'next/head';
import { Router } from 'next/router';
import ym, { YMInitializer } from 'react-yandex-metrika';
import '../styles/globals.css';

const notoSansKr = Noto_Sans_KR({
	subsets: ['latin']
});

Router.events.on('routeChangeComplete', (url: string) => {
	if (typeof window !== 'undefined') {
		ym('hit', url);
	}
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
				<link rel='preconnect' href='https://mc.yandex.ru' />
			</Head>
			<YMInitializer
				accounts={[]}
				options={{ webvisor: true, defer: true }}
				version='2'
			/>
			<div className={notoSansKr.className}>
				<Component {...pageProps} />
			</div>
		</>
	);
}
