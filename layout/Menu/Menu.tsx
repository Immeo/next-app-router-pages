import cn from 'classnames';
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import BookIcon from '../../helpers/icons/books.svg';
import CourssIcon from '../../helpers/icons/courses.svg';
import ProductIcon from '../../helpers/icons/products.svg';
import ServiseIcon from '../../helpers/icons/services.svg';
import { IFirstLevelMenuItem, IPageItem } from '../../interface/menu.interface';
import { TopLevelCategory } from '../../interface/pages.interfase';
import styles from './Menu.module.css';

const firstLevelMenu: IFirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <CourssIcon />,
		id: TopLevelCategory.Courses
	},
	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServiseIcon />,
		id: TopLevelCategory.Services
	},
	{
		route: 'books',
		name: 'Книги',
		icon: <BookIcon />,
		id: TopLevelCategory.Books
	},
	{
		route: 'products',
		name: 'Продукты',
		icon: <ProductIcon />,
		id: TopLevelCategory.Products
	}
];

function Menu() {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => {
					return (
						<div key={m.route}>
							<Link legacyBehavior href={`/${m.route}`}>
								<a>
									<div
										className={cn(styles.firstLevel, {
											[styles.active]: m.id === firstCategory
										})}
									>
										{m.icon}
										<span>{m.name}</span>
									</div>
								</a>
							</Link>
							{m.id === firstCategory && buildSecondLevel(m)}
						</div>
					);
				})}
			</>
		);
	};

	const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div
							className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened
							})}
						>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: IPageItem[], route: string) => {
		return pages.map(page => (
			<Link legacyBehavior key={page._id} href={`/${route}/${page.alias}`}>
				<a
					className={cn(styles.thirdLevel, {
						[styles.active]: false
					})}
				>
					{page.title}
				</a>
			</Link>
		));
	};

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
}
export default Menu;
