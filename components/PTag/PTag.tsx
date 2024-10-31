import cn from 'classnames';
import styles from './PTag.module.css';
import { IPTag } from './PTag.props';

function PTag({ children, className, size = 'm', ...props }: IPTag) {
	return (
		<p
			{...props}
			className={cn(styles.p, className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.l]: size === 'l'
			})}
		>
			{children}
		</p>
	);
}
export default PTag;
