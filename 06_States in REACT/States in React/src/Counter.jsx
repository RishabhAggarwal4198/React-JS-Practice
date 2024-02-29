
export default function Counter () {
	// let [stateVariable , setStateVariable] = useState(10);
	let [count , setCount] = userState (0);


	let inCount = () => {
		// मount  = (count + 1);
		setCount (count + 1);
		console.log(count);
	}
	// let count = 0;
	// function inCount () {
	// 	count += 1;
	// 	console.log(count);
	// }

	return (
		<div>
			<h3>Count = {count}</h3>
			<button onClick={inCount} >Increase Count</button>
		</div>
	)
}