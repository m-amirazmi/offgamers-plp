import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		const copyCart = [...cart];
		copyCart.push(item);
		setCart(copyCart);
	};

	const removeItem = (key) => {
		const copyCart = [...cart];
		copyCart.splice(key, 1);
		setCart(copyCart);
	};

	const value = {
		cart,
		addToCart,
		removeItem,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
