!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a="BlazorExtensions",i=function(){function e(){var e=document.createElement("div");e.id="vanillatoasts-container",document.body.appendChild(e)}return e.prototype.Create=function(e,t){console.log(e),console.log(t);var n=document.getElementById("vanillatoasts-container"),o=document.createElement("div");if(o.className="vanillatoasts-toast",e.title){var a=document.createElement("h4");a.className="vanillatoasts-title",a.innerHTML=e.title,o.appendChild(a)}if(e.text){var i=document.createElement("p");i.className="vanillatoasts-text",i.innerHTML=e.text,o.appendChild(i)}if(e.icon){var c=document.createElement("img");c.src=e.icon,c.className="vanillatoasts-icon",o.appendChild(c)}e.type&&(o.className+=" vanillatoasts-"+r.ToastType[e.type].toLowerCase()),o.hide=function(){o.className+=" vanillatoasts-fadeOut",o.addEventListener("animationend",l,!1)},e.timeout&&setTimeout(o.hide,e.timeout),o.addEventListener("click",o.hide),o.addEventListener("click",function(){return t.invokeMethodAsync("ActOnCallback")}),n.appendChild(o);var l=function(){n.removeChild(o)}},e}();"undefined"==typeof window||window[a]?window[a]=o({},window[a],{Toasts:{Service:new i}}):window[a]={Toasts:{Service:new i}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Info=1]="Info",e[e.Success=2]="Success",e[e.Warning=3]="Warning",e[e.Error=4]="Error"}(t.ToastType||(t.ToastType={}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luaXRpYWxpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RvYXN0LnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiVG9hc3RfMSIsImJsYXpvckV4dGVuc2lvbnMiLCJUb2FzdFNlcnZpY2UiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIkNyZWF0ZSIsInRvYXN0T2JqZWN0IiwiZG90bmV0T2JqZWN0UmVmIiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRCeUlkIiwidG9hc3QiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImg0IiwiaW5uZXJIVE1MIiwidGV4dCIsImljb24iLCJpbWciLCJzcmMiLCJ0eXBlIiwiVG9hc3RUeXBlIiwidG9Mb3dlckNhc2UiLCJoaWRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZVRvYXN0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJpbnZva2VNZXRob2RBc3luYyIsInJlbW92ZUNoaWxkIiwid2luZG93IiwiX19hc3NpZ24iLCJUb2FzdHMiLCJTZXJ2aWNlIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxLQUdBLFNB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QkFBaUIsZUFBZ0JDLEdBQWEsSUFJbERuQixFQUFZb0IsU0FDZEMsV0FBV2hCLEVBQU1ZLEtBQU1qQixFQUFZb0IsU0FJckNmLEVBQU1hLGlCQUFpQixRQUFTYixFQUFNWSxNQUN0Q1osRUFBTWEsaUJBQWlCLFFBQVMsV0FBTSxPQUFBakIsRUFBZ0JxQixrQkFBa0IsbUJBR3hFN0IsRUFBV0ssWUFBWU8sR0FFdkIsSUFBSWMsRUFBYyxXQUNoQjFCLEVBQVc4QixZQUFZbEIsS0FHN0JiLEVBbEVBLEdBdUV3QixvQkFBWGdDLFFBQTJCQSxPQUFPakMsR0FTM0NpQyxPQUFPakMsR0FBaUJrQyxLQUNuQkQsT0FBT2pDLElBQ1ZtQyxRQUNFQyxRQUFTLElBQUluQyxLQVRqQmdDLE9BQU9qQyxJQUNMbUMsUUFDRUMsUUFBUyxJQUFJbkMsbUZDeEVyQixTQUFZdUIsR0FDVkEsSUFBQSxlQUNBQSxJQUFBLHFCQUNBQSxJQUFBLHFCQUNBQSxJQUFBLGlCQUpGLENBQVkzRCxFQUFBMkQsWUFBQTNELEVBQUEyRCIsImZpbGUiOiJibGF6b3IuZXh0ZW5zaW9ucy50b2FzdHIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBEb3ROZXRPYmplY3RSZWYgfSBmcm9tICcuL0JsYXpvclR5cGVzJztcclxuaW1wb3J0IHsgVG9hc3QsIFRvYXN0RWxlbWVudCwgVG9hc3RUeXBlIH0gZnJvbSBcIi4vVG9hc3RcIjtcclxuXHJcbmNvbnN0IGJsYXpvckV4dGVuc2lvbnMgPSAnQmxhem9yRXh0ZW5zaW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgSVRvYXN0U2VydmljZSB7XHJcbiAgQ3JlYXRlKHRvYXN0T2JqZWN0OiBUb2FzdCwgZG90bmV0T2JqZWN0UmVmOiBEb3ROZXRPYmplY3RSZWYpOiB2b2lkO1xyXG59XHJcblxyXG5jbGFzcyBUb2FzdFNlcnZpY2UgaW1wbGVtZW50cyBJVG9hc3RTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5pZCA9ICd2YW5pbGxhdG9hc3RzLWNvbnRhaW5lcic7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBDcmVhdGUodG9hc3RPYmplY3Q6IFRvYXN0LCBkb3RuZXRPYmplY3RSZWY6IERvdE5ldE9iamVjdFJlZik6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2codG9hc3RPYmplY3QpO1xyXG4gICAgY29uc29sZS5sb2coZG90bmV0T2JqZWN0UmVmKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YW5pbGxhdG9hc3RzLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGxldCB0b2FzdDogVG9hc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgVG9hc3RFbGVtZW50O1xyXG4gICAgdG9hc3QuY2xhc3NOYW1lID0gJ3ZhbmlsbGF0b2FzdHMtdG9hc3QnO1xyXG5cclxuICAgIC8vIHRpdGxlXHJcbiAgICBpZiAodG9hc3RPYmplY3QudGl0bGUpIHtcclxuICAgICAgbGV0IGg0OiBIVE1MSGVhZGluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICBoNC5jbGFzc05hbWUgPSAndmFuaWxsYXRvYXN0cy10aXRsZSc7XHJcbiAgICAgIGg0LmlubmVySFRNTCA9IHRvYXN0T2JqZWN0LnRpdGxlO1xyXG4gICAgICB0b2FzdC5hcHBlbmRDaGlsZChoNCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGV4dFxyXG4gICAgaWYgKHRvYXN0T2JqZWN0LnRleHQpIHtcclxuICAgICAgdmFyIHA6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBwLmNsYXNzTmFtZSA9ICd2YW5pbGxhdG9hc3RzLXRleHQnO1xyXG4gICAgICBwLmlubmVySFRNTCA9IHRvYXN0T2JqZWN0LnRleHQ7XHJcbiAgICAgIHRvYXN0LmFwcGVuZENoaWxkKHApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGljb25cclxuICAgIGlmICh0b2FzdE9iamVjdC5pY29uKSB7XHJcbiAgICAgIGxldCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgaW1nLnNyYyA9IHRvYXN0T2JqZWN0Lmljb247XHJcbiAgICAgIGltZy5jbGFzc05hbWUgPSAndmFuaWxsYXRvYXN0cy1pY29uJztcclxuICAgICAgdG9hc3QuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0eXBlXHJcbiAgICBpZiAodG9hc3RPYmplY3QudHlwZSkge1xyXG4gICAgICB0b2FzdC5jbGFzc05hbWUgKz0gJyB2YW5pbGxhdG9hc3RzLScgKyBUb2FzdFR5cGVbdG9hc3RPYmplY3QudHlwZV0udG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2FzdCBhcGlcclxuICAgIHRvYXN0LmhpZGUgPSAoKSA9PiB7XHJcbiAgICAgIHRvYXN0LmNsYXNzTmFtZSArPSAnIHZhbmlsbGF0b2FzdHMtZmFkZU91dCc7XHJcbiAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHJlbW92ZVRvYXN0LCBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGF1dG9oaWRlXHJcbiAgICBpZiAodG9hc3RPYmplY3QudGltZW91dCkge1xyXG4gICAgICBzZXRUaW1lb3V0KHRvYXN0LmhpZGUsIHRvYXN0T2JqZWN0LnRpbWVvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9uIENsaWNrXHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvYXN0LmhpZGUpO1xyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb3RuZXRPYmplY3RSZWYuaW52b2tlTWV0aG9kQXN5bmMoXCJBY3RPbkNhbGxiYWNrXCIpKTtcclxuXHJcbiAgICAvLyBBZGQgZWxlbWVudFxyXG4gICAgY29udGFpbmVyIS5hcHBlbmRDaGlsZCh0b2FzdCk7XHJcblxyXG4gICAgbGV0IHJlbW92ZVRvYXN0ID0gKCkgPT4ge1xyXG4gICAgICBjb250YWluZXIhLnJlbW92ZUNoaWxkKHRvYXN0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93W2JsYXpvckV4dGVuc2lvbnNdKSB7XHJcbiAgICAvLyBXaGVuIHRoZSBsaWJyYXJ5IGlzIGxvYWRlZCBpbiBhIGJyb3dzZXIgdmlhIGEgPHNjcmlwdD4gZWxlbWVudCwgbWFrZSB0aGVcclxuICAgIC8vIGZvbGxvd2luZyBBUElzIGF2YWlsYWJsZSBpbiBnbG9iYWwgc2NvcGUgZm9yIGludm9jYXRpb24gZnJvbSBKU1xyXG4gICAgd2luZG93W2JsYXpvckV4dGVuc2lvbnNdID0ge1xyXG4gICAgICBUb2FzdHM6IHtcclxuICAgICAgICBTZXJ2aWNlOiBuZXcgVG9hc3RTZXJ2aWNlKClcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2luZG93W2JsYXpvckV4dGVuc2lvbnNdID0ge1xyXG4gICAgICAuLi53aW5kb3dbYmxhem9yRXh0ZW5zaW9uc10sXHJcbiAgICAgIFRvYXN0czoge1xyXG4gICAgICAgIFNlcnZpY2U6IG5ldyBUb2FzdFNlcnZpY2UoKVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuaW5pdGlhbGl6ZSgpO1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFRvYXN0RWxlbWVudCBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcclxuICBoaWRlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUb2FzdCA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRleHQ6IHN0cmluZztcclxuICB0eXBlOiBUb2FzdFR5cGU7XHJcbiAgaWNvbjogc3RyaW5nO1xyXG4gIHRpbWVvdXQ6IG51bWJlcjtcclxuICBjYWxsYmFjazogKCkgPT4gVG9hc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRvYXN0VHlwZSB7XHJcbiAgSW5mbyA9IDEsXHJcbiAgU3VjY2VzcyA9IDIsXHJcbiAgV2FybmluZyA9IDMsXHJcbiAgRXJyb3IgPSA0XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==