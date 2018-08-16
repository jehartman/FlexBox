var gifs = ["assets/images/marmot1.gif", "assets/images/marmot2.gif", "assets/images/marmot3.gif", "assets/images/marmot4.gif", "assets/images/marmot5.gif"];

$(document).ready(function() {

	function chooseGif () {
		for (var i = 0; i < gifs.length; i++) {
			var gif = "<div><img src='" + gifs[i] + "' alt='" + gifs[i] + "'></div>";
			console.log(gif);
			addGif(gif);
		}
	}


	function addGif (gif) {
		$("#squaresContainer").append(gif);
	}

	chooseGif();


});