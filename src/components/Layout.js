import { Header } from './Header';
import { SideFilter } from './SideFilter';

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="container">
				<SideFilter />
				{children}
			</main>
		</>
	);
};
