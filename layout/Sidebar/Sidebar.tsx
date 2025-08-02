import cn from 'classnames';
import { Search } from '../../components';
import Logo from '../logo.svg';
import { Menu } from '../Menu/Menu';
import Style from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, Style.sidebar)} {...props}>
			<Logo className={Style.logo} />
			<Search />
			<Menu />
		</div>
	);
};
