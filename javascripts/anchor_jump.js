$(document).ready(function(){$(".prevPage").bind("click",function(e){var t=$(this);$(".horizontal-scroll-wrapper").stop().animate({scrollLeft:Math.abs($(".section").offset().left)+$(t.attr("href")).offset().left},1500,"easeInOutCubic"),e.preventDefault()}),$(".horizontal-scroll-wrapper").scroll(function(){var e=$(".section").scrollLeft();$(".section").each(function(t){$(this).position().left<=e?$("#nav-dots-exp a i").eq(t).addClass("active"):$("#nav-dots-exp a i").eq(t).removeClass("active")})})});