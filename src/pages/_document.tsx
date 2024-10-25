import { Head, Html, Main, NextScript } from 'next/document';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin']
});

export default function Document() {
	return (
		<Html lang='ru'>
			<Head />
			<body className={`${notoSansKR.className}`}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
