import * as fs from "fs";
import * as path from "path";
import { IBankStatementParser } from "./bankStatementCsvParser";
import { BankStatementProcessor } from "./bankStatementProcessor";
import { BankTransaction } from "./bankTransaction";
import { BankTransactionInFebAndExpensive } from "./bankStatmentFilter";

const _RESOURCES = "./src/resources/data.csv";

export class BankStatementAnalyzer {
	private processor: BankStatementProcessor;
	private transactions: BankTransaction[];
	constructor(public parser: IBankStatementParser) {
		const lines = fs
			.readFileSync(path.resolve(_RESOURCES), "utf-8")
			.split(/\r?\n/);
		this.transactions = this.parser.parseLinesFrom(lines);
		this.processor = new BankStatementProcessor(this.transactions);
	}

	analyze() {
		return {
			total: this.processor.calculateTotalAmount(),
			totalInJan: this.processor.calculateTotalInMonth("01")
		};
	}

	findTransactionsInFebAndExpensive() {
		return this.processor.findTransactions(
			new BankTransactionInFebAndExpensive()
		);
	}
}
