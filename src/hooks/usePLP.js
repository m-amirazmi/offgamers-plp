import { useEffect, useState } from 'react';
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

	useEffect(() => {
		if (!data || data.length === 0) return;

		const copyData = [...data];
		const sortPrice = copyData.sort((a, b) => {
			// if priceSort === true, asc
			// if priceSort === false, desc
			if (priceSort) {
				if (a.final_price > b.final_price) return 1;
				if (a.final_price < b.final_price) return -1;
				return;
			} else {
				if (a.final_price < b.final_price) return 1;
				if (a.final_price > b.final_price) return -1;
				return;
			}
		});

		setData(sortPrice);
	}, [priceSort]);

	return { data, currency, setSearch, priceSort, setPriceSort };
};
