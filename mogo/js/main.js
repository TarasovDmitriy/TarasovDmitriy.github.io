$("#accordion").accordion(),$(function(){$("html").niceScroll({cursorcolor:"#95e1d3"})}),$(function(){$(".textcontainer").niceScroll({cursorcolor:"#95e1d3"})}),$(".carousel ul").anoSlide({items:1,speed:500,prev:"a.prev_carousel",next:"a.next_carousel",lazy:!0,auto:!1}),$(document).ready(function(){$("#nav_icon").click(function(){$(this).toggleClass("open"),$(".top_line_nav").toggleClass("mobile"),$(".top_line_nav").toggleClass("fadeInDown")})}),$(function(){$(".clikblock").click(function(){$("html,body").animate({scrollTop:$(".stopblock").offset().top},500)})});