import { IHeader } from './Header.props';

function Header({ ...props }: IHeader) {
	return <div {...props}>Header</div>;
}
export default Header;
