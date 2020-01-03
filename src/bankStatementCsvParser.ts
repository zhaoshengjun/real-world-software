import { BankTransaction } from "./bankTransaction";
export class BankStatementCsvParser {
	parseLinesFromCsv(lines: string[]) {
		const transactions: BankTransaction[] = [];
		for (const line of lines) {
			transactions.push(this._praseFromCsv(line));
		}
		return transactions;
	}

	_praseFromCsv(line: string) {
		const columns = line.split(",");
		const date = columns[0];
		const amount = parseFloat(columns[1]);
		const description = columns[2];

		return new BankTransaction(date, amount, description);
	}
}
