import { Box, Button, Dialog, Stack, Typography, styled } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import React from 'react';
import { useInfo } from '../../provider/InfoProvider';
import { LoadingButton } from '@mui/lab';
import { BlackButton } from '../CommonUI';

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
	return (
		<Dialog
			open={open}
			disableEscapeKeyDown={true}
			sx={{
				'& .MuiPaper-root': {
					width: '100%',
					maxWidth: '430px',
					backgroundColor: 'white',
					borderRadius: '20px',
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
					<BlackButton disabled={checkBlueLoading} onClick={onClose}>
						Confirm
					</BlackButton>
				</Box>
			</Box>
		</Dialog>
	);
};

export default CheckTwitterBlueDialog;
