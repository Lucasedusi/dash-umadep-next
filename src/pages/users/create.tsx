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
import { api } from "../../services/api";
import { useState } from "react";
import Router from "next/router";

type CreateUserFormData = {
	name: string;
	email: string;
	password: string;
};

const signInFormSchema = yup.object().shape({
	name: yup.string().required("Nome Obrigatório"),
	email: yup.string().required("E-mail Obrigatório").email("E-mail Inválido"),
	password: yup.string().required("Senha Obrigatória").min(6, "Tamanho Mínimo"),
});

export default function UserCreate() {
	const [users, setUsers] = useState({
		name: "",
		email: "",
		password: "",
	});

	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signInFormSchema),
	});

	const { errors } = formState;

	const handleChangeUsers = (e) => {
		const value = e.target.value;

		setUsers({
			...users,
			[e.target.name]: value,
		});
	};

	const handleUserCreate = async ({
		name,
		email,
		password,
	}: CreateUserFormData) => {
		const userData = {
			name: name,
			email: email,
			password: password,
		};

		await api
			.post("users", userData)
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});

		Router.push("/users");
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
								onChange={handleChangeUsers}
								error={errors.name}
								{...register("name")}
							/>
							<Input
								name="email"
								type="email"
								label="E-mail"
								onChange={handleChangeUsers}
								error={errors.email}
								{...register("email")}
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								name="password"
								type="password"
								label="Senha"
								onChange={handleChangeUsers}
								error={errors.password}
								{...register("password")}
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
function useHistory() {
	throw new Error("Function not implemented.");
}
