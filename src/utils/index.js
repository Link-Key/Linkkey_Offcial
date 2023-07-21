export const splitAddress = (address, start = 5, end = -4) => {
	return (
		(address && address.slice(0, start) + '...' + address.slice(end)) || ''
	);
};

export const scrollToAnchor = (anchorName) => {
	if (anchorName) {
		// find anchor
		let anchorElement = document.getElementById(anchorName);
		// if find id, jump to anchor
		if (anchorElement) {
			anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
		}
	}
};
