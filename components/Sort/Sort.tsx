import cn from 'classnames';
import styles from './Sort.module.css';
import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './sort.svg';

export const Sort = ({
	sort,
	setSort,
	className,
	...props
}: SortProps): JSX.Element => {
	return (
		<div className={cn(styles.sort, className)} {...props}>
			<div className={styles.sortName} id='sort'>
				Сортировка
			</div>
			<button
				aria-selected={sort == SortEnum.Rating}
				onClick={() => setSort(SortEnum.Rating)}
				id='rating'
				aria-labelledby='sort rating'
				className={cn({
					[styles.active]: sort == SortEnum.Rating
				})}
			>
				<SortIcon className={styles.sortIcon} />
				По рейтингу
			</button>
			<button
				aria-selected={sort == SortEnum.Price}
				aria-labelledby='sort price'
				id='price'
				onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort == SortEnum.Price
				})}
			>
				<SortIcon className={styles.sortIcon} />
				По цене
			</button>
		</div>
	);
};
