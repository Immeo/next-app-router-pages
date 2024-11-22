import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IMenuItem } from '../../../interface/menu.interface';
import { ITopPageModel } from '../../../interface/pages.interfase';
import { IProductModel } from '../../../interface/product.interface';
import { withLayout } from '../../../layout/Layout';

const firstCategory = 0;

function Courses({ menu, page, products }: ICourseProps): JSX.Element {
	return <>{products && products.length && <h1>Курсы {products.length}</h1>}</>;
}

export default withLayout(Courses);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<IMenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory: 0
		}
	);

	return {
		paths: menu.flatMap(m => m.pages).map(p => `/courses/${p}`),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<ICourseProps> = async ({
	params
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	const { data: menu } = await axios.post<IMenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory
		}
	);
	const { data: page } = await axios.get<ITopPageModel>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
	);
	const { data: products } = await axios.post<IProductModel[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
		{
			category: page.category,
			limit: 10
		}
	);

	return {
		props: {
			menu,
			firstCategory,
			page,
			products
		}
	};
};

interface ICourseProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: number;
	page: ITopPageModel;
	products: IProductModel[];
}
