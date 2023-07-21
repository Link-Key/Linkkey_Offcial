import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import NASA from '../../../assets/images/hero-bg.webp';
import Board from '../../../assets/images/hero-drone.webp';

import './index.css';

const Preface = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				background: `url(${NASA})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<Container
				sx={{
					position: 'relative',
					zIndex: 1,
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					sx={{
						paddingTop: '30vh',
					}}
				>
					<Box
						sx={{
							textAlign: 'center',
						}}
					>
						<Typography
							// className="shine"
							sx={{
								color: 'white',
								fontSize: '68px',
								fontWeight: 600,
							}}
						>
							NASA COIN
						</Typography>

						<Typography
							className="shine"
							sx={{ fontSize: '32px', color: '#7d8590' }}
						>
							Take everyone to the sky!
						</Typography>
					</Box>
					<img src={Board} />
				</Stack>
			</Container>
		</Box>
	);
};

export default memo(Preface);
