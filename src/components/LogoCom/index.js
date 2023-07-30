import { Box, Stack, Typography, styled } from '@mui/material';
import React from 'react';

import { ReactComponent as NASALogo } from '../../assets/icon/nasa_logo.svg';

const LogoText = styled(Typography)(() => ({
	fontSize: '20px',
	fontWeight: 600,
}));

const LogoCom = () => {
	return (
		<Stack
			direction="row"
			justifyContent="center"
			alignItems="center"
			spacing={1}
		>
			<NASALogo
				style={{
					width: '60px',
					height: '60px',
				}}
			/>
			<Stack direction="column" alignItems="center" justifyContent="center">
				<LogoText>NASA</LogoText>
				<Box
					sx={{
						width: '50px',
						height: '2px',
						backgroundColor: '#fff',
						borderRadius: '50px',
					}}
				/>
				<LogoText>COIN</LogoText>
			</Stack>
		</Stack>
	);
};

export default LogoCom;
