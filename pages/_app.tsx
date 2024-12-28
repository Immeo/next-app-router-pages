import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';
import '../styles/globals.css';

const notoSansKr = Noto_Sans_KR({
	subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<div className={notoSansKr.className}>
			<Component {...pageProps} />
		</div>
	);
}
