!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-back-to-link"),require("dnn-grid-cell"),require("react")):"function"==typeof define&&define.amd?define(["dnn-back-to-link","dnn-grid-cell","react"],t):"object"==typeof exports?exports.PersonaBarPageBody=t(require("dnn-back-to-link"),require("dnn-grid-cell"),require("react")):e.PersonaBarPageBody=t(e["dnn-back-to-link"],e["dnn-grid-cell"],e.react)}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return e?" "+e:""}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),i=r(a),s=n(6),p=r(s),c=n(5),l=r(c);n(4);var d=function(e){var t=e.children,n=e.workSpaceTrayOutside,r=e.workSpaceTray,a=e.style,s=e.className,c=e.workSpaceTrayClassName,d=e.backToLinkProps,f=n&&r,u=!n&&r,b="dnn-workspace-tray"+o(c),h="dnn-persona-bar-page-body"+o(s)+o(d?d.text&&"with-back-to-link":"");return i["default"].createElement(p["default"],{className:h,style:a},d&&d.text&&i["default"].createElement(l["default"],d),f&&i["default"].createElement(p["default"],{className:b},r),i["default"].createElement(p["default"],{className:"persona-bar-page-body"},u&&i["default"].createElement(p["default"],{className:b},r),t))};d.propTypes={children:a.PropTypes.node,workSpaceTrayOutside:a.PropTypes.bool,workSpaceTray:a.PropTypes.node,style:a.PropTypes.object,className:a.PropTypes.string,workSpaceTrayClassName:a.PropTypes.string,backToLinkProps:a.PropTypes.object},t["default"]=d},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.dnn-persona-bar-page-body{margin-top:103px;padding:25px 30px}.dnn-persona-bar-page-body.with-back-to-link{padding-top:0}.dnn-persona-bar-page-body.with-back-to-link a.dnn-back-to-link{height:36px;display:block}.dnn-persona-bar-page-body.with-back-to-link a.dnn-back-to-link>span{position:relative;top:50%;transform:translateY(-50%);float:left}.dnn-persona-bar-page-body.with-back-to-link a.dnn-back-to-link .dnn-back-to-arrow{margin-top:2px;position:relative;top:50%;transform:translateY(-50%)}.dnn-persona-bar-page-body .dnn-workspace-tray{height:44px;border-bottom:1px solid #c8c8c8;margin-bottom:15px}.dnn-persona-bar-page-body .persona-bar-page-body{background:#fff;border:1px solid #c8c8c8}.dnn-persona-bar-page-body .persona-bar-page-body .dnn-workspace-tray{padding:14px 0;border-bottom:1px solid #c8c8c8;margin-bottom:15px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=u[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(c(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(c(r.parts[a],t));u[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],s=o[2],p=o[3],c={css:i,media:s,sourceMap:p};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=y(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function p(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var a=v++;n=g||(g=s(t)),r=l.bind(null,n,a,!1),o=l.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=p(t),r=f.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=d.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var u={},b=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=b(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],p=u[s.id];p.refs--,a.push(p)}if(e){var c=o(e);r(c,t)}for(var i=0;i<a.length;i++){var p=a[i];if(0===p.refs){for(var l=0;l<p.parts.length;l++)p.parts[l]();delete u[p.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.id,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])});