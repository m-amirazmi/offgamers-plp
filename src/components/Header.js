import { HeaderSwitcher } from './HeaderSwitcher';
import { currencies } from '../data/currencies';
import { useCurrency } from '../hooks/useCurrency';

export const Header = () => {
	const { currency, handleSelected } = useCurrency();

	return (
		<header className="header">
			<div className="container flex items-center">
				<div className="header-logo">
					<img src="/images/logo.png" alt="logo" />
				</div>
				<div className="header-switcher">
					<HeaderSwitcher flag={currency.flag} text={currency.name} data={currencies} handleSelected={handleSelected} />
				</div>
				<div className="header-cart">
					<div className="header-cart-icon">
						<img src="/images/icons/bag.svg" />
					</div>
					<div className="header-cart-counter">0</div>
				</div>
			</div>
		</header>
	);
};
