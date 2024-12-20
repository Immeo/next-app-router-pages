import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Footer.module.css';
import { IFooter } from './Footer.props';

function Footer({ className, ...props }: IFooter) {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<a href='#' target='_blank'>
				Пользовательское соглашение
			</a>
			<a href='#' target='_blank'>
				Политика конфиденциальности
			</a>
		</footer>
	);
}
export default Footer;
