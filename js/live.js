window.onload=function()
{
	var oLive=document.getElementById("content");
	var aBtn=oLive.getElementsByTagName('input');
	var aDiv=oLive.getElementsByTagName('div');

	for (var i = 0; i < aBtn.length; i++) {
		aBtn[i].index=i;
		aBtn[i].onclick=function()
		{
			for (var i = 0; i < aBtn.length; i++) {
				aBtn[i].className='';
				aDiv[i].style.display='none'
			}

			this.className="active";						
			aDiv[this.index].style.display="block";
		}
	}
}