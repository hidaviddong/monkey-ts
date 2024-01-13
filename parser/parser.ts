import type { Lexer } from "../lexer/lexer";
import { TokenType, type Token } from "../token/token";

export class Parser {
	private l: Lexer;
	private curToken: Token = { Type: TokenType.ILLEGAL, Literal: "" }; // 指向输入中的当前词法单元
	private peekToken: Token = { Type: TokenType.ILLEGAL, Literal: "" }; // 指向当前输入中的下一个词法单元
	constructor(l: Lexer) {
		this.l = l;
		this.nextToken();
		this.nextToken();
	}
	nextToken() {
		this.curToken = this.peekToken;
		this.peekToken = this.l.nextToken();
	}
	parseProgram() {
		return null;
	}
}
