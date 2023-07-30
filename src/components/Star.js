import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Box } from '@mui/material';

const Stars = (props) => {
	const ref = useRef();
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(5001), { radius: 1.2 })
	);

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color="white"
					size={0.0005}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: 'auto',
				position: 'absolute',
				inset: -1,
				zIndex: 0,
			}}
		>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Stars />

				{/* <Preload all /> */}
			</Canvas>
		</Box>
	);
};

export default StarsCanvas;
