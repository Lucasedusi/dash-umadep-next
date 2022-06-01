import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
	return (
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
	);
}
