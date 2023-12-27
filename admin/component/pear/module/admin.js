layui.define(["message","table","jquery","element","yaml","form","tab","menu","frame","theme","convert","fullscreen"],function(e){"use strict";var t,a,l,i,n,o=layui.jquery,s=layui.form,c=(layui.element,layui.yaml),r=layui.tab,u=(layui.convert,layui.menu),d=layui.frame,h=layui.theme,m=layui.message,f=layui.fullscreen,p=function(){},y=o("body"),g=new function(){var e="yml",s="pear.config.yml";this.setConfigPath=function(e){s=e},this.setConfigType=function(t){e=t},this.render=function(e){b(void 0!==e?e:g.readConfig())},this.readConfig=function(){return"yml"===e?c.load(s):(o.ajax({url:s,type:"get",dataType:"json",async:!1,success:function(e){t=e}}),t);var t},this.messageRender=function(e){e={elem:".message",url:e.header.message,height:"250px"};n=m.render(e)},this.logoRender=function(e){o(".layui-logo .logo").attr("src",e.logo.image),o(".layui-logo .title").html(e.logo.title)},this.menuRender=function(e){a=u.render({elem:"sideMenu",async:void 0===e.menu.async||e.menu.async,theme:"dark-theme",height:"100%",method:e.menu.method,control:("true"===S(e)||!0===S(e))&&"control",controlWidth:e.menu.controlWidth,defaultMenu:0,accordion:e.menu.accordion,url:e.menu.data,data:e.menu.data,parseData:!1,change:function(){w()},done:function(){a.isCollapse=e.menu.collapse,a.selectItem(e.menu.select),g.collapse(e)}})},this.bodyRender=function(e){y.on("click",".refresh",function(){v()}),"true"===I(e)||!0===I(e)?((l=r.render({elem:"content",roll:!0,tool:!0,width:"100%",height:"100%",session:e.tab.session,index:0,tabMax:e.tab.max,preload:e.tab.preload,closeEvent:function(e){a.selectItem(e)},data:[{id:e.tab.index.id,url:e.tab.index.href,title:e.tab.index.title,close:!1}],success:function(t){e.tab.session&&setTimeout(function(){a.selectItem(t),l.positionTab()},500)}})).click(function(t){e.tab.keepState||l.refresh(!1),l.positionTab(),a.selectItem(t)}),a.click(function(e,t){l.addTabOnly({id:t.menuId,title:t.menuTitle,url:t.menuUrl,icon:t.menuIcon,close:!0},300),w()})):(t=d.render({elem:"content",title:"首页",url:e.tab.index.href,width:"100%",height:"100%"}),a.click(function(e,a){t.changePage(a.menuUrl,!0),w()}))},this.keepLoad=function(e){w(),setTimeout(function(){o(".loader-main").fadeOut(200)},e.other.keepLoad)},this.themeRender=function(e){!1===e.theme.allowCustom&&o(".setting").remove();var t=C(localStorage.getItem("theme-color"));localStorage.setItem("theme-color",t.id),localStorage.setItem("theme-color-color",t.color),localStorage.setItem("theme-color-second",t.second),h.changeTheme(window,x(i));var a=localStorage.getItem("theme-menu");null===a?a=e.theme.defaultMenu:!1===e.theme.allowCustom&&(a=e.theme.defaultMenu);var l=localStorage.getItem("theme-header");null===l?l=e.theme.defaultHeader:!1===e.theme.allowCustom&&(l=e.theme.defaultHeader);var n=localStorage.getItem("theme-banner");null===n?n=e.theme.banner:!1===e.theme.allowCustom&&(n=e.theme.banner);var s=localStorage.getItem("auto-head");null===s?s=e.other.autoHead:!1===e.theme.allowCustom&&(s=e.other.autoHead);var c=localStorage.getItem("muilt-tab");null===c?c=e.tab.enable:!1===e.theme.allowCustom&&(c=e.tab.enable);var r=localStorage.getItem("control");null===r?r=e.menu.control:!1===e.theme.allowCustom&&(r=e.menu.control);var u=localStorage.getItem("footer");null===u?u=e.other.footer:!1===e.theme.allowCustom&&(u=e.other.footer),localStorage.setItem("muilt-tab",c),localStorage.setItem("theme-banner",n),localStorage.setItem("theme-menu",a),localStorage.setItem("theme-header",l),localStorage.setItem("auto-head",s),localStorage.setItem("control",r),localStorage.setItem("footer",u),this.menuSkin(a),this.headerSkin(l),this.bannerSkin(n),this.footer(u)},this.footer=function(e){var t=o(".pear-admin .layui-body"),a=o(".pear-admin .layui-footer");!0===e||"true"===e?(a.removeClass("close"),t.css("bottom",a.outerHeight())):(a.addClass("close"),t.css("bottom",""))},this.bannerSkin=function(e){var t=o(".pear-admin");t.removeClass("banner-layout"),!0!==e&&"true"!==e||t.addClass("banner-layout")},this.collapse=function(e){e.menu.collapse&&o(window).width()>=768&&k()},this.menuSkin=function(e){var t=o(".pear-admin .layui-side");t.removeClass("light-theme"),t.removeClass("dark-theme"),t.addClass(e)},this.headerSkin=function(e){var t=o(".pear-admin .layui-header");t.removeClass("light-theme"),t.removeClass("dark-theme"),t.addClass(e)},this.logout=function(e){p=e},this.message=function(e){null!=e&&n.click(e)},this.collapseSide=function(){k()},this.refreshThis=function(){v()},this.refresh=function(e){o("iframe[id='"+e+"']").attr("src",o("iframe[id='"+e+"']").attr("src"))},this.addTab=function(e,t,a){"true"!==I(i)&&!0!==I(i)||l.addTabOnly({id:e,title:t,url:a,icon:null,close:!0},400)},this.closeTab=function(e){"true"!==I(i)&&!0!==I(i)||r.delTabByElem("content",e,function(e){a.selectItem(e)})},this.closeCurrentTab=function(){"true"!==I(i)&&!0!==I(i)||r.delCurrentTabByElem("content",function(e){a.selectItem(e)})},this.closeOtherTab=function(){"true"!==I(i)&&!0!==I(i)||r.delOtherTabByElem("content",function(e){a.selectItem(e)})},this.closeAllTab=function(){"true"!==I(i)&&!0!==I(i)||r.delAllTabByElem("content",function(e){a.selectItem(e)})},this.changeTabTitle=function(e,t){r.changeTabTitleById("content",e,t)},this.changeIframe=function(e,l,n){"true"!==I(i)&&!0!==I(i)&&(a.selectItem(e),t.changePage(n,!0))},this.jump=function(e,t,a){"true"===I(i)||!0===I(i)?g.addTab(e,t,a):g.changeIframe(e,t,a)},this.fullScreen=function(){o(".fullScreen").hasClass("layui-icon-screen-restore")?screenFun(2).then(function(){o(".fullScreen").eq(0).removeClass("layui-icon-screen-restore")}):screenFun(1).then(function(){o(".fullScreen").eq(0).addClass("layui-icon-screen-restore")})}};function v(){var e=o(".refresh a");e.removeClass("layui-icon-refresh-1"),e.addClass("layui-anim"),e.addClass("layui-anim-rotate"),e.addClass("layui-anim-loop"),e.addClass("layui-icon-loading"),"true"===I(i)||!0===I(i)?l.refresh(!0):t.refresh(!0),setTimeout(function(){e.addClass("layui-icon-refresh-1"),e.removeClass("layui-anim"),e.removeClass("layui-anim-rotate"),e.removeClass("layui-anim-loop"),e.removeClass("layui-icon-loading")},600)}function k(){a.collapse();var e=o(".pear-admin"),t=o(".layui-icon-spread-left"),l=o(".layui-icon-shrink-right");e.is(".pear-mini")?(t.addClass("layui-icon-shrink-right"),t.removeClass("layui-icon-spread-left"),e.removeClass("pear-mini"),a.isCollapse=!1):(l.addClass("layui-icon-spread-left"),l.removeClass("layui-icon-shrink-right"),e.addClass("pear-mini"),a.isCollapse=!0)}function b(e){i=e,g.logoRender(e),g.menuRender(e),g.bodyRender(e),g.themeRender(e),g.keepLoad(e),0!=e.header.message&&g.messageRender(e)}function C(e){var t,a=!1;return o.each(i.colors,function(l,i){i.id===e&&(t=i,a=!0)}),!1!==a&&!1!==i.theme.allowCustom||o.each(i.colors,function(e,a){a.id===i.theme.defaultColor&&(t=a)}),t}function w(){o(window).width()<=768&&k()}function S(e){return e.theme.allowCustom&&null!=localStorage.getItem("control")?localStorage.getItem("control"):e.menu.control}function x(e){return e.theme.allowCustom&&null!=localStorage.getItem("auto-head")?localStorage.getItem("auto-head"):e.other.autoHead}function I(e){return e.theme.allowCustom&&null!=localStorage.getItem("muilt-tab")?localStorage.getItem("muilt-tab"):e.tab.enable}function T(e,t){var a=null;return function(){var l=arguments[0];a&&clearTimeout(a),a=setTimeout(function(){e(l)},t)}}y.on("click",".logout",function(){p()&&l&&l.clear()}),y.on("click",".collapse,.pear-cover",function(){k()}),y.on("click",".menuSearch",function(){var e=function(t,a){if(!a)return[];var l=[];return t=o.extend(!0,{},t),o.each(t,function(t,i){if(i.children&&i.children.length){var n=e(i.children,a),s=o.extend({},i,{children:n});n&&n.length?l.push(s):i.title.indexOf(a)>=0&&(i.children=[],l.push(o.extend({},i)))}else i.title.indexOf(a)>=0&&l.push(i)}),l},t=['<div class="menu-search-content">','  <div class="layui-form menu-search-input-wrapper">','    <div class=" layui-input-wrap layui-input-wrap-prefix">','      <div class="layui-input-prefix">','        <i class="layui-icon layui-icon-search"></i>',"      </div>",'      <input type="text" name="menuSearch" value="" placeholder="搜索菜单" autocomplete="off" class="layui-input" lay-affix="clear">',"    </div>","  </div>",'  <div class="menu-search-no-data">暂无搜索结果</div>','  <ul class="menu-search-list">',"  </ul>","</div>"].join("");layer.open({type:1,offset:"10%",area:["600px"],title:!1,closeBtn:0,shadeClose:!0,anim:0,move:!1,content:t,success:function(t,l){var i=t,n=o(t).children(".layui-layer-content"),s=o(".menu-search-input-wrapper input"),c=o(".menu-search-no-data"),r=o(".menu-search-list"),u=a.option.data;i.css("border-radius","6px"),s.off("focus").focus(),s.off("input").on("input",T(function(){var t,a,l=s.val().trim(),d=e(u,l);if(d.length){var h=function(e){var t=[],a=function(e,l){var i="";return l||(l=""),o.each(e,function(e,n){if(n.children&&n.children.length){i+=l+n.title+" / ";var o=a(n.children,i);i+=o,o||(i="")}else i+=l+n.title,t.push({path:i,info:n}),i=""}),i};return a(e),t}(d),m=(t=h,a="",o.each(t,function(e,t){a+='<li smenu-id="'+t.info.id+'" smenu-icon="'+t.info.icon+'" smenu-url="'+t.info.href+'" smenu-title="'+t.info.title+'" smenu-type="'+t.info.type+'">',a+='  <span><i style="margin-right:10px" class=" '+t.info.icon+'"></i>'+t.path+"</span>",a+='  <i class="layui-icon layui-icon-right"></i>',a+="</li>"}),a);c.css("display","none"),r.html("").append(m).children(":first").addClass("this")}else r.html(""),c.css("display","flex");var f=o(".menu-search-content").outerHeight();i.css("height",f),n.css("height",f)},500)),r.off("click").on("click","li",function(){var e=o(this).attr("smenu-id"),t=o(this).attr("smenu-url"),i=(o(this).attr("smenu-icon"),o(this).attr("smenu-title")),n=o(this).attr("smenu-type"),s="1"===n||1===n;a.isCollapse&&k(),s?g.jump(e,i,t):a.selectItem(e),w(),layer.close(l)}),r.off("mouseenter").on("mouseenter","li",function(){o(".menu-search-list li.this").removeClass("this"),o(this).addClass("this")}).off("mouseleave").on("mouseleave","li",function(){o(this).removeClass("this")}),o(document).off("keydown").keydown(function(e){if(13===e.keyCode||32===e.keyCode){e.preventDefault();var t=o(".menu-search-list li.this").attr("smenu-id"),i=o(".menu-search-list li.this").attr("smenu-url"),n=o(".menu-search-list li.this").attr("smenu-title"),s=o(".menu-search-list li.this").attr("smenu-type"),c="1"===s||1===s;a.isCollapse&&k(),c?g.jump(t,n,i):a.selectItem(t),w(),layer.close(l)}else if(38===e.keyCode){e.preventDefault();var u=o(".menu-search-list li.this").prev();o(".menu-search-list li.this").removeClass("this"),0!==u.length?u.addClass("this"):r.children().last().addClass("this")}else if(40===e.keyCode){e.preventDefault();var d=o(".menu-search-list li.this").next();o(".menu-search-list li.this").removeClass("this"),0!==d.length?d.addClass("this"):r.children().first().addClass("this")}else 27===e.keyCode&&(e.preventDefault(),layer.close(l))})}})}),y.on("click",".fullScreen",function(){o(this).hasClass("layui-icon-screen-restore")?f.fullClose().then(function(){o(".fullScreen").eq(0).removeClass("layui-icon-screen-restore")}):f.fullScreen().then(function(){o(".fullScreen").eq(0).addClass("layui-icon-screen-restore")})}),y.on("click","[user-menu-id]",function(){"true"===I(i)||!0===I(i)?l.addTabOnly({id:o(this).attr("user-menu-id"),title:o(this).attr("user-menu-title"),url:o(this).attr("user-menu-url"),icon:"",close:!0},300):t.changePage(o(this).attr("user-menu-url"),!0)}),y.on("click",".setting",function(){var e;layer.open({type:1,offset:"r",area:["320px","100%"],title:!1,shade:.1,closeBtn:0,shadeClose:!1,anim:-1,skin:"layer-anim-right",move:!1,content:'<div class="pearone-color">\n<div class="color-title">菜单风格</div>\n<div class="color-content">\n<ul>\n<li class="layui-this" data-select-bgcolor="dark-theme" ><a href="javascript:;" data-skin="skin-blue" style="" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 12px; background: #28333E;"></span><span style="display:block; width: 80%; float: left; height: 12px; background: white;"></span></div><div><span style="display:block; width: 20%; float: left; height: 40px; background: #28333E;"></span><span style="display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;"></span></div></a></li><li  data-select-bgcolor="light-theme" ><a href="javascript:;" data-skin="skin-blue" style="" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 12px; background: white;"></span><span style="display:block; width: 80%; float: left; height: 12px; background: white;"></span></div><div><span style="display:block; width: 20%; float: left; height: 40px; background: white;"></span><span style="display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;"></span></div></a></li></ul>\n</div>\n</div><div class="pearone-color">\n<div class="color-title">顶部风格</div>\n<div class="color-content">\n<ul>\n<li class="layui-this" data-select-header="light-theme" ><a href="javascript:;" data-skin="skin-blue" style="" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 12px; background: #28333E;"></span><span style="display:block; width: 80%; float: left; height: 12px; background: white;"></span></div><div><span style="display:block; width: 20%; float: left; height: 40px; background: #28333E;"></span><span style="display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;"></span></div></a></li><li  data-select-header="dark-theme" ><a href="javascript:;" data-skin="skin-blue" style="" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 12px; background: #28333E;"></span><span style="display:block; width: 80%; float: left; height: 12px; background: #28333E;"></span></div><div><span style="display:block; width: 20%; float: left; height: 40px; background: #28333E;"></span><span style="display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;"></span></div></a></li></ul>\n</div>\n</div>'+(e="",o.each(i.colors,function(t,a){e+="<span class='select-color-item' color-id='"+a.id+"' style='background-color:"+a.color+";'></span>"}),"<div class='select-color'><div class='select-color-title'>主题配色</div><div class='select-color-content'>"+e+"</div></div>")+'<br><div class="pearone-color">\n<div class="color-title">更多设置</div>\n<div class="color-content">\n<form class="layui-form">\n<div class="layui-form-item"><div class="layui-input-inline"><input type="checkbox" name="control" lay-filter="control" lay-skin="switch" lay-text="开|关"></div><span class="set-text">菜单</span></div><div class="layui-form-item"><div class="layui-input-inline"><input type="checkbox" name="muilt-tab" lay-filter="muilt-tab" lay-skin="switch" lay-text="开|关"></div><span class="set-text">视图</span></div><div class="layui-form-item"><div class="layui-input-inline"><input type="checkbox" name="banner" lay-filter="banner" lay-skin="switch" lay-text="开|关"></div><span class="set-text">通栏</span></div><div class="layui-form-item"><div class="layui-input-inline"><input type="checkbox" name="auto-head" lay-filter="auto-head" lay-skin="switch" lay-text="开|关"></div><span class="set-text">通色</span></div><div class="layui-form-item"><div class="layui-input-inline"><input type="checkbox" name="footer" lay-filter="footer" lay-skin="switch" lay-text="开|关"></div><span class="set-text">页脚</span></div></form>\n</div>\n</div>',success:function(e,t){s.render();var a=localStorage.getItem("theme-color"),l=localStorage.getItem("theme-menu"),i=localStorage.getItem("theme-header");"null"!==a&&(o(".select-color-item").removeClass("layui-icon").removeClass("layui-icon-ok"),o("*[color-id='"+a+"']").addClass("layui-icon").addClass("layui-icon-ok")),"null"!==l&&(o("*[data-select-bgcolor]").removeClass("layui-this"),o("[data-select-bgcolor='"+l+"']").addClass("layui-this")),"null"!==i&&(o("*[data-select-header]").removeClass("layui-this"),o("[data-select-header='"+i+"']").addClass("layui-this")),o("#layui-layer-shade"+t).click(function(){var e=o("#layui-layer"+t);e.animate({left:e.offset().left+e.width()},200,function(){layer.close(t)})}),s.on("switch(control)",function(e){localStorage.setItem("control",this.checked),window.location.reload()}),s.on("switch(muilt-tab)",function(e){localStorage.setItem("muilt-tab",this.checked),window.location.reload()}),s.on("switch(auto-head)",function(e){localStorage.setItem("auto-head",this.checked),h.changeTheme(window,this.checked)}),s.on("switch(banner)",function(e){localStorage.setItem("theme-banner",this.checked),g.bannerSkin(this.checked)}),s.on("switch(footer)",function(e){localStorage.setItem("footer",this.checked),g.footer(this.checked)}),"true"===localStorage.getItem("theme-banner")?o('input[name="banner"]').attr("checked","checked"):o('input[name="banner"]').removeAttr("checked"),"true"===localStorage.getItem("control")?o('input[name="control"]').attr("checked","checked"):o('input[name="control"]').removeAttr("checked"),"true"===localStorage.getItem("muilt-tab")?o('input[name="muilt-tab"]').attr("checked","checked"):o('input[name="muilt-tab"]').removeAttr("checked"),"true"===localStorage.getItem("auto-head")?o('input[name="auto-head"]').attr("checked","checked"):o('input[name="auto-head"]').removeAttr("checked"),"true"===localStorage.getItem("footer")?o('input[name="footer"]').attr("checked","checked"):o('input[name="footer"]').removeAttr("checked"),s.render("checkbox")}})}),y.on("click","[data-select-bgcolor]",function(){var e=o(this).attr("data-select-bgcolor");o("[data-select-bgcolor]").removeClass("layui-this"),o(this).addClass("layui-this"),localStorage.setItem("theme-menu",e),g.menuSkin(e)}),y.on("click","[data-select-header]",function(){var e=o(this).attr("data-select-header");o("[data-select-header]").removeClass("layui-this"),o(this).addClass("layui-this"),localStorage.setItem("theme-header",e),g.headerSkin(e)}),y.on("click",".select-color-item",function(){o(".select-color-item").removeClass("layui-icon").removeClass("layui-icon-ok"),o(this).addClass("layui-icon").addClass("layui-icon-ok");var e=C(o(".select-color-item.layui-icon-ok").attr("color-id"));localStorage.setItem("theme-color",e.id),localStorage.setItem("theme-color-color",e.color),localStorage.setItem("theme-color-second",e.second),h.changeTheme(window,x(i))}),window.onresize=function(){f.isFullscreen()||o(".fullScreen").eq(0).removeClass("layui-icon-screen-restore")},o(window).on("resize",T(function(){a&&!a.isCollapse&&o(window).width()<=768&&k()},50)),e("admin",g)});