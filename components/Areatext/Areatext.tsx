import cn from 'classnames';
import styles from './Areatext.module.css';
import { AreatextProps } from './Areatext.props';

export const Areatext = ({
	className,
	...props
}: AreatextProps): JSX.Element => {
	return (
		<textarea className={cn(styles.Areatext, className)} {...props}></textarea>
	);
};
