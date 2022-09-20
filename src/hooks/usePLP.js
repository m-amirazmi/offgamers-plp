import { useEffect, useState } from 'react';
import plpData from '../data/plp.json';

export const usePLP = () => {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');
	const [priceSort, setPriceSort] = useState(true);

	useEffect(() => {
		setData(plpData.data);
	}, []);

	useEffect(() => {
		const copyData = [...plpData.data];
		const filterSearch = copyData.filter((item) => item.name.toLowerCase().includes(search));

		setData(filterSearch);
	}, [search]);

	return { data, setSearch, priceSort, setPriceSort };
};
