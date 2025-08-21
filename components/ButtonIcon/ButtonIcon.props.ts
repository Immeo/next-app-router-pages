import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import burger from './burger.svg';
import close from './close.svg';
import up from './up.svg';

export const icons = {
	up,
	close,
	burger
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	appearance: 'primary' | 'white';
	icon: IconName;
}
