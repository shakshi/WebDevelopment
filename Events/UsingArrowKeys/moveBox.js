var moveDiv = (function() {
	var ele;
	
	function changeStyle()
	{										//these statements are not executed as they are in a function 
		ele.style.backgroundColor='pink';   //they will be executed after ele is defined
		ele.style.height='90px';
		ele.style.width='90px';
		ele.style.position='absolute';
		ele.style.margin='2px';

	}
	function moveDivOnPress(e)
	{	console.log(e.keyCode);
		switch(e.keyCode)
		{	case 37: ele.style.left=(ele.offsetLeft-10)+'px';
					break;
			case 38: ele.style.top=(ele.offsetTop-10)+'px';
					break;
			case 39: ele.style.left=(ele.offsetLeft+10)+'px';
					break;
			case 40: ele.style.top=(ele.offsetTop+10)+'px';
					break;
			default:console.log('invalid choice');
		}
	}

	return {	
		init:function(id)
		{	ele=document.getElementById(id);
			changeStyle();
			window.addEventListener('keydown',moveDivOnPress);
		}
	};
})();