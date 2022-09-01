function giveAnswer(answer: "yes" | "no" | "maybe"): string {
   return `The answer is = ${answer}`;
};

// valid argument
giveAnswer("yes");

/*
   // invalid argument
   giveAnswer("ya");
*/