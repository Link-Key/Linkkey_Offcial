import { Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
	return (
		<Container>
			<Typography
				sx={{ textAlign: 'center', fontSize: { xs: '14px', md: '16px' } }}
				mt={{ xs: 15, md: 30 }}
			>
				© 2023 by NASACOIN. All rights reserved!
			</Typography>
		</Container>
	);
};

export default Footer;
