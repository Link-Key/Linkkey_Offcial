import { Box, Stack, Typography, styled } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import Explorer from '../../../assets/images/explorer.png';
import { LoadingButton } from '@mui/lab';
import { buy } from '../../../api/contract';
import { useEthersSigner } from '../../../hook/useEthersSigner';
import { useAccount, useChainId } from 'wagmi';
import { useInfo } from '../../../provider/InfoProvider';
import { ethFormatToWei } from '../../../utils';

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
	const chainId = useChainId();
	const { address } = useAccount();
	const signer = useEthersSigner({ chainId });

	const { price, score, isBlue, claimed, proofState, getScoreFn } = useInfo();
	const [exploreLoading, setExploreLoading] = useState(false);

	const explorerBuy = useCallback(async () => {
		setExploreLoading(true);
		try {
			const transaction = await buy(
				1,
				proofState,

				ethFormatToWei(price),
				signer
			);

			if (transaction?.status === 1) {
				toast.success('success!');
				getScoreFn();
			}
		} catch (error) {
			console.log('error:', error);
			if (error?.code && error?.reason) {
				toast.error(error.reason);
			} else {
				toast.error('Transaction fail');
			}
		} finally {
			setExploreLoading(false);
		}
	}, [proofState, price, signer]);

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
						Pay 0.0042 ETH for $NASA
					</Typography>
				</Box>
				<LoadingButton
					loading={exploreLoading}
					onClick={() => {
						if (!address) {
							toast('Please connect wallet!', {
								icon: '❗',
							});
						} else {
							explorerBuy();
						}
					}}
				>
					Buy
				</LoadingButton>
			</Stack>
		</ClaimItem>
	);
};

export default ExplorerClaim;
