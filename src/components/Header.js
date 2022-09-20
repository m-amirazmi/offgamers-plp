import { HeaderSwitcher } from './HeaderSwitcher';
import { currencies } from '../data/currencies';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../utils/cookie';

export const Header = () => {
	const [currency, setCurrency] = useState({});

	useEffect(() => {
		const getCurrency = getCookie(document, 'currency');
		const findMYR = currencies.find((item) => (getCurrency ? item.name === getCurrency : 'MYR'));
		setCurrency(findMYR);
	}, []);

	const handleSelected = (item) => {
		setCookie(document, 'currency', item.name);
		setCurrency(item);
		window.location.reload();
	};

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
