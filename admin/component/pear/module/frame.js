layui.define(["jquery","element"],function(e){"use strict";var t=layui.jquery,n=function(e){this.option=e};function i(e,n,i){i&&(n.css({display:"block"}),t(e).on("load",function(){n.fadeOut(1e3)}))}n.prototype.render=function(e){var i={elem:e.elem,url:e.url,title:e.title,width:e.width,height:e.height,done:e.done?e.done:function(){console.log("菜单渲染成功")}};return function(e){var n=`<iframe class='pear-frame-content' style='width:100%;height:100%;'  scrolling='auto' frameborder='0' src='${e.url}' allowfullscreen='true' ></iframe>`;t("#"+e.elem).html("<div class='pear-frame'>"+n+'<div class="pear-frame-loading">\n\t\t\t<div class="ball-loader">\n\t\t\t<span></span><span></span><span></span><span></span>\n\t\t\t</div>\n\t\t\t</div></div></div>')}(i),t("#"+i.elem).width(i.width),t("#"+i.elem).height(i.height),new n(i)},n.prototype.changePage=function(e,n){var a=t("#"+this.option.elem).find(".pear-frame-loading"),r=t("#"+this.option.elem+" iframe");r.attr("src",e),i(r,a,n)},n.prototype.changePageByElement=function(e,n,a,r){var o=t("#"+e).find(".pear-frame-loading"),l=t("#"+e+" iframe");l.attr("src",n),t("#"+e+" .title").html(a),i(l,o,r)},n.prototype.refresh=function(e){var n=t("#"+this.option.elem).find(".pear-frame-loading"),a=t("#"+this.option.elem).find("iframe");a.attr("src",a.attr("src")),i(a,n,e)},e("frame",new n)});