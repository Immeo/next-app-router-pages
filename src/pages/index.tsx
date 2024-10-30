import localFont from 'next/font/local';
import Button from './components/Button/Button';
import Htag from './components/Htag/Htag';
import PTag from './components/PTag/PTag';
import { Rating } from './components/Rating/Rating';
import VariableTag from './components/VariableTag/VariableTag';

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
			<PTag size='s'>
				Принимая во внимание показатели успешности, дальнейшее развитие
				различных форм деятельности предполагает независимые способы реализации
				анализа существующих паттернов поведения. Приятно, граждане, наблюдать,
				как тщательные исследования конкурентов представляют собой не что иное,
				как квинтэссенцию победы маркетинга над разумом и должны быть
				рассмотрены исключительно в разрезе маркетинговых и финансовых
				предпосылок! Мы вынуждены отталкиваться от того, что существующая теория
				способствует подготовке и реализации модели развития.
			</PTag>
			<Rating rating={1} isEditable={false} />

			<VariableTag size='m' color='ghost'>
				1
			</VariableTag>
			<VariableTag size='m' color='red'>
				2
			</VariableTag>
			<VariableTag size='m' color='grey'>
				3
			</VariableTag>
			<VariableTag size='m' color='green'>
				4
			</VariableTag>
			<VariableTag size='s' color='primary'>
				5
			</VariableTag>
		</>
	);
}
