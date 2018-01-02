
var scrollSmooth= (function() {

function scrollSmoothClicked(e)
{	
	e.preventDefault();
	var id='';
	var i;
	var currHref=this.href;
	
	for(i=(currHref.indexOf('#')+1);i<(currHref.length);i++)
	{	id=id+currHref[i];
	}
	
	var ele=document.getElementById(id);
	var eleTop=ele.offsetTop;
	var myinterval;
	var diff=10;
	
	if(eleTop > window.scrollY)
	{	
		function scrollDown()
		{	if(window.scrollY >= eleTop )//|| ((window.scrollY+window.innerHeight)>=document.documentElement.innerHeight))
			{	clearInterval(myinterval); }
			else if(window.scrollY+diff> eleTop)
			{
					diff=eleTop-window.scrollY;
					window.scrollTo(window.scrollX,window.scrollY+diff);
			}
			else
			{	window.scrollTo(window.scrollX,window.scrollY+diff); }
		}
		myinterval=setInterval(scrollDown,25);
	}
	else
	{	
		function scrollUp()
		{	if(window.scrollY <= eleTop)
			{	clearInterval(myinterval);	}
			else if(window.scrollY-diff<eleTop)
			{
					diff=window.scrollY-eleTop;
					window.scrollTo(window.scrollX,window.scrollY-diff);
			}
			else
			{	window.scrollTo(window.scrollX,window.scrollY-diff);	}
		}
		myinterval=setInterval(scrollUp,25);
	}
}

 return {
	 init: function(tag)
	 {	var x=document.getElementsByTagName(tag);
		var i;
		var eleHref;			//this is a string

		for(i=0;i<x.length; i++)
		{	eleHref=x[i].href;
			if(eleHref.indexOf('#')!=-1)    //means it is an inpage link
			{	x[i].addEventListener('click',scrollSmoothClicked);
			}
		}
	 }
};
 
})();