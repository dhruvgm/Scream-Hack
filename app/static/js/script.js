alert("test");
window.onload = function() {
  	document.querySelectorAll('p')[0].classList.add('text-load');
  	
  	var callback = function() {
  		var btn = document.querySelectorAll('button')[0];
  		btn.classList.add('text-load');
  		btn.addEventListener('click', function() {
  			document.location = 'http://screamarium.com/scream.html';
  		});
  	};

  	setTimeout(callback, 1250);