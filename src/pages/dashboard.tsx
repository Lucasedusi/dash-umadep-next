import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

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
					</Box>

					<Box p="8" bg="gray.800" borderRadius={8}>
						<Text fontSize="lg" mb="4">
							Usuários Cadastrados
						</Text>
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
}
