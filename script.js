function clock(){
	var hours=document.getElementById('hours');
	var minutes=document.getElementById('minutes');
	var seconds=document.getElementById('seconds');
	var milli_seconds=document.getElementById('milli-seconds');
	var h=new Date().getHours();
	var m=new Date().getMinutes();
	var s=new Date().getSeconds();
	var ms=new Date().getMilliseconds();
	hours.innerHTML=h;
	minutes.innerHTML=m;
	seconds.innerHTML=s;
	milli_seconds.innerHTML=ms;
}
var interval=setInterval(clock,1);