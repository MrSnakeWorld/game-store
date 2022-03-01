interface IUseSize {
	isDesktop: boolean;
}

export default (): IUseSize => {

	return {
		isDesktop: window.innerWidth >= 1115
	};
};