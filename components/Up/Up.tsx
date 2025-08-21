import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useScroll } from '../../hooks/useScrollY';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import styles from './Up.module.css';

export const Up = (): JSX.Element => {
	const controls = useAnimation();
	const scrollingY = useScroll();

	useEffect(() => {
		controls.start({ opacity: scrollingY / document.body.scrollHeight });
	}, [scrollingY, controls]);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={controls}
			className={styles.up}
		>
			<ButtonIcon appearance='primary' icon='up' onClick={scrollUp} />
		</motion.div>
	);
};
