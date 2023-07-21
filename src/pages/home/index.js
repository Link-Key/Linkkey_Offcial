import { Box, useTheme } from '@mui/material';
import Preface from './Preface';
import { useScreen } from '../../provider/screen';
import Header from '../../components/Header';
import StarsCanvas from '../../components/Star';
import Visual from './Visual';
import Claim from './Claim';

const Home = () => {
	const theme = useTheme();
	console.log('theme:', theme);
	const screen = useScreen();
	console.log('screen:', screen);

	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				margin: '0 auto',
			}}
		>
			<StarsCanvas />
			<Header />
			<Preface />
			<Box sx={{ position: 'relative', zIndex: 1 }}>
				<Visual />
				<Claim />
			</Box>
		</Box>
	);
};

export default Home;
