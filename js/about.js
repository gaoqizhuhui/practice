window.onload=function(){
	var oImg=document.getElementById("images");
	var oUl=oImg.getElementsByTagName("ul")[0];
	var aLi=oImg.getElementsByTagName("li");

	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';

	function move(){
		if (oUl.offsetLeft<-oUl.offsetWidth/2) 
		{
			oUl.style.left='0';
		}
		oUl.style.left=oUl.offsetLeft-2+'px';
	}

	var timer=setInterval(move,30)

	oImg.onmouseover=function(){
		clearInterval(timer);
	};
	oImg.onmouseout=function(){
		timer=setInterval(move,30)
	}
}