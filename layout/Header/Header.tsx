import cn from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ButtonIcon } from '../../components';
import Logo from '../logo.svg';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		setIsOpened(false);
	}, [router]);

	const variants = {
		opened: { opacity: 1, x: 0, transition: { stiffness: 20 } },
		closed: { opacity: 0, x: '100%' }
	};

	return (
		<header className={cn(className, styles.header)} {...props}>
			<Logo />
			<ButtonIcon
				appearance='white'
				icon='burger'
				onClick={() => setIsOpened(true)}
			/>
			<motion.div
				initial='closed'
				animate={isOpened ? 'opened' : 'closed'}
				variants={variants}
				className={styles.mobileMenu}
			>
				<Sidebar />
				<ButtonIcon
					className={styles.menuClose}
					appearance='white'
					icon='close'
					onClick={() => setIsOpened(false)}
				/>
			</motion.div>
		</header>
	);
};
