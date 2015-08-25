$("#specials select").css("color","red");
$("#specials select").parent().next().find("input:submit").css("color","white");
$("#slideshow li:first").addClass("current");
$("#slideshow li:first").siblings().addClass("disabled");