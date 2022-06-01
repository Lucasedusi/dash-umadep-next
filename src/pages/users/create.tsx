import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	Link,
	SimpleGrid,
	VStack,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
	name: string;
	email: string;
	password: string;
	password_confimation: string;
};

const signInFormSchema = yup.object().shape({
	name: yup.string().required("Nome Obrigatório"),
	email: yup.string().required("E-mail Obrigatório").email("E-mail Inválido"),
	password: yup.string().required("Senha Obrigatória").min(6, "Tamanho Mínimo"),
	password_confimation: yup
		.string()
		.oneOf([null, yup.ref("password")], "Precisam ser iguais"),
});

export default function UserCreaete() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signInFormSchema),
	});

	const { errors } = formState;

	const handleUserCreate: SubmitHandler<CreateUserFormData> = async (
		values
	) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));

		console.log(values);
	};

	return (
		<Box>
			<Header />

			<Flex w="100%" my="10" maxWidth={1250} mx="auto" px="6">
				<SideBar />

				<Box
					as="form"
					flex="1"
					borderRadius={8}
					bg="gray.800"
					p={["6", "8"]}
					onSubmit={handleSubmit(handleUserCreate)}
				>
					<Heading size="lg" fontWeight="normal">
						Criar Usuário
					</Heading>

					<Divider my="6" borderColor="gray.700" />

					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								name="name"
								type="name"
								label="Nome Completo"
								error={errors.name}
								{...register("name")}
							/>
							<Input
								name="email"
								type="email"
								label="E-mail"
								error={errors.email}
								{...register("email")}
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								name="password"
								type="password"
								label="Senha"
								error={errors.password}
								{...register("password")}
							/>
							<Input
								name="password_confirmation"
								type="password"
								label="Confirmar Senha"
								error={errors.password_confimation}
								{...register("password_confimation")}
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href="/users">
								<Button colorScheme="whiteAlpha">Cancelar</Button>
							</Link>

							<Button
								type="submit"
								colorScheme="pink"
								isLoading={formState.isSubmitting}
							>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
