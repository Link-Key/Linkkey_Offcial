import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const darkTheme = responsiveFontSizes(
	createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1280,
				xl: 1536,
			},
		},
		typography: {
			allVariants: {
				fontWeight: 400,
				fontFamily: 'Inter',
			},
		},
		palette: {
			mode: 'dark',
			primary: {
				main: '#ea6060',
				contrastText: 'white',
			},
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						fontSize: '18px',
						fontWeight: 400,
						color: 'white',
						background: 'transparent',
						borderRadius: '10px',
						textTransform: 'none',
						border: '1px solid #fff',
						'&:hover': {
							color: '#a3a3a3',
							background: 'transparent',
						},
					},
				},
			},
		},
	})
);

export { darkTheme };
