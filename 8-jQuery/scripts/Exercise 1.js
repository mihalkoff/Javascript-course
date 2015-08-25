$("div.module");
$("#myListItem");
$("#myList li:nth-child(3)");
$("#myList #listItem_2").next().attr("for","q").css("background-color","red");
$("#search label").attr("for","q").css("background-color","red");
$("body").append("<p>The hidden elements are: "+$("body").find(":hidden").not("script").length+"</p>");
$("body").append("<p>The image elements with alt attribute are: "+$("img[alt]").length+"</p>");
$("table tr").filter(':odd').css("background-color","red");