import {
	Box,
	Dialog,
	DialogTitle,
	IconButton,
	Input,
	Stack,
	Typography,
	styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NumericFormat } from 'react-number-format';
import React, { useCallback, useMemo, useState } from 'react';
import { ReactComponent as ETHSvg } from '../../assets/icon/eth.svg';
import { useInfo } from '../../provider/InfoProvider';
import { toast } from 'react-hot-toast';
import { useEthersSigner } from '../../hook/useEthersSigner';
import { useAccount, useChainId } from 'wagmi';
import { BlackButton } from '../CommonUI';
import { buy } from '../../api/contract';
import { ethFormatToWei } from '../../utils';
import { ethers } from 'ethers';
import { formatEther, parseGwei } from 'viem';

const Text = styled(Typography)(() => ({
	fontSize: '14px',
	color: '#000',
}));

const CustomInput = styled(Input)(() => ({
	width: '100%',
	height: '40px',
	border: '1px solid #888',
	borderRadius: '10px',
	color: '#000',
	padding: '4px 6px',
}));

const BuyDialog = ({ open, onClose }) => {
	const [value, setValue] = useState('');

	const { address } = useAccount();
	const chainId = useChainId();
	const signer = useEthersSigner({ chainId });

	const [loading, setLoading] = useState(false);

	const { price, proofState, getScoreFn } = useInfo();

	const calPrice = useMemo(() => {
		const val = parseGwei(price) * parseGwei(value);
		return formatEther(val);
	}, [price, value]);
	const handleClose = () => {
		onClose();
		setValue('');
	};

	const explorerBuy = useCallback(async () => {
		setLoading(true);

		try {
			const transaction = await buy(
				Number(value),
				proofState,
				ethFormatToWei(calPrice),
				signer
			);

			if (transaction?.status === 1) {
				toast.success('success!');
				handleClose();
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
			setLoading(false);
		}
	}, [proofState, value, calPrice, signer]);

	const handleChange = (val) => {
		setValue(val);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			sx={{
				'& .MuiPaper-root': {
					width: '100%',
					maxWidth: '430px',
					backgroundColor: 'white',
					borderRadius: '20px',
				},
			}}
		>
			<DialogTitle>
				{onClose ? (
					<IconButton
						aria-label="close"
						onClick={handleClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<CloseIcon />
					</IconButton>
				) : null}
			</DialogTitle>
			<Box sx={{ width: '100%', padding: '20px 24px', margin: '0 auto' }}>
				<Typography
					sx={{
						fontSize: { xs: '16px', md: '20px' },
						fontWeight: 600,
						color: '#000',
						textAlign: 'center',
					}}
				>
					Enter the number of share to buy
				</Typography>

				<Stack
					direction="row"
					justifyContent="flex-end"
					alignItems="center"
					mt={4}
					mb={0.5}
					spacing={0.5}
					sx={{
						svg: {
							background: '#e5e5e5',
							padding: '3px',
							borderRadius: '50px',
							width: '24px',
							height: '24px',
						},
					}}
				>
					<Text>{`Price: ${calPrice}`}</Text>
					<ETHSvg />
				</Stack>
				<Stack
					direction="row"
					justifyContent="center"
					alignItems="center"
					spacing={1}
				>
					<NumericFormat
						customInput={CustomInput}
						value={value}
						disableUnderline
						allowNegative={false}
						decimalScale={0}
						placeholder="Min 1"
						onValueChange={(values) => {
							handleChange(values.value);
						}}
					/>
				</Stack>
				<Text sx={{ marginTop: '5px' }}>
					Contains 9,999,900 $NASA per share
				</Text>

				<Box sx={{ width: '100%', textAlign: 'center' }}>
					<BlackButton
						loading={loading}
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
					</BlackButton>
				</Box>
			</Box>
		</Dialog>
	);
};

export default BuyDialog;
