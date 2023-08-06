import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ScreenContextProvider } from './provider/screen';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { darkTheme } from './config/theme';
import { WagmiConfig } from 'wagmi';
import { AppInfo, chains, wagmiConfig } from './config/client';
import {
	RainbowKitProvider,
	darkTheme as darkRainbow,
} from '@rainbow-me/rainbowkit';

import 'react-toastify/dist/ReactToastify.css';
import 'react-step-progress-bar/styles.css';
import './index.css';
import '@rainbow-me/rainbowkit/styles.css';
import 'inter-ui/inter.css';
import { Toaster } from 'react-hot-toast';
import { InfoProvider } from './provider/InfoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ScreenContextProvider>
		<ThemeProvider theme={darkTheme}>
			<BrowserRouter>
				<WagmiConfig config={wagmiConfig}>
					<RainbowKitProvider
						theme={darkRainbow()}
						chains={chains}
						appInfo={AppInfo}
					>
						<InfoProvider>
							<App />
							<Toaster
								containerStyle={{ fontWeight: 600 }}
								toastOptions={{
									style: {
										fontWeight: 600,
									},
								}}
							/>
						</InfoProvider>
					</RainbowKitProvider>
				</WagmiConfig>
			</BrowserRouter>
		</ThemeProvider>
		<ToastContainer />
	</ScreenContextProvider>
);
