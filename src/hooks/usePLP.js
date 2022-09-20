import { useCallback, useEffect, useState } from 'react';
import { currencies } from '../data/currencies';
import { getCookie } from '../utils/cookie';
import plpData from '../data/plp.json';

export const usePLP = () => {
	const [data, setData] = useState([]);
	const [currency, setCurrency] = useState({});
	const [search, setSearch] = useState('');
	const [priceSort, setPriceSort] = useState(true);

	useEffect(() => {
		const getCurrency = getCookie(document, 'currency');
		const findCurrency = currencies.find((item) => item.name === getCurrency);

		setCurrency(findCurrency);
		setData(plpData.data);
	}, []);

	useEffect(() => {
		const copyData = [...plpData.data];
		const filterSearch = copyData.filter((item) => item.name.toLowerCase().includes(search));

		setData(filterSearch);
	}, [search]);

	return { data, currency, setSearch, priceSort, setPriceSort };
};
