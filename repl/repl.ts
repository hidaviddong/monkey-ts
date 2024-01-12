import { Lexer } from "../lexer/lexer";

const prompt = ">>: ";
process.stdout.write(prompt);
for await (const line of console) {
	const lexer = new Lexer(line);
	let token = lexer.nextToken();
	while (token.Type !== "") {
		console.log(token);
		token = lexer.nextToken();
	}
	process.stdout.write(prompt);
}
