import { ISidebar } from './Sidebar.props';

function Sidebar({ ...props }: ISidebar) {
	return <div {...props}>Sidebar</div>;
}
export default Sidebar;
