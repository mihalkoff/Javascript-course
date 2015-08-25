for(var i=8;i<=13;i++){
	$("#myList").append("<li>List item "+i+"</li>");
}
$("#myList li:odd").remove();
$("div.module").last().append("<h2>New h2</h2>");
$("div.module").last().append("<p>New paragraph</p>");
$("#specials select").append("<option value='wednesday'>Wednesday</option>");
$("div.module").last().after("<div class='module'><img src='images/bread.jpg' alt='bread'/></div>");