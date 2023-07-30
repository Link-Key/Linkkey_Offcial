import { Box, useTheme } from '@mui/material';
import Preface from './Preface';
import { useScreen } from '../../provider/screen';
import Header from '../../components/Header';
import StarsCanvas from '../../components/Star';

import GetNASA from './GetNASA';
import About from './About';
import Tokenomics from './Tokenomics';
import Airdrops from './Airdrops';
import Earning from './Earn';
import Roadmap from './Roadmap';
import Footer from '../../components/Footer';

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
				<GetNASA />
				<About />
				<Tokenomics />
				<Airdrops />
				<Earning />
				<Roadmap />
			</Box>
			<Footer />
		</Box>
	);
};

export default Home;
