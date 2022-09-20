export const getCookie = (document, name) =>
	document.cookie
		.split('; ')
		.find((i) => i.includes(name))
		.split('=')[1];

export const setCookie = (document, name, value) => {
	document.cookie = `${name}=${value}`;
};
