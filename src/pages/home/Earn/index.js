import { Container, styled } from '@mui/material';
import React from 'react';
import { Title } from '../../../components/CommonUI';

import EarningImg from '../../../assets/images/earning.png';

const Image = styled('img')(() => ({
	width: '100%',
	height: '100%',
	marginTop: '100px',
}));

const Earning = () => {
	return (
		<Container sx={{ paddingTop: '180px' }}>
			<Title>Earning</Title>

			<Image src={EarningImg} alt="" />
		</Container>
	);
};

export default Earning;
