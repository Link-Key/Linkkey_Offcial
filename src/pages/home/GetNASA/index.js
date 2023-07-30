import {
	Box,
	Button,
	Container,
	Stack,
	Typography,
	styled,
} from '@mui/material';

import { ProgressBar } from 'react-step-progress-bar';
import TwitterBlue from '../../../assets/images/twitterBlue.png';
import Explorer from '../../../assets/images/explorer.png';
import { useState } from 'react';
import { Title } from '../../../components/CommonUI';

const ProgressWrapper = styled(Box)(({ theme }) => ({
	position: 'relative',

	'.RSPBprogressBar': {
		border: '1px solid #fff',
		borderRadius: '50px',
		backgroundColor: 'transparent',
	},

	'.RSPBprogression': {
		zIndex: 0,
		borderRadius: '50px',
		overflowX: 'hidden',
		'::after': {
			display: 'block',
			position: 'relative',
			content: '"%0"',
			left: '100%',
			top: '8px',
			zIndex: 999,
			fontSize: '24px',
			fontWeight: 600,
			color: '#fff',
			transform: 'translateX(-65px)',
		},
	},
}));

const ClaimItem = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	width: '600px',
	minWidth: '300px',
	height: '300px',
	padding: '24px',
	borderRadius: '24px',
	// ...linearBorder,
	backgroundColor: 'transparent',
	boxShadow: 'inset 0px 0px 40px rgba(254, 219, 255, 0.5)',
}));

const GetNASA = () => {
	const [twitterProgress, setTwitterProgress] = useState(0);
	const [explorerProgress, setExplorerProgress] = useState(0);

	return (
		<Container id="getNASA" sx={{ padding: '100px 0' }}>
			<Title>Get $NASA</Title>

			<Stack direction="row" justifyContent="space-between" mb={1} pt={7}>
				<Typography sx={{ color: '#fff' }}>Twitter Blue</Typography>
				<Typography sx={{ color: '#fff' }}>32323.3232 NASA</Typography>
			</Stack>

			<ProgressWrapper
				sx={{
					'.RSPBprogression': {
						'::after': {
							content: `'%${twitterProgress}'`,
						},
					},
				}}
			>
				<ProgressBar
					filledBackground="linear-gradient(90deg, #0057FF 0.63%, #77FFCE 100%)"
					percent={twitterProgress}
					height={40}
				/>
			</ProgressWrapper>

			<ProgressWrapper
				sx={{
					marginTop: '56px',
					'.RSPBprogression': {
						'::after': {
							content: `'%${explorerProgress}'`,
						},
					},
				}}
			>
				<ProgressBar
					filledBackground="linear-gradient(to right, #CE42FF, #248CC7)"
					percent={explorerProgress}
					height={40}
				/>
			</ProgressWrapper>
			<Stack direction="row" justifyContent="space-between" mt={1}>
				<Typography sx={{ color: '#fff' }}>Explorer</Typography>
				<Typography sx={{ color: '#fff' }}>32323.3232 NASA</Typography>
			</Stack>

			<Stack
				direction="row"
				justifyContent="space-between"
				sx={{ paddingTop: '56px' }}
			>
				<ClaimItem>
					<Box
						sx={{
							img: {
								width: '200px',
								height: '200px',
								borderRadius: '24px',
							},
						}}
					>
						<img src={TwitterBlue} alt="" />
						<Typography sx={{ color: '#fff', textAlign: 'center' }}>
							Twitter Blue
						</Typography>
					</Box>

					<Stack
						direction="column"
						spacing={2}
						justifyContent="center"
						sx={{ height: '100%' }}
					>
						<Box>
							<Typography sx={{ color: '#fff' }}>
								FREE Claim or 6 USDC(75% off)
							</Typography>
						</Box>
						<Button
							onClick={() => {
								setTwitterProgress((v) => v + 1);
							}}
						>
							Claim
						</Button>
					</Stack>
				</ClaimItem>
				<ClaimItem>
					<Box
						sx={{
							img: {
								width: '200px',
								height: '200px',
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
						sx={{ height: '100%' }}
					>
						<Box>
							<Typography sx={{ color: '#fff' }}>
								Pay 8 USDC for $NASA
							</Typography>
						</Box>
						<Button
							onClick={() => {
								setExplorerProgress((v) => v + 1);
							}}
						>
							Claim
						</Button>
					</Stack>
				</ClaimItem>
			</Stack>
		</Container>
	);
};

export default GetNASA;
