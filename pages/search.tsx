import axios from 'axios';
import { GetStaticProps } from 'next';
import { API } from '../helpers/api';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

function Search(): JSX.Element {
	return <div>Search</div>;
}

export default withLayout(Search);

export const getStaticProps9: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.TopPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
