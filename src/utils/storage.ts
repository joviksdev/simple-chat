export const saveItem = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
	const value = localStorage.getItem(key);
	if (value) {
		return JSON.parse(value);
	}

	return null;
};

export const deleteItem = (key: string) => {
	localStorage.removeItem(key);
};
