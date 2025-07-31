import cn from 'classnames';
import style from './Card.module.css';
import { CardProps } from './Card.props';

export const Card = ({
	color = 'white',
	children,
	className,
	...props
}: CardProps) => (
	<div
		className={cn(style.card, className, {
			[style.blue]: color === 'blue'
		})}
		{...props}
	>
		{children}
	</div>
);
