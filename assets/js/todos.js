//Check off special todos by clicking

$("ul").on("click","li",function(){
$(this).toggleClass("completed");
});

//click on x to delete
$("ul").on("click","span",function(event){
 $(this).parent().fadeOut(500,function(){
 	$(this).remove();
 });
 event.stopPropogation();
});

//add in list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing txt from input
		var todoText = $(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span> <i class='fa fa-trash'></i> </span>"+todoText+"</li>");
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})