import {
	Box,
	Button,
	Container,
	Stack,
	Typography,
	styled,
} from '@mui/material';

import TwitterBlue from '../../../assets/images/twitterBlue.png';
import Explorer from '../../../assets/images/explorer.png';

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
			<Stack direction="row" justifyContent="space-between">
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
