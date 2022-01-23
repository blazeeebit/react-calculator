import { CalcArray } from '../interfaces/interfaceFunctions';

const CalcBtn = (props: CalcArray): JSX.Element => {

	return (
		<>
			{props.List.map((val, i) => (
				<div key={i} className={`btn-each shadow`} onClick={() => props.clickFunction(val)}>
					<p>{val}</p>
				</div>
			))}
		</>
	);
};

export default CalcBtn;
