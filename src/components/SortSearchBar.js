import { useEffect, useRef, useState } from 'react';

export const SortSearchBar = ({ setSearch, dataLength, setPriceSort, priceSort }) => {
	const [open, setOpen] = useState(false);

	const ref = useRef();

	useEffect(() => {
		document.addEventListener('click', (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		});
	}, []);

	return (
		<div className="sort">
			<div className="sort-search">
				<input type="text" placeholder="Search by product name..." onChange={({ target }) => setSearch(target.value)} />
			</div>
			<div className="sort-items-length">
				{dataLength} item{dataLength > 1 ? 's' : ''}
			</div>
			<div className="sort-price" onClick={() => setOpen(!open)} ref={ref}>
				<div className="sort-price-input">
					<p>{priceSort ? 'Price: Low to High' : 'Price: High to Low'}</p>
					<div>
						<img src="/images/icons/chevron-down.svg" alt="price-dropdown" />
					</div>
				</div>
				{open && (
					<div className="sort-price-list">
						<p onClick={() => setPriceSort(true)}>Price: Low to High</p>
						<p onClick={() => setPriceSort(false)}>Price: High to Low</p>
					</div>
				)}
			</div>
		</div>
	);
};
