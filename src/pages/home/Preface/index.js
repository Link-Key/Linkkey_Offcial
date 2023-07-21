import { Box, Container, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import NASA from '../../../assets/images/hero-bg.webp';
import Board from '../../../assets/images/hero-drone.webp';

import './index.css';
import { LinerFontStyles } from '../../../components/CommonUI';

import { motion } from 'framer-motion';
import { scrollToAnchor } from '../../../utils';

const Preface = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				background: `url(${NASA})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				margin: '0 auto',
			}}
		>
			<Container
				sx={{
					position: 'relative',
					zIndex: 1,
					maxHeight: '700px',
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
							sx={{ fontSize: '32px', color: '#7d8590', ...LinerFontStyles }}
						>
							Take everyone to the sky!
						</Typography>
					</Box>
					<img src={Board} />
				</Stack>
			</Container>
			<Box
				sx={{
					position: 'absolute',
					top: '90vh',
					left: 0,
					right: 0,
					margin: '0 auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-start',
					width: '35px',
					height: '64px',
					border: '3px solid #aaa6c3',
					borderRadius: '50px',
					cursor: 'pointer',
				}}
				onClick={() => {
					scrollToAnchor('start');
				}}
			>
				<motion.div
					animate={{
						y: [0, 40, 0],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: 'loop',
					}}
					style={{
						width: '10px',
						height: '10px',
						borderRadius: '50%',
						backgroundColor: '#aaa6c3',
					}}
				/>
			</Box>
		</Box>
	);
};

export default memo(Preface);
