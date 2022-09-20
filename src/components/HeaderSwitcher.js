import { useEffect, useRef, useState } from 'react';

export const HeaderSwitcher = ({ flag, text, data, handleSelected }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		document.addEventListener('click', (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		});
	}, []);

	const handleSelectedItem = (item) => {
		handleSelected(item);
		setOpen(!open);
	};

	return (
		<div className="header-switcher-main">
			<div className="header-switcher-container" onClick={() => setOpen(!open)} ref={ref}>
				<div>
					<img src={`/images/flags/${flag}.svg`} alt="flag" />
				</div>
				<p>{text}</p>
				<div>
					<img src="/images/icons/chevron-down.svg" alt="dropdown lang" />
				</div>
			</div>

			{open && (
				<div className="header-switcher-list">
					{data?.map((item, key) => {
						return (
							<div key={key} className={`${text === item.name ? 'header-switcher-active' : ''}`} onClick={() => handleSelectedItem(item)}>
								<div>
									<img src={`/images/flags/${item.flag}.svg`} alt="flag" />
								</div>
								<p>{item.name}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
