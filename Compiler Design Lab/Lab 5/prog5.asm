.686
.model flat, c
include C:\masm32\include\msvcrt.inc
includelib C:\masm32\lib\msvcrt.lib

.stack 100h

printf PROTO arg1:Ptr Byte, printlist:VARARG
scanf PROTO arg2:Ptr Byte, inputlist:VARARG

.data
output_msg_format byte "%s", 0Ah, 0
output_msg1 byte "Enter the count: ", 0
output_msg2 byte "Enter the number: ", 0
output_msg3 byte "Total: ", 0

input_format byte "%d", 0
number sdword ?
total sdword 0
count sdword 0

.code
main proc 
   INVOKE printf, ADDR output_msg_format, ADDR output_msg1
   INVOKE scanf, ADDR input_format, ADDR count

   mov eax, sum

   mov ecx, count
   INVOKE printf, ADDR output_msg3_format, count
LOOP_:
   cmp ecx, 0
   je EXIT_

   INVOKE printf, ADDR output_msg_format, ADDR output_msg2
   INVOKE scanf, ADDR input_format, ADDR number
   mov ebx, number
   add eax, ebx

   sub ecx, 1
   jmp LOOP_

EXIT_:
   mov sum, eax
   INVOKE printf, ADDR output_msg_format, ADDR output_msg1
   ret 
main endp
end