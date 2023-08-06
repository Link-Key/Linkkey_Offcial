import { Contract } from 'ethers';
import { purchaseAdd } from '../config/const';

import ABI from '../abi/purchase.json';

export const isTwitterBlue = async (address, proof, signer) => {
	const contract = new Contract(purchaseAdd, ABI, signer);

	const isBlue = await contract.isBuleList(address, proof);

	return isBlue;
};

export const getPrice = async (share, proof, signer) => {
	const contract = new Contract(purchaseAdd, ABI, signer);

	const price = await contract.getPrice(share, proof);
	return price;
};

export const getScore = async (signer) => {
	const contract = new Contract(purchaseAdd, ABI, signer);
	const score = await contract.getScore();
	return score;
};

export const getClaimed = async (address, signer) => {
	const contract = new Contract(purchaseAdd, ABI, signer);
	const isClaimed = await contract.getClaimed(address);
	return isClaimed;
};

export const claim = async (proof, signer) => {
	const contract = new Contract(purchaseAdd, ABI, signer);

	const estimateGasPrice = await contract.estimateGas.claim(proof);
	const gasLimit = estimateGasPrice.mul(130).div(100);

	const transaction = await contract.claim(proof);

	return await transaction.wait();
};

export const buy = async (share, proof, price, signer) => {
	const contract = new Contract(purchaseAdd, ABI, signer);

	console.log('price:', price);

	// const estimateGasPrice = await contract.estimateGas.buy(share, proof, {
	// 	value: price,
	// });
	// const gasLimit = estimateGasPrice.mul(130).div(100);

	console.log('price:', price);

	const transaction = await contract.buy(share, proof, { value: price });

	return await transaction.wait();
};
