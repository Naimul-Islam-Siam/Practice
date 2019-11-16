let bankAccount: BankAccount = {
	money: 2000,
	deposit(value: number): void {
		this.money += value;
	}
};

type BankAccount = { money: number; deposit: (value: number) => void };

let myself: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
	name: 'Max',
	bankAccount: bankAccount,
	hobbies: [ 'Sports', 'Cooking' ]
};
