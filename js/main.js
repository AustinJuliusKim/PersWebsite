 var nouns = [
			"Code Baller",
			"Basketball Player",
			"Warriors Number One Fan",
			"Bay Area Native",
			"Fisherman & Chef",
			"Gamer Geek",
			"Snowboarder",
			"Outdoor Enthusiast",
			"49ers Pride",
			"Giants Fan",
		];

var noun = document.getElementById('noun');

var randomNoun = function(array){
	nouns[Math.floor(Math.random()* 10)]
};


var previous;


var clear = window.setInterval(function(){
	var previous = noun.innerText = nouns[Math.floor(Math.random()* 10)]
	// console.log(previous)
	while (previous == nouns[Math.floor(Math.random()* 10)]){
		// console.log("repeated");
		previous = noun.innerText = nouns[Math.floor(Math.random()* 10)];
	}
}, 1500);

( function($){
	// Init Skrollr
	var s = skrollr.init({
		render: function(data){
			// console.log(data.curTop);
		}
	});
})(jQuery);

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, "slow");
        return false;
      };
    };
  });
});

