"use strict";console.log("'Allo 'Allo!");var l=function(e){console.log(e)},cw={$d:$(document),$w:$(window),$b:$("body")};cw.switchHead=function(){var e=$("header div.new ul > *");cw.$w.width()<900?($("header .logo").after($("header .new")),l(e)):$("header .logo").before($("header .new"))},cw.$d.ready(function(){cw.switchHead()}),cw.$w.on("resize",function(){cw.switchHead()}),$(document).ready(function(){$(".responsive").slick({infinite:!0,autoplay:!0,speed:600,dots:!0,arrows:!1,slidesToShow:1,slidesToScroll:1})});var feed=new Instafeed({get:"user",accessToken:"2155260124.1677ed0.01272515dff248a5b3c72349f2e2d5ea",userId:2155260124,clientId:"YOUR_CLIENT_ID",resolution:"standard_resolution",template:'<div class="third"><a href="{{link}}" target="_blank"><img src="{{image}}" /><p>{{caption}}</p></a></div>'});feed.run();