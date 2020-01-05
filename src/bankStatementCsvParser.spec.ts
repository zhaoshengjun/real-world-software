import { BankStatementCsvParser } from "./bankStatementCsvParser";

describe("CSV Parser Tests", () => {
	it("should parse one correct line", () => {
		const LINE = "03-02-2017,3000,Tesco";
		const result = new BankStatementCsvParser().parseFrom(LINE);
		expect(result.amount).toBe(3000);
		expect(result.date).toBe("03-02-2017");
		expect(result.description).toBe("Tesco");
	});
});
