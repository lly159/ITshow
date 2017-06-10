  !(function(doc, win) {
            var docEle = doc.documentElement,//获取html元素
                event = "onorientationchange" in window ? "orientationchange" : "resize",//判断是屏幕旋转还是resize;
                fn = function() {
                    var width = docEle.clientWidth;
                    width && (docEle.style.fontSize = 100  * (width / 750) + "px");//设置html的fontSize，随着event的改变而改变。
                    	
                };
            
            win.addEventListener(event, fn, false);
            doc.addEventListener("DOMContentLoaded", fn, false);
        
        }(document, window));
  var sumEvent14 = 0,sumEvent15 = 0, sumEvent16 = 0, sumEvent17 = 0;//用来分别记录每年的大事件件数，来加到不同的位置
	$(document).ready(function(){ 

		        $.ajax({ 
		            type: "GET", 	
		            url: "Ajax/EventHandler.ashx",
		            dataType: "JSON",
	
		            success: function (data) {

		                for (j = 0; j < data.length; j++) {
		                    var year = data[j].EventTime;
		                    if (year.slice(0, 4) == "2014") {
		                        sumEvent14++;
		                        var row = $("<div>").addClass("accomplishment-row").appendTo($(".accomplishment-14"));
		                        var rowLeft = $("<div>").addClass("accomplishment-left").appendTo(row);
		                        var rowYear = $("<h2>").text(data[j].EventTime).appendTo(rowLeft);
		                        var rowDot = $("<img>").attr("src", "images/dot.png").appendTo(rowLeft);
		                        var rowRight = $("<div>").addClass("accomplishment-right").appendTo(row);
		                        var rowP = $("<p>").appendTo(rowRight);
		                        var rowSpan = $("<span>").text(data[j].EventContent).appendTo(rowP);
		                        if (data[j].EventImage != "") {
		                            var rowImg = $("<img>").attr("src", data[j].EventImage).appendTo(rowRight);
		                            rowImg.css({ "display": "none" })
		                        }


		                    }
		                    else if (year.slice(0, 4) == "2015") {
		                        sumEvent15++;
		                        var row = $("<div>").addClass("accomplishment-row").appendTo($(".accomplishment-15"));
		                        var rowLeft = $("<div>").addClass("accomplishment-left").appendTo(row);
		                        var rowYear = $("<h2>").text(data[j].EventTime).appendTo(rowLeft);
		                        var rowDot = $("<img>").attr("src", "images/dot.png").appendTo(rowLeft);
		                        var rowRight = $("<div>").addClass("accomplishment-right").appendTo(row);
		                        var rowP = $("<p>").appendTo(rowRight);
		                        var rowSpan = $("<span>").text(data[j].EventContent).appendTo(rowP);
		                        if (data[j].EventImage != "") {
		                            var rowImg = $("<img>").attr("src", data[j].EventImage).appendTo(rowRight);
		                            rowImg.css({ "display": "none" })
		                        }
		                    }
		                    else if (year.slice(0, 4) == "2016") {
		                        sumEvent16++;
		                        var row = $("<div>").addClass("accomplishment-row").appendTo($(".accomplishment-16"));
		                        var rowLeft = $("<div>").addClass("accomplishment-left").appendTo(row);
		                        var rowYear = $("<h2>").text(data[j].EventTime).appendTo(rowLeft);
		                        var rowDot = $("<img>").attr("src", "images/dot.png").appendTo(rowLeft);
		                        var rowRight = $("<div>").addClass("accomplishment-right").appendTo(row);
		                        var rowP = $("<p>").appendTo(rowRight);
		                        var rowSpan = $("<span>").text(data[j].EventContent).appendTo(rowP);
		                        if (data[j].EventImage != "") {
		                            var rowImg = $("<img>").attr("src", data[j].EventImage).appendTo(rowRight);
		                            rowImg.css({ "display": "none" })
		                        }
		                    }
		                    else if (year.slice(0, 4) == "2017") {
		                        sumEvent17++;
		                        var row = $("<div>").addClass("accomplishment-row").appendTo($(".accomplishment-17"));
		                        var rowLeft = $("<div>").addClass("accomplishment-left").appendTo(row);
		                        var rowYear = $("<h2>").text(data[j].EventTime).appendTo(rowLeft);
		                        var rowDot = $("<img>").attr("src", "images/dot.png").appendTo(rowLeft);
		                        var rowRight = $("<div>").addClass("accomplishment-right").appendTo(row);
		                        var rowP = $("<p>").appendTo(rowRight);
		                        var rowSpan = $("<span>").text(data[j].EventContent).appendTo(rowP);
		                        if (data[j].EventImage != "") {
		                            var rowImg = $("<img>").attr("src", data[j].EventImage).appendTo(rowRight);
		                            rowImg.css({ "display": "none" })
		                        }
		                    }

		                }
		            }
		    
		        });



		
	    $(function(){
		var H,W;//窗口的宽高
		var flag=false;//记录钟表是否已经被点开
		var index_;//记录点开的是哪一个钟表
		var i=4;//记录一共有几个年份
		var init_=-1;//记录当前是展示的哪个年份·
		var clockBoxHeight=parseInt($(".clock-box").css("height"))
		var clockBoxTop= parseInt($(".navigation-box").css("top"))+parseInt($(".navigation-box").css("height"))//保存时钟容器的top值，用来计算时间容器的高度
		var clockHeight=parseInt($(".clock").css("height"))//保存时钟的高度，用来计算时钟的top值

				 H=$(window).height();//获得窗口宽度
				 W=$(window).width();//获得窗口高度
				$(window).resize(function(){//浏览器缩放重新获得窗口宽高
				 	H=$(window).height();
				 	W=$(window).width();
				});
					

						


		
			$(".mid-line1").animate({"height": clockBoxTop},500,function(){//动画的动画效果嵌套回调，实现顺序
				$("#0 .colck-image-box").animate({"height":$(".clock-box").css("width")},500,function(){
					$("#1 .colck-image-box").animate({"height":$(".clock-box").css("width")},500,function(){
						$("#2 .colck-image-box").animate({"height":$(".clock-box").css("width")},500,function(){
							$("#3 .colck-image-box").animate({"height":$(".clock-box").css("width")},500,function(){
									var clockArray=$(".clock ")
										$(".clock ").on("click",function(){
											flag=true;

											if($(this).is(':animated')||$(".clock a").is(':animated')||$(".accomplishment-left").is(':animated'))//如果正有动画执行则钟表不可点
											{
												return;
											}
											else{
											

												$(".clock a").animate({"left":-0.6+"rem"},1,function(){
													$(this).animate({"top":0.25+"rem"},300)
												})
								            index_=parseInt($(this).attr("id"));//保存当前点开的钟表
								            if(init_==index_)
											{
												return;//如果当前点击的和正在展示的一样就返回
											}
								            init(init_,index_);//否则重新设置位置，进行展示
								            var accomplishment=index_+14;
								            var topClock=clockArray.slice(0,index_+1);//移到顶部的时钟
								            var bottomClock=clockArray.slice(index_+1);//移到底部的时钟
								            var sum1=parseInt(index_);
								            var sum2=parseInt(index_);
								            topClock.each(function(){//设置位置
								            	var this_=$(this);
								            	$(this).animate({
								            		"width":0.7+"rem",
								            		"height":0.7+"rem",
								            		"margin-left":0.1+"rem",
								            		"top":0.7*(sum1-index_)+"rem"},300)
								          
								            	sum1+=1;
								            })
								            bottomClock.each(function(){
								            	var _this_=$(this);
								            	$(this).animate({
								            		"width":0.7+"rem",
								            		"height":0.7+"rem",
								            		"margin-left":0.1+"rem",
								            		"top":(6.9-(i-sum2-1)*0.7)+"rem"},300)
								            		sum2+=1;  	
								            })
								            timer = setTimeout(function () {//时钟移动后事件的进入
                    							 if(accomplishment==14)
									            { 
									            	init_=0;
									            				
									            	show(index_,14)
									            }
									            else if(accomplishment==15)
									            { 	init_=1;
						            				show(index_,15)
						            			}
						            			else if(accomplishment==16)
						            			{ 
						            				init_=2;
						            				show(index_,16)
						            				
						            			}
						            			else if(accomplishment==17)
						            				
						            			{
						            				init_=3;
						            				show(index_,17)
						            			}
                   						 			
               								 },300);
									           
											}
								 		})
								 		$(".accomplishment-right").each(function(){
								 			if($(this).find("img").length>0 )
								 			{
								 				var this_=$(this);
								 				$(this).find("span").css({"cursor":"pointer","color":"#e94e1b"})
								 				// $(this).find("span").hover(function(){$(this).css({"color":"#e94e1b"});
								 				// 	 this_.prev().find("h2").css({"color":"#e94e1b"})
								 				// 	},function(){$(this).css({"color":"black"});
								 				// 	this_.prev().find("h2").css({"color":"black"})
								 				// })
								 				
								 			}
								 		})
								 		$(".accomplishment-right p").find("span").on("click",function(){
											var this_=$(this)
								 			if($(this).parent("p").parent(".accomplishment-right").find("img").length>0 )
								 			{
									 			$(".container").after($("<div class='open1'><p class='bottomText'></p></div>"),"<div class='mask1'></div>")
									 			 $(this).parent("p").parent(".accomplishment-right").find("img").appendTo(".open1").css({
									 			 	"display":"block",
									 			 	"width":100+"%",
									 			 	"height":460
									 			 });
													$(".mask1").css(
													{
														'height':$(".container").css("height"),
														'width':$(".container").css("width")
													})
													
													$(".open1").css(
													{
														'top':50+"%",

													})
													$(".bottomText").text($(this).text())
														
												
													$(window).resize(function(){

														$(".mask1").css(
														{
														'height':$(".container").css("height"),
														'width':$(".container").css("width")
														})
													
														$(".open1").css(
														{
															'top':50+"%"
														})

													});
													$(".mask1").on('click',function(){
														$(".open1").find("img").appendTo( this_.parent("p").parent(".accomplishment-right")).css({"display":"none"});
														$(".open1").remove();
														$(".mask1").remove();
													})
								 			}
								 			
										
								})
							})
						})
					})
				})	
			})
		function show(init,id){//事件进入
			var j=0;//用来保存事件的个数进行计算
			var show_;//保留需要展示的是哪个容器
			if(id==14)
			{
			    j = sumEvent14;
				show_=$(".accomplishment-14")
			}
			else if(id==15)
			{
			    j = sumEvent15;
				show_=$(".accomplishment-15")
			}
			else if(id==16)
			{
			    j = sumEvent16;
				show_=$(".accomplishment-16")
			}
			else if(id==17)
			{
			    j = sumEvent17;
				show_=$(".accomplishment-17")
			}
			$(".activity-mid-line").animate({"top":(init+1)*0.7+"rem"},1,function(){//中间线的展示
				$(this).animate({"height":(6.9-(i)*0.7)+"rem"},300,function(){	
					show_.css({"display":"block"}).animate({
												},1,function(){
													var time=300;
													for( var k=0;k<j;k++)
													{ 	
														show_.find(".accomplishment-row").eq(k).find('.accomplishment-left')
																		   .animate({ left   : '50%'}, time)
										            						.end()
																		   .find('.accomplishment-right')
																		  .animate({ left   : '50%'}, time)	
																		  time+=200;

													}		
												})
					show_.find(".accomplishment-row").each(function (index) {
					    $(this).css({ "top": (6.9-(i * 0.7)) / (j + 1) * (index + 1)+"rem" })
					})
							})
						})
		}
		function init(init_,index_){//点其他年份进行的当前年份的还原函数
			var id;
			if(init_==0)
			{
				Mclear(0)
			}
			else if(init_==1)
			{
				Mclear(1)
			}
			else if(init_==2)
			{
				Mclear(2)
			}
			else if(init_==3)
			{
				Mclear(3)
			}
			$(".activity-mid-line").css({"height":0})//中间线的还原
		}
		function Mclear(init_)
		{
			if(init_==0)
			{
				id=$(".accomplishment-14")//保留需要还原是哪个容器
			}
			else if(init_==1)
			{
				id=$(".accomplishment-15")
			}
			else if(init_==2)
			{
				id=$(".accomplishment-16")
			}
			else if(init_==3)
			{
				id=$(".accomplishment-17")
			}
			id.css({"display":"none"})//进行还原
			id.find('.accomplishment-left').css({ left   : '-100%'}).end().find('.accomplishment-right').animate({ left   : '100%'})//进行还原	

		}
		
	})

	})