import localFont from 'next/font/local';
import Button from './components/Button/Button';
import Htag from './components/Htag/Htag';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
});

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag={'h3'}>Текст</Htag>
			<Button appearance={'primary'} arrowSvg='down'>
				primary
			</Button>
			<Button appearance={'ghost'} arrowSvg='right'>
				ghost
			</Button>
		</>
	);
}
