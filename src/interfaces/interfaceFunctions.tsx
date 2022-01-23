export interface BtnTypeProp {
	btnSymbols?: string;
	btnNumber?: number;
}

export interface CalcSetNumber {
	screenNumber: string;
	clickFunction?: any;
	result?: string;
}

export interface CalcArray {
	List: (number | string)[];
	value?: string;
	clickFunction?: any;
}
