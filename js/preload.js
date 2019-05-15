
console.clear();
TweenMax.set("line", {drawSVG:0});


var strips = document.querySelectorAll("#strips rect");
var tl = new TimelineMax({delay:0.75});

tl.staggerTo("line", 0.4, {drawSVG:true, ease:Power2.easeIn}, 0.25, "lineStart");
tl.staggerTo("line", 0.4, {drawSVG:"100% 100%", ease:Power2.easeOut}, 0.25, "lineStart+=0.25");
tl.to("#slide1", 1, {x:-13, y:9, ease:Circ.easeOut}, "lineStart+=0.25");
tl.to("#slide2", 1, {x:11, y:6.5, ease:Circ.easeOut}, "lineStart+=0.5");
tl.staggerFrom(strips, 1, {cycle:{x:[-1000, 1000]}, ease:Back.easeOut}, 0.15);
tl.staggerTo(strips, 0.4, {cycle:{x:[-50, 70, -70, 120], opacity:[0.5, 0.8]},  repeat:5, repeatDelay:0.2, yoyoEase:Elastic.easeOut.config(2, 0.2), ease:Back.easeInOut}, -0.05, "+=1");
tl.to("#cutPattern text", 1, {text:"slice it & dice it", ease:Linear.easeNone}, "+=0.5");
tl.staggerTo(strips, 0.5, {cycle:{y:[ -30, -10, 10, 30]}, repeat:3, repeatDelay:0.3, yoyo:true, ease:Circ.easeInOut}, 0, "+=1.5");
tl.to("#cutPattern text", 1, {text:"it's just SVG text", ease:Linear.easeNone}, "+=0.5");
tl.staggerTo(strips, 0.5, {cycle:{x:[-30, -160, 120, -50], y:[ -30, -10, 10, 30], rotation:[-2, 2, -4, 4]},  transformOrigin:"center center", repeat:5, repeatDelay:0.2, yoyo:true, ease:Back.easeInOut}, 0.07, "+=1");



