import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'node:querystring';
import { API } from '../../helpers/api';
import { firstLevelMenu } from '../../helpers/helpers';
import { TopLevelCategory } from '../../interface/pages.interfase';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { withLayout } from '../../layout/Layout';
import { TopPageConponent } from '../../page-components/indesx';

function TopPage({ firstCategory, page, products }: TopPageProps): JSX.Element {
	return (
		<>
			{page && products && (
				<>
					<Head>
						<title>{page.metaTitle}</title>
						<meta property='og:title' content={page.metaTitle} />
						<meta name='description' content={page.metaDescription} />
						<meta property='og:description' content={page.metaDescription} />
						<meta property='og:type' content='article' />
					</Head>
					<TopPageConponent
						firstCategory={firstCategory}
						page={page}
						products={products}
					/>
				</>
			)}
		</>
	);
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];
	for (const m of firstLevelMenu) {
		const { data: menu } = await axios.post<MenuItem[]>(API.TopPage.find, {
			firstCategory: m.id
		});
		paths = paths.concat(
			menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`))
		);
	}

	return {
		paths,
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
	params
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true
		};
	}
	try {
		const { data: menu } = await axios.post<MenuItem[]>(API.TopPage.find, {
			firstCategory: firstCategoryItem.id
		});
		if (menu.length == 0) {
			return {
				notFound: true
			};
		}
		const { data: page } = await axios.get<TopPageModel>(
			API.TopPage.byAlias + params.alias
		);
		const { data: products } = await axios.post<ProductModel[]>(
			API.products.find,
			{
				category: page.category,
				limit: 10
			}
		);

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem.id,
				page,
				products
			}
		};
	} catch {
		return {
			notFound: true
		};
	}
};

interface TopPageProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}
