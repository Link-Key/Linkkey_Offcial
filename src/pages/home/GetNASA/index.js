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
import { useState } from 'react';
import { Title } from '../../../components/CommonUI';
import ProgressBar from '@ramonak/react-progress-bar';
import { toast } from 'react-hot-toast';

const ProgressWrapper = styled(Box)(({ theme }) => ({
	position: 'relative',

	'.wrapper': {
		border: '4px solid #fff',
		borderRadius: '50px',
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
	borderRadius: '20px',
	backgroundColor: 'transparent',
	border: '4px solid #fff',
}));

const GetNASA = () => {
	const [totalProgress, setTotalProgress] = useState(100);
	const [twitterProgress, setTwitterProgress] = useState(30);
	const [explorerProgress, setExplorerProgress] = useState(20);

	return (
		<Container id="getNASA" sx={{ padding: '100px 0' }}>
			<Title>Get $NASA</Title>

			<ProgressWrapper>
				<Typography mb={1} pt={7} sx={{ color: '#fff' }}>
					Total progress of token distribution:
				</Typography>
				<ProgressBar
					className="wrapper"
					completed={totalProgress}
					// bgColor="linear-gradient(90deg, #81B337 0.63%, #1890FF 100%)"
					bgColor="linear-gradient(to right, #81B337, #1890FF)"
					baseBgColor="transparent"
					height={40}
				/>
			</ProgressWrapper>

			<ProgressWrapper>
				<Typography mb={1} pt={7} sx={{ color: '#fff' }}>
					White List
				</Typography>
				<ProgressBar
					className="wrapper"
					completed={twitterProgress}
					bgColor="#1890FF"
					baseBgColor="transparent"
					height={40}
				/>
			</ProgressWrapper>

			<ProgressWrapper
				sx={{
					marginTop: '56px',
				}}
			>
				<Typography mb={1} sx={{ color: '#fff' }}>
					Explorer
				</Typography>
				<ProgressBar
					className="wrapper"
					completed={explorerProgress}
					height={40}
					bgColor="#81B337"
					baseBgColor="transparent"
				/>
			</ProgressWrapper>

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
								toast.success(
									'Congratulations to whitelist users, get FREE Claim'
								);
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
