function post(api, params) {
	var http = new XMLHttpRequest();
	var url = "http://www.dionsegijn.nl/notify/api/" + api;
	var params = params;
	http.open("POST", url, true);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.onreadystatechange = function() {//Call a function when the state changes.
	    if(http.readyState == 4 && http.status == 200) {
	        alert(http.responseText);
	    }
	}
	http.send(params);
}

function get(api, params) {
	var http = new XMLHttpRequest();
	var url = "http://www.dionsegijn.nl/notify/api/" + api + "/" + params;
	http.open("GET", url, true);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.onreadystatechange = function() {//Call a function when the state changes.
	    if(http.readyState == 4 && http.status == 200) {
	        alert(http.responseText);
	    }
	}
	http.send(params);
}