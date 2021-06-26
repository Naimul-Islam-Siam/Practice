#use command "make SHELL=cmd"

input = input.txt
output = output.txt

main: cal.l
		lex cal.l
		gcc lex.yy.c
		a <$(input)> $(output)

main2: cal.l cal.y
		yacc -d cal.y
		lex cal.l
		gcc cal.tab.c lex.yy.c
		a <$(input)> $(output)