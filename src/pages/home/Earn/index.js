import { Container, styled } from '@mui/material';
import React from 'react';
import { Title } from '../../../components/CommonUI';

import EarningImg from '../../../assets/images/earning.png';

const Image = styled('img')(() => ({
	width: '100%',
	height: '100%',
	marginTop: { xs: '20px', md: '100px' },
}));

const Earning = () => {
	return (
		<Container sx={{ paddingTop: { xs: '60px', md: '180px' } }}>
			<Title>Earning</Title>

			<Image src={EarningImg} alt="" />
		</Container>
	);
};

export default Earning;
