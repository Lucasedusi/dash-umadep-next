import {
	Icon,
	Link as ChakraLink,
	Text,
	LinkProps as ChakraLinkProps,
	Link,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActivityLink } from "../ActivityLink";

interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	children: string;
	href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
	return (
		<ActivityLink href={href}>
			<ChakraLink display="flex" alignItems="center" {...rest}>
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight="medium">
					{children}
				</Text>
			</ChakraLink>
		</ActivityLink>
	);
}
