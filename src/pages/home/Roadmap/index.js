import { Box, Container, styled } from '@mui/material';
import React from 'react';
import { Title } from '../../../components/CommonUI';
import RocketIcon from '@mui/icons-material/Rocket';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const DotStyle = {
	width: '15px',
	height: '15px',
	background: '#fff',
	marginLeft: '-7px',
};

const times = [
	{ time: '2023.07.xx', content: 'Invite explorers', color: '#4F4F4F' },
	{
		time: '2023.08.10 - 08.15',
		content: 'Airdrop $NASA coin',
		color: '#6c6c6c',
	},
	{
		time: '2023.08.25 - 08.31',
		content: '.nasa(sapce explorer ID) launch',
		color: '#9A9A9A',
	},
	{
		time: ' 2023.09',
		content: 'Spaceflight Identity Registration',
		color: '#BEBEBE',
	},
	{ time: '2023 Q4', content: 'Explorer launch', color: '#CECECE' },
];

const Roadmap = () => {
	return (
		<Container sx={{ paddingTop: '180px' }}>
			<Title sx={{ marginBottom: '80px' }}>Roadmap</Title>

			<VerticalTimeline>
				{times.map((time) => (
					<VerticalTimelineElement
						key={time.time}
						contentStyle={{
							position: 'relative',
							top: '-25px',
							background: time.color,
							color: '#fff',
							boxShadow: 'unset',
							border: '4px solid #fff',
							borderRadius: '20px',
						}}
						date={time.time}
						contentArrowStyle={{ display: 'none' }}
						iconStyle={DotStyle}
					>
						<p style={{ margin: '0', padding: '', textAlign: 'center' }}>
							{time.content}
						</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>

			<Box
				sx={{
					width: '100%',
					textAlign: 'center',
					transform: 'rotateX(180deg)',
				}}
			>
				<RocketIcon
					sx={{
						color: '#fff',
						textAlign: 'center',
						margin: '0 auto',
						fontSize: '36px',
					}}
				/>
			</Box>
		</Container>
	);
};

export default Roadmap;
