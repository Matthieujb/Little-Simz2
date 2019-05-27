function typeEffect(element, speed) {
	var text = $(element).text();
	$(preload).html('<div></div>');
	
	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}

$( document ).ready(function() {
  var speed = 75;
  var delay = $('h1').text().length * speed + speed;
  typeEffect($('h1'), speed);
  setTimeout(function(){
    $('p').css('display', 'inline-block');
    typeEffect($('p'), speed);
  }, delay);
});