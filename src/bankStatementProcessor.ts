import { BankTransaction } from "./bankTransaction";

export class BankStatementProcessor {
	constructor(public bankTransactions: BankTransaction[]) {}

	calculateTotalAmount() {
		let totals = 0;
		this.bankTransactions.forEach(
			transaction => (totals += transaction.amount)
		);
		return totals;
	}

	calculateTotalInMonth(month: string) {
		let totals = 0;
		this.bankTransactions
			.filter(transaction => transaction.date.split("-")[1] === month)
			.forEach(transaction => (totals += transaction.amount));
		return totals;
	}

	calcuateTotalForCategory(category: string) {
		let totals = 0;
		this.bankTransactions
			.filter(transaction => transaction.description === category)
			.forEach(transaction => (totals += transaction.amount));
		return totals;
	}

	findTransactionsGreaterThanEqual(amount: number) {
		return this.bankTransactions.filter(
			transaction => transaction.amount >= amount
		);
	}

	findTransactionInMonth(month: string) {
		return this.bankTransactions.filter(
			transaction => transaction.date.split("-")[1] === month
		);
	}

	findTransactionInMonthAndGreater(month: string, amount: number) {
		return this.bankTransactions
			.filter(transaction => transaction.date.split("-")[1] === month)
			.filter(transaction => transaction.amount > amount);
	}
}
