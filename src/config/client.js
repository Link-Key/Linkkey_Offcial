import { configureChains, createConfig } from 'wagmi';
import { arbitrum, arbitrumGoerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { injectedWallet, metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[arbitrumGoerli, arbitrum],
	[publicProvider()]
);
const projectId = 'NASA Coin | $NASA';
const AppInfo = {
	appName: 'NASA Coin | $NASA',
};

const connectors = connectorsForWallets([
	{
		groupName: 'Recommended',
		wallets: [
			injectedWallet({ chains }),
			metaMaskWallet({ projectId, chains }),
		],
	},
]);

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	// webSocketPublicClient,
});

export { chains, AppInfo, wagmiConfig };
