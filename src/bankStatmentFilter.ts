import { IBankTransactionFilter } from "./bankStatementProcessor";
import { BankTransaction } from "./bankTransaction";

export class BankTransactionInFebAndExpensive
	implements IBankTransactionFilter {
	test(transaction: BankTransaction) {
		return (
			transaction.date.split("-")[1] === "02" && transaction.amount > 1000
		);
	}
}
