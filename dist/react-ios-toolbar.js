!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactIosToolbar=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactIosToolbar=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,r,o,n){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=o(n);t.default=i.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,c,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();r(5);var p=r(10),d=o(p),b=r(9),h=o(b),m=r(6),v=o(m),y=r(7),g=o(y),x=r(8),j=(o(x),c=l=function(e){function t(){var e,r,o,n;i(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o._onClick=function(e){var t=o.props.onClick;t(e)},n=r,a(o,n)}return s(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.placeholder,o=(e.items,e.onClick,n(e,["className","placeholder","items","onClick"]));return d.default.createElement("section",f({},o,{className:(0,v.default)("react-ios-toolbar",t)}),r&&d.default.createElement("span",{className:"react-ios-toolbar-placeholder"},r),d.default.createElement("div",{className:"react-ios-toolbar-inner"},this.children))}},{key:"children",get:function(){var e=this,t=this.props.items;return t.map(function(t,r){return d.default.createElement("label",{key:r,"data-role":t.role,onClick:e._onClick.bind(e,t),className:"react-ios-toolbar-item"},t.text)})}}]),t}(p.PureComponent),l.propTypes={className:h.default.string,placeholder:h.default.string,items:h.default.array,onClick:h.default.func},l.defaultProps={items:[],onClick:g.default},c);t.default=j},function(e,t,r){t=e.exports=r(3)(),t.push([e.id,'.react-ios-toolbar{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;position:relative;left:0;bottom:0;background:#f7f7f8;height:44px;font-size:17px}.react-ios-toolbar-item{-webkit-box-flex:1;-ms-flex:1;flex:1}.react-ios-toolbar-item[data-role=cancel]{color:#929292}.react-ios-toolbar-item[data-role=ok]{color:#007aff}.react-ios-toolbar-placeholder{color:#bbb;position:absolute;font-size:15px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.react-ios-toolbar:before{content:"";position:absolute;left:0;top:0;bottom:auto;right:auto;height:1px;width:100%;background-color:#c4c4c4;display:block;z-index:15;-webkit-transform-origin:50% 0;transform-origin:50% 0}.react-ios-toolbar-inner{position:absolute;left:0;top:0;width:100%;height:100%;padding:0 8px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.react-ios-toolbar-inner :first-child{text-align:left}.react-ios-toolbar-inner :last-child{text-align:right}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<t.length;n++){var a=t[n];"number"==typeof a[0]&&o[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t,r){function o(e,t){for(var r=0;r<e.length;r++){var o=e[r],n=d[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(c(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(c(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:a}}}}function n(e){for(var t=[],r={},o=0;o<e.length;o++){var n=e[o],i=n[0],a=n[1],s=n[2],l=n[3],c={css:a,media:s,sourceMap:l};r[i]?r[i].parts.push(c):t.push(r[i]={id:i,parts:[c]})}return t}function i(e,t){var r=m(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?r.insertBefore(t,o.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var r,o,n;if(t.singleton){var i=y++;r=v||(v=s(t)),o=f.bind(null,r,i,!1),n=f.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=l(t),o=p.bind(null,r),n=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),o=u.bind(null,r),n=function(){a(r)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}function f(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,n);else{var i=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t){var r=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t){var r=t.css,o=t.sourceMap;o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var n=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(n),i&&URL.revokeObjectURL(i)}var d={},b=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=b(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=b(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=n(e);return o(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var s=r[a],l=d[s.id];l.refs--,i.push(l)}if(e){var c=n(e);o(c,t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete d[l.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var o=r(2);"string"==typeof o&&(o=[[e.id,o,""]]);r(4)(o,{});o.locals&&(e.exports=o.locals)},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-ios-toolbar.js.map