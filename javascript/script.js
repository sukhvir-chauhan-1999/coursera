function sayhello() {
	var name= document.getElementById("input").value.toLowerCase();

	if(name === "nishant"){
		document.getElementById("content").
		innerHTML="<h2> Hello chutiye<h2>";

	}
	else{
		document.getElementById("content").
		innerHTML="<h2> Hello " + name + " </h2>";

	}

};