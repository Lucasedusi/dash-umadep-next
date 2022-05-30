import { Flex, Icon, Input, Text, HStack, Box, Avatar } from "@chakra-ui/react";
import {
	RiNotificationLine,
	RiSearchLine,
	RiUserAddLine,
} from "react-icons/ri";

export function Header() {
	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1250}
			h="20"
			mx="auto"
			mt="4"
			px="6"
			align="center"
		>
			<Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
				Dashdog
				<Text as="span" ml="1" color="pink.500">
					.
				</Text>
				{/* Esse Flex precisa estar abaixo do Text que está encapsulando ele*/}
			</Text>
			<Flex
				as="label"
				flex="1"
				py="4"
				px="8"
				ml="6"
				maxW={400}
				alignSelf="center"
				color="gray.200"
				position="relative"
				bg="gray.800"
				borderRadius="full"
			>
				<Input
					color="gray.50"
					variant="unstyled"
					px="4"
					mr="4"
					placeholder="Pesquise na plataforma"
					_placeholder={{ color: "gray.400" }}
				/>
				<Icon as={RiSearchLine} fontSize="20" />
			</Flex>

			<Flex align="center" ml="auto">
				<HStack
					spacing="8"
					mx="8"
					pr="8"
					py="1"
					color="gray.300"
					borderRightWidth={1}
					borderColor="gray.700"
				>
					<Icon as={RiNotificationLine} fontSize="20" />
					<Icon as={RiUserAddLine} fontSize="20" />
				</HStack>

				<Flex align="center">
					<Box mr="4" textAlign="right">
						<Text fontWeight="bold">Lucas Eduardo</Text>
						<Text color="gray.300" fontSize="small">
							lucaseduardodev@gmail.com
						</Text>
					</Box>

					<Avatar
						size="md"
						name="Lucas Eduardo"
						src="https://avatars.githubusercontent.com/u/33089713?v=4"
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}
