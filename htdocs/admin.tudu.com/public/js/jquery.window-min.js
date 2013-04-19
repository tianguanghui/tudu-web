(function(A){A.window=function(D){var C=this;this.opts=A.extend({},A.window.defaults,D);this.fixIE=(A.browser.msie&&(A.browser.version<7));this.id=Math.random();if(!this.opts.applyTo){return}var B=A(this.opts.applyTo);B.css("z-index",8001);this.dialog={container:B,header:B.find(".window-header"),body:B.find(".window-body"),footer:B.find(".window-footer")};this.bh=A("#fix-height");if(!this.bh.size()){this.bh=A("<div>").attr("id","fix-height").css({position:"absolute",height:"100%",width:1,left:-100,top:0}).appendTo(document.body)}this.fn={show:this.opts.show,close:this.opts.close};this.mask=A('<div class="mask">').appendTo(document.body).hide();this.mask.css("z-index",8000);this.dialog.container.hide().appendTo(document.body);this.dialog.container.find("."+this.opts.closeCls).click(function(E){E.preventDefault();C.close()});this.dialog.container.css({height:this.opts.height,width:this.opts.width});if(this.fixIE){this.iframe=A('<iframe src="javascript:false;">').css({opacity:0,position:"absolute",zIndex:-1,width:"100%",height:this.mask.height(),top:0,left:0}).hide().appendTo(this.mask)}if(this.opts.draggable){this.dragDelegate=new A.dragable({ele:this.dialog.container[0],triggerEle:this.dialog.header[0]})}return this};A.window.prototype={show:function(){if(this.iframe){this.iframe.show()}this.mask.show();this.resizeMask();this.dialog.container.show();this.center();if(A.isFunction(this.fn.show)){this.fn.show.apply(this,[this.dialog])}this.bindEvents();this.opts.onShow()},close:function(){if(this.iframe){this.iframe.hide()}this.mask.hide();this.dialog.container.hide();if(A.isFunction(this.fn.close)){this.fn.close.apply(this,[this.dialog])}this.unbindEvents();this.opts.onClose()},resizeMask:function(){if(this.fixIE){var B=Math.max(document.body.offsetHeight,this.bh.height());var C=document.body.offsetWidth;this.mask.css({height:B,width:C})}},center:function(){var B=(document.body.offsetWidth-A(this.dialog.container).width())/2;var C=((Math.min(this.bh.height(),document.documentElement.offsetHeight)-this.dialog.container.height())/2+Math.max(document.documentElement.scrollTop,document.body.scrollTop));this.dialog.container.css({left:B,top:C})},bindEvents:function(){var B=this;if(this.fixIE){A(window).bind("resize",function(){B.resizeMask()})}},unbindEvents:function(){var B=this;if(this.fixIE){A(window).unbind("resize",function(){B.resizeMask()})}},destroy:function(){this.mask.remove();this.dialog.container.remove();return null}};A.fn.window=function(C){var B=this[0];return B&&B.window?B.window:B.window=new A.window(A.extend(C,{applyTo:B,id:B.id}))};A.window.defaults={id:"window",width:500,height:"auto",close:true,closeCls:"close",draggable:false,onOpen:function(){},onShow:function(){},onClose:function(){}};A.window.prototype2={id:null,defaults:{id:"window",width:500,height:"auto",close:true,closeCls:"close",draggable:false,onOpen:null,onShow:null,onClose:null},show2:function(){console.log(this);return;this.mask.show().setSize();if(this.dialog.iframe){this.dialog.iframe.show()}this.dialog.container.show();this.center();this.bindEvents();if(A.isFunction(this.fn.onShow)){this.fn.onShow.apply(this,[this.dialog])}},container:"body",dialog:{},fn:{},init:function(B){console.log(this);return;this.opts=A.extend({},A.window.defaults,B);this.dialog.container=A("<div>");if(this.opts.applyTo){this.dialog.container=A(this.opts.applyTo);this.dialog.header=this.dialog.container.find(".window-header");this.dialog.body=this.dialog.container.find(".window-body");this.dialog.footer=this.dialog.container.find(".window-footer")}this.fn.onShow=this.opts.onShow;this.fn.onClose=this.opts.onClose;this.create();this.resize();return this},create:function(){var B=this;this.container=A(this.container);this.mask=A('<div class="mask">');if(!this.dialog.header){this.dialog.header=A("<div>").addClass("window-header");this.dialog.container.append(this.dialog.header)}if(!this.dialog.body){this.dialog.body=A("<div>").addClass("window-body");this.dialog.container.append(this.dialog.body)}if(!this.dialog.container){this.dialog.container=A("<div>").attr("id",this.opts.id).addClass("window").css({height:this.opts.height,width:this.opts.width}).hide()}if(this.dialog.footer){this.dialog.container.append(this.dialog.footer)}this.mask.appendTo(this.container).hide();this.dialog.container.hide().appendTo("body");this.container.find("."+this.opts.closeCls).click(function(C){C.preventDefault();B.close()});if(this.fixIE){this.dialog.iframe=A('<iframe src="javascript:false;">').css({opacity:0,position:"absolute",zIndex:1000,width:"100%",top:0,left:0}).hide().appendTo("body")}if(this.opts.draggable&&A.fn.drag){this.dialog.container.drag(this.opts.drag)}this.mask.setSize=function(){if(B.fixIE){var C=Math.max(B.container.height(),B.bh.height());var D=B.container.width();B.mask.css({height:C,width:D});if(B.dialog.iframe){B.dialog.iframe.css({height:C,width:D})}}else{B.mask.css("position","fixed")}};this.center=function(){var C=(B.container.width()-A(B.dialog.container).width())/2;var D=((Math.min(B.bh.height(),document.documentElement.offsetHeight)-B.dialog.container.height())/2+Math.max(document.documentElement.scrollTop,document.body.scrollTop));B.dialog.container.css({left:C,top:D})}},resize:function(){this.dialog.container.css({height:this.opts.height,width:this.opts.width})},bindEvents:function(){if(this.fixIE){A(window).bind("resize",this.mask.setSize)}A(window).bind("resize",this.center)},unbindEvents:function(){if(this.fixIE){A(window).unbind("resize",this.mask.setSize)}A(window).unbind("resize",this.center)},showMask:function(){},_center:function(){var B=(this.container.width()-A(this.dialog.container).width())/2;var C=((this.bh.height()-this.dialog.container.height())/2+Math.max(document.documentElement.scrollTop,document.body.scrollTop));this.dialog.container.css({left:B,top:C})},close:function(B){this.mask.hide();if(this.dialog.iframe){this.dialog.iframe.hide()}this.dialog.container.hide();this.unbindEvents();if(A.isFunction(this.fn.onClose)){this.fn.onClose.apply(this,[this.dialog])}}}})(jQuery);$.dragable=function(A){$.extend(this,A||{});if(!this.ele){return}this.triggerEle=this.triggerEle||this.ele;this.init()};(function(A){A.dragable.prototype={ele:null,triggerEle:null,constrainEle:null,constrain:null,lockX:false,lockY:false,_mouseX:null,_mouseY:null,init:function(){var B=this;A(this.ele).css({position:"absolute"});if(!this.constrainEle&&!this.constrain){this._getDocumentConstrain()}A(this.triggerEle).css("cursor","move").bind("mousedown",function(C){B._startDrag(C)});A(window).bind("resize",function(){B._getDocumentConstrain()})},_getDocumentConstrain:function(){var B=!this.ele.style.borderTopWidth.replace("px")?0:parseInt(this.ele.style.borderTopWidth.replace("px")),C=!this.ele.style.borderRightWidth.replace("px")?0:parseInt(this.ele.style.borderRightWidth.replace("px")),E=!this.ele.style.borderLeftWidth.replace("px")?0:parseInt(this.ele.style.borderLeftWidth.replace("px")),D=!this.ele.style.borderBottomWidth.replace("px")?0:parseInt(this.ele.style.borderBottomWidth.replace("px"));this.constrain=[0+B,document.body.clientWidth-A(this.ele).width()-C,document.body.clientHeight-A(this.ele).height()-D,0+E]},_setSelectable:function(B){if(!this.ele){return}document.body.unselectable=this.ele.unselectable=B?"off":"on";document.body.onselectstart=this.ele.onselectstart=function(){return B};if(document.selection&&document.selection.empty){document.selection.empty()}if(this.ele.style){this.ele.style.MozUserSelect=B?"":"none"}document.body.style.MozUserSelect=B?"":"none"},disableDrag:function(){},enableDrag:function(){},onDrag:function(){},onDrop:function(){},_startDrag:function(D){var C=D.data||{},B=this;var E={left:D.pageX-this.ele.offsetLeft,top:D.pageY-this.ele.offsetTop};var F=this.constrain||(function(H){var G=[H.offsetTop,H.offsetLeft+H.offsetWidth-A(B.ele).width()-parseInt(B.ele.style.borderRightWidth.replace("px"))-1,H.offsetTop+H.offsetHeight-A(B.ele).height()-parseInt(B.ele.style.borderBottomWidth.replace("px"))-1,H.offsetLeft];this.constrain=G;return G})(this.constrainEle);var C={offset:E,constrain:F};this._setSelectable(false);this.onDrag();A(document).bind("mouseup",function(G){B._endDrag(G)});A(document).bind("mousemove",C,function(G){B._drag(G)})},_drag:function(C){var B=C.data||{};var D={left:C.pageX-B.offset.left,top:C.pageY-B.offset.top};if(B.constrain[0]!=undefined&&D.top<B.constrain[0]){D.top=B.constrain[0]}if(B.constrain[2]!=undefined&&D.top>B.constrain[2]){D.top=B.constrain[2]}if(B.constrain[1]!=undefined&&D.left>B.constrain[1]){D.left=B.constrain[1]}if(B.constrain[3]!=undefined&&D.left<B.constrain[3]){D.left=B.constrain[3]}if(!this.lockX){this.ele.style.left=D.left+"px"}if(!this.lockY){this.ele.style.top=D.top+"px"}},_endDrag:function(B){A(document).unbind("mousemove");A(document).unbind("mouseup");this._setSelectable(true);this.onDrop()}}})(jQuery);