export const run = () => {
	// runCurrentPage();
	if (false) getCurrentMonth().then(csv => {
		console.log(csv);
		writeToClipboard(csv);
	});
	getCurrentYear().then(csv => {
		console.log(csv);
		writeToClipboard(csv);
	})
};

const runCurrentPage = () => {
	const elements = getRowsFromDom();
	const csv = elements.map(elementToCsvRow).join('\n');
	writeToClipboard(csv).then(wrote => {
		if (wrote) {
			console.log(`${elements.length} records written to clipboard`);
		}
		else {
			console.log(`Could not write to clipboard`);
		}
	});
	console.log(csv);
};

const writeToClipboard = (content: string): Promise<boolean> => {
	return new Promise((resolve, reject) => {
		if (document.hasFocus()) {
			navigator.clipboard.writeText(content)
				.then(() => resolve(true))
				.catch(() => resolve(false));
		} else {
			const prefocus = window.onfocus;
			window.onfocus = function() {
				navigator.clipboard.writeText(content)
					.then(() => resolve(true))
					.catch(() => reject(false));
				window.onfocus = prefocus;
			};
		}
	});
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

const elementToCsvRow = (row: Element) => {
	return csvRow(Object.values(parseRecord(row)));
}

const getPaginationButtons = () => {
	const elements: HTMLButtonElement[] = [];
	document.querySelectorAll<HTMLButtonElement>(".text-center .btn-group button").forEach((button) => {
		if (!button.disabled) {
			elements.push(button);
		}
	});
	return elements;
};

const getCurrentYear = async () => {
	const dropdown = getCurrentMonthControl();
	if (dropdown.innerText !== "January") {
		getMonthOptionContainer().querySelector<HTMLAnchorElement>('li a').click();
		await awaitNewRecords();
	}
	const records = [await getCurrentMonth()];
	for (let i = 1; i < 12; i++) {
		getMonthOptionContainer().querySelectorAll<HTMLAnchorElement>('li a').item(i).click();
		await awaitNewRecords();
		records.push(await getCurrentMonth());
	}
	return records.join('\n');
}

const getCurrentMonthControl = () => document.querySelector<HTMLButtonElement>('button.dropdown-button');

const getMonthOptionContainer = () => document.querySelector<HTMLUListElement>('.dropdown ul.list-unstyled');

const getCurrentMonth = async () => {
	const buttons = getPaginationButtons();
	const pages = getRowsFromDom().map(elementToCsvRow);
	for(let i = 1; i < buttons.length - 1; i++) {
		console.log(`Button ${i+1} of ${buttons.length}`);
		const nrp = awaitNewRecords();
		buttons[i].click();
		(await nrp).forEach(record => pages.push(elementToCsvRow(record)));
	}
	return pages.reverse().join('\n');
};

const awaitNewRecords = async (loadingSelector = "table .spinner", waitInterval = 10) => {
	let loading = false;
	while (!loading)  {
		await new Promise(resolve => setTimeout(resolve, waitInterval));
		loading = document.querySelector(loadingSelector) !== null;
		console.log("Awaiting Load Start", loading);
	}
	while (loading) {
		await new Promise(resolve => setTimeout(resolve, waitInterval));
		loading = document.querySelector(loadingSelector) !== null;
		console.log("Awating Load Finish", loading);
	}
	return getRowsFromDom();
};

const monthMap = [
	"January", "February", "March", "April","May","June",
	"July", "August", "September", "October", "November","December"
];

const selectMonth = (month: number) => {

}