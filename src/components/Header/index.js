import {
	Box,
	Button,
	Container,
	Link,
	Stack,
	Typography,
	styled,
} from '@mui/material';
import { ReactComponent as NASALogo } from '../../assets/icon/nasa_logo.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { splitAddress } from '../../utils';

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
		<Container
			sx={{
				position: 'absolute',
				left: 0,
				right: 0,
				margin: '0 auto',
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '0px 60px',
				height: '90px',
				alignSelf: 'flex-start',
				background: 'transparent',
				zIndex: 2,
			}}
		>
			{/* Header */}
			<NASALogo
				style={{
					width: '60px',
					height: '60px',
				}}
			/>
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
		</Container>
	);
};

export default Header;
