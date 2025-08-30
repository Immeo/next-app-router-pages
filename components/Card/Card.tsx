import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import style from './Card.module.css';
import { CardProps } from './Card.props';

export const Card = forwardRef(
	(
		{ color = 'white', children, className, ...props }: CardProps,
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<div
			className={cn(style.card, className, {
				[style.blue]: color === 'blue'
			})}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
);
