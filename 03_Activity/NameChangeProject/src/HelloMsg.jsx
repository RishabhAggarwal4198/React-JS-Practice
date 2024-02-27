

function HelloMsg (userName , textColor  ) {
	let coloRR = {color: textColor };
	return (
		<h1  style = {coloRR} > Hello ,  {userName} </h1>
	)
	
}


export default HelloMsg
