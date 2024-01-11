import { TokenType, type Token } from "../token/token"

export class Lexer {
    private input:string
    private position:number
    private readPosition:number
    private ch:string|number
    constructor(input:string){
        this.input = input
        this.position = 0
        this.readPosition = 0
        this.ch = ''
        this.readChar()
    }
    // 目的是读取input中的下一个字符
    readChar(){
        if(this.readPosition >= this.input.length){
            this.ch = 0
        }else{
            this.ch = this.input[this.readPosition]
        }
        this.position = this.readPosition
        this.readPosition ++
    }
    nextToken(){
        let token:Token
        switch (this.ch) {
            case '=':
                token = {Type:TokenType.ASSIGN,Literal:this.ch} 
                break;
            case ';':
                token = {Type:TokenType.SEMICOLON,Literal:this.ch} 
                break;        
            case '{':
                token = {Type:TokenType.LBRACE,Literal:this.ch} 
                break;
            case '}':
                token = {Type:TokenType.RBRACE,Literal:this.ch} 
                break;                         
            case '(':
                token = {Type:TokenType.LPAREN,Literal:this.ch} 
                break;
            case ')':
                token = {Type:TokenType.RPAREN,Literal:this.ch} 
                break;   
            case '+':
                token = {Type:TokenType.PLUS,Literal:this.ch} 
                break;
            case ',':
                token = {Type:TokenType.COMMA,Literal:this.ch} 
                break;
            case 0:
                token = {Type:TokenType.EOF,Literal:''} 
                break; 
            default:
                token = {Type:TokenType.ILLEGAL,Literal:this.ch}
                break;
        }
        this.readChar()
        return token
    }
}