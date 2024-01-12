import { TokenType, type Token, Keywords } from "../token/token";

export class Lexer {
	private input: string;
	private position: number;
	private readPosition: number;
	private ch: string;
	constructor(input: string) {
		this.input = input;
		this.position = 0;
		this.readPosition = 0;
		this.ch = "";
		this.readChar();
	}
	// 目的是读取input中的下一个字符
	readChar() {
		if (this.readPosition >= this.input.length) {
			this.ch = "0";
		} else {
			this.ch = this.input[this.readPosition];
		}
		this.position = this.readPosition;
		this.readPosition++;
	}
	nextToken() {
		let token: Token = { Type: TokenType.ILLEGAL, Literal: "" };
		this.skipWhiteSpace();
		switch (this.ch) {
			case "=":
				token = { Type: TokenType.ASSIGN, Literal: this.ch };
				break;
			case ";":
				token = { Type: TokenType.SEMICOLON, Literal: this.ch };
				break;
			case "{":
				token = { Type: TokenType.LBRACE, Literal: this.ch };
				break;
			case "}":
				token = { Type: TokenType.RBRACE, Literal: this.ch };
				break;
			case "(":
				token = { Type: TokenType.LPAREN, Literal: this.ch };
				break;
			case ")":
				token = { Type: TokenType.RPAREN, Literal: this.ch };
				break;
			case "+":
				token = { Type: TokenType.PLUS, Literal: this.ch };
				break;
			case ",":
				token = { Type: TokenType.COMMA, Literal: this.ch };
				break;
			case "-":
				token = { Type: TokenType.MINUS, Literal: this.ch };
				break;
			case "*":
				token = { Type: TokenType.ASTERISK, Literal: this.ch };
				break;
			case "/":
				token = { Type: TokenType.SLASH, Literal: this.ch };
				break;
			case "!":
				token = { Type: TokenType.BANG, Literal: this.ch };
				break;
			case "<":
				token = { Type: TokenType.LT, Literal: this.ch };
				break;
			case ">":
				token = { Type: TokenType.RT, Literal: this.ch };
				break;
			case "0":
				token = { Type: TokenType.EOF, Literal: "" };
				break;
			default:
				// 检查是不是标识符
				if (this.isLetter(this.ch)) {
					token.Literal = this.readIdentifier();
					token.Type = this.lookupIdent(token.Literal);
					return token;
				}

				if (this.isDigit(this.ch)) {
					token = { Type: TokenType.INT, Literal: this.readNumber() };
					return token;
				}
				token = { Type: TokenType.ILLEGAL, Literal: this.ch };
				break;
		}
		this.readChar();
		return token;
	}
	readIdentifier() {
		const startPosition = this.position;
		while (this.isLetter(this.ch)) {
			this.readChar();
		}
		return this.input.substring(startPosition, this.position);
	}
	isLetter(ch: string) {
		return /^[a-zA-Z_]$/.test(ch);
	}
	readNumber() {
		const startPosition = this.position;
		while (this.isDigit(this.ch)) {
			this.readChar();
		}
		return this.input.substring(startPosition, this.position);
	}
	isDigit(ch: string) {
		return "0" <= ch && ch <= "9";
	}
	skipWhiteSpace() {
		while (
			this.ch === " " ||
			this.ch === "\t" ||
			this.ch === "\n" ||
			this.ch === "\r"
		) {
			this.readChar();
		}
	}
	lookupIdent(ident: string): TokenType {
		if (Keywords.has(ident)) {
			return Keywords.get(ident) || TokenType.IDENT;
		}
		return TokenType.IDENT;
	}
}
