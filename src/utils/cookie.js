export const getCookie = (document, name) => {
	if (!document.cookie) return null;

	return document.cookie
		.split('; ')
		.find((i) => i.includes(name))
		.split('=')[1];
};

export const setCookie = (document, name, value) => {
	document.cookie = `${name}=${value}`;
};
