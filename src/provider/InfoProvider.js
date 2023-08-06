import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useAccount, useChainId } from 'wagmi';
import { useEthersSigner } from '../hook/useEthersSigner';
import whiteList from '../assets/excel/nasa_whitelist.xlsx';
import * as XLSX from 'xlsx';
import { MerkleTree } from 'merkletreejs';

import {
	getClaimed,
	getPrice,
	getScore,
	getScorePer,
	isTwitterBlue,
} from '../api/contract';
import {
	formatEther,
	formatUnits,
	fromHex,
	keccak256,
	parseGwei,
	parseUnits,
} from 'viem';
import CheckTwitterBlueDialog from '../components/CheckTwitterBlueDialog';

import { ethers } from 'ethers';
import { weiFormatToEth } from '../utils';

const InfoContext = createContext();

const InfoProvider = ({ children }) => {
	const { address } = useAccount();
	const chainId = useChainId();
	const signer = useEthersSigner({ chainId });

	const [proofState, setProofState] = useState([]);
	const [checkBlueLoading, setCheckBlueLoading] = useState(true);
	const [isBlue, setIsBlue] = useState(false);
	const [price, setPrice] = useState('0');
	const [score, setScore] = useState({ eth: '0', blue: '0', explorer: '0' });
	const [claimed, setClaimed] = useState(false);

	console.log('price:', price);

	const [open, setOpen] = useState(false);

	const readExcelData = useCallback(async () => {
		const buffer = await fetch(whiteList).then((res) => res.arrayBuffer());
		const workbook = XLSX.read(buffer, { type: 'buffer' }); // 读取excel文件∂

		const sheetNames = workbook.SheetNames; // 获取所有sheet的名字

		const worksheet = workbook.Sheets[sheetNames[0]]; // 获取第一个sheet

		const data = XLSX.utils.sheet_to_json(worksheet); // 将sheet转换为json数据

		const list = [];
		Object.values(data).map((item) => {
			list.push(item.address);
		});
		return list;
	}, []);

	const getMerkleTreeRoot = useCallback(async () => {
		const whiteAddresses = await readExcelData();
		const leafNodes = whiteAddresses.map((add) => keccak256(add));
		const tree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

		const leaf = keccak256(address);
		const proof = tree.getHexProof(leaf);
		setProofState(proof);
	}, [address, readExcelData]);

	const isTwitterBlueFn = useCallback(async () => {
		setCheckBlueLoading(true);
		const blue = await isTwitterBlue(
			address.toLocaleLowerCase(),
			proofState,
			signer
		);
		setIsBlue(blue);
		setCheckBlueLoading(false);
	}, [address, signer, proofState]);

	const getPriceFn = useCallback(async () => {
		const value = await getPrice(address, 1, proofState, signer);

		setPrice(formatEther(fromHex(value._hex, 'bigint')));
	}, [address, proofState, signer]);

	const getScorePerFn = useCallback(
		async (amount) => {
			const value = await getScorePer(amount, signer);
			return value;
		},
		[signer]
	);

	const getScoreFn = useCallback(async () => {
		const value = await getScore(signer);

		console.log('value:', fromHex(value[1]._hex, 'bigint').toString());
		console.log('objec:', '9999999999990000000000000');

		console.log('hex:', ethers.BigNumber.from('9999999999990000000000000'));
		console.log(
			'equal:',
			fromHex(value[1]._hex, 'bigint').toString() ===
				'9999999999990000000000000'
		);

		const explorerVal = await getScorePerFn(value[1]);

		console.log('explorerVal:', fromHex(explorerVal, 'number'));

		if (value) {
			setScore({
				explorer: fromHex(value[0]._hex, 'bigint'),
				blue: formatEther(fromHex(value[1]._hex, 'bigint')),
				eth: formatEther(fromHex(value[2]._hex, 'bigint')),
			});
		}
	}, [signer]);

	const getClaimedFn = useCallback(async () => {
		const value = await getClaimed(address);
		setClaimed(value);
	}, [address]);

	useEffect(() => {
		if (address) {
			isTwitterBlueFn();
			getPriceFn();
			getScoreFn();
			getClaimedFn();
			getScorePerFn();
			setOpen(true);
		}
	}, [
		isTwitterBlueFn,
		getPriceFn,
		getScoreFn,
		getScorePerFn,
		getClaimedFn,
		address,
	]);

	useEffect(() => {
		getMerkleTreeRoot();
	}, [getMerkleTreeRoot]);

	return (
		<InfoContext.Provider
			value={{
				price,
				score,
				isBlue,
				checkBlueLoading,
				claimed,
				proofState,
				getScoreFn,
			}}
		>
			{children}

			<CheckTwitterBlueDialog
				open={open}
				isBlue={isBlue}
				checkBlueLoading={checkBlueLoading}
				onClose={() => {
					setOpen(false);
				}}
			/>
		</InfoContext.Provider>
	);
};

const useInfo = () => ({ ...useContext(InfoContext) });

export { useInfo, InfoProvider };
