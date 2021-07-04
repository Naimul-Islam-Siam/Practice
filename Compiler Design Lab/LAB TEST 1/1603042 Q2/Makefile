#use command "make SHELL=cmd"

input = input.txt
output = output.txt

main: prog.l prog.y
		yacc -d prog.y
		lex prog.l
		gcc prog.tab.c lex.yy.c
		a <$(input)> $(output)