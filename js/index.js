// JavaScript Document
$(function(){
var sw = 0;
var len=$("#imgbox1 li").length; //获取焦点图个数
var st=3000;//更换时间
myShow(sw);

$("#btnbox1 a").click(function(){
	if(myTime){
	   clearInterval(myTime);
	}
	sw = $("#btnbox1 a").index(this);
	myShow(sw);
	myTime = setInterval(function(){
	  sw++;
	  if(sw==len){sw=0;}
	  myShow(sw)
	} , st);
	return false;
});

function myShow(i){
	$("#btnbox1 a").eq(i).addClass("curr").siblings("a").removeClass("curr");
	//$("#imgbox1 li").eq(i).stop(true,true).fadeIn(1000).siblings("li").fadeOut(0);
	$("#imgbox1 li").eq(i).stop(true,true).fadeIn(0).siblings("li").fadeOut(0);
}

//自动开始
var myTime = setInterval(function(){
   sw++;
   if(sw==len){sw=0;}
   myShow(sw)
} , st);

////////////
$(".left_nav dd").hover(function(){
  $(".nav_right",this).show();
  });
  $(".left_nav dd").mouseleave(function(){
  $(".nav_right",this).hide();
  });


})