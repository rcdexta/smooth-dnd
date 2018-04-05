!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SmoothDnD=t():e.SmoothDnD=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.containerInstance="smooth-dnd-container-instance",t.containersInDraggable="smooth-dnd-containers-in-draggable",t.defaultGroupName="@@smooth-dnd-default-group@@",t.wrapperClass="smooth-dnd-draggable-wrapper",t.defaultGrabHandleClass="smooth-dnd-default-grap-handle",t.animationClass="animated",t.translationValue="__smooth_dnd_draggable_translation_value",t.visibilityValue="__smooth_dnd_draggable_visibility_value",t.ghostClass="smooth-dnd-ghost",t.containerClass="smooth-dnd-container",t.extraSizeForInsertion="smooth-dnd-extra-size-for-insertion",t.stretcherElementClass="smooth-dnd-stretcher-element",t.stretcherElementInstance="smooth-dnd-stretcher-instance",t.isDraggableDetached="smoth-dnd-is-draggable-detached",t.disbaleTouchActions="smooth-dnd-disable-touch-action",t.noUserSelectClass="smooth-dnd-no-user-select"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getIntersection=function(e,t){return{left:Math.max(e.left,t.left),top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)}};var o=t.getIntersectionOnAxis=function(e,t,n){return"x"===n?{left:Math.max(e.left,t.left),top:e.top,right:Math.min(e.right,t.right),bottom:e.bottom}:{left:e.left,top:Math.max(e.top,t.top),right:e.right,bottom:Math.min(e.bottom,t.bottom)}},r=t.getContainerRect=function(e){var t=e.getBoundingClientRect(),n={left:t.left,right:t.right+10,top:t.top,bottom:t.bottom};if(l(e,"x")&&!a(e,"x")){var o=n.right-n.left;n.right=n.right+e.scrollWidth-o}if(l(e,"y")&&!a(e,"y")){var r=n.bottom-n.top;n.bottom=n.bottom+e.scrollHeight-r}return n},i=t.isScrolling=function(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-"+t];return"auto"===o||"scroll"===o||("auto"===r||"scroll"===r)},a=t.isScrollingOrHidden=function(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-"+t];return"auto"===o||"scroll"===o||"hidden"===o||("auto"===r||"scroll"===r||"hidden"===r)},l=t.hasBiggerChild=function(e,t){return"x"===t?e.scrollWidth>e.clientWidth:e.scrollHeight>e.clientHeight};t.hasScrollBar=function(e,t){return l(e,t)&&i(e,t)},t.getVisibleRect=function(e,t){var n=e,i=t||r(e);for(n=e.parentElement;n;)l(n,"x")&&a(n,"x")&&(i=o(i,n.getBoundingClientRect(),"x")),l(n,"y")&&a(n,"y")&&(i=o(i,n.getBoundingClientRect(),"y")),n=n.parentElement;return i},t.listenScrollParent=function(e,t){var n=[];return setTimeout(function(){for(var o=e;o;)(i(o,"x")||i(o,"y"))&&(o.addEventListener("scroll",t),n.push(o)),o=o.parentElement;window.addEventListener("scroll",t)},10),{dispose:function(){n.forEach(function(e){e.removeEventListener("scroll",t)}),window.removeEventListener("scroll",t)}}},t.hasParent=function(e,t){for(var n=e;n;){if(n===t)return!0;n=n.parentElement}return!1},t.getParent=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.parentElement}return null},t.hasClass=function(e,t){return e.className.split(" ").map(function(e){return e}).indexOf(t)>-1},t.addClass=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e});-1===n.indexOf(t)&&(n.push(t),e.className=n.join(" "))}},t.removeClass=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e&&e!==t});e.className=n.join(" ")}},t.debounce=function(e,t,n){var o=null;return function(){for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];o&&clearTimeout(o),n&&!o?e.call.apply(e,[void 0].concat(i)):o=setTimeout(function(){o=null,e.call.apply(e,[void 0].concat(i))},t)}},t.removeChildAt=function(e,t){return e.removeChild(e.children[t])},t.addChildAt=function(e,t,n){n>=e.children.lenght?e.appendChild(t):e.insertBefore(t,e.children[n])},t.isMobile=function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},t.clearSelection=function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.domDropHandler=function(e){var t=e.element,n=e.draggables,i=(e.layout,e.options);return function(e,a){var l=e.removedIndex,s=e.addedIndex,u=e.droppedElement,c=null;if(null!==l&&(c=(0,o.removeChildAt)(t,l),n.splice(l,1)),null!==s){var d=document.createElement("div");d.className=r.wrapperClass+" "+i.orientation+" "+r.animationClass+" ",d.appendChild(c.firstChild||u),d[r.containersInDraggable]=[],(0,o.addChildAt)(t,d,s),s>=n.length?n.push(d):n.splice(s,0,d)}a&&a(e)}},t.reactDropHandler=function(){return{handler:function(e){e.element,e.draggables,e.layout,e.options;return function(e,t){t&&t(e)}}}};var o=n(1),r=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addStyleToHead=void 0;var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={display:"block",overflow:"hidden"},s={height:"100%",display:"inline-block","vertical-align":"top","white-space":"normal"},u=(a(o={},"."+i.containerClass,{position:"relative"}),a(o,"."+i.containerClass+" *",{"box-sizing":"border-box"}),a(o,"."+i.containerClass+".horizontal",{"white-space":"nowrap"}),a(o,"."+i.containerClass+".horizontal ."+i.wrapperClass,s),a(o,"."+i.containerClass+".vertical ."+i.wrapperClass,l),a(o,"."+i.wrapperClass,{}),a(o,"."+i.wrapperClass+".horizontal",s),a(o,"."+i.wrapperClass+".vertical",l),a(o,"."+i.wrapperClass+".animated",{transition:"transform ease"}),a(o,"."+i.ghostClass+" *",{"box-sizing":"border-box"}),a(o,"."+i.ghostClass+".animated",{transition:"all ease-in-out"}),a(o,"."+i.disbaleTouchActions+" *",{"touch-actions":"none","-ms-touch-actions":"none"}),a(o,"."+i.noUserSelectClass+" *",{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),o);t.addStyleToHead=function(){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=function e(t){return Object.keys(t).reduce(function(n,o){var i=t[o];return"object"===(void 0===i?"undefined":r(i))?""+n+o+"{"+e(i)+"}":""+n+o+":"+i+";"},"")}(u);t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}},function(e,t,n){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(4);var o=a(n(1)),r=a(n(0)),i=n(3);function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var l=["mousedown","touchstart"],s=["mousemove","touchmove"],u=["mouseup","touchend"],c=null,d=null,f=null,g=null,p=[],m=!1,v=null,h=null,b=o.isMobile();function y(){l.forEach(function(e){window.document.addEventListener(e,x,{passive:!1})})}var C=function(){var e=void 0,t=void 0,n=void 0,o=null,r=1,i=5;function a(n){var o=w(n),a=o.clientX,l=o.clientY;if(t)(Math.abs(e.clientX-a)>i||Math.abs(e.clientY-l)>i)&&d();else if(Math.abs(e.clientX-a)>r||Math.abs(e.clientY-l)>r)return f()}function l(){d()}function c(){d()}function d(){clearTimeout(o),s.forEach(function(e){return window.document.removeEventListener(e,a)},{passive:!1}),u.forEach(function(e){return window.document.removeEventListener(e,l)},{passive:!1}),document.removeEventListener("drag",c,{passive:!1})}function f(){clearTimeout(o),d(),n()}return function(r,i,d){e=w(r),n=d,(t=i||(b?200:0))&&(o=setTimeout(f,t)),s.forEach(function(e){return window.document.addEventListener(e,a)},{passive:!1}),u.forEach(function(e){return window.document.addEventListener(e,l)},{passive:!1}),document.addEventListener("drag",c,{passive:!1})}}();function x(e){var t=w(e);if(!m&&(d=o.getParent(t.target,"."+r.wrapperClass))){var n=o.getParent(d,"."+r.containerClass),i=p.filter(function(e){return e.element===n})[0],a=i.getOptions().dragHandleSelector,l=i.getOptions().nonDragAreaSelector,c=!0;a&&!o.getParent(t.target,a)&&(c=!1),l&&o.getParent(t.target,l)&&(c=!1),c&&C(t,i.getOptions().dragBeginDelay,function(){o.clearSelection(),S(t),s.forEach(function(e){window.document.addEventListener(e,D,{passive:!1})}),u.forEach(function(e){window.document.addEventListener(e,E,{passive:!1})})})}}function E(){s.forEach(function(e){window.document.removeEventListener(e,D,{passive:!1})}),u.forEach(function(e){window.document.removeEventListener(e,E,{passive:!1})}),g&&function(e){function t(){o.removeClass(f.ghost,"animated"),f.ghost.style.transitionDuration=null,document.body.removeChild(f.ghost),e()}function n(e,n,r){var i=e.top,a=e.left;o.addClass(f.ghost,"animated"),r&&o.addClass(f.ghost.firstChild.firstChild,r),f.ghost.style.transitionDuration=n+"ms",f.ghost.style.left=a+"px",f.ghost.style.top=i+"px",setTimeout(function(){t()},n+20)}if(g.targetElement){var r=p.filter(function(e){return e.element===g.targetElement})[0];!(d=r.getOptions()).shouldAnimateDrop||d.shouldAnimateDrop({sourceContainerProps:g.container.getOptions(),payload:g.payload})?n(r.getDragResult().shadowBeginEnd.rect,Math.max(150,r.getOptions().animationDuration/2),r.getOptions().dropClass):t()}else{var i=p.filter(function(e){return e===g.container})[0];if("move"===i.getOptions().behaviour){var a=i.getDragResult(),l=a.removedIndex,s=a.elementSize,u=i.layout;i.getTranslateCalculator({dragResult:{removedIndex:l,addedIndex:l,elementSize:s}});var c=l>0?u.getBeginEnd(i.draggables[l-1]).end:u.getBeginEndOfContainer().begin;n(u.getTopLeftOfElementBegin(c),i.getOptions().animationDuration,i.getOptions().dropClass)}else o.addClass(f.ghost,"animated"),f.ghost.style.transitionDuration=i.getOptions().animationDuration+"ms",f.ghost.style.opacity="0",f.ghost.style.transform="scale(0.90)",setTimeout(function(){t()},i.getOptions().animationDuration)}var d}(function(){o.removeClass(document.body,r.disbaleTouchActions),o.removeClass(document.body,r.noUserSelectClass),(c||[]).forEach(function(e){e.handleDrop(g)}),c=null,d=null,f=null,g=null,m=!1,null,h=null,v=null})}function w(e){return e.touches?e.touches[0]:e}function S(e){m=!0;var t=p.filter(function(e){return d.parentElement===e.element})[0];t.setDraggables(),t,h=t.getOptions().lockAxis?t.getOptions().lockAxis.toLowerCase():null,g=function(e){var t=p.filter(function(t){return e.parentElement===t.element})[0],n=t.draggables.indexOf(e);return{container:t,element:e,elementIndex:n,payload:t.getOptions().getChildPayload?t.getOptions().getChildPayload(n):void 0,targetElement:null,position:{x:0,y:0},groupName:t.getOptions().groupName}}(d),f=function(e,t,n){var i=t.x,a=t.y,l=n.getScale(),s=l.scaleX,u=void 0===s?1:s,c=l.scaleY,d=void 0===c?1:c,f=e.getBoundingClientRect(),g=f.left,p=f.top,m=f.right,v=f.bottom,h=g+(m-g)/2,b=p+(v-p)/2,y=document.createElement("div");y.style.boxSizing="border-box",y.style.position="fixed",y.style.pointerEvents="none",y.style.left=g+"px",y.style.top=p+"px",y.style.width=m-g+"px",y.style.height=v-p+"px",y.style.overflow="visible",y.className=r.ghostClass;var C=e.cloneNode(!0);return setTimeout(function(){n.getOptions().dragClass&&o.addClass(C.childNodes[0],n.getOptions().dragClass)}),o.addClass(C,n.getOptions().orientation),C.style.overflow="visible",C.style.width=(m-g)/u+"px",C.style.height=(v-p)/d+"px",C.style.transform="scale3d("+(u||1)+", "+(d||1)+", 1)",C.style.transformOrigin="0 0 0",C.style.margin="0px",y.appendChild(C),{ghost:y,centerDelta:{x:h-i,y:b-a},positionDelta:{left:g-i,top:p-a}}}(d,{x:e.clientX,y:e.clientY},g.container),g.position={x:e.clientX+f.centerDelta.x,y:e.clientY+f.centerDelta.y},g.mousePosition={x:e.clientX,y:e.clientY},document.body.appendChild(f.ghost),o.addClass(document.body,r.disbaleTouchActions),o.addClass(document.body,r.noUserSelectClass),t.getOptions().onDragStart&&t.getOptions().onDragStart(g.elementIndex,g.payload),c=p.filter(function(e){return e.isDragRelevant(t,g.payload)}),v=function(e){var t=e;return function(e){t.forEach(function(t){return t.handleDrag(e)}),function(e,t){t.container}(0,e)}}(c),c.forEach(function(e){return e.prepareDrag(e,c)}),v(g)}function D(e){e.preventDefault();var t=w(e);g?(h?"y"===h?(f.ghost.style.top=t.clientY+f.positionDelta.top+"px",g.position.y=t.clientY+f.centerDelta.y,g.mousePosition.y=t.clientY):"x"===h&&(f.ghost.style.left=t.clientX+f.positionDelta.left+"px",g.position.x=t.clientX+f.centerDelta.x,g.mousePosition.x=t.clientX):(f.ghost.style.left=t.clientX+f.positionDelta.left+"px",f.ghost.style.top=t.clientY+f.positionDelta.top+"px",g.position.x=t.clientX+f.centerDelta.x,g.position.y=t.clientY+f.centerDelta.y,g.mousePosition.x=t.clientX,g.mousePosition.y=t.clientY),v(g)):S(t)}(0,i.addStyleToHead)(),t.default=(y(),{register:function(e){p.push(e)},unregister:function(e){p.splice(p.indexOf(e),1)}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){e[r.extraSizeForInsertion]=0;var l=n,s=function(e){return{get:function(t,n){var o=e[n];return t[o||n]},set:function(t,n,o){requestAnimationFrame(function(){t[e[n]]=e.setters[n]?e.setters[n](o):o})}}}("horizontal"===t?i:a),u={translation:0},c=null;window.addEventListener("resize",function(){p(e)}),setTimeout(function(){f()},10);var d=o.listenScrollParent(e,function(){p(e),c&&c()});function f(){p(e),function(e){var t=e.getBoundingClientRect();u.scaleX=(t.right-t.left)/e.offsetWidth,u.scaleY=(t.bottom-t.top)/e.offsetHeight}(e)}var g=void 0;function p(e){u.rect=o.getContainerRect(e),u.visibleRect=o.getVisibleRect(e,u.rect)}function m(e){return s.get(e,"size")*s.get(u,"scale")}function v(e){return s.get(e,"dragPosition")}function h(e){return e[r.translationValue]}function b(e,n){var o=u.visibleRect,r=o.left,i=o.top,a=o.right,l=o.bottom;l-i<2&&(l=i+30);var s=u.rect;return"vertical"===t?e>s.left&&e<s.right&&n>i&&n<l:e>r&&e<a&&n>s.top&&n<s.bottom}return{getSize:m,getContainerRectangles:function(){return{rect:u.rect,visibleRect:u.visibleRect}},getBeginEndOfDOMRect:function(e){return{begin:s.get(e,"begin"),end:s.get(e,"end")}},getBeginEndOfContainer:function(){var e=s.get(u.rect,"begin")+u.translation,t=s.get(u.rect,"end")+u.translation;return{begin:e,end:t}},getBeginEndOfContainerVisibleRect:function(){var e=s.get(u.visibleRect,"begin")+u.translation,t=s.get(u.visibleRect,"end")+u.translation;return{begin:e,end:t}},getBeginEnd:function(t){var n=function(e){return(s.get(e,"distanceToParent")+(e[r.translationValue]||0))*s.get(u,"scale")}(t)+(s.get(u.rect,"begin")+u.translation)-s.get(e,"scrollValue");return{begin:n,end:n+m(t)*s.get(u,"scale")}},getAxisValue:v,setTranslation:function(e,t){h(e)!==t&&(t?s.set(e.style,"translate",t):e.style.removeProperty("transform"),e[r.translationValue]=t,e[r.containersInDraggable]&&setTimeout(function(){e[r.containersInDraggable].forEach(function(e){!function e(t){t.layout.invalidateRects();t.onTranslated();t.getChildContainers()&&t.getChildContainers().forEach(function(t){return e(t)})}(e)})},l+20))},getTranslation:h,setVisibility:function(e,t){void 0!==e[r.visibilityValue]&&e[r.visibilityValue]===t||(t?e.style.removeProperty("visibility"):e.style.visibility="hidden",e[r.visibilityValue]=t)},isVisible:function(e){return void 0===e[r.visibilityValue]||e[r.visibilityValue]},isInVisibleRect:b,dispose:function(){d&&d.dispose();g&&(g.parentNode.removeChild(g),g=null)},getContainerScale:function(){return{scaleX:u.scaleX,scaleY:u.scaleY}},setScrollListener:function(e){c=e},setSize:function(e,t){s.set(e,"setSize",t)},getTopLeftOfElementBegin:function(e){var n=0,o=0;"horizontal"===t?(o=e,n=u.rect.top):(o=u.rect.left,n=e);return{top:n,left:o}},getScrollSize:function(e){return s.get(e,"scrollSize")},getScrollValue:function(e){return s.get(e,"scrollValue")},setScrollValue:function(e,t){return s.set(e,"scrollValue",t)},invalidate:f,invalidateRects:function(){p(e)},getPosition:function(e){return b(e.x,e.y)?v(e):null}}};var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),r=n(0);var i={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(e){return"translate3d("+e+"px, 0, 0)"}}},a={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(e){return"translate3d(0,"+e+"px, 0)"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);function r(e,t){for(var n=e;n;){if((0,o.isScrolling)(n))return n;n=n.parentElement}}function i(e,t){var n=!1,o=null,r=null,i=null,a=null;return{animate:function(l,s){i=l,a=s,(n=!0)&&function n(){null===o&&(o=requestAnimationFrame(function(l){null===r&&(r=l);var s=l-r;r=l;var u=s/1e3*a;u="begin"===i?0-u:u;var c=t.getScrollValue(e)+u;t.setScrollValue(e,c),o=null,n()}))}()},stop:function(){n&&(cancelAnimationFrame(o),n=!1,r=null,o=null)}}}t.default=function(e){var t=e.element,n=e.layout,o=e.options,a=null,l=(o.orientation,r(t)),s=l?n.getBeginEndOfDOMRect(l.getBoundingClientRect()):null,u=i(t,n);return function(e){e.draggableInfo;var c,d,f,g,p=e.dragResult,m=e.reset;if(o.autoScrollEnabled&&l){if(m)return u.stop(),null;if(null!==p.pos){null===a&&(l=r(t),u.stop(),u=i(l,n));var v=(c=p.pos,p.elementSize,f=(d=s).begin,(g=d.end)-c<100?{direction:"end",speedFactor:(100-(g-c))/100}:c-f<100?{direction:"begin",speedFactor:(100-(c-f))/100}:void 0);v?u.animate(v.direction,1500*v.speedFactor):u.stop(),a=p.pos}else u.stop();a=p.pos}return null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=function(e){return function(t){var n=null,s=null,u=function(e,t){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return Object.assign({},c,e)}(t),r=p(e,n.orientation,n.animationDuration);(0,o.addClass)(e,a.containerClass+" "+n.orientation);var i=(0,l.default)(e,n.orientation,n.animationDuration);return{element:e,draggables:r,options:n,layout:i}}(e,t),f=A(u),m=function(e){var t=e.element,n=e.draggables,o=e.layout,i=e.options,l=function(e){var t=e.element,n=e.draggables,o=e.layout;e.options;return function(){n.forEach(function(e){d(e,!1),o.setTranslation(e,0),o.setVisibility(e,!0),e[a.containersInDraggable]=[]}),t[a.stretcherElementInstance]&&(t[a.stretcherElementInstance].parentNode.removeChild(t[a.stretcherElementInstance]),t[a.stretcherElementInstance]=null)}}({element:t,draggables:n,layout:o,options:i}),s=(i.dropHandler||r.domDropHandler)({element:t,draggables:n,layout:o,options:i});return function(e,t){var n=t.addedIndex,o=t.removedIndex;if(l(),e.targetElement){var r=null!==n?null!==o&&o<n?n-1:n:null,a={removedIndex:o,addedIndex:r,payload:e.payload,droppedElement:e.element.firstChild};s(a,i.onDrop)}}}(u),v=(0,i.default)(u),b=null,y=!1,C=[];function x(){null!==s&&(s.invalidateShadow=!0,n=f(s),s.invalidateShadow=!1)}function E(e){y=e,b&&(b.onChildPositionCaptured(e),s&&(n=f(s)))}function w(e,t,n){for(var o=p(t,n.orientation,n.animationDuration),r=0;r<o.length;r++)e[r]=o[r];for(var i=0;i<e.length-o.length;i++)e.pop()}return u.layout.setScrollListener(function(){x()}),{element:e,draggables:u.draggables,isDragRelevant:function(e){var t=e.element,n=e.options;return function(e,r){if(n.shouldAcceptDrop)return n.shouldAcceptDrop(e.getOptions(),r);var i=e.getOptions();if("copy"===n.behaviour)return!1;var l=(0,o.getParent)(t,"."+a.wrapperClass);return l!==e.element&&(e.element===t||!(!i.groupName||i.groupName!==n.groupName))}}(u),getScale:u.layout.getContainerScale,layout:u.layout,getChildContainers:function(){return C},onChildPositionCaptured:E,dispose:function(e){t=e.element,Array.prototype.map.call(t.children,function(e){var n=e;(0,o.hasClass)(e,a.wrapperClass)&&(t.insertBefore(n,g.firstChild),t.removeChild(n))});var t},prepareDrag:function(e,t){var n=e.element,o=u.draggables,r=e.getOptions();w(o,n,r),e.layout.invalidateRects(),h(e,t),o.forEach(function(e){return d(e,!0,r.animationDuration)}),v=(0,i.default)(u)},isPosInChildContainer:function(){return y},handleDrag:function(e){return s=e,n=f(e),v({draggableInfo:e,dragResult:n}),n},handleDrop:function(e){s=null,E(!1),f=A(u),m(e,n),v({reset:!0}),b=null,C=[]},getDragResult:function(){return n},getTranslateCalculator:function(){return P(u).apply(void 0,arguments)},setParentContainer:function(e){b=e},getParentContainer:function(){return b},onTranslated:function(){x()},getOptions:function(){return u.options},setDraggables:function(){w(u.draggables,e,u.options)}}}}(e)(t);return e[a.containerInstance]=n,s.default.register(n),{dispose:function(){s.default.unregister(n),n.layout.dispose(),n.dispose(n)}}};var o=n(1),r=n(2),i=u(n(7)),a=n(0),l=u(n(6)),s=u(n(5));function u(e){return e&&e.__esModule?e:{default:e}}var c={groupName:null,behaviour:"move",orientation:"vertical",getChildPayload:null,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:null,shouldAnimateDrop:null};function d(e,t,n){t?((0,o.addClass)(e,a.animationClass),e.style.transitionDuration=n+"ms"):((0,o.removeClass)(e,a.animationClass),e.style.removeProperty("transition-duration"))}function f(e){return e?e[a.containerInstance]:null}function g(e,t){var n=document.createElement("div");return n.className=a.wrapperClass+" "+t+" "+a.animationClass,e.parentElement.insertBefore(n,e),n.appendChild(e),n}function p(e,t,n){return Array.prototype.map.call(e.children,function(e){var n=e;return(0,o.hasClass)(e,a.wrapperClass)||(n=g(e,t)),n[a.containersInDraggable]=[],n[a.translationValue]=0,n})}function m(e){var t=e.layout;return function(e,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function e(n,o,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(i<r)return r;if(r===i){var l=t.getBeginEnd(n[r]),s=l.begin,u=l.end;return o>s&&o<=u?a?o<(u+s)/2?r:r+1:r:null}var c=Math.floor((i+r)/2),d=t.getBeginEnd(n[c]),f=d.begin,g=d.end;return o<f?e(n,o,r,c-1,a):o>g?e(n,o,c+1,i,a):a?o<(g+f)/2?c:c+1:c}(e,n,0,e.length-1,o)}}function v(e,t){var n=e.element;while(n){var o=f(n.parentElement);if(o&&t.indexOf(o)>-1){return{container:o,draggable:n}}n=n.parentElement}return null}function h(e,t){var n=v(e,t);if(n){n.container.getChildContainers().push(e);e.setParentContainer(n.container);n.draggable[a.containersInDraggable].push(e)}}function b(e){e.draggables;var t=e.element,n=e.options,o=null;return function(e){var r=e.draggableInfo,i=(e.dragResult,o);return null==o&&r.container.element===t&&"move"===n.behaviour&&(i=o=r.elementIndex),{removedIndex:i}}}function y(e){var t=e.draggables,n=e.layout;return function(e){e.draggableInfo;var o=e.dragResult;null!==o.removedIndex&&n.setVisibility(t[o.removedIndex],!1)}}function C(e){var t=e.element,n=e.layout;return function(e){var o=e.draggableInfo;return{pos:f(t).isPosInChildContainer()?null:n.getPosition(o.position)}}}function x(e){var t=e.element,n=!1;return function(e){e.draggableInfo;var o=e.dragResult;f(t).getParentContainer()&&n!==(null!==o.pos)&&(n=null!==o.pos,f(t).getParentContainer().onChildPositionCaptured(n))}}function E(e){var t=e.layout,n=null;return function(e){var o=e.draggableInfo;return null===e.dragResult.pos?n=null:{elementSize:n=n||t.getSize(o.element)}}}function w(e){var t=e.element;return function(e){var n=e.draggableInfo,o=e.dragResult;!function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t&&n?e.targetElement=t:e.targetElement===t&&(e.targetElement=null)}(n,t,!!o.pos)}}function S(e){var t=R(e);return function(e){var n=e.draggableInfo,o=e.dragResult;return n.invalidateShadow?t({draggableInfo:n,dragResult:o}):null}}function D(e){var t,n,o,r=(n=(t=e).draggables,o=m({layout:t.layout}),function(e){var t=e.dragResult,r=t.shadowBeginEnd,i=t.pos;if(!r){var a=o(n,i,!0);return null!==a?a:n.length}return r.begin+r.beginAdjustment<=i&&r.end>=i?null:i<r.begin+r.beginAdjustment?o(n,i):i>r.end?o(n,i)+1:n.length});return function(e){var t=e.dragResult,n=null;return null!==t.pos&&null===(n=r({dragResult:t}))&&(n=t.addedIndex),{addedIndex:n}}}function O(){var e=null;return function(t){var n=t.dragResult,o=n.addedIndex,r=n.shadowBeginEnd;o!==e&&null!==e&&r&&(r.beginAdjustment=0),e=o}}function I(e){var t=e.element,n=e.draggables,o=e.layout,r=e.options,i=null,l=!1;return function(e){var s=e.dragResult,u=s.addedIndex,c=s.removedIndex,d=s.elementSize;if(null===c)if(null!==u){if(!l){var f=o.getBeginEndOfContainer(),g=o.getScrollSize(t)>o.getSize(t)?f.begin+o.getScrollSize(t)-o.getScrollValue(t):f.end,p=n.length>0?o.getBeginEnd(n[n.length-1]).end-n[n.length-1][a.translationValue]:f.begin;if(p+d>g){(i=document.createElement("div")).className=a.stretcherElementClass+" "+r.orientation;var m=d+p-g;o.setSize(i.style,m+"px"),t.appendChild(i),t[a.stretcherElementInstance]=i}l=!0,setTimeout(function(){o.invalidateRects()},100)}}else{if(i){o.setTranslation(i,0);var v=i;i=null,t.removeChild(v),t[a.stretcherElementInstance]=null}l=!1,setTimeout(function(){o.invalidateRects()},100)}}}function P(e){e.element;var t=e.draggables,n=e.layout,o=null,r=null;return function(e){var i=e.dragResult,a=i.addedIndex,l=i.removedIndex,s=i.elementSize;if(a!==o||l!==r){for(var u=0;u<t.length;u++)if(u!==l){var c=t[u],d=0;null!==l&&l<u&&(d-=n.getSize(t[l])),null!==a&&a<=u&&(d+=s),n.setTranslation(c,d)}return o=a,r=l,{addedIndex:a,removedIndex:l}}}}function R(e){var t=e.draggables,n=e.layout,o=null;return function(e){var r=e.draggableInfo,i=e.dragResult,a=i.addedIndex,l=i.removedIndex,s=i.elementSize,u=i.pos,c=i.shadowBeginEnd;if(null!==u){if(null===a||!r.invalidateShadow&&a===o)return null;o&&(o=a);var d=a-1,f=0,g=null,p=null;if(d===l&&d--,d>-1){var m=n.getSize(t[d]);if(p=n.getBeginEnd(t[d]),s<m){var v=(m-s)/2;f=p.end-v}else f=p.end}else p={end:n.getBeginEndOfContainer().begin};var h=1e4,b=a;if(b===l&&b++,b<t.length){var y=n.getSize(t[b]);if(g=n.getBeginEnd(t[b]),s<y){var C=(y-s)/2;h=g.begin+C}else h=g.begin}else g={begin:n.getContainerRectangles().end};return{shadowBeginEnd:{begin:f,end:h,rect:p&&g?n.getTopLeftOfElementBegin(p.end,g.begin):null,beginAdjustment:c?c.beginAdjustment:0}}}return o=null,{shadowBeginEnd:null}}}function _(){var e=null;return function(t){var n=t.dragResult,o=n.pos,r=n.addedIndex,i=n.shadowBeginEnd;t.draggableInfo.invalidateShadow;if(null!==o){if(null!=r&&null===e){if(o<i.begin){var a=o-i.begin-5;i.beginAdjustment=a}e=r}}else e=null}}function z(e){var t=e.options,n=!1;return function(e){var o=!!e.dragResult.pos;o!==n&&(n=o,o?t.onDragEnter&&t.onDragEnter():t.onDragLeave&&t.onDragLeave())}}function A(e){return function(e){return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];var r=n.map(function(t){return t(e)}),i=null;return function(e){return i=r.reduce(function(t,n){return Object.assign(t,n({draggableInfo:e,dragResult:t}))},i||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}(e)(b,y,C,x,E,w,S,D,O,I,P,R,_,z)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dropHandlers=t.constants=void 0;var o,r=n(8),i=(o=r)&&o.__esModule?o:{default:o},a=s(n(0)),l=s(n(2));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.default=i.default,t.constants=a,t.dropHandlers=l}])});