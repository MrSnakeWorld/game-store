const validateName = (name: string) => {
	let error;
	if (!name) {
		error = 'Введите имя пользователя';
	}
	return error;
};

export default validateName;