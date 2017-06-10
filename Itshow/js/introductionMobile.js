        var grayCircleW,imageCircleW
        !(function(doc, win) {
            var docEle = doc.documentElement,//获取html元素
                event = "onorientationchange" in window ? "orientationchange" : "resize",//判断是屏幕旋转还是resize;
                fn = function() {
                    var width = docEle.clientWidth;
                    width && (docEle.style.fontSize = 100  * (width / 750) + "px");//设置html的fontSize，随着event的改变而改变。
                    		grayCircleW=parseInt($(".gray-circle").css("width"));
							imageCircleW=parseInt($(".image-circle").css("width"));
                };
            
            win.addEventListener(event, fn, false);
            doc.addEventListener("DOMContentLoaded", fn, false);
        
        }(document, window));
        $(function(){
		$(".left-enter").css({"top":-imageCircleW})
		var rightEnter=$(".right-enter"),leftEnter=$(".left-enter"),topEnter=$(".top-enter"),bottomEnter=$(".bottom-enter"),orangeCube=$(".orange-cube");
		var index=1;
		var num=4;
		$(function(){
				$(".HTML").addClass("onShow");
				show();
				leftEnter.animate({"top":0},600)
				$(".orange-cube").animate({"top":0},600,function(){
							$(".button-right-bottom").on("click",function(){//右下方按钮的点击事件
							if(leftEnter.is(':animated')||rightEnter.is(':animated')||topEnter.is(':animated')||bottomEnter.is(':animated'))
							{
								return;//如果点击的是当前展示的位置，就返回
							}
							if(index==1)//第一张到第二张
							{
								index=2;
								onceturn(leftEnter,topEnter,orangeCube);
							}
							else if(index==2)
							{
								return;
							}
							else if (index==3)//第三张到第二张
							 {
								index=2;
								onceturn(rightEnter,topEnter,orangeCube);
							}
							else if(index==4)//第四张到第三张到第二张
							{
								index=2;
								twiceturn(bottomEnter,rightEnter,topEnter,orangeCube);	
							}
							$(".onShow").removeClass("onShow").addClass("disShow");	
							$(".VS").addClass("onShow");
							show();	

						})
						$(".button-left-bottom").on("click",function(){//左下方按钮的点击事件
							if(leftEnter.is(':animated')||rightEnter.is(':animated')||topEnter.is(':animated')||bottomEnter.is(':animated'))
							{
								return;
							}
							if(index==1)//第一张到第二张到第三张
							{
								index=3;
								 twiceturn(leftEnter,topEnter,rightEnter,orangeCube);				
							}
							else if(index==2)//第二张到第三张
							{
								index=3;
								onceturn(topEnter,rightEnter,orangeCube);		
							}
							else if (index==3) {
								return;										
							}
							else if(index==4)//第四张到第三张
							{
								index=3;
								onceturn(bottomEnter,rightEnter,orangeCube)
							}
							$(".onShow").removeClass("onShow").addClass("disShow");	
							$(".UI").addClass("onShow");
							show();	
						
						})
						$(".button-left-top").on("click",function(){//左上方按钮的点击事件
							if(leftEnter.is(':animated')||rightEnter.is(':animated')||topEnter.is(':animated')||bottomEnter.is(':animated'))
							{
								return;
							}
							if(index==1)//第一张到第二张到第三张到第四张
							{
								index=4;
								thirdturn(leftEnter,topEnter,rightEnter,bottomEnter,orangeCube);		
							}
							else if(index==2)//第二张到第三张到第四张
							{
								index=4;
								twiceturn(topEnter,rightEnter,bottomEnter,orangeCube);					
							}
							else if (index==3) //第三张到第四张
							{
								index=4;
								onceturn(rightEnter,bottomEnter,orangeCube)
							}
							else if(index==4)
							{
								return;

							}
							$(".onShow").removeClass("onShow").addClass("disShow");	
							$(".APP").addClass("onShow");
							show();	

						})
						$(".button-right-top").on("click",function(){//右上方按钮的点击事件
							if(leftEnter.is(':animated')||rightEnter.is(':animated')||topEnter.is(':animated')||bottomEnter.is(':animated'))
							{
								return;
							}
							if(index==1){
								return ;	
							}
							else if(index==2)//第二张到第一张
							{
								index=1;
								onceturn(topEnter,leftEnter,orangeCube);	
							}
							else if (index==3) //第三张到第二张到第一张
							{
							
								index=1;
								 twiceturn(rightEnter,topEnter,leftEnter,orangeCube);
								
							}
							else if(index==4)//第四张到第一张
							{
								index=1;
								onceturn(bottomEnter,leftEnter,orangeCube);
							}
							$(".onShow").removeClass("onShow").addClass("disShow");	
							$(".HTML").addClass("onShow");
							show();	

						})						
					})
					// $(".image-circle").hover(stop, play);
					// play();
			
		})	
  		function show(){//用来设置简要离开的左右两侧的部门介绍动作，和新出现的部门介绍动作
				$(".disShow").children(".characterize").animate({"left":200+"%"},1)
				$(".disShow").children(".min-top").children(".department").animate({"left":-100+"%"},1)
				$(".disShow").children(".min-top").children(".number").animate({"left":-100+"%"},1)
				$(".disShow").children(".min-top").children(".department-img").animate({"left":-100+"%"},1,function(){
				$(".disShow").removeClass("disShow");
				$(".onShow").children(".min-top").children(".number").animate({"left":50+"%"},600);
				$(".onShow").children(".min-top").children(".department").animate({"left":50+"%"},600);
				$(".onShow").children(".min-top").children(".department-img").animate({"left":0+"%"},600);
				$(".onShow").children(".characterize").animate({"left":0+"%"},600);
				})
  		}  		
		function onceturn(from,to,orangeCube){
			//正在展示的部门和用户点击的部门之间的间隔为一，默认顺时针旋转。
			//实现思路是通过四个橙色的正方形分别去遮挡两个四分之一扇形之间的间隔，通过判断用户点击，去改变橙色方块的位置并显示不同部门对应的图片,并通过回调函数去还原已经浏览过的图片位置
  			if(from==rightEnter)
  			{
  				if(to==bottomEnter)//第三张到第四张
  				{
  					from.animate({"top":-grayCircleW,"z-Index":4},600,function(){//移出图片的动作并通过回调函数还原位置
					})
					to.animate({"top":0,"z-Index":7},600)//新加入图片的动作
					$(".orange-cube-pretend-3rd").animate({"left":0},600)
  				}
  				else if(to==topEnter)//第三张到第二张
  				{
  					from.animate({"left":grayCircleW,"z-Index":4},600,function(){//移出图片的动作并通过回调函数还原位置
					})
					to.animate({"left":0,"z-Index":7},600)//新加入图片的动作
					$(".orange-cube-pretend-2nd").animate({"left":grayCircleW*0.5},600,function(){
						$(".orange-cube-pretend-2nd").css({"left":0,"top":grayCircleW})
					})
  				}

  			}
  			else if(from==bottomEnter)
  			{
  				if(to==leftEnter)//第四张到第一张
  				{
  					from.animate({"top":grayCircleW,"z-Index":4},600)
					to.css({"top":-grayCircleW,"left":0})
					to.animate({"top":0,"z-Index":7},600)
					$(".orange-cube-pretend-1st").css({"left":grayCircleW})
					$(".orange-cube-pretend-2nd").css({"top":grayCircleW})
					$(".orange-cube-pretend-3rd").css({"left":-grayCircleW*0.5})
					$(".orange-cube").css({"height":0}).animate({"height":grayCircleW*0.5},600,function(){
						$(".top-enter").css({"left":0,"top":-grayCircleW})
						$(".right-enter").css({"left":grayCircleW,"top":0})
						$(".bottom-enter").css({"left":0,"top":grayCircleW})
					})
					
  				}
  				else if(to==rightEnter)//第四张到第三张
  				{
  					from.animate({"top":grayCircleW,"z-Index":4},600,function(){
					})
					to.animate({"top":0,"z-Index":7},600)

					$(".orange-cube-pretend-3rd").animate({"top":grayCircleW*0.5},600,function(){
					$(".orange-cube-pretend-3rd").css({"left":-grayCircleW*0.5,"top":0})
					})

  				}
  				
				
  			}
  			else if(from==topEnter)
  			{
  				if(to==rightEnter){//第二张到第三张
  				
  				from.animate({"left":-grayCircleW,"z-Index":4},600,function(){
				})
				to.animate({"left":0,"z-Index":7},600)
				$(".orange-cube-pretend-2nd").animate({"top":grayCircleW*0.5},600)
				}
				else if(to==leftEnter){//第二张到第一张
  				
  				from.animate({"top":-grayCircleW,"z-Index":4},600,function(){
				})
				to.animate({"top":0,"z-Index":7},600)
				$(".orange-cube-pretend-1st").animate({"top":0},600,function(){
					$(".orange-cube-pretend-1st").css({"left":grayCircleW,"top":grayCircleW*0.5})
				})
				}
  			}
  			else if(from=leftEnter)//第一张到第二张
  			{

  					from.animate({"top":grayCircleW,"z-Index":4},600)
  					console.log(grayCircleW)
					to.animate({"top":0,"z-Index":7},600)
					$(".orange-cube-pretend-1st").animate({"left":grayCircleW*0.5},600)
  			}			
  		}
  		function twiceturn(from,to,end,orangeCube){
  			//正在展示的部门和用户点击的部门之间的间隔为二，默认顺时针旋转。
  			//实现思路以两次移动的方法实现，第一次时间极短，并通过第一次移动的回调函数去调用下一次的正常速度的移动（调用一次移动函数）
  			if(from==rightEnter)//第三张到第二张到第一张
  			{
  				from.animate({"left":grayCircleW,"z-Index":4},1,function(){//移出图片的动作并通过回调函数还原位置
					})
					to.animate({"left":0,"z-Index":7},1)//新加入图片的动作
					$(".orange-cube-pretend-2nd").animate({"left":grayCircleW*0.5},1,function(){
						$(".orange-cube-pretend-2nd").css({"left":0,"top":grayCircleW})
						onceturn(topEnter,leftEnter,orangeCube);
					})
  			}
  			else if(from==bottomEnter)//第四张到第三张到第二张
  			{
  				from.animate({"top":grayCircleW,"z-Index":4},1,function(){
				})
				to.animate({"top":0,"z-Index":7},1)

				$(".orange-cube-pretend-3rd").animate({"top":grayCircleW*0.5},1,function(){
				$(".orange-cube-pretend-3rd").css({"left":-grayCircleW*0.5,"top":0})
				onceturn(rightEnter,topEnter,orangeCube);
				})

  					
  			}
  			else if(from==topEnter)//第二张到第三张到第四张
  			{
  				from.animate({"left":-grayCircleW,"z-Index":4},1,function(){
						})
						to.animate({"left":0,"z-Index":7},1)
						$(".orange-cube-pretend-2nd").animate({"top":grayCircleW*0.5},1,function(){
							onceturn(to,end,orangeCube)
						})
  			}
  			else if(from=leftEnter)//第一张到第二张到第三张
  			{
				from.animate({"top":grayCircleW,"z-Index":4},1,function(){
					})
					to.animate({"top":0,"z-Index":7},1)
					$(".orange-cube-pretend-1st").animate({"left":grayCircleW*0.5},1,function(){
						onceturn(to,end,orangeCube);
				})
  			}
  		}
  		function thirdturn(from,second,third,end,orangeCube){
  			//正在展示的部门和用户点击的部门之间的间隔为三，默认顺时针旋转。
  			//实现思路以三次移动的方法实现，第一，二次时间极短，并通过第一次移动的回调函数去调用下一次的距离为二的移动（调用二次移动函数）
  			if(from=leftEnter)//第一张到第二张到第三张到第四张
  			{
				leftEnter.animate({"top":grayCircleW,"z-Index":4},1,function(){
				})
				topEnter.animate({"top":0,"z-Index":7},1)
				$(".orange-cube-pretend-1st").animate({"left":grayCircleW*0.5},1,function(){
					twiceturn(topEnter,rightEnter,bottomEnter,orangeCube);
				})
  			}
  		}

    
  	})