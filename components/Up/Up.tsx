import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useScroll } from '../../hooks/useScrollY';
import styles from './Up.module.css';
import UpIcon from './up.svg';

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
		<motion.button
			type='button'
			initial={{ opacity: 0 }}
			animate={controls}
			onClick={scrollUp}
			className={styles.up}
		>
			<UpIcon />
		</motion.button>
	);
};
