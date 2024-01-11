import { expect, test,describe } from "bun:test";
import { Lexer } from "./lexer";
import { TokenType } from "../token/token";

describe('Lexer',()=>{
    test("should parser the input correctly", () => {
        const input = `=+(){}`
        const lexer = new Lexer(input)
        const tests = [
            {
            expectType:TokenType.ASSIGN,
            expectedLiteral:'='
            },
            {
                expectType:TokenType.PLUS,
                expectedLiteral:'+'
            },
            {
                expectType:TokenType.LPAREN,
                expectedLiteral:'('
            },
            {
                expectType:TokenType.RPAREN,
                expectedLiteral:')'                
            },
            {
                expectType:TokenType.LBRACE,
                expectedLiteral:'{'
            },
            {
                expectType:TokenType.RBRACE,
                expectedLiteral:'}'                
            },
            {
                expectType:TokenType.EOF,
                expectedLiteral:''                
            }   
                           
        ]
        tests.forEach((test)=>{
            const token = lexer.nextToken()
            expect(token.Type).toEqual(test.expectType)
            expect(token.Literal).toEqual(test.expectedLiteral)
        })
    });
})
