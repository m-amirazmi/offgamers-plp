import { createContext, useContext, useEffect, useState } from 'react';
import { currencies } from '../data/currencies';
import { getCookie, setCookie } from '../utils/cookie';

export const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
	const [currency, setCurrency] = useState({});

	useEffect(() => {
		const getCurrency = getCookie(document, 'currency');
		const findMYR = currencies.find((item) => (getCurrency ? item.name === getCurrency : 'MYR'));
		setCurrency(findMYR);
	}, []);

	const handleSelected = (item) => {
		setCookie(document, 'currency', item.name);
		setCurrency(item);
	};

	const value = {
		currency,
		handleSelected,
	};

	return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};
