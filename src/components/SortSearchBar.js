import { useEffect, useRef, useState } from 'react';

export const SortSearchBar = () => {
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
				<input type="text" placeholder="Search by product name..." />
			</div>
			<div className="sort-price" onClick={() => setOpen(!open)} ref={ref}>
				<div className="sort-price-input">
					<p>Price</p>
					<div>
						<img src="/images/icons/chevron-down.svg" alt="price-dropdown" />
					</div>
				</div>
				{open && (
					<div className="sort-price-list">
						<p>Price: Low to High</p>
						<p>Price: High to Low</p>
					</div>
				)}
			</div>
		</div>
	);
};
