import { useConnectModal } from '@rainbow-me/rainbowkit';
import React, { useCallback, useEffect } from 'react';
import { useAccount, useDisconnect, useWalletClient } from 'wagmi';
import { splitAddress } from '../../utils';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Button, styled } from '@mui/material';

import whiteList from '../../assets/excel/nasa_whitelist.xlsx';
import * as XLSX from 'xlsx';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

const ConnectButton = styled(Button)(({ theme }) => ({
	svg: {
		marginRight: '5px',
	},

	[theme.breakpoints.down('md')]: {
		borderRadius: '50px',
		marginTop: '10px',
		svg: {
			width: '24px',
			height: '24px',
		},
	},
}));

const ConnectWallet = () => {
	const { data: walletClient } = useWalletClient();

	console.log('walletClient:', walletClient);

	const { isConnected, address } = useAccount();
	const { disconnect } = useDisconnect();
	const { openConnectModal } = useConnectModal();

	const readExcelData = useCallback(async () => {
		const buffer = await fetch(whiteList).then((res) => res.arrayBuffer());
		const workbook = XLSX.read(buffer, { type: 'buffer' }); // 读取excel文件

		const sheetNames = workbook.SheetNames; // 获取所有sheet的名字

		const worksheet = workbook.Sheets[sheetNames[0]]; // 获取第一个sheet

		const data = XLSX.utils.sheet_to_json(worksheet); // 将sheet转换为json数据

		console.log('data:', data);

		const list = [];
		Object.values(data).map((item) => {
			list.push(item.address);
		});
		console.log('list:', list);
		return list;
	}, []);

	const getMerkleTreeRoot = useCallback(async () => {
		const whiteAddresses = await readExcelData();
		const leafNodes = whiteAddresses.map((add) => keccak256(add));
		const tree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

		const root = tree.getRoot();
		console.log('Root hash is: ', root.toString('hex'));

		const leaf = keccak256(address);
		const proof = tree.getHexProof(leaf);

		console.log('proof:', proof);

		return proof;
	}, [address, readExcelData]);

	useEffect(() => {
		getMerkleTreeRoot();
	}, [getMerkleTreeRoot]);

	return (
		<>
			{isConnected ? (
				<ConnectButton
					onClick={() => {
						disconnect();
					}}
				>
					<AccountBalanceWalletIcon />
					{splitAddress(address)}
				</ConnectButton>
			) : (
				<ConnectButton
					onClick={() => {
						openConnectModal();
					}}
				>
					<AccountBalanceWalletIcon />
					Connect wallet
				</ConnectButton>
			)}
		</>
	);
};

export default ConnectWallet;
