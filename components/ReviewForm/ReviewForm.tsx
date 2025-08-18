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
					error={errors.name}
					placeholder='Имя'
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Заполните заголовок' }
					})}
					placeholder='Заголовок отзыва'
					error={errors.title}
					className={styles.title}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						rules={{
							required: { value: true, message: 'Укажите рейтинг' }
						}}
						name='rating'
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								error={errors.rating}
								setRating={field.onChange}
							/>
						)}
					/>
				</div>
				<Areatext
					{...register('description', {
						required: { value: true, message: 'Заполните текст' }
					})}
					error={errors.description}
					placeholder='Текст отзыва'
					className={styles.description}
				/>
				<div className={styles.submit}>
					<Button appearance='primary'>Отправить</Button>
					<span className={styles.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			{isSuccessForm && (
				<div className={cn(styles.panel, styles.success)}>
					<div className={styles.successTitle}>Ваш отзыв отправлен</div>
					<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
					<CloseIcon
						className={styles.close}
						onClick={() => setIsSuccessForm(false)}
					/>
				</div>
			)}
			{error && (
				<div className={cn(styles.panel, styles.error)}>
					Что-то пошло не так... Возникла ошибка: {error}.. Обновите страницу.
					<CloseIcon
						className={styles.close}
						onClick={() => setError(undefined)}
					/>
				</div>
			)}
		</form>
	);
};
