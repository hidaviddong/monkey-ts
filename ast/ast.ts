import { type Token } from "../token/token";

interface Node {
	tokenLiteral(): string;
}

export interface Statement extends Node {
	statementNode(): void;
}

export interface Expression extends Node {
	expressionNode(): void;
}

export class Program implements Statement {
	private statements: Statement[];
	constructor() {
		this.statements = [];
	}
	statementNode(): void {
		throw new Error("Method not implemented.");
	}
	tokenLiteral(): string {
		if (this.statements.length > 0) {
			return this.statements[0].tokenLiteral();
		}
		return "";
	}
}

/**
 * let x = 5;
 * name --> x
 * value --> 5
 */
export class letStatement implements Statement {
	private token: Token;
	name: Identifier; // 保存绑定的标识符, x
	value: Expression;
	constructor(token: Token, name: Identifier, value: Expression) {
		this.token = token;
		this.name = name;
		this.value = value;
	}
	statementNode(): void {
		throw new Error("Method not implemented.");
	}
	tokenLiteral(): string {
		return this.token.Literal;
	}
}

class Identifier implements Expression {
	token: Token;
	value: string;

	constructor(token: Token, value: string) {
		this.token = token;
		this.value = value;
	}

	expressionNode(): void {
		// 实现方法的具体逻辑
	}

	tokenLiteral(): string {
		return this.token.Literal;
	}
}
