// Code generated by mkpreempt.go; DO NOT EDIT.

#include "go_asm.h"
#include "textflag.h"

// Note: asyncPreempt doesn't use the internal ABI, but we must be able to inject calls to it from the signal handler, so Go code has to see the PC of this function literally.
TEXT ¬∑asyncPreempt<ABIInternal>(SB),NOSPLIT|NOFRAME,$0-0
	// No async preemption on wasm
	UNDEF
