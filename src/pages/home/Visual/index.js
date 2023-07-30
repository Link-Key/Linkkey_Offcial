import { Box, Container, Stack, Typography, styled } from '@mui/material';
import moment from 'moment';
import { useTimer } from 'react-timer-hook';

const Title = styled(Typography)(({ theme }) => ({
	fontSize: '28px',
	fontWeight: 700,
	color: '#FFFFFFE5',
	textAlign: 'center',
	marginTop: '60px',

	[theme.breakpoints.down('md')]: {
		fontSize: '24px',
	},
}));

const TimeWrapper = styled(Box)(({ theme }) => ({
	width: '80px',
	height: '120px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	// background:
	// 	'linear-gradient(180deg, #1A1E8D 0%, #181C83 50.78%, #0E104B 51.21%, #0C0E41 100%)',
	borderRadius: '16px',
	[theme.breakpoints.down('md')]: {
		width: '75px',
		height: '90px',
	},
}));

const Time = styled(Typography)(({ theme }) => ({
	color: '#FFFFFFE5',
	fontWeight: 700,
	fontSize: '24px',

	[theme.breakpoints.down('md')]: {
		fontSize: '32px',
	},
}));

const TimeText = styled(Typography)(({ theme }) => ({
	color: '#FFFFFFE5',
	fontSize: '14px',
	fontWeight: 400,

	[theme.breakpoints.down('md')]: {
		fontSize: '12px',
	},
}));

const Visual = () => {
	const { seconds, minutes, hours, days } = useTimer({
		expiryTimestamp: moment('2023-08-2').valueOf(),
	});

	console.log('moment:', moment('2023-08-2').valueOf());

	return (
		<Container
			sx={{
				width: '100%',
				minHeight: '400px',
				// backgroundImage: `url(${StarBack})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				padding: '36px 0',
			}}
		>
			<Title>start at</Title>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				gap={2}
				sx={{
					height: '100%',
					fontSize: '100px',
					paddingTop: '14px',
				}}
			>
				<TimeWrapper>
					<Time>{days}</Time>
					<TimeText>days</TimeText>
				</TimeWrapper>
				<TimeWrapper>
					<Time>:</Time>
				</TimeWrapper>
				<TimeWrapper>
					<Time>{hours}</Time>
					<TimeText>hours</TimeText>
				</TimeWrapper>
				<TimeWrapper>
					<Time>:</Time>
				</TimeWrapper>
				<TimeWrapper>
					<Time>{minutes}</Time>
					<TimeText>minutes</TimeText>
				</TimeWrapper>
				<TimeWrapper>
					<Time>:</Time>
				</TimeWrapper>
				<TimeWrapper>
					<Time>{seconds}</Time>
					<TimeText>seconds</TimeText>
				</TimeWrapper>
			</Stack>
		</Container>
	);
};

export default Visual;
