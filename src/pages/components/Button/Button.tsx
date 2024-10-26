import cn from 'classnames';
import styles from './Button.module.css';
import { IButtonProps } from './Button.props';

const Button = ({ children, appearance }: IButtonProps) => {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost'
			})}
		>
			{children}
		</button>
	);
};

export default Button;
