export const sortPrice = (items, sort) => {
	const copyData = [...items];
	return copyData.sort((a, b) => {
		// if sort === true, asc
		// if sort === false, desc
		if (sort) {
			if (a.final_price > b.final_price) return 1;
			if (a.final_price < b.final_price) return -1;
			return;
		} else {
			if (a.final_price < b.final_price) return 1;
			if (a.final_price > b.final_price) return -1;
			return;
		}
	});
};
