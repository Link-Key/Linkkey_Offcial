import { Box } from '@mui/material';
import moment from 'moment';
import { useTimer } from 'react-timer-hook';

const Visual = () => {
	const { seconds, minutes, hours, days } = useTimer({
		expiryTimestamp: 1689782400000,
	});

	console.log('moment:', moment('2023-07-20').valueOf());

	return (
		<Box>
			<div style={{ fontSize: '100px' }}>
				<span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
				<span>{seconds}</span>
			</div>
		</Box>
	);
};

export default Visual;
