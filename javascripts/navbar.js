$(document).ready(function(){$("a").on("click",function(a){if(""!==this.hash){a.preventDefault();var i=this.hash;$("html, body").animate({scrollTop:$(i).offset().top},800,function(){window.location.hash=i})}}),$(document).ready(function(){$("#nav-mobile").html($("#nav-main").html()),$("#nav-trigger i").click(function(){$("nav#nav-mobile a").hasClass("expanded")?($("nav#nav-mobile a.expanded").removeClass("expanded").slideUp(250),$(this).removeClass("open")):($("nav#nav-mobile a").addClass("expanded").slideDown(250),$(this).addClass("open"))}),$(function(){$("#nav-main").data("size","big")}),$(window).scroll(function(){$(document).scrollTop()>0?"big"==$("#nav-main").data("size")&&($("#nav-main").data("size","small"),$("#nav-main").stop().animate({height:"50px","padding-right":"4em","padding-left":"4em"},600),$("#nav-main").addClass("sticky-nav-bar"),$(".slider").addClass("slider-animate"),$(".left-side img").animate({width:"40px"},600)):"small"==$("#nav-main").data("size")&&($("#nav-main").data("size","big"),$("#nav-main").stop().animate({height:"150px","padding-right":"4em","padding-left":"4em"},600),$("#nav-main").removeClass("sticky-nav-bar"),$(".slider").removeClass("slider-animate"),$(".left-side img").animate({width:"50px"},600))})});var a=0;$(window).scroll(function(i){var n=$(this).scrollTop();n>a?$(".slider").addClass("slider-animate"):$(".slider").removeClass("slider-animate"),a=n})});