import cn from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useState } from 'react';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Divider } from '../Divider/Divider';
import { Rating } from '../Rating/Rating';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { Tag } from '../Tag/Tag';
import styles from './Product.module.css';
import { ProductProps } from './Product.props';

export const Product = motion(
	forwardRef(
		(
			{ product, className, ...props }: ProductProps,
			ref: ForwardedRef<HTMLDivElement>
		): JSX.Element => {
			const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
			const [isNewReviewOpened, setIsNewReviewOpened] =
				useState<boolean>(false);

			const variants = {
				visible: { opacity: 1, height: 'auto' },
				hidden: { opacity: 0, height: 0 }
			};

			return (
				<div className={cn(className)} ref={ref} {...props}>
					<Card className={styles.product}>
						<div className={styles.logo}>
							<Image
								src={product.image}
								alt={product.title}
								width={70}
								height={70}
							/>
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
							{priceRu(product.credit)}/
							<span className={styles.month}>мес</span>
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
							{product.reviewAvg ? (
								product.reviewAvg > 0 && (
									<Button
										appearance='ghost'
										arrow={isReviewOpened ? 'down' : 'right'}
										onClick={() => setIsReviewOpened(!isReviewOpened)}
										className={styles.reviewButton}
									>
										Читать отзывы
									</Button>
								)
							) : (
								<Button
									appearance='ghost'
									arrow={isNewReviewOpened ? 'down' : 'right'}
									onClick={() => setIsNewReviewOpened(!isNewReviewOpened)}
									className={styles.reviewButton}
								>
									Оставить отзыв
								</Button>
							)}
						</div>
					</Card>
					<motion.div
						initial='hidden'
						animate={isReviewOpened ? 'visible' : 'hidden'}
						variants={variants}
					>
						<Card
							color='blue'
							className={cn(styles.reviews, {
								[styles.opened]: isReviewOpened,
								[styles.closed]: !isReviewOpened
							})}
						>
							{product.reviews.map(r => (
								<div key={r._id}>
									<Review review={r} />
									<Divider />
								</div>
							))}{' '}
							<ReviewForm productId={product._id} />
						</Card>
					</motion.div>
					<motion.div
						initial='hidden'
						animate={isNewReviewOpened ? 'visible' : 'hidden'}
						variants={variants}
					>
						<Card
							color='blue'
							className={cn(styles.reviews, {
								[styles.opened]: isNewReviewOpened,
								[styles.closed]: !isNewReviewOpened
							})}
						>
							<ReviewForm productId={product._id} />
						</Card>
					</motion.div>
				</div>
			);
		}
	)
);
