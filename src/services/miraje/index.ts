import { createServer, Factory, Model } from "miragejs";
import { faker } from "@faker-js/faker";

interface User {
	name: string;
	email: string;
	created_at: string;
}

export function makeServer() {
	const server = createServer({
		models: {
			user: Model.extend<Partial<User>>({}),
		},

		factories: {
			user: Factory.extend({
				name(i: number) {
					return `User ${1 + 1}`;
				},
				email() {
					return faker.internet.email().toLowerCase();
				},
				createdAt() {
					return faker.date.recent(10);
				},
			}),
		},

		seeds(server) {
			server.createList("user", 50);
		},

		routes() {
			this.namespace = "api";
			this.timing = 760;

			this.get("/users");
			this.post("/users");

			this.namespace = "";
			this.passthrough();
		},
	});

	return server;
}