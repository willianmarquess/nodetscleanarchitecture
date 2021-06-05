const swaggerConfig = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "API Example basic clean architecture SOLID",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		]
	},
	apis: ["./src/routes/*.ts"]
}

export {swaggerConfig};