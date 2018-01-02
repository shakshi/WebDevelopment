function scrollToTop()
{
	function scrollToTopClicked()	//this function creates an interval...can make recursive 
	{	
		var myinterval;
		function scroll()
		{
			if(window.scrollY==0)
			{
				clearInterval(myinterval); //set interval return the no (many intervals running) that interval is stopped
			}
			else
			{	window.scrollTo(window.scrollX,window.scrollY-10);
			}
		}
		myinterval=setInterval(scroll,50);	
	}
	
	var el=document.getElementById('scrollTop');
	el.addEventListener('click',scrollToTopClicked);
}