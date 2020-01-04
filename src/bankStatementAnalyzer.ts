import * as fs from "fs";
import * as path from "path";
import {
	IBankStatementParser,
	BankStatementCsvParser
} from "./bankStatementCsvParser";
import { BankStatementProcessor } from "./bankStatementProcessor";

const _RESOURCES = "./resources/data.csv";

class BankStatementAnalyzer {
	constructor(public parser: IBankStatementParser) {}

	analyze() {
		const lines = fs
			.readFileSync(path.resolve(_RESOURCES), "utf-8")
			.split(/\r?\n/);
		const transactions = this.parser.parseLinesFrom(lines);
		const processor = new BankStatementProcessor(transactions);
		console.log(
			"The total of all transaction is ",
			processor.calculateTotalAmount()
		);
		console.log(
			"The total of all transaction in January is ",
			processor.calculateTotalInMonth("01")
		);
	}
}

const parser = new BankStatementCsvParser();
const analyzer = new BankStatementAnalyzer(parser);
analyzer.analyze();
