import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Title } from '../../../components/CommonUI';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import AboutImg from '../../../assets/images/about.jpg';

const About = () => {
	return (
		<Container sx={{ paddingTop: { xs: '0px', md: '150px' } }}>
			<Title>About</Title>

			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{ flexWrap: { xs: 'wrap' } }}
				mt={{ xs: 5, md: 10 }}
			>
				<Box
					sx={{
						width: { xs: '350px', md: '500px' },
						height: '326px',
						border: '4px solid #fff',
						borderRadius: '40px',
						img: {
							width: '100%',
							height: '100%',
							borderRadius: '40px',
							objectFit: 'cover',
						},
					}}
				>
					<img src={AboutImg} alt="" />
				</Box>
				<Box
					sx={{
						width: '500px',
						marginTop: { xs: '20px' },
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: '16px', md: '20px' },
							lineHeight: '30px',
						}}
					>
						NASACOIN is meme coin, with $NASA holders being Space Explorers, and
						we will issue .nasa permanent unique IDs for Space Explorers
						(registry system) and launch all of them into space (real launch).
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: '16px', md: '20px' },
							lineHeight: '30px',
						}}
					>
						This is a great advenutre journey!
					</Typography>

					<Stack
						direction="row"
						justifyContent={{ xs: 'center', md: 'left' }}
						spacing={1}
						mt={2}
						sx={{
							svg: {
								color: '#fff',
							},
						}}
					>
						<RocketLaunchIcon />
						<RocketLaunchIcon />
						<RocketLaunchIcon />
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
};

export default About;
