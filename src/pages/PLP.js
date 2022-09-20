import { SortSearchBar } from '../components/SortSearchBar';
import { CardItem } from '../components/CardItem';
import { usePLP } from '../hooks/usePLP';
import { sortPrice } from '../utils/sort';
import { useCart } from '../contexts/CartContext';
import { useCurrency } from '../contexts/CurrencyContext';

export const PLP = () => {
	const { data, priceSort, setSearch, setPriceSort } = usePLP();
	const { currency } = useCurrency();
	const { addToCart } = useCart();

	return (
		<section>
			<SortSearchBar setSearch={setSearch} dataLength={data.length} setPriceSort={setPriceSort} priceSort={priceSort} />

			{data.length > 0 && (
				<div className="plp">
					{sortPrice(data, priceSort).map((item) => (
						<CardItem key={item.name} item={item} currency={currency} addToCart={addToCart} />
					))}
				</div>
			)}
		</section>
	);
};
