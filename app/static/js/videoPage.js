 window.onload = function() {
  $("#stage").hide();
  	document.querySelectorAll('p')[0].classList.add('text-load');
  	
  	var callback = function() {
  		var btn = document.querySelectorAll('button')[0];
  		var sub = document.getElementById("submit");
  		sub.classList.add('text-load');
  		btn.classList.add('text-load');
  		btn.addEventListener('click', function() {
  			//$(#container).hide();
  			//document.location = 'http://screamarium.com/scream.html';
  		});
  	};
  	
  	/*var hideVid = function(){
		$(#container).hide();
  	};*/
  	setTimeout(callback, 1250);
  	
  	$("#button").click(function() { 
    // assumes element with id='button'
    $("#container").toggle();
    $("#stage").toggle();
});
  	
  
}

