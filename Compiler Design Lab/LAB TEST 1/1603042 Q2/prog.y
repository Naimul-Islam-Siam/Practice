%{
#include<stdio.h>
void yyerror(char *s);
int yylex();   
%}


%token FUNC ID LP RP COMMA LB RB PRINT SEMICOLON
%start program
%left ADD SUB


%%
program: FUNC ID LP arguments RP statements
   ;
statements: LB expressions RB
   ;
arguments: ID COMMA ID
   ;
expressions: expressions expression
   | expression
   ;
expression: PRINT LP ID RP SEMICOLON
   ;
%%


int main() {
   yyparse();
   printf("Parsing Finished\n");
}


// this is a must
void yyerror(char *s) {
   fprintf(stderr, "error: %s", s);
}