import Button from '../../components/Button/Button';
import Htag from '../../components/Htag/Htag';
import PTag from '../../components/PTag/PTag';
import Rating from '../../components/Rating/Rating';
import VariableTag from '../../components/VariableTag/VariableTag';
import { useStateRating } from '../../hook/workState/useStateRating';
import Layout from '../../layout/Layout';

export default function Home(): JSX.Element {
	const { rating, setRating } = useStateRating(3);

	return (
		<Layout>
			<Htag tag={'h3'}>Текст</Htag>
			<Button appearance={'primary'} arrowSvg='down'>
				primary
			</Button>
			<Button appearance={'ghost'} arrowSvg='right'>
				ghost
			</Button>
			<PTag size='s'>
				Принимая во внимание показатели успешности, дальнейшее развитие
			</PTag>
			<Rating rating={rating} setRating={setRating} isEditable />

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
		</Layout>
	);
}
