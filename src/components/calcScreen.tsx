import { CalcSetNumber } from '../interfaces/interfaceFunctions';

const calcScreen = (props: CalcSetNumber): JSX.Element => {
	return (
		<div className="container-fluid h-25 calculator-body-screen d-flex justify-content-end align-items-center">
			{props.result ? <p>({props.result})</p> : ''}
			{props.screenNumber ? <h1>{props.screenNumber}</h1> : <h1>0</h1>}
		</div>
	);
};

export default calcScreen;
