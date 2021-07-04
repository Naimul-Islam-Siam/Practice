%option noyywrap

%{
   #include "prog.tab.h"
   // ROLL: 1603042
   // Question 2: Parse following code: function myFunc(x, y) { console.log(x); console.log(y); }
%}


delim [ \t\n]
ws {delim}+
digit [0-9]
number ({digit}+)
letter [A-Za-z]
us [_]
id ({us}|{letter})({letter}|{us}|{digit})*


%%
{ws} {}

"function" {return(FUNC);}
"console.log" {return(PRINT);}

{id} {return(ID);}

";" {return(SEMICOLON);}
"," {return(COMMA);}

"(" {return(LP);}
")" {return(RP);}
"{" {return(LB);}
"}" {return(RB);}

%%