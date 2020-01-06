import * as fs from "fs";
import * as path from "path";
import { IBankStatementParser } from "./bankStatementCsvParser";
import { BankStatementProcessor } from "./bankStatementProcessor";

const _RESOURCES = "./src/resources/data.csv";

export class BankStatementAnalyzer {
	constructor(public parser: IBankStatementParser) {}

	analyze() {
		const lines = fs
			.readFileSync(path.resolve(_RESOURCES), "utf-8")
			.split(/\r?\n/);
		const transactions = this.parser.parseLinesFrom(lines);
		const processor = new BankStatementProcessor(transactions);

		return {
			total: processor.calculateTotalAmount(),
			totalInJan: processor.calculateTotalInMonth("01")
		};
	}
}
