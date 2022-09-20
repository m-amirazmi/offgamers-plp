import { Layout } from './components/Layout';
import { CartProvider } from './contexts/CartContext';
import { CurrencyProvider } from './contexts/CurrencyContext';
import { PLP } from './pages/PLP';

export const App = () => {
	return (
		<CurrencyProvider>
			<CartProvider>
				<Layout>
					<PLP />
				</Layout>
			</CartProvider>
		</CurrencyProvider>
	);
};
