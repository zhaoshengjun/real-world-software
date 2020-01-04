import * as fs from "fs";
import * as path from "path";
import { BankStatementCsvParser } from "./bankStatementCsvParser";
import { BankStatementProcessor } from "./bankStatementProcessor";

const _RESOURCES = "./resources/data.csv";

const parser = new BankStatementCsvParser();
const lines = fs.readFileSync(path.resolve(_RESOURCES), "utf-8").split(/\r?\n/);
const transactions = parser.parseLinesFromCsv(lines);
const processor = new BankStatementProcessor(transactions);
console.log(
	"The total of all transaction is ",
	processor.calculateTotalAmount()
);
console.log(
	"The total of all transaction in January is ",
	processor.calculateTotalInMonth("01")
);
