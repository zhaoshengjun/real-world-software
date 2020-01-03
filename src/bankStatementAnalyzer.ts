import * as fs from "fs";
import * as path from "path";

export class BankTransactionAnalyzerSimple {
	static _RESOURCES = "./resources/data.csv";

	analyze() {
		const data = fs.readFileSync(
			path.resolve(BankTransactionAnalyzerSimple._RESOURCES),
			"utf-8"
		);
		const lines = data.split("/\r?\n/");
		let totals = 0;
		for (const line of lines) {
			const columns = line.split(",");
			const amount = parseFloat(columns[1]);
			totals += amount;
		}

		console.log(`The total of all transaction is ${totals}`);
	}
}
let anaylzer = new BankTransactionAnalyzerSimple();
anaylzer.analyze();
