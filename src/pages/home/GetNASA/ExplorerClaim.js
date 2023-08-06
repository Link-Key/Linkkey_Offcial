import { Box, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Explorer from '../../../assets/images/explorer.png';
import { LoadingButton } from '@mui/lab';

import { useAccount } from 'wagmi';
import { useInfo } from '../../../provider/InfoProvider';
import BuyDialog from '../../../components/BuyDialog';

const ClaimItem = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	width: '600px',
	minWidth: '350px',
	height: '300px',
	padding: '24px',
	borderRadius: '20px',
	backgroundColor: 'transparent',
	border: '4px solid #fff',
	[theme.breakpoints.down('md')]: {
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
		padding: '5px',
	},
}));

const ExplorerClaim = () => {
	const { address } = useAccount();

	const { isBlue } = useInfo();
	const [open, setOpen] = useState(false);

	return (
		<ClaimItem>
			<Box
				sx={{
					textAlign: 'center',
					img: {
						width: { xs: '60px', md: '200px' },
						height: { xs: '60px', md: '200px' },
						borderRadius: '24px',
					},
				}}
			>
				<img src={Explorer} alt="" />
				<Typography sx={{ color: '#fff', textAlign: 'center' }}>
					explorer
				</Typography>
			</Box>

			<Stack
				direction="column"
				justifyContent="center"
				spacing={2}
				sx={{
					width: '100%',
					maxWidth: '242px',
					height: { xs: 'unset', md: '100%' },
				}}
			>
				<Box>
					<Typography sx={{ color: '#fff', textAlign: { xs: 'center' } }}>
						Pay 0.042 ETH for $NASA
					</Typography>
				</Box>
				<LoadingButton
					disabled={isBlue}
					onClick={() => {
						if (!address) {
							toast('Please connect wallet!', {
								icon: '❗',
							});
						} else {
							setOpen(true);
						}
					}}
				>
					Buy
				</LoadingButton>
			</Stack>

			<BuyDialog
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			/>
		</ClaimItem>
	);
};

export default ExplorerClaim;
