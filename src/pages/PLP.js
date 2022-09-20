import { useEffect, useState } from 'react';
import { getCookie } from '../utils/cookie';
import plpData from '../data/plp.json';
import { currencies } from '../data/currencies';
import { SortSearchBar } from '../components/SortSearchBar';
import { CardItem } from '../components/CardItem';

export const PLP = () => {
	const [data, setData] = useState([]);
	const [currency, setCurrency] = useState({});

	useEffect(() => {
		const getCurrency = getCookie(document, 'currency');
		const findCurrency = currencies.find((item) => item.name === getCurrency);

		setCurrency(findCurrency);
		setData(plpData.data);
	}, []);

	if (data.length === 0) return null;

	return (
		<section>
			<SortSearchBar />
			<div className="plp">
				{data.map((item) => (
					<CardItem key={item.name} item={item} currency={currency} />
				))}
			</div>
		</section>
	);
};
