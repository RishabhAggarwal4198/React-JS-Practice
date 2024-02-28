
import Card from "./SingleCard"

function GroupOfCards () {

	let head = ['Logitech MX Master 3S' , 'Apple Pencil (2nd Gen)' ,
				 'Zebronics zeb-Transformer' , 'Portonics Toad 23 Wireless Mouse']

	let descript = [ ['800 DPi' , '5 Programming Button'] , 
					['Intutive touch surface', 'Designed for iPad Pro'], 
					['Intutive touch surface', 'Designed for iPad Pro'], 
					 ['Wireless Mouse 2.4GHz' , 'Optical Orientation']]
	
	
	return(

		<div>
			<Card idx={0}  heading={head[0]}  image={"React\Images\png_computer_mouse_71912.png"} descrption = {descript[0]}  price={299} />
		</div>
	)
}



export default GroupOfCards