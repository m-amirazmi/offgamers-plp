import { SortSearchBar } from '../components/SortSearchBar';
import { CardItem } from '../components/CardItem';
import { usePLP } from '../hooks/usePLP';
import { useState } from 'react';
import { sortPrice } from '../utils/sort';

export const PLP = () => {
	const { data, currency, priceSort, setSearch, setPriceSort } = usePLP();

	const [cart, setCart] = useState();

	return (
		<section>
			<SortSearchBar setSearch={setSearch} dataLength={data.length} setPriceSort={setPriceSort} priceSort={priceSort} />

			{data.length > 0 && (
				<div className="plp">
					{sortPrice(data, priceSort).map((item) => (
						<CardItem key={item.name} item={item} currency={currency} />
					))}
				</div>
			)}
		</section>
	);
};
