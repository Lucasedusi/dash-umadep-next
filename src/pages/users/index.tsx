import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Link,
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
import NextLink from "next/link";
import { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";
import { api } from "../../services/api";

import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList() {
	const [page, setPage] = useState(1);
	const { data, isLoading, isFetching, error } = useUsers(page);

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	async function handlePrefetchUser(id: string) {
		await queryClient.prefetchQuery(
			["user", id],
			async () => {
				const response = await api.get(`users/${id}`);

				return response.data;
			},
			{
				staleTime: 1000 * 60 * 10,
			}
		);
	}

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

						<NextLink href="users/create">
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
						</NextLink>
					</Flex>

					{isLoading ? (
						<Flex justify="center">
							<Spinner />
						</Flex>
					) : error ? (
						<Flex justify="center">
							<Text>Tente Mais Tarde!</Text>
						</Flex>
					) : (
						<>
							<Table colorScheme="whiteAlpha">
								<Thead>
									<Tr>
										<Th>Usuário</Th>
										{isWideVersion && <Th>Data de Cadastro</Th>}
									</Tr>
								</Thead>
								<Tbody>
									{data.users.map((user, index) => {
										return (
											<Tr key={index}>
												<Td>
													<Box>
														<Link color="purple.400">
															<Text fontWeight="bold">{user.name}</Text>
														</Link>
														<Text fontSize="sm" color="gray.300">
															{user.email}
														</Text>
													</Box>
												</Td>
												{isWideVersion && <Td>{user.password}</Td>}
											</Tr>
										);
									})}
								</Tbody>
							</Table>

							<Pagination
								totalCountOfRegisters={data.totalCount}
								currentPage={page}
								onPageChange={setPage}
							/>
						</>
					)}
				</Box>
			</Flex>
		</Box>
	);
}
