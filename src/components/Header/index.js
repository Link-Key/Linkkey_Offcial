import { Button, Container, Link, Stack, styled } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { scrollToAnchor, splitAddress } from '../../utils';
import LogoCom from '../LogoCom';
import { toast } from 'react-hot-toast';

const HeaderContainer = styled(Container)(() => ({
	position: 'absolute',
	left: 0,
	right: 0,
	margin: '0 auto',
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	height: '90px',
	alignSelf: 'flex-start',
	background: 'transparent',
	zIndex: 2,
}));

const LinkText = styled(Link)(() => ({
	color: '#fff',
	fontWeight: 600,
	fontSize: '20px',
}));

const ConnectButton = styled(Button)(() => ({
	svg: {
		marginRight: '5px',
	},
}));

const Header = () => {
	const { isConnected, address } = useAccount();
	const { disconnect } = useDisconnect();

	const { openConnectModal } = useConnectModal();

	return (
		<HeaderContainer>
			{/* Logo */}
			<LogoCom />

			{/* Menu */}
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={2.5}
			>
				<LinkText
					underline="none"
					onClick={() => {
						scrollToAnchor('getNASA');
					}}
				>
					Claim&Buy
				</LinkText>
				<LinkText
					underline="none"
					sx={{ color: '#6c6c6c' }}
					onClick={() => {
						toast('Coming soon!', {
							icon: '❗',
						});
					}}
				>
					XID
				</LinkText>
				<LinkText
					underline="none"
					sx={{ color: '#6c6c6c' }}
					onClick={() => {
						toast('Coming soon!', {
							icon: '❗',
						});
					}}
				>
					Aerospace
				</LinkText>
			</Stack>

			{/* Connect */}
			<Stack direction="row" alignItems="center" gap={{ sm: 1, lg: 4 }}>
				<Link href="https://twitter.com/NASA_coins" target="_blank">
					<TwitterIcon
						sx={{ fontSize: '24px', color: '#1d9bf0', cursor: 'pointer' }}
					/>
				</Link>

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
			</Stack>
		</HeaderContainer>
	);
};

export default Header;
