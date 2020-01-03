import * as fs from "fs";
import * as path from "path";
import { BankStatementCsvParser } from "./bankStatementCsvParser";
import { BankTransaction } from "./bankTransaction";

const _RESOURCES = "./resources/data.csv";
const calculateTotalAmount = (transactions: BankTransaction[]) => {
	let totals = 0;
	transactions.forEach(transaction => (totals += transaction.amount));
	return totals;
};

const selectInMonth = (transactions: BankTransaction[], month: string) => {
	let totals = 0;
	transactions
		.filter(transaction => transaction.date.split("-")[1] === month)
		.forEach(transaction => (totals += transaction.amount));
	return totals;
};

const parser = new BankStatementCsvParser();
const lines = fs.readFileSync(path.resolve(_RESOURCES), "utf-8").split(/\r?\n/);
const transactions = parser.parseLinesFromCsv(lines);
console.log(
	"The total of all transaction is ",
	calculateTotalAmount(transactions)
);
console.log(
	"The total of all transaction in January is ",
	selectInMonth(transactions, "01")
);
