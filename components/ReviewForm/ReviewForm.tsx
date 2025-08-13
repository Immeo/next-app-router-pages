import cn from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { Areatext } from '../Areatext/Areatext';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { IReviewForm } from './ReviewForm.interface';
import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
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
		formState: { errors }
	} = useForm<IReviewForm>();

	const onSubmitForm = (data: IReviewForm) => {
		console.log(data);
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
						name='rating'
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
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
			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
				<CloseIcon className={styles.close} />
			</div>
		</form>
	);
};
