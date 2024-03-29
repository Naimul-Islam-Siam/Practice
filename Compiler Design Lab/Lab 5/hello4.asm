.686
.model flat, c
include C:\masm32\include\msvcrt.inc
includelib C:\masm32\lib\msvcrt.lib

.stack 100h

printf PROTO arg1:Ptr Byte, printlist:VARARG
scanf PROTO arg2:Ptr Byte, inputlist:VARARG

.data
output_msg_format byte "%s", 0Ah, 0

output_msg byte "Enter the number: ", 0
output_msg1 byte "Positive", 0Ah, 0
output_msg2 byte "Zero", 0Ah, 0
output_msg3 byte "Negative", 0Ah, 0

input_format byte "%d", 0
number sdword ?

; -(2^32 - 1)/2 to (2^32 - 1)/2
; sdword 32 bit signed number in 32 bit memory
; dword 32 bits
; word 16 bits
; byte 8 bits

.code
main proc 
   INVOKE printf, ADDR output_msg_format, ADDR output_msg
   INVOKE scanf, ADDR input_format, ADDR number

   mov eax, number
   cmp eax, 0

   jl NEGATIVE
   je ZERO
   jg POSITIVE
   jmp EXIT_

POSITIVE:
   INVOKE printf, ADDR output_msg_format, ADDR output_msg1
   jmp EXIT_
ZERO:
   INVOKE printf, ADDR output_msg_format, ADDR output_msg2
   jmp EXIT_
NEGATIVE:
   INVOKE printf, ADDR output_msg_format, ADDR output_msg3
   jmp EXIT_
EXIT_:
   ret 
main endp
end