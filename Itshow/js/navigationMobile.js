 var navigationBoxW;
 var lineHeight;
 !(function(doc, win) {
            var docEle = doc.documentElement,//获取html元素
                event = "onorientationchange" in window ? "orientationchange" : "resize",//判断是屏幕旋转还是resize;
                fn = function() {
                    var width = docEle.clientWidth;
                    width && (docEle.style.fontSize = 100  * (width / 750) + "px");//设置html的fontSize，随着event的改变而改变。
                            grayCircleW=parseInt($(".gray-circle").css("width"));
                            imageCircleW=parseInt($(".image-circle").css("width"));
                            navigationBoxW=parseInt($(".navigation-box").css("width"))
                         
                };
            
            win.addEventListener(event, fn, false);
            doc.addEventListener("DOMContentLoaded", fn, false);
        
        }(document, window)); 
$(function(){
	
	        
			var flag=true;//判断导航栏是展开还是关闭
			$(".navigation-box").on("click",function(){//点击事件绑定
				if ($(".second-line").is(':animated')||$('.first-line').is(':animated')) {
                    return;//如果任意一个动画执行中，则按钮不可点
                }
				if(flag==true)//导航栏关闭到展开
				{
					
				//第二第四条线移开，此函数的回调函数是第一第三两条线重合，此函数的回调函数是旋转，变成叉号
					$(".second-line").stop(true).animate({"right":-navigationBoxW},200,function(){
						$(".first-line").stop(true).animate({"top":50+"%","margin-top":-navigationBoxW/14},1,function(){
							$('.first-line').stop(true).rotate({
								                angle: 0,
								                animateTo: 45,
								                easing: $(".easing").easeInOutExpo,
								                duration:200,
								                callback:function(){}
								            });
						})
						

					});
					
					$(".forth-line").stop(true).animate({"right":-navigationBoxW},200,function(){
						$(".third-line").stop(true).animate({"top":0,"margin-top":-navigationBoxW/21},1,function(){
								$('.third-line').stop(true).rotate({
								                angle: 0,
								                animateTo: -45,
								                easing: $(".easing").easeInOutExpo,
								                duration:200,
								                callback:function(){open();}

								            });
						})

					});
					
					flag=false;
				}
				else if(flag==false)//导航栏展开到关闭
				{
					$(".navigation").css({"display":"none"})
					$(".navigation").appendTo("body")
					$(".open").remove();
					$(".mask").remove();
				//导航栏关闭到展开的逆过程
					$('.first-line').stop(true).rotate({
								                angle: 45,
								                animateTo: 0,
								                easing: $(".easing").easeInOutExpo,
								                 callback: rotation1,
								                 duration:200
								                });
					$('.third-line').stop(true).rotate({
								                angle: -45,
								                animateTo: 0,
								                easing: $(".easing").easeInOutExpo,
								                 callback: rotation2,
								                 duration:200
								                });
					flag=true;
				}
			
			})
		
		function rotation1(){//叉号旋转过后的回调函数
	                	$(".first-line").stop(true).animate({"top":0,"margin-top":0},1,function(){$(".second-line").stop(true).animate({"right":0},200	)})
	                }
    	function rotation2(){
    	$(".third-line").stop(true).animate({"top":0,"margin-top":0},1,function(){$(".forth-line").stop(true).animate({"right":0},200	)})
    	}
    	function open(){//弹出弹出层
			$(".navigation-box").after($("<div class='open'></div>"),"<div class='mask'></div>"	)
			$(".navigation").appendTo(".open")
			$(".navigation").css({"display":"block"})
			var H=$(window).height();//页面可视区域高度
			var rH=$('body').outerHeight();//页面总高度
			var top_=(H*0.4);
			$(".mask").css(
			{
				'height':rH,
				'width':100+'%'
			})
			if(top_>0)
			{
				$(".open").css(
				{
					'top':top_
				})
				
			}
			else
			{
				$(".open").css(
				{
					'top':0
				})
			}
			$(window).resize(function(){
				H=$(window).height();//页面可视区域高度
				rH=$('body').outerHeight();//页面总高度
				top_=(H-$(".open").css('height').split("px")[0])/2;

				$(".mask").css(
				{
					'height':rH,
					'width':100+'%'
				})
				if(top_>0)
				{
					$(".open").css(
					{
						'top':top_
					})
					
				}
				else
				{
					$(".open").css(
					{
						'top':0
					})
				}	

			});
			$(".mask").on('click',function(){
				$(".navigation-box").click()
			})
			}
})