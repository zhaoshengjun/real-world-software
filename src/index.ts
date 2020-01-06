import { BankStatementCsvParser } from "./bankStatementCsvParser";
import { BankStatementAnalyzer } from "./bankStatementAnalyzer";

const parser = new BankStatementCsvParser();
const analyzer = new BankStatementAnalyzer(parser);
console.log(analyzer.analyze());
