import cn from 'classnames';
import ArrowIcon from './arrow_right.svg';
import styles from './Button.module.css';
import { IButtonProps } from './Button.props';

const Button = ({
	children,
	arrowSvg = 'none',
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
			{arrowSvg !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrowSvg === 'down',
						[styles.right]: arrowSvg === 'right'
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};

export default Button;
