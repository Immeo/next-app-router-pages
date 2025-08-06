import Image from 'next/image';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Divider } from '../Divider/Divider';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import styles from './Product.module.css';
import { ProductProps } from './Product.props';

export const Product = ({
	product,
	className,
	...props
}: ProductProps): JSX.Element => {
	return (
		<Card className={styles.product}>
			<div className={styles.logo}>
				<Image src={product.image} alt={product.title} width={70} height={70} />
			</div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>
				{priceRu(product.price)}
				{product.oldPrice && (
					<Tag color='green' className={styles.oldPrice}>
						{priceRu(product.oldPrice - product.price)}
					</Tag>
				)}
			</div>
			<div className={styles.credit}>
				{priceRu(product.credit)}/<span className={styles.month}>мес</span>
			</div>
			<div className={styles.rating}>
				<Rating rating={product.reviewAvg ?? product.initialRating} />
			</div>
			<div className={styles.tags}>
				{product.categories.map(c => (
					<Tag key={c} color='ghost' className={styles.category}>
						{c}
					</Tag>
				))}
			</div>
			<div className={styles.priceTitle}>Цена</div>
			<div className={styles.creditTitle}>Кредит</div>
			<div className={styles.rateTitle}>
				{product.reviewCount}{' '}
				{declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
			</div>
			<Divider className={styles.hr} />
			<div className={styles.description}>{product.description}</div>
			<div className={styles.feature}>
				{product.characteristics.map(c => (
					<div className={styles.characteristics} key={c.name}>
						<span className={styles.characteristicName}>{c.name}</span>
						<span className={styles.dots}></span>
						<span className={styles.characteristicValue}>{c.value}</span>
					</div>
				))}
			</div>
			<div className={styles.advBlock}>
				{product.advantages && (
					<div className={styles.advantages}>
						<div className={styles.advTitle}>Преимущества</div>
						<div>{product.advantages}</div>
					</div>
				)}
				{product.disadvantages && (
					<div className={styles.disadvantages}>
						<div className={styles.advTitle}>Недостатки</div>
						<div>{product.disadvantages}</div>
					</div>
				)}
			</div>
			<Divider className={styles.hr} />
			<div className={styles.actions}>
				<Button appearance='primary'>Узнать подробнее</Button>
				<Button
					appearance='ghost'
					arrow='right'
					className={styles.reviewButton}
				>
					Читать отзывы
				</Button>
			</div>
		</Card>
	);
};
