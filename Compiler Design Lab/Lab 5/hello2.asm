; x86 - 32bit assembly
; x86_64 - 64bit assembly
; ax = 16bits
; eax = 32bits
; rax = 64bits
.686 ; Pentium or bellow processor
.model flat, c
include C:\masm32\include\msvcrt.inc
includelib C:\masm32\lib\msvcrt.lib

.stack 100h

printf PROTO arg1:Ptr Byte, printlist:VARARG

.data
msgfmt byte "%s", 0Ah, 0
msg byte "Hello World", 0Ah, 0

.code
main proc 
   INVOKE printf, ADDR msgfmt, ADDR msg
   ret 
main endp
end