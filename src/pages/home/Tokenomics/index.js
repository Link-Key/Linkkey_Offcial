import { Box, Container, Typography, styled } from '@mui/material';
import React from 'react';
import { Title } from '../../../components/CommonUI';

import TokenomicsImg from '../../../assets/images/tokenomics.png';

const Image = styled('img')(() => ({
	width: '100%',
	height: '100%',
	marginTop: '50px',
}));

const Tokenomics = () => {
	return (
		<Container sx={{ paddingTop: { xs: '60px', md: '300px' } }}>
			<Title>Tokenomics</Title>

			<Box
				sx={{
					width: { xs: '100%', md: '600px' },
					border: '4px solid #fff',
					borderRadius: '20px',
					margin: '0 auto',
					marginTop: '60px',
					padding: '15px 0 30px',
				}}
			>
				<Typography
					sx={{
						fontSize: { xs: '22px', md: '28px' },
						textAlign: 'center',
						fontWeight: 600,
						marginTop: '16px',
					}}
				>
					Token supply
				</Typography>

				<Typography
					sx={{
						fontSize: { xs: '18', md: '48px' },
						textAlign: 'center',
						fontWeight: 600,
						marginTop: '16px',
					}}
				>
					142,857,142,857
				</Typography>
			</Box>

			<Image src={TokenomicsImg} alt="" />
		</Container>
	);
};

export default Tokenomics;
