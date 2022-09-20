import { convertPrice } from '../utils/convert';

export const CardItem = ({ item, currency, addToCart }) => {
	return (
		<div className="plp-item">
			<div className="plp-image">
				<img src={item.image} alt={item.name} />
			</div>
			<p className="plp-item-name">{item.name}</p>
			<div className="plp-item-price">
				<p className="plp-item-finalprice">
					{currency.symbol} {convertPrice(item.final_price, currency.rate)}
				</p>
				<p className="plp-item-oriprice">
					{currency.symbol} {convertPrice(item.price, currency.rate)}
				</p>
			</div>
			<div className="plp-item-cta">
				<button onClick={() => addToCart(item)}>BUY</button>
			</div>
		</div>
	);
};
