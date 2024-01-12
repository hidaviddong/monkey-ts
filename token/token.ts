export enum TokenType {
	ILLEGAL = "ILLEGAL",
	EOF = "",

	// 标识符+字面量
	IDENT = "IDENT", // add, foobar, x, y, ...
	INT = "INT", // 1343456

	// 运算符
	ASSIGN = "=",
	PLUS = "+",
	MINUS = "-",
	BANG = "!",
	ASTERISK = "*",
	SLASH = "/",
	LT = "<",
	RT = ">",
	EQ = "==",
	NOT_EQ = "!=",

	// 分隔符
	COMMA = ",",
	SEMICOLON = ";",

	LPAREN = "(",
	RPAREN = ")",
	LBRACE = "{",
	RBRACE = "}",

	// 关键字
	FUNCTION = "FUNCTION",
	LET = "LET",
	TRUE = "TRUE",
	FALSE = "FALSE",
	IF = "IF",
	ELSE = "ELSE",
	RETURN = "RETURN",
}

export const Keywords = new Map<string, TokenType>([
	["fn", TokenType.FUNCTION],
	["let", TokenType.LET],
	["true", TokenType.TRUE],
	["false", TokenType.FALSE],
	["if", TokenType.IF],
	["else", TokenType.ELSE],
	["return", TokenType.RETURN],
]);

export interface Token {
	Type: TokenType;
	Literal: string;
}
