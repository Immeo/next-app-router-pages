import { DetailedHTMLProps, ReactNode } from 'react';

export interface IPTag
	extends DetailedHTMLProps<
		React.HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	size?: 's' | 'm' | 'l';
	children: ReactNode;
}
