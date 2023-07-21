import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ScreenContextProvider } from './provider/screen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { darkTheme } from './config/theme';
import { WagmiConfig } from 'wagmi';
import { AppInfo, chains, wagmiConfig } from './config/client';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import './index.css';
import '@rainbow-me/rainbowkit/styles.css';
import 'inter-ui/inter.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ScreenContextProvider>
		<ThemeProvider theme={darkTheme}>
			<BrowserRouter>
				<WagmiConfig config={wagmiConfig}>
					<RainbowKitProvider chains={chains} appInfo={AppInfo}>
						<App />
					</RainbowKitProvider>
				</WagmiConfig>
			</BrowserRouter>
		</ThemeProvider>
		<ToastContainer />
	</ScreenContextProvider>
);
