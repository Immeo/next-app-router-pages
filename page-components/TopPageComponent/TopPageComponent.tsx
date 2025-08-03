import { useReducer } from 'react';
import { Advantages, HhData, Htag, Product, Sort, Tag } from '../../components';
import { SortEnum } from '../../components/Sort/Sort.props';
import { TopLevelCategory } from '../../interfaces/page.interface';
import style from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import { sortReducer } from './sort.reducer';

export const TopPageConponent = ({
	page,
	products,
	firstCategory
}: TopPageComponentProps) => {
	const [{ products: sortProducts, sort }, dispathSort] = useReducer(
		sortReducer,
		{ products, sort: SortEnum.Rating }
	);

	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	return (
		<div className={style.wrapper}>
			<div className={style.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && (
					<Tag color='grey' size='m'>
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortProducts &&
					sortProducts.map(p => <Product key={p._id} product={p} />)}
			</div>
			<div className={style.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>
					hh.ru
				</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && (
				<HhData {...page.hh} />
			)}
			{page.advantages && page.advantages.length > 0 && (
				<>
					<Htag tag='h2'>Преимущства</Htag>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page.seoText && (
				<div
					className={style.seo}
					dangerouslySetInnerHTML={{ __html: page.seoText }}
				/>
			)}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => (
				<Tag key={t} color='primary'>
					{t}
				</Tag>
			))}
		</div>
	);
};
