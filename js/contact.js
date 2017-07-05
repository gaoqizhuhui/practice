window.onload=function()
{
	var oBtn=document.getElementById("btn1");
	var oTxt=document.getElementsByTagName("textarea")[0];
	var oUl=document.getElementById("text");

	oBtn.onclick=function(){
		var oLi=document.createElement('li');
		var aLi=oUl.getElementsByTagName('li');

		oLi.innerHTML=oTxt.value;

		if (aLi.length>0) 
		{
			oUl.insertBefore(oLi,aLi[0]);
		}
		else
		{
			oUl.appendChild(oLi);
		}
	}
}