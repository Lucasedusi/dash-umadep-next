import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import dynamic from "next/dynamic";
import { SideBar } from "../components/SideBar";
import { theme } from "../styles/theme";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

const options: ApexOptions = {
	chart: {
		toolbar: {
			show: false,
		},

		zoom: {
			enabled: false,
		},
		foreColor: theme.colors.gray[500],
	},
	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		type: "datetime",
		axisBorder: {
			color: theme.colors.gray[600],
		},
		axisTicks: {
			color: theme.colors.gray[600],
		},
		categories: [
			"2022-05-25T00:00:00.000Z",
			"2022-04-26T00:00:00.000Z",
			"2022-03-27T00:00:00.000Z",
			"2022-02-28T00:00:00.000Z",
			"2022-01-29T00:00:00.000Z",
		],
	},
	fill: {
		opacity: 0.3,
		type: "gradient",
		gradient: {
			shade: "dark",
			opacityFrom: 0.7,
			opacityTo: 0.3,
		},
	},
};

const series = [{ name: "series1", data: [31, 123, 43, 65, 19, 50] }];

export default function Dashboard() {
	return (
		<Flex direction="column" h="100vh">
			<Header />

			<Flex w="100%" my="10" maxWidth={1250} mx="auto" px="6">
				<SideBar />

				<SimpleGrid
					flex="1"
					gap="4"
					minChildWidth="320px"
					alignItems="flex-start"
				>
					<Box p="8" bg="gray.800" borderRadius={8}>
						<Text fontSize="lg" mb="4">
							Usuários Cadastrados
						</Text>
						<Chart options={options} series={series} type="area" height={160} />
					</Box>

					<Box p="8" bg="gray.800" borderRadius={8}>
						<Text fontSize="lg" mb="4">
							Usuários Cadastrados
						</Text>
						<Chart options={options} series={series} type="area" height={160} />
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
}
