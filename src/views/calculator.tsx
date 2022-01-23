import { useState } from 'react';
import CalcButtonBody from '../components/calcButtonBody';
import CalcScreen from '../components/calcScreen';

const Calculator = (): JSX.Element => {
	const [ calc, setCalc ] = useState<string>('');
	const [ result, setResult ] = useState<string>('');

	const ops: string[] = [ '+', '-', '*', '/' ];

	const UpdateValue = (newVal: string) => {
		if ((ops.includes(newVal) && calc === '') || (ops.includes(newVal) && ops.includes(calc.slice(-1)))) {
			return;
		}
		setCalc(calc + newVal);

		if (newVal == '=') {
			Calculate();
		}

		if (newVal == 'del') {
			if (calc == '') {
				return;
			} else {
				const newString: string = '';
				setCalc(newString);
				setResult(newString);
			}
		}

		if (!ops.includes(newVal)) {
			setResult(eval(calc + newVal).toString());
		}
	};

	const Calculate = () => {
		setCalc(result);
		setResult('');
	};

	return (
		<div className="container-fluid h-100 d-flex justify-content-center align-items-center">
			<div className="col-md-4 col-12 h-75 calculator-body shadow">
				<CalcScreen screenNumber={calc} result={result} />
				<CalcButtonBody screenNumber={calc} clickFunction={UpdateValue} />
			</div>
		</div>
	);
};

export default Calculator;
