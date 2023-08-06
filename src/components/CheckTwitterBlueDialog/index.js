import { Box, Button, Dialog, Stack, Typography, styled } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import React from 'react';
import { useInfo } from '../../provider/InfoProvider';
import { LoadingButton } from '@mui/lab';

const NoticeText = styled(Typography)(() => ({
	color: '#000',
	fontSize: '16px',
	fontWeight: 500,
}));

const CheckTwitterBlueDialog = ({
	open,
	checkBlueLoading,
	isBlue,
	onClose,
}) => {
	console.log('checkBlueLoading:', checkBlueLoading);

	return (
		<Dialog
			open={open}
			onClose={onClose}
			sx={{
				'& .MuiPaper-root': {
					width: '100%',
					maxWidth: '430px',
					backgroundColor: 'white',
				},
			}}
		>
			<Box sx={{ width: '100%', padding: '20px 24px', margin: '0 auto' }}>
				<Stack
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					spacing={2}
				>
					{checkBlueLoading ? (
						<>
							<CircularProgress size={36} sx={{ color: '#9a9a9a' }} />
							<NoticeText>Detecting your address, please wait...</NoticeText>
						</>
					) : isBlue ? (
						<>
							<CheckCircleIcon sx={{ fontSize: '36px', color: '#81B337' }} />{' '}
							<NoticeText>Congrats! You are eligible to free claim!</NoticeText>
						</>
					) : (
						<>
							<ErrorOutlineIcon sx={{ fontSize: '36px', color: '#9a9a9a' }} />
							<NoticeText>
								Sorry for not getting whitelisted, you can buy shares with ETH!
							</NoticeText>
						</>
					)}
				</Stack>

				<Box sx={{ textAlign: 'center' }}>
					<LoadingButton
						disabled={checkBlueLoading}
						sx={{
							backgroundColor: 'black',
							color: '#fff',
							fontSize: '16px',
							marginTop: '20px',

							'&:hover': {
								backgroundColor: 'black',
								color: '#fff',
							},
							'&.Mui-disabled': {
								backgroundColor: '#9a9a9a',
								color: '#fff',
							},
						}}
						onClick={onClose}
					>
						Confirm
					</LoadingButton>
				</Box>
			</Box>
		</Dialog>
	);
};

export default CheckTwitterBlueDialog;
