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

import { getClaimed, getPrice, getScore, isTwitterBlue } from '../api/contract';
import { formatEther, fromHex, keccak256 } from 'viem';
import CheckTwitterBlueDialog from '../components/CheckTwitterBlueDialog';

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
		const value = await getPrice(1, proofState, signer);

		setPrice(formatEther(fromHex(value._hex, 'bigint')));
	}, [proofState, signer]);

	const getScoreFn = useCallback(async () => {
		const value = await getScore(signer);
		if (value) {
			setScore({
				eth: formatEther(fromHex(value[0]._hex, 'bigint')),
				blue: formatEther(fromHex(value[1]._hex, 'bigint')),
				explorer: formatEther(fromHex(value[2]._hex, 'bigint')),
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
			setOpen(true);
		}
	}, [isTwitterBlueFn, getPriceFn, getScoreFn, getClaimedFn, address]);

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
