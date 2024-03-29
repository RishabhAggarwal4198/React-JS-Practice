
import "./Product.css"


function Product ({name, age, state, year = `"Not mentioned"`}) {

	let gradYear = year > 2005 ? "❌You exceed the GRADUATION-YEAR limit❌" : " ✅Your GRADUATION-YEAR is fine✅"
	let styles = {background : year < 2005 ? "linear-gradient(to top right , red 10% , greenyellow)" : ""} 

	return (
		<div className="div1" style={styles} >
		<h1> Hello My Name is {name} </h1>
		<h2> My Age is : {age} </h2>
		<h3> I belongs to the Indian state of  "{state}"</h3>
		<h4> Graduation year: <b>{gradYear}</b> </h4>
					{/* OR 🔽🔽 */}	
		<h4> Eligibility : {year < 2005 ? `Your YEAR is ${year}, So You are ELIGIBLE` : ` Your YEAR is ${year}, So You are NOT-ELIGIBLE`} </h4>
		

		{/* <b> Age Factor :</b> {age <= 30 ? <h4>You are UNDER-AGE for this post</h4> :  <h4> Your AGE is fine</h4>  } */}
									{/* OR 🔽🔽 */}
	 {age <= 30 &&   <b> Age Factor : <h4>You are UNDER-AGE for this post</h4></b> }

		</div>
		
	);
}





export default Product