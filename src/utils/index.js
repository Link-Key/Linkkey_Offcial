import { parseEther, formatEther } from 'ethers/lib/utils';

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

export const hexToNumber = (value) => {
	return parseInt(value._hex, 16);
};

export const weiFormatToEth = (value) => {
	let number = value.toString();
	if (value && value._hex) {
		number = hexToNumber(value).toString();
	}
	return Number(formatEther(number));
};

export const ethFormatToWei = (value) => {
	if (typeof value === 'string') {
		return parseEther(value);
	}
	return parseEther(value.toString());
};
