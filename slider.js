var slider=document.getElementById("slider");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var i=0;
next.onclick=function(){
	switch(i)
	{
		case 1:
		slider.innerHTML="<img src=1.jpg width=100% height=100% />";
		caption.innerHTML="<h1 style=color:green>description about third image</h1>";
		break;
			
		case 2:
		slider.innerHTML="<img src=2.jpg width=100% height=100% />";
		caption.innerHTML="<h1 style=color:red>description about third image</h1>";
		break;
			
		case 3:
		slider.innerHTML="<img src=3.jpg width=100% height=100% />";
		caption.innerHTML="<h1 style=color:purple>description about third image</h1>";
		i=0;
		break;
		
	}
		i++;
}
prev.onclick=function(){
	switch(i)
	{
		case 1:
		slider.innerHTML="<img src=1.jpg width=100% height=100% />";
		caption.innerHTML="<h1 style=color:green>description about third image</h1>";
		i=4;
		break;
			
		case 2:
		slider.innerHTML="<img src=2.jpg width=100% height=100% />";
		caption.innerHTML="<h1 style=color:red>description about third image</h1>";
		break;
			
		case 3:
		slider.innerHTML="<img src=3.jpg width=100% height=100% />";
		caption.innerHTML="<h1 style=color:purple>description about third image</h1>";
		break;
		
	}
		i--;
}


setInterval(function(){
	switch(i)
	{
		case 1:
		slider.innerHTML="<img src=1.jpg width=100% height=100% />";
		caption.innerHTML="<h1 style=color:green>description about first image</h1>";
		break;
			
		case 2:
		slider.innerHTML="<img src=2.jpg width=100% height=100% />";
		caption.innerHTML="<h1 style=color:red>description about secnod image</h1>";
		break;
			
		case 3:
		slider.innerHTML="<img src=3.jpg width=100% height=100% />";
		caption.innerHTML="<h1 style=color:purple>description about third image</h1>";
		i=0;
		break;
		
	}
		i++;

},2000)


var caption=document.getElementById("caption");