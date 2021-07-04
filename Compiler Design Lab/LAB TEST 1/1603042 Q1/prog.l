%option noyywrap

%{
    #include<stdio.h>
    // Roll: 1603042
    // Question 1: Tokenize following code: while (b_c > 10);
%}


delim [ \t\n]
ws {delim}+
digit [0-9]
number ({digit}+)
letter [A-Za-z]
us [_]
id ({us}|{letter})({letter}|{us}|{digit})*

%%
"while" {printf("%s -> WHILE \n", yytext);}
";" {printf("%s -> SEMICOLON \n", yytext);}
"(" {printf("%s -> LP \n", yytext);}
")" {printf("%s -> RP \n", yytext);}
">" {printf("%s -> GREATER_THAN \n", yytext);}
"<" {printf("%s -> LESS_THAN \n", yytext);}
{number} {printf("%s -> NUMBER \n", yytext);}
{id} {printf("%s -> IDENTIFIER \n", yytext);}
%%

int main(){
    yylex();
}