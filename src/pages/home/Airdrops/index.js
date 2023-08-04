import {
	Box,
	Button,
	Container,
	Stack,
	Typography,
	styled,
} from '@mui/material';
import React from 'react';
import { Title } from '../../../components/CommonUI';

import Triangle from '../../../assets/images/triangle.png';
import AirdropsImg from '../../../assets/images/airdrops.png';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';

const Items = styled(Box)(() => ({
	width: '400px',
	textAlign: 'center',
	img: {
		width: '65px',
		height: '65px',
		marginBottom: '8px',
	},
}));

const ItemTitle = styled(Typography)(() => ({
	fontSize: '20px',
	textAlign: 'center',
	span: { fontSize: '30px', fontWeight: 600 },
	marginTop: '8px',
}));

const WhiteButton = styled(Button)(() => ({
	width: '100%',
	backgroundColor: '#fff',
	color: '#000',
	fontWeight: 500,
	marginTop: '20px',
	':hover': {
		backgroundColor: '#fff',
	},
	'&.Mui-disabled': {
		color: '#fff',
		backgroundColor: '#CECECE',
	},
}));

const itemsList = [
	{
		title: 'Twitter Blue',
		des: 'FREE',
		des1: 'Get 9,999,999 $NASA for ',
		des2: ' per account',
	},
	{
		title: 'Twitter Blue',
		des: '6',
		des1: 'Get 9,999,999 $NASA for ',
		des2: ' USDC Unlimited',
	},
	{
		title: 'Explorer',
		des: '8',
		des1: 'Get 9,999,999 $NASA for ',
		des2: ' USDC Unlimited',
		disabled: true,
	},
];

const Airdrops = () => {
	return (
		<Container sx={{ paddingTop: { xs: '60px', md: '160px' } }}>
			<Title>Airdrops</Title>

			<Box
				sx={{
					img: {
						width: '100%',
						height: '100%',
						paddingTop: { xs: '20px', md: '100px' },
					},
				}}
			>
				<img src={AirdropsImg} alt="" />
			</Box>

			{/* <Box
				sx={{
					width: '100%',
					border: '4px solid #fff',
					borderRadius: '20px',
					backgroundColor: '#4F4F4F',
					paddingBottom: '15px',
				}}
				mt={10}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					sx={{
						width: '100%',
						div: {
							display: 'block',
							width: '200px',
							color: '#fff',
						},
					}}
				>
					<Box></Box>
					<Box sx={{ textAlign: 'center', fontSize: '28px' }}>Airdrop pool</Box>
					<Box
						sx={{
							textAlign: 'right',
							fontSize: '48px',
							fontWeight: 600,
							justifyItems: 'flex-end',
							marginRight: '22px',
						}}
					>
						70%
					</Box>
				</Stack>
				<Typography
					sx={{ textAlign: 'center', fontSize: '48px', fontWeight: 600 }}
					mt={2}
				>
					1,000,000 X 9,999,999 $NASA
				</Typography>
			</Box>

			<Stack direction="row" justifyContent="space-between">
				{itemsList.map((item) => (
					<Items key={item.des}>
						<img src={Triangle} alt="" />
						<Box
							sx={{
								width: '400px',
								border: '4px solid #fff',
								borderRadius: '20px',
								padding: '30px 40px 18px',
							}}
						>
							<Typography sx={{ fontSize: '28px', textAlign: 'center' }}>
								{item.title}
							</Typography>

							<ItemTitle
								sx={{
									fontSize: '20px',
									textAlign: 'center',
									span: { fontSize: '30px', fontWeight: 600 },
									marginTop: '8px',
								}}
							>
								{item.des1}
								<span>{item.des}</span>
								{item.des2}
							</ItemTitle>
							<WhiteButton
								disabled={item.disabled}
								sx={{ backgroundColor: '#fff' }}
							>
								WHITELIST
							</WhiteButton>
						</Box>
					</Items>
				))}
			</Stack> */}

			<Box>
				<Stack
					direction="row"
					alignItems="center"
					spacing={1}
					mt={{ xs: 5, md: 10 }}
					sx={{
						svg: {
							width: { xs: '16px' },
							height: { xs: '16px' },
							color: '#fff',
						},
					}}
				>
					<AssignmentLateOutlinedIcon />
					<Typography sx={{ fontSize: { xs: '12px', md: '20px' } }}>
						{' '}
						Note:
					</Typography>
				</Stack>
				<Typography sx={{ fontSize: { xs: '12px', md: '20px' } }}>
					{`- 70% of token revenue + 5-10% supply of $NASA => uniswap liquidity
					pool. `}
				</Typography>
			</Box>
		</Container>
	);
};

export default Airdrops;
