
let ishhTile1 = {
	textDecorationLine : "line-through"
}

let ishhTile2 = {
	backgroundColor : "skyblue",
	padding : "1rem"

}


function Price ({oldPrice, newPrice}) {

	return(
		<div style={ishhTile2} >
			<span style={ishhTile1}><b>{oldPrice}</b></span>
			&nbsp; &nbsp; 
			<span><b>{newPrice}</b></span>
		</div>
	)
}


export default Price 