import { Box, Container, Stack, Typography, styled } from '@mui/material';
import { Title } from '../../../components/CommonUI';
import ProgressBar from '@ramonak/react-progress-bar';
import { useInfo } from '../../../provider/InfoProvider';
import { useAccount, useChainId } from 'wagmi';
import { parseGwei, toHex } from 'viem';
import TwitterClaim from './TwitterClaim';
import ExplorerClaim from './ExplorerClaim';

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

const GetNASA = () => {
	const { address } = useAccount();
	const chainId = useChainId();

	const { price, score, isBlue, claimed, proofState, getScoreFn } = useInfo();

	return (
		<Container
			id="getNASA"
			sx={{ padding: { xs: '100px 10px', md: '100px 40px' } }}
		>
			<Title>Get $NASA</Title>

			<ProgressWrapper>
				<ProgressText mb={1} pt={7}>
					Total progress of token distribution:
				</ProgressText>
				<ProgressBar
					className="wrapper"
					completed={Number(score.blue) + Number(score.explorer)}
					bgColor="linear-gradient(to right, #81B337, #1890FF)"
					baseBgColor="transparent"
					height="40px"
				/>
			</ProgressWrapper>

			<ProgressWrapper>
				<ProgressText mb={1} pt={7}>
					White List
				</ProgressText>
				<ProgressBar
					className="wrapper"
					completed={Number(score.blue)}
					bgColor="#1890FF"
					baseBgColor="transparent"
					height="40px"
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
					completed={Number(score.explorer)}
					height="40px"
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
					justifyContent: { xs: 'center' },
					gap: { xs: '20px' },
				}}
			>
				<TwitterClaim />

				<ExplorerClaim />
			</Stack>
		</Container>
	);
};

export default GetNASA;
