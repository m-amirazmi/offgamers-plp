import { SortSearchBar } from '../components/SortSearchBar';
import { CardItem } from '../components/CardItem';
import { usePLP } from '../hooks/usePLP';

export const PLP = () => {
	const { data, currency, priceSort, setSearch, setPriceSort } = usePLP();

	return (
		<section>
			<SortSearchBar setSearch={setSearch} dataLength={data.length} setPriceSort={setPriceSort} priceSort={priceSort} />

			{data.length > 0 && (
				<div className="plp">
					{data.map((item) => (
						<CardItem key={item.name} item={item} currency={currency} />
					))}
				</div>
			)}
		</section>
	);
};
