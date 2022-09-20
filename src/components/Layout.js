import { Header } from './Header';

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="container">{children}</main>
		</>
	);
};
