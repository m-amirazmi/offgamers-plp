import { useEffect, useState } from 'react';
import { currencies } from '../data/currencies';
import { getCookie, setCookie } from '../utils/cookie';

export const useCurrency = () => {
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

	return { currency, handleSelected };
};
