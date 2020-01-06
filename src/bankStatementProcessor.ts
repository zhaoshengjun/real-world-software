import { BankTransaction } from "./bankTransaction";

export interface IBankTransactionFilter {
	test(transaction: BankTransaction): boolean;
}

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

	findTransactions(filter: IBankTransactionFilter) {
		let result: BankTransaction[] = [];
		this.bankTransactions.forEach(transaction =>
			filter.test(transaction) ? result.push(transaction) : undefined
		);
		return result;
	}
}
