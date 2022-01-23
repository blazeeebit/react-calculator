import { useState } from 'react';
import CalcBtn from './calcBtn';
import { CalcSetNumber } from '../interfaces/interfaceFunctions';

const CalcButtonBody = (props: CalcSetNumber): JSX.Element => {
	const NumArr: (number | string)[] = [ 1, 2, 3, '*', 4, 5, 6, '/', 7, 8, 9, '+', 0, 'del', '=', '-' ];

	return (
		<div className="container-fluid h-75 calculator-button-container">
			<div className="container-fluid h-100 keyboard-layout">
				<CalcBtn List={NumArr} value={props.screenNumber} clickFunction={props.clickFunction} />
			</div>
		</div>
	);
};

export default CalcButtonBody;
