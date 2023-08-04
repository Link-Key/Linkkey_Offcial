import {
	Box,
	Button,
	Container,
	IconButton,
	Link,
	Stack,
	styled,
	List,
	ListItem,
	Drawer,
} from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { ChevronLeft } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { scrollToAnchor, splitAddress } from '../../utils';
import LogoCom from '../LogoCom';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const HeaderWrapper = styled(Box)(() => ({
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
	padding: '0 40px',
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

const links = [
	{ name: 'Claim&Buy', anchor: 'getNASA' },
	{ name: 'XID' },
	{ name: 'Aerospace' },
];

const Header = () => {
	const { isConnected, address } = useAccount();
	const { disconnect } = useDisconnect();
	const { openConnectModal } = useConnectModal();

	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Container sx={{ position: 'relative' }}>
			<HeaderWrapper
				sx={{
					display: {
						sm: 'flex',
						xs: 'none',
					},
				}}
			>
				{/* Logo */}
				<LogoCom />
				{/* PC */}
				{/* Menu */}
				<Stack
					direction="row"
					justifyContent="center"
					alignItems="center"
					spacing={2.5}
				>
					{links.map((link) => (
						<LinkText
							key={link.name}
							underline="none"
							sx={{ color: link.anchor ?? '#6c6c6c' }}
							onClick={() => {
								if (link.anchor) {
									scrollToAnchor('getNASA');
								} else {
									toast('Coming soon!', {
										icon: '❗',
									});
								}
							}}
						>
							{link.name}
						</LinkText>
					))}
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
			</HeaderWrapper>
			{/* Mobile */}
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{
					position: 'absolute',
					width: '100%',
					display: { xs: 'flex', sm: 'none' },
				}}
				mt="20px"
			>
				<LogoCom />

				<IconButton
					sx={{
						width: '40px',
						height: '40px',
						bottom: 0,
						right: 0,
					}}
					onClick={handleDrawerOpen}
				>
					<DehazeIcon
						sx={{
							fontSize: '35px',
							// color: '#8bce59',
						}}
					/>
				</IconButton>
			</Stack>

			<Drawer open={open} anchor="left" onClose={handleDrawerClose}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end',
					}}
				>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeft
							sx={{
								fontSize: '50px',
							}}
						/>
					</IconButton>
				</Box>
				<List
					sx={{
						width: '100vw',
						'.MuiListItem-root': {
							display: 'block',
							textAlign: 'center',
							fontSize: '30px',
							color: 'white',
							'&:hover': {
								color: 'white',
							},
						},
					}}
				>
					{links.map((link) => (
						<Link
							key={link.name}
							target="_blank"
							underline="none"
							sx={{ color: link.anchor ?? '#6c6c6c' }}
							onClick={() => {
								handleDrawerClose();
								setTimeout(() => {
									if (link.anchor) {
										scrollToAnchor('getNASA');
									} else {
										toast('Coming soon!', {
											icon: '❗',
										});
									}
								}, 200);
							}}
						>
							<ListItem>{link.name}</ListItem>
						</Link>
					))}
				</List>
			</Drawer>
		</Container>
	);
};

export default Header;
