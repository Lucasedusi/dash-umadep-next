import React, { useState, useEffect } from "react";
import { Flex, Text, Box, Avatar } from "@chakra-ui/react";
import { gitApi } from "../../services/gitApi";

interface ProfileProps {
	showProfileData?: boolean;
}

type User = {
	name: string;
	location: string;
	avatar_url: string;
};

export function Profile({ showProfileData }: ProfileProps) {
	const [userProfile, setUserProfile] = useState<User>({} as User);

	// consumindo a api do git
	useEffect(() => {
		gitApi
			.get("https://api.github.com/users/lucasedusi")
			.then((response) => setUserProfile(response.data))
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text fontWeight="bold">{userProfile.name}</Text>
					<Text color="gray.300" fontSize="small">
						{userProfile.location}
					</Text>
				</Box>
			)}

			<Avatar size="md" src={userProfile.avatar_url} />
		</Flex>
	);
}
