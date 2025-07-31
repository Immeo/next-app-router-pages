import cn from 'classnames';
import Searching from '../../components/Searching/Search';
import Logo from '../logo.svg';
import { Menu } from '../Menu/Menu';
import Style from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, Style.sidebar)} {...props}>
			<Logo className={Style.logo} />
			<Searching />
			<Menu />
		</div>
	);
};
