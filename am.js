function animate(obj,jason,callback){
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in jason){
			if(attr == 'opacity')
				var now = parseInt(getStyle(obj,attr) * 100);
			else
				var now = parseInt(getStyle(obj,attr));
			var speed = (jason[attr]-now)/10;
	  		speed = speed>0?Math.ceil(speed):Math.floor(speed);//取整函数
			if(attr == 'opacity')
				obj.style[attr] = (now + speed)/ 100;
			else
				obj.style[attr] = now + speed + "px";
			if(jason[attr] !== (now + speed)){	//使所有属性到达目的属性值
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback && callback();
		}
	},10);
}
function getStyle(obj,style){	//浏览器兼容下的获取属性
	if(obj.currentStyle)
		return obj.currentStyle[style];
	else 
		return getComputedStyle(obj)[style];
}
  
// function animate(obj,json,callback){
// 	clearInterval(obj.timer);
// 	obj.timer = setInterval(function(){
// 	  	for(var attr in json){
// 	  		if(attr == 'opacity')
// 	  			var now = parseInt(getStyle(obj,attr)*100);
// 	  		else
// 	  			var now = parseInt(getStyle(obj,attr));//将字符串转换成数字
// 	  			var isStop = true;
// 	  			var speed = (json[attr]-now)/10;
// 	  			speed = speed>0?Math.ceil(speed):Math.floor(speed);
// 	  			var current = now+speed;
// 	  			if(attr == 'opacity')
// 	  				obj.style[attr] = current/100;
// 	  			else
// 	  				obj.style[attr] = current+"px";	
// 	  			if(json[attr] !== current){//!==同类型之间才会比较
// 		  			isStop = false;
// 		  		}
// 		}//for
// 		if(isStop){
// 		  	clearInterval(obj.timer);
// 			callback && callback();//回调函数
// 	  	}
// 	},10);	
// }//animate
// function getStyle(obj,style) {  
// 	if(obj.currentStyle) 
// 		return obj.currentStyle[style];  
// 	else 
// 		return getComputedStyle(obj)[style];  
// }  
