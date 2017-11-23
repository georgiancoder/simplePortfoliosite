var works = document.getElementsByClassName("works")[0];
var wheelDisabled = false;

works.addEventListener("wheel",weel,false);

var postCounter = 0;
function weel(e){
	if(wheelDisabled)
		return;
	if(e.deltaY > 0)
	{
		// down
		$(".works div.header").eq(postCounter).animate({left: "100%"},function(){
			$(this).css({left: "-100%"});
		});
		$(".works div.image").eq(postCounter).animate({left: "-100%"},function(){
			$(this).css("left","100%");
		});
		if(postCounter > $(".works div.header").length-2)
		{
			postCounter = 0;
		}
		else
		{
			postCounter++;
		}
		$(".works div.header").eq(postCounter).css({left: "-100%"});
		$(".works div.image").eq(postCounter).css({left: "100%"});
		$(".works div.header").eq(postCounter).animate({left: "0"});
		$(".works div.image").eq(postCounter).animate({left: "0"});
	}
	else
	{
		// up
		$(".works div.header").eq(postCounter).animate({left: "-100%"},function(){
			$(this).css({left: "100%"});
		});
		$(".works div.image").eq(postCounter).animate({left: "100%"},function(){
			$(this).css("left","-100%");
		});
		if(postCounter == 0)
		{
			postCounter = $(".works div.header").length-1;
		}
		else
		{
			postCounter--;
		}
		$(".works div.header").eq(postCounter).css({left: "100%"});
		$(".works div.image").eq(postCounter).css({left: "-100%"});
		$(".works div.header").eq(postCounter).animate({left: "0"});
		$(".works div.image").eq(postCounter).animate({left: "0"});	}
	wheelDisabled = true;
	window.setTimeout(function(){ wheelDisabled=false; },700);
}