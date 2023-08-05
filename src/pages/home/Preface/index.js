import { Box, Link, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import NASA from '../../../assets/images/nasa-1.jpg';
import { ReactComponent as NASALogo } from '../../../assets/icon/nasa_logo.svg';
import TwitterIcon from '@mui/icons-material/Twitter';

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
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '0px 60px',
					height: '90px',
					alignSelf: 'flex-start',
				}}
			>
				{/* Header */}
				<NASALogo
					style={{
						width: '60px',
						height: '60px',
					}}
				/>
			</Box>
			<Box
				sx={{
					position: 'relative',
					top: '30vh',
					width: '100%',
					textAlign: 'center',
				}}
			>
				<Stack
					direction="row"
					justifyContent="center"
					alignItems="center"
					spacing={5}
				>
					<Typography
						className="shine"
						sx={{
							fontSize: '68px',
							fontWeight: 600,
							// color: ' #fff',
							// textShadow:
							// 	'0 0 5px #fff,0 0 10px #fff,0 0 20px #fff,0 0 40px #0ff,0 0 80px #0ff,0 0 90px #0ff,0 0 100px #0ff,0 0 150px #0ff;',
						}}
					>
						Launch $LC
					</Typography>
					<Link href="https://twitter.com/Launch_XID" target="_blank">
						<TwitterIcon
							sx={{ fontSize: '48px', color: '#1d9bf0', cursor: 'pointer' }}
						/>
					</Link>
				</Stack>

				<Typography className="shine" sx={{ fontSize: '22px' }}>
					We've gone live to continue our journey with our new brand Launch!
				</Typography>
			</Box>
		</Box>
	);
};

export default memo(Preface);
