
function changeColor () {
	let hex = `0123456789ABCDEF`

	let color = '# '

	for(let i =0; i<6; i++){
		color += hex[i]
	}

	return color;
}

export default changeColor