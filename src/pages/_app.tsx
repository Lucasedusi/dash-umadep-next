import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "../styles/theme";
import { ReactQueryDevtools } from "react-query/devtools";
import { SideBarDrawerProvider } from "../contexts/SideBarDrawerContext";
import { makeServer } from "../services/miraje";
import { queryClient } from "../services/queryClient";

if (process.env.NODE_ENV === "development") {
	makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider resetCSS theme={theme}>
				<SideBarDrawerProvider>
					<Component {...pageProps} />
				</SideBarDrawerProvider>
			</ChakraProvider>

			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default MyApp;
