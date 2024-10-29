import cn from 'classnames';
import styles from './VariableTag.module.css';
import { IVariableTag } from './VariableTag.props';

function VariableTag({
	children,
	className,
	size = 'm',
	color = 'ghost',
	href,
	...props
}: IVariableTag) {
	return (
		<p
			{...props}
			className={cn(styles.tag, className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.grey]: color === 'grey',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary'
			})}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</p>
	);
}
export default VariableTag;
