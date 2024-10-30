import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './Rating.module.css';
import { IRating } from './Rating.props';
import StarIcon from './starIcon.svg';

export const Rating = ({
	isEditable = false,
	rating,
	setRating,
	...props
}: IRating): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	);

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		console.log(currentRating);

		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<StarIcon
					className={cn(styles.star, {
						[styles.filled]: i < currentRating
					})}
				/>
			);
		});
		setRatingArray(updatedArray);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (
				<span key={i}>{r}</span>
			))}
		</div>
	);
};
