window.onload=function(){
	var oTab=document.getElementById('tab');
	var oUl=oTab.getElementsByTagName('ul')[0];
	var aImg=oUl.getElementsByTagName('li');
	var aTxt=oTab.getElementsByTagName('div');

	for (var i = 0; i < aImg.length; i++) {
		aImg[i].index=i;
		aImg[i].onclick=function()
		{
			for (var i = 0; i < aImg.length; i++) {
				aImg[i].className="";
		    }
		    this.className="active";
		    for (var i = 0; i < aTxt.length; i++) {
		    	aTxt[i].style.display='none';
		    }
			
			aTxt[this.index].className="active2";
			aTxt[this.index].style.display="block";
		}
	}
}