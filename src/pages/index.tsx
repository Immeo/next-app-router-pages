import axios from 'axios';
import Htag from '../../components/Htag/Htag';
import { useStateRating } from '../../hook/workState/useStateRating';
import { IMenuItem } from '../../interface/menu.interface';
import { withLayout } from '../../layout/Layout';

function Home({ menu }: IHomeProps): JSX.Element {
	const { rating, setRating } = useStateRating(3);

	return (
		<>
			<Htag tag={'h3'}>Текст</Htag>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<IMenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory
		}
	);
	if (!menu) {
		return {
			notFound: true
		};
	}
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface IHomeProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: number;
}
