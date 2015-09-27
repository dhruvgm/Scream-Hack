window.onload = function() {
  	document.querySelectorAll('p')[0].classList.add('text-load');
  	  			$("#stage").hide();
  	  			$("#button").click(function() { 
    // assumes element with id='button'
    $("#container").toggle();
    $("#stage").toggle();
    });
  	
  	var callback = function() {
  		var btn = document.querySelectorAll('button')[0];
  		btn.classList.add('text-load');
  		btn.addEventListener('click', function() {
  			document.location = 'videoPage.html';

  		});
  		
  	};
  	setTimeout(callback, 1250);
  	
  	
  	
  
};


  	