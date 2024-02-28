
import Card from "./SingleCard"

let decor = {
	display : "flex",
	columnGap : "2.2rem"
	
}


function GroupOfCards () {

	

	
	
	
	return(

		<div style={decor} >
			<Card idx={0}   price={299} />
			<Card idx={1}   price={299} />
			<Card idx={2}   price={299} />
			<Card idx={3}   price={299} />
		</div>
	)
}



export default GroupOfCards