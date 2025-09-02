import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Areatext.module.css';
import { AreatextProps } from './Areatext.props';

export const Areatext = forwardRef(
	(
		{ className, error, ...props }: AreatextProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<div className={cn(styles.textareaWrapper, className)}>
				<textarea
					ref={ref}
					className={cn(styles.Areatext, {
						[styles.error]: error
					})}
					{...props}
				></textarea>
				{error && (
					<span role='alert' className={styles.errorMessage}>
						{error.message}
					</span>
				)}
			</div>
		);
	}
);
