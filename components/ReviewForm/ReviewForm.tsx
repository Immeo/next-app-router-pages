import axios from 'axios';
import cn from 'classnames';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { API } from '../../helpers/api';
import { Areatext } from '../Areatext/Areatext';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { IReviewForm } from './ReviewForm.interface';
import styles from './ReviewForm.module.css';
import { IReviewSentResponse, ReviewFormProps } from './ReviewForm.props';
import CloseIcon from './close.svg';

export const ReviewForm = ({
	productId,
	className,
	isOpened,
	...props
}: ReviewFormProps): JSX.Element => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset
	} = useForm<IReviewForm>();
	const [isSuccessForm, setIsSuccessForm] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const onSubmitForm = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponse>(
				API.review.createDemo,
				{
					...formData,
					productId
				}
			);
			if (data.message) {
				setIsSuccessForm(true);
				reset();
			} else {
				setError('Что-то пошло не так');
			}
		} catch (e) {
			setError('Что-то пошло не так');
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForm)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' }
					})}
					placeholder='Имя'
					error={errors.name}
					tabIndex={isOpened ? 0 : -1}
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Заполните заголовок' }
					})}
					placeholder='Заголовок отзыва'
					className={styles.title}
					error={errors.title}
					tabIndex={isOpened ? 0 : -1}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								error={errors.rating}
								tabIndex={isOpened ? 0 : -1}
							/>
						)}
					/>
				</div>
				<Areatext
					{...register('description', {
						required: { value: true, message: 'Заполните описание' }
					})}
					placeholder='Текст отзыва'
					className={styles.description}
					error={errors.description}
					tabIndex={isOpened ? 0 : -1}
				/>
				<div className={styles.submit}>
					<Button appearance='primary' tabIndex={isOpened ? 0 : -1}>
						Отправить
					</Button>
					<span className={styles.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			{isSuccessForm && (
				<div className={cn(styles.success, styles.panel)}>
					<div className={styles.successTitle}>Ваш отзыв отправлен</div>
					<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
					<CloseIcon
						className={styles.close}
						onClick={() => setIsSuccessForm(false)}
					/>
				</div>
			)}
			{error && (
				<div className={cn(styles.error, styles.panel)}>
					Что-то пошло не так, попробуйте обновить страницу
					<CloseIcon
						className={styles.close}
						onClick={() => setError(undefined)}
					/>
				</div>
			)}
		</form>
	);
};
