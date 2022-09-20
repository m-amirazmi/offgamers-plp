import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { convertPrice } from '../utils/convert';
import { currencies } from '../data/currencies';
import { HeaderSwitcher } from './HeaderSwitcher';
import { useCurrency } from '../contexts/CurrencyContext';

export const Header = () => {
	const [open, setOpen] = useState(false);

	const { currency, handleSelected } = useCurrency();
	const { cart, removeItem } = useCart();

	const totalPrice = cart.reduce((prev, curr) => prev + curr.final_price, 0);

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
					<div className="header-cart-icon" onClick={() => cart.length > 0 && setOpen(!open)}>
						<img src="/images/icons/bag.svg" />
					</div>
					<div className="header-cart-counter">{cart.length}</div>
					{open && cart.length > 0 && (
						<div className="header-cart-list">
							{cart.map((item, key) => {
								return (
									<div className="header-cart-item">
										<div>
											<img src={item.image} alt={item.name} />
										</div>
										<div>
											<p>{item.name}</p>
											<p>
												{currency.symbol} {convertPrice(item.final_price, currency.rate)}
											</p>
											<button onClick={() => removeItem(key)}>Remove</button>
										</div>
									</div>
								);
							})}
							<div className="header-cart-total">
								<p>Total</p>
								<p>
									{currency.symbol} {convertPrice(totalPrice, currency.rate)}
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};
