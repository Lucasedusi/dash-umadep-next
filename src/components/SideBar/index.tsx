import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useBreakpointValue,
} from "@chakra-ui/react";
import { UseSideBarDrawer } from "../../contexts/SideBarDrawerContext";
import { SideBarNav } from "./SideBarNav";

export function SideBar() {
	const { isOpen, onClose } = UseSideBarDrawer();

	const isDrawerSiderBar = useBreakpointValue({
		base: true,
		lg: false,
	});

	if (isDrawerSiderBar) {
		return (
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent bg="gray.800" p="4">
						<DrawerCloseButton mt="6" />
						<DrawerHeader>Navageção</DrawerHeader>

						<DrawerBody>
							<SideBarNav />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		);
	}

	return (
		<Box as="aside" w="64">
			<SideBarNav />
		</Box>
	);
}
