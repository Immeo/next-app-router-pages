import Footer from './Footer/Footer';
import Header from './Header/Header';
import { ILayoutProps } from './Layout.proips';
import Sidebar from './Sidebar/Sidebar';

function Layout({ children }: ILayoutProps) {
	return (
		<>
			<Header />
			<Sidebar />
			{children}
			<Footer />
		</>
	);
}
export default Layout;
