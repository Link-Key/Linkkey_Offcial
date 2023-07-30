import { Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
	return (
		<Container>
			<Typography sx={{ textAlign: 'center' }} mt={30}>
				© 2023 by NASACOIN. All rights reserved!
			</Typography>
		</Container>
	);
};

export default Footer;
