import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiMap2Line } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
	return (
		<Stack spacing="12" align="flex-start">
			<NavSection title="GERAL">
				<NavLink icon={RiDashboardLine} href="/dashboard">
					Dashboard
				</NavLink>
				<NavLink icon={RiContactsLine} href="/users">
					Usuários
				</NavLink>
			</NavSection>

			<NavSection title="DADOS GERAIS">
				<NavLink icon={RiMap2Line} href="/forms">
					Congregações
				</NavLink>
			</NavSection>
		</Stack>
	);
}
