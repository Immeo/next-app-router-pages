import cn from 'classnames';
import styles from './Button.module.css';
import { IButtonProps } from './Button.props';

const Button = ({
	children,
	appearance,
	className,
	...props
}: IButtonProps) => {
	return (
		<button
			{...props}
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost'
			})}
		>
			{children}
		</button>
	);
};

export default Button;
