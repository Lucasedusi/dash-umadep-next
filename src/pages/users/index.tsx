import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

export default function UserList() {
	return (
		<Box>
			<Header />

			<Flex w="100%" my="10" maxWidth={1250} mx="auto" px="6">
				<SideBar />

				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Usuário
						</Heading>

						<Button
							as="a"
							size="sm"
							fontSize="sm"
							colorScheme="pink"
							leftIcon={<Icon as={RiAddLine} fontSize="20" />}
						>
							Criar Novo
						</Button>
					</Flex>

					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th px="6" color="gray.300" width="8">
									<Checkbox colorScheme="pink" />
								</Th>
								<Th>Usuário</Th>
								<Th>Data de Cadastro</Th>
								<Th width="8"></Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td px="6">
									<Checkbox colorScheme="pink" />
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Lucas Eduardo</Text>
										<Text fontSize="sm" color="gray.300">
											Lucas Eduardo
										</Text>
									</Box>
								</Td>
								<Td>04 de Abril, 2022</Td>
								<Td>
									<Button
										as="a"
										size="sm"
										fontSize="sm"
										colorScheme="purple"
										leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
									>
										Editar
									</Button>
								</Td>
							</Tr>
						</Tbody>
					</Table>

					<Pagination />
				</Box>
			</Flex>
		</Box>
	);
}
