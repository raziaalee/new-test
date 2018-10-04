$.ajax({
	url:"https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en",
	
	sucess:function(data) {
	

		for (i=0; i<article.length; i++){

		document.querySelector(".main").innerHTML +=`
		<div class="images" style="background-image url(${data[i].imageURL})"</div>
		<h4  class="card-text" ${data[i].heading}</h4>
		<p class="card-text" ${data[i].description}</p>
	`
}

		
	}

	
})





// Write all your Javascript here!