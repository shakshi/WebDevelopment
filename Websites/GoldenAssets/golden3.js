var scrollToTop = (function() {    
    
	function scrollToTopClicked() 
	{
        var myinterval;
        function scroll() 
		{
            if (window.scrollY == 0) 
			{
                clearInterval(myinterval);
            } 
			else 
			{
                window.scrollTo(window.scrollX, window.scrollY-10);
            }
        }
        myinterval = setInterval(scroll, 10);
    }
    
	return {
        init: function(id) 
		{	var el = document.getElementById(id);
            el.addEventListener('click', scrollToTopClicked);
        }//returning an object therefore a module created
    };
})();