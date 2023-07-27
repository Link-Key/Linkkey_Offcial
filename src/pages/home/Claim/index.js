import {
	Box,
	Button,
	Container,
	Stack,
	Typography,
	styled,
} from '@mui/material';

import { ProgressBar, Step } from 'react-step-progress-bar';
import TwitterBlue from '../../../assets/images/twitterBlue.png';
import Explorer from '../../../assets/images/explorer.png';

const Title = styled(Typography)(({ theme }) => ({
	fontSize: '56px',
	fontWeight: 700,
	color: '#FFFFFFE5',
	textAlign: 'center',
	marginTop: '60px',

	[theme.breakpoints.down('md')]: {
		fontSize: '24px',
	},
}));

const ProgressWrapper = styled(Box)(({ theme }) => ({
	position: 'relative',

	'.RSPBprogressBar': {
		borderRadius: '50px',
	},

	'.RSPBprogression': {
		zIndex: 0,
		borderRadius: '50px',
		'::after': {
			display: 'block',
			position: 'relative',
			content: '"🛰️"',
			left: '100%',
			top: '-6px',
			zIndex: 999,
			fontSize: '50px',
			transform: 'translateX(-20px)',
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

const Claim = () => {
	return (
		<Container sx={{ padding: '100px 0' }}>
			<Title>Twitter Blue VS Explorer</Title>

			<Stack direction="row" justifyContent="space-between" mb={1} pt={7}>
				<Typography sx={{ color: '#fff' }}>Twitter Blue</Typography>
				<Typography sx={{ color: '#fff' }}>32323.3232 NASA</Typography>
			</Stack>
			<ProgressWrapper>
				<ProgressBar
					filledBackground="linear-gradient(90deg, #0057FF 0.63%, #77FFCE 100%)"
					percent={20}
					height={40}
				/>
			</ProgressWrapper>

			<ProgressWrapper
				sx={{
					marginTop: '56px',
					'.RSPBprogression': {
						'::after': {
							content: '"🛸"',
						},
					},
				}}
			>
				<ProgressBar
					filledBackground="linear-gradient(to right, #CE42FF, #248CC7)"
					percent={30}
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
							<Typography sx={{ color: '#fff' }}>FREE Claim(Only!)</Typography>
							<Typography sx={{ color: '#fff' }}>4 USDC (50% off)</Typography>
						</Box>
						<Button>Claim</Button>
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
							<Typography sx={{ color: '#fff' }}>8 USDC</Typography>
						</Box>
						<Button>Claim</Button>
					</Stack>
				</ClaimItem>
			</Stack>
		</Container>
	);
};

export default Claim;
