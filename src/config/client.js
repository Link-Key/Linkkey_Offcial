import { configureChains, createConfig } from 'wagmi';
import { arbitrum, arbitrumGoerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[arbitrumGoerli, arbitrum],
	[publicProvider()]
);
const projectId = 'NASA Coin | $NASA';
const AppInfo = {
	appName: 'NASA Coin | $NASA',
};

const { connectors } = getDefaultWallets({
	appName: 'NASA Coin | $NASA',
	projectId: projectId,
	chains: chains,
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient,
});

export { chains, AppInfo, wagmiConfig };
