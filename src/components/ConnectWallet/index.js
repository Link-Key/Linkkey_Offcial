import { useConnectModal } from '@rainbow-me/rainbowkit';
import React from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { splitAddress } from '../../utils';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Button, styled } from '@mui/material';
import CheckTwitterBlueDialog from '../CheckTwitterBlueDialog';

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
	const { isConnected, address } = useAccount();
	const { disconnect } = useDisconnect();
	const { openConnectModal } = useConnectModal();

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
