$("img").css("border","5px solid red").each(function(){
	console.log($(this).attr("alt"));
});
$("input.input_text").closest("form").addClass("formClass");
$("#myList li.current").removeClass("current").next().addClass("current");