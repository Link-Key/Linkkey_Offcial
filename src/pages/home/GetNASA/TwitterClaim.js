import { Box, Stack, Typography, styled } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import TwitterBlue from '../../../assets/images/twitterBlue.png';
import { LoadingButton } from '@mui/lab';
import { claim } from '../../../api/contract';
import { useEthersSigner } from '../../../hook/useEthersSigner';
import { useAccount, useChainId } from 'wagmi';
import { useInfo } from '../../../provider/InfoProvider';

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

const TwitterClaim = () => {
	const chainId = useChainId();
	const { address } = useAccount();
	const signer = useEthersSigner({ chainId });

	const [claimLoading, setClaimLoading] = useState(false);

	const { price, score, isBlue, claimed, proofState, getScoreFn } = useInfo();

	const claimBlue = useCallback(async () => {
		setClaimLoading(true);
		try {
			const transaction = await claim(proofState, signer);

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
			setClaimLoading(false);
		}
	}, [signer]);

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
				<img src={TwitterBlue} alt="" />
				<Typography
					sx={{
						color: '#fff',
						textAlign: 'center',
						fontSize: { xs: '16px' },
					}}
				>
					Twitter Blue
				</Typography>
			</Box>

			<Stack
				direction="column"
				spacing={2}
				justifyContent="center"
				sx={{ height: { xs: 'unset', md: '100%' } }}
			>
				<Box>
					<Typography sx={{ color: '#fff', fontSize: { xs: '16px' } }}>
						FREE Claim or 0.0032 ETH(75% off)
					</Typography>
				</Box>
				<LoadingButton
					loading={claimLoading}
					// disabled={!isBlue}
					onClick={() => {
						if (!address) {
							toast('Please connect wallet!', {
								icon: '❗',
							});
						} else {
							claimBlue();
						}
					}}
				>
					Claim
				</LoadingButton>
			</Stack>
		</ClaimItem>
	);
};

export default TwitterClaim;
