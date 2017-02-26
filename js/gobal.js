// JavaScript Document
function setvaluee(str){
	var strr=str;
	$("#selecttype").attr("value",strr);
}

$(function(){
	
	$(".ttxt3 span").click(function(event){   
	event=event||window.event;   
	event.stopPropagation();
	$(".selectlist").toggleClass("s-Off");
	}); 
	
	$(document).click(function(e){   
	$(".selectlist").addClass("s-Off");
	}); 
	
	$('.selectlist>li').each(function(index){
		$(this).mouseover(function(){
		$('.selectlist>li').removeClass('ahover');
		$(this).addClass('ahover');
			
		})
	})
	
	
	
	
	
	$('#main_nav>ul>li>a').each(function(index){
	$(this).mouseover(function()
	  {
		$('#main_nav>ul>li>a').removeClass('change');
		$(this).addClass('change');
		$(".nav_list").hide();
		$(".nav_list:eq(" + index + ")").show();
	  }
	)
	})
	
	
	$('.xw_dh>li>a').each(function(index){
	$(this).mouseover(function()
	  {
		$('.xw_dh>li>a').removeClass('change');
		$(this).addClass('change');
		$(".xw_con").hide();
		$(".xw_con:eq(" + index + ")").show();
	  }
	)
	})
	
	
	
	
	
	
	$('.jsdh>li>a').each(function(index){
	$(this).click(function()
	  {
		$('.jsdh>li>a').removeClass('change');
		$(this).addClass('change');
		$(".jslist").hide();
		$(".jslist:eq(" + index + ")").show();
		$(".jstab").hide();
		$(".jstab:eq(" + index + ")").show();
	  }
	)
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})

