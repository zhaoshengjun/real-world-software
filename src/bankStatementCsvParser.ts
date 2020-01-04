import { BankTransaction } from "./bankTransaction";
export interface IBankStatementParser {
	parseFrom(line: string): BankTransaction;
	parseLinesFrom(lines: string[]): BankTransaction[];
}

export class BankStatementCsvParser implements IBankStatementParser {
	parseLinesFrom(lines: string[]) {
		const transactions: BankTransaction[] = [];
		for (const line of lines) {
			transactions.push(this.parseFrom(line));
		}
		return transactions;
	}

	parseFrom(line: string) {
		const columns = line.split(",");
		const date = columns[0];
		const amount = parseFloat(columns[1]);
		const description = columns[2];

		return new BankTransaction(date, amount, description);
	}
}
