import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { UseSideBarDrawer } from "../../contexts/SideBarDrawerContext";

import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
	const { onOpen } = UseSideBarDrawer();

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

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
			{!isWideVersion && (
				<IconButton
					aria-label="Open Navigation"
					icon={<Icon as={RiMenuLine} />}
					fontSize="32"
					variant="unstyled"
					onClick={onOpen}
					mr="2"
				></IconButton>
			)}

			<Logo />

			{isWideVersion && <SearchBox />}

			<Flex align="center" ml="auto">
				<NotificationNav />
				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	);
}
