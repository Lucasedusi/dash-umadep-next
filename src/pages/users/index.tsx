import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Spinner,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

import { useQuery } from "react-query";
import { api } from "../../services/api";

export default function UserList() {
	const { data, isLoading, isFetching, error } = useQuery("users", async () => {
		const { data } = await api.get("users");

		const users = data.users.map((user) => {
			return {
				id: user.id,
				name: user.name,
				email: user.email,
				createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
					day: "2-digit",
					month: "long",
					year: "numeric",
				}),
			};
		});

		return users;
	});

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Box>
			<Header />

			<Flex w="100%" my="10" maxWidth={1250} mx="auto" px="6">
				<SideBar />

				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Usuário
							{!isLoading && isFetching && (
								<Spinner size="sm" color="gray.500" ml="4" />
							)}
						</Heading>

						<Link href="users/create">
							<Button
								as="a"
								size="sm"
								cursor="pointer"
								fontSize="sm"
								colorScheme="pink"
								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
							>
								Criar Novo
							</Button>
						</Link>
					</Flex>

					{isLoading ? (
						<Flex justify="center">
							<Spinner />
						</Flex>
					) : error ? (
						<Flex justify="center">
							<Text>Falha ao</Text>
						</Flex>
					) : (
						<>
							<Table colorScheme="whiteAlpha">
								<Thead>
									<Tr>
										<Th px={["4", "6", "6"]} color="gray.300" width="8">
											<Checkbox colorScheme="pink" />
										</Th>
										<Th>Usuário</Th>
										{isWideVersion && <Th>Data de Cadastro</Th>}
									</Tr>
								</Thead>
								<Tbody>
									{data.map((user) => {
										return (
											<Tr key={user.id}>
												<Td px={["4", "6", "6"]}>
													<Checkbox colorScheme="pink" />
												</Td>
												<Td>
													<Box>
														<Text fontWeight="bold">{user.name}</Text>
														<Text fontSize="sm" color="gray.300">
															{user.email}
														</Text>
													</Box>
												</Td>
												{isWideVersion && <Td>{user.createdAt}</Td>}
											</Tr>
										);
									})}
								</Tbody>
							</Table>

							<Pagination />
						</>
					)}
				</Box>
			</Flex>
		</Box>
	);
}
