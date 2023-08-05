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

const ProgressText = styled(Typography)(({ theme }) => ({
	color: '#fff',
	fontSize: '20px',

	[theme.breakpoints.down('md')]: {
		fontSize: '16px',
	},
}));

const ClaimItem = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	width: '600px',
	minWidth: { xs: '100%', md: '350px' },
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

const Text = styled(Typography)(() => ({}));

const GetNASA = () => {
	const [totalProgress, setTotalProgress] = useState(100);
	const [twitterProgress, setTwitterProgress] = useState(30);
	const [explorerProgress, setExplorerProgress] = useState(20);

	return (
		<Container
			id="getNASA"
			sx={{ padding: { xs: '100px 10px', md: '100px 0' } }}
		>
			<Title>Get $NASA</Title>

			<ProgressWrapper>
				<ProgressText mb={1} pt={7}>
					Total progress of token distribution:
				</ProgressText>
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
				<ProgressText mb={1} pt={7}>
					White List
				</ProgressText>
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
				<ProgressText mb={1}>Explorer</ProgressText>
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
				sx={{
					paddingTop: '56px',
					flexWrap: { xs: 'wrap' },
					gap: { xs: '20px' },
				}}
			>
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
