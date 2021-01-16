export const run = () => {
	const elements = getRowsFromDom();
	const csv = elements.map(element => 
		csvRow(Object.values(parseRecord(element)))).join('\n');
	if (document.hasFocus()) {
		navigator.clipboard.writeText(csv);
		console.log(`Pasted ${elements.length} rows to clipboard`);
	} else {
		const prefocus = window.onfocus;
		window.onfocus = function() {
			navigator.clipboard.writeText(csv);
			console.log(`Pasted ${elements.length} rows to clipboard`);
			window.onfocus = prefocus;
		};
	}
	console.log(csv);
};

const csvRow = (row: (string | number)[]) => {
	return `"${row.map( entry => entry.toString().replace(/"/g,'\\"')).join('"\t"')}"`;
};

const getRowsFromDom = () => {
	const htmlRows: Element[] = [];
	document.querySelectorAll("#recent-activity-paged tbody tr").forEach(row => 
		htmlRows.push(row));
	return htmlRows;
};

const getCellGenerator = (row: Element) => (cell: number) => {
	return row.getElementsByTagName('td').item(cell).innerText;
};

const parseRecord = (row: Element) => {
	const getCell = getCellGenerator(row);
	const date = getCell(0);
	const type = getCell(1);
	const description = getCell(2).replace(/\n/g,' ');
	const amount = parseMoney(getCell(3));
	const fee = parseMoney(getCell(4));
	const balance = parseMoney(getCell(6));
	const deposit = type.toLocaleLowerCase() === "deposit" 
		? getDepositeFromDesc(description)
		: 0;
	return { date, type, description, amount, fee, deposit, balance };
};

const parseMoney = (value: string) => {
	if (value === "" || value.trim() === "--") return 0;
	return parseFloat(value.replace("$",""));
};

const getDepositeFromDesc = (description: string) => {
	const result = description.match(/\$\d+\.\d{2}/);
	if (typeof result === 'undefined') {
		return 0;
	}
	return parseMoney(result[0]);
}
