import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Areatext.module.css';
import { AreatextProps } from './Areatext.props';

export const Areatext = forwardRef(
	(
		{ className, ...props }: AreatextProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<textarea
				ref={ref}
				className={cn(styles.Areatext, className)}
				{...props}
			></textarea>
		);
	}
);
