!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(e.braintree||(e.braintree={})).client=t()}}(function(){return function t(e,n,r){function i(a,u){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return i(n?n:t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){(function(n){"use strict";function r(){return f?new XMLHttpRequest:new XDomainRequest}function i(t,e,n,r,i){var o=u.createURLParams(t,e);a("GET",o,null,n,r,i)}function o(t,e,n,r,i){a("POST",t,e,n,r,i)}function a(t,e,n,i,o,a){var u,d,p=r();o=o||function(){},f?p.onreadystatechange=function(){4===p.readyState&&(u=p.status,d=c(p.responseText),u>=400||0===u?o.call(null,d||{errors:l.errors.UNKNOWN_ERROR},null):u>0&&o.call(null,null,i(d)))}:(p.onload=function(){o.call(null,null,i(c(p.responseText)))},p.onerror=function(){o.call(null,p.responseText,null)},p.onprogress=function(){},p.ontimeout=function(){o.call(null,{errors:l.errors.UNKNOWN_ERROR},null)}),p.open(t,e,!0),p.timeout=null==a?6e4:a,f&&"POST"===t&&p.setRequestHeader("Content-Type","application/json"),setTimeout(function(){p.send(s(t,n))},0)}var u=t("./util"),s=t("./prep-body"),c=t("./parse-body"),l=t("./constants"),f=n.XMLHttpRequest&&"withCredentials"in new n.XMLHttpRequest;e.exports={get:i,post:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./constants":3,"./parse-body":6,"./prep-body":7,"./util":8}],2:[function(t,e,n){"use strict";function r(t){var e=a.getUserAgent(),n=!(a.isHTTP()&&/(MSIE\s(8|9))|(Phantom)/.test(e));return t=t||{},t.enableCORS&&n?o:i}var i=t("./jsonp-driver"),o=t("./ajax-driver"),a=t("./util");e.exports=r},{"./ajax-driver":1,"./jsonp-driver":4,"./util":8}],3:[function(t,e,n){e.exports={errors:{UNKNOWN_ERROR:"Unknown error",INVALID_TIMEOUT:"Timeout must be a number"}}},{}],4:[function(t,e,n){"use strict";function r(t,e){return t.status>=400?[t,null]:[null,e(t)]}function i(){}function o(t,e,n,o,a,u){var s;a=a||i,null==u&&(u=6e4),s=o(t,e,function(t,e,i){l[i]&&(clearTimeout(l[i]),t?a.call(null,t):a.apply(null,r(e,function(t){return n(t)})))}),"number"==typeof u?l[s]=setTimeout(function(){l[s]=null,a.apply(null,[{errors:c.errors.UNKNOWN_ERROR},null])},u):a.apply(null,[{errors:c.errors.INVALID_TIMEOUT},null])}function a(t,e,n,r,i){e._method="POST",o(t,e,n,s.get,r,i)}function u(t,e,n,r,i){o(t,e,n,s.get,r,i)}var s=t("./jsonp"),c=t("./constants"),l=[];e.exports={get:u,post:a}},{"./constants":3,"./jsonp":5}],5:[function(t,e,n){(function(n){"use strict";function r(t,e){var n=document.createElement("script"),r=!1;n.src=t,n.async=!0;var i=e||c.error;"function"==typeof i&&(n.onerror=function(e){i({url:t,event:e})}),n.onload=n.onreadystatechange=function(){r||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(r=!0,n.onload=n.onreadystatechange=null,n&&n.parentNode&&n.parentNode.removeChild(n))},a||(a=document.getElementsByTagName("head")[0]),a.appendChild(n)}function i(t,e,n,i){var o,a;return i=i||c.callbackName||"callback",a=i+"_json"+u.generateUUID(),e[i]=a,o=u.createURLParams(t,e),s[a]=function(t){n(null,t,a);try{delete s[a]}catch(e){}s[a]=null},r(o,function(t){n(t,null,a)}),a}function o(t){c=t}var a,u=t("./util"),s=n,c={};e.exports={get:i,init:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./util":8}],6:[function(t,e,n){"use strict";e.exports=function(t){try{t=JSON.parse(t)}catch(e){}return t}},{}],7:[function(t,e,n){"use strict";e.exports=function(t,e){if("string"!=typeof t)throw new Error("Method must be a string");return"get"!==t.toLowerCase()&&null!=e&&(e="string"==typeof e?e:JSON.stringify(e)),e}},{}],8:[function(t,e,n){(function(t){"use strict";function n(t){var e;for(e in t)if(t.hasOwnProperty(e))return!0;return!1}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&"[object Array]"===Object.prototype.toString.call(t)||!1}function i(t,e){var n,o,a,u=[];for(a in t)t.hasOwnProperty(a)&&(o=t[a],n=e?r(t)?e+"[]":e+"["+a+"]":a,"object"==typeof o?u.push(i(o,n)):u.push(encodeURIComponent(n)+"="+encodeURIComponent(o)));return u.join("&")}function o(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.floor(16*Math.random()),n="x"===t?e:3&e|8;return n.toString(16)})}function a(t,e){return t=t||"",null!=e&&"object"==typeof e&&n(e)&&(t+=-1===t.indexOf("?")?"?":"",t+=-1!==t.indexOf("=")?"&":"",t+=i(e)),t}function u(){return t.navigator.userAgent}function s(){return"http:"===t.location.protocol}e.exports={isArray:r,generateUUID:o,stringify:i,createURLParams:a,getUserAgent:u,isHTTP:s}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(t,e,n){"use strict";var r=t("./lib/ajax-driver"),i=t("./lib/jsonp-driver"),o=t("./lib/choose-driver"),a=t("./lib/util");e.exports={AJAXDriver:r,JSONPDriver:i,chooseDriver:o,util:a}},{"./lib/ajax-driver":1,"./lib/choose-driver":2,"./lib/jsonp-driver":4,"./lib/util":8}],10:[function(t,e,n){"use strict";var r,i=Array.prototype.indexOf;r=i?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1},e.exports={indexOf:r}},{}],11:[function(t,e,n){"use strict";function r(t){var e,n,r="";for(e=0;e<t.length;e++)r+="%",n=t[e].charCodeAt(0).toString(16).toUpperCase(),n.length<2&&(r+="0"),r+=n;return r}function i(t){return decodeURIComponent(r(atob(t)))}e.exports={decodeUtf8:i}},{}],12:[function(t,e,n){"use strict";function r(t,e){if(e=e||"["+t+"] is not a valid DOM Element",t&&t.nodeType&&1===t.nodeType)return t;if(t&&window.jQuery&&(t instanceof jQuery||"jquery"in Object(t))&&0!==t.length)return t[0];if("string"==typeof t&&document.getElementById(t))return document.getElementById(t);throw new Error(e)}e.exports={normalizeElement:r}},{}],13:[function(t,e,n){"use strict";function r(t,e,n,r){t.addEventListener?t.addEventListener(e,n,r||!1):t.attachEvent&&t.attachEvent("on"+e,n)}function i(t,e,n,r){t.removeEventListener?t.removeEventListener(e,n,r||!1):t.detachEvent&&t.detachEvent("on"+e,n)}function o(t){t.preventDefault?t.preventDefault():t.returnValue=!1}e.exports={addEventListener:r,removeEventListener:i,preventDefault:o}},{}],14:[function(t,e,n){"use strict";function r(t){return"[object Function]"===o.call(t)}function i(t,e){return function(){return t.apply(e,arguments)}}var o=Object.prototype.toString;e.exports={bind:i,isFunction:r}},{}],15:[function(t,e,n){"use strict";function r(t){var e,n,r,i,o=[{min:0,max:180,chars:7},{min:181,max:620,chars:14},{min:621,max:960,chars:22}];for(i=o.length,t=t||window.innerWidth,n=0;i>n;n++)r=o[n],t>=r.min&&t<=r.max&&(e=r.chars);return e||60}function i(t,e){var n,r;return-1===t.indexOf("@")?t:(t=t.split("@"),n=t[0],r=t[1],n.length>e&&(n=n.slice(0,e)+"..."),r.length>e&&(r="..."+r.slice(-e)),n+"@"+r)}e.exports={truncateEmail:i,getMaxCharLength:r}},{}],16:[function(t,e,n){"use strict";function r(){return"https:"===window.location.protocol}function i(t){switch(t){case null:case void 0:return"";case!0:return"1";case!1:return"0";default:return encodeURIComponent(t)}}function o(t,e){var n,r,a=[];for(r in t)if(t.hasOwnProperty(r)){var u=t[r];n=e?e+"["+r+"]":r,"object"==typeof u?a.push(o(u,n)):void 0!==u&&null!==u&&a.push(i(n)+"="+i(u))}return a.join("&")}function a(t){for(var e={},n=t.split("&"),r=0;r<n.length;r++){var i=n[r].split("="),o=i[0],a=decodeURIComponent(i[1]);e[o]=a}return e}function u(t){var e=t.split("?");return 2!==e.length?{}:a(e[1])}function s(t){if(t=t.toLowerCase(),!/^http/.test(t))return!1;l.href=t;var e=l.hostname.split("."),n=e.slice(-2).join(".");return-1===c.indexOf(f,n)?!1:!0}var c=t("./array"),l=document.createElement("a"),f=["paypal.com","braintreepayments.com","braintreegateway.com","localhost"];e.exports={isBrowserHttps:r,makeQueryString:o,decodeQueryString:a,getParams:u,isWhitelistedDomain:s}},{"./array":10}],17:[function(t,e,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}e.exports=r},{}],18:[function(t,e,n){var r=t("./lib/dom"),i=t("./lib/url"),o=t("./lib/fn"),a=t("./lib/events"),u=t("./lib/string"),s=t("./lib/array"),c=t("./lib/base64"),l=t("./lib/uuid");e.exports={string:u,array:s,normalizeElement:r.normalizeElement,isBrowserHttps:i.isBrowserHttps,makeQueryString:i.makeQueryString,decodeQueryString:i.decodeQueryString,getParams:i.getParams,isWhitelistedDomain:i.isWhitelistedDomain,removeEventListener:a.removeEventListener,addEventListener:a.addEventListener,preventDefault:a.preventDefault,bind:o.bind,isFunction:o.isFunction,base64ToUtf8:c.decodeUtf8,uuid:l}},{"./lib/array":10,"./lib/base64":11,"./lib/dom":12,"./lib/events":13,"./lib/fn":14,"./lib/string":15,"./lib/url":16,"./lib/uuid":17}],19:[function(t,e,n){"use strict";function r(t){return t}function i(t){var e,n;if(t=t||{},e=JSON.stringify(t),n=t.gatewayConfiguration,!n)throw new u({type:u.types.INTERNAL,message:"Missing gatewayConfiguration"});["assetsUrl","clientApiUrl","configUrl"].forEach(function(t){if(t in n&&!a.isWhitelistedDomain(n[t]))throw new u({type:u.types.MERCHANT,message:"Invalid "+t})}),this.getConfiguration=function(){return JSON.parse(e)},this._driver=o({enableCORS:!0}),this._baseUrl=t.gatewayConfiguration.clientApiUrl+"/v1/",this._configuration=this.getConfiguration(),this.toJSON=this.getConfiguration}var o=t("braintree-request").chooseDriver,a=t("braintree-utilities"),u=t("../lib/error"),s=t("../lib/add-metadata");i.prototype.request=function(t,e){var n;if(t.method?t.endpoint||(n="options.endpoint is required"):n="options.method is required",n)throw new u({type:u.types.MERCHANT,message:n});this._driver[t.method](this._baseUrl+t.endpoint,s(this._configuration,t.data),r,e,t.timeout)},e.exports=i},{"../lib/add-metadata":22,"../lib/error":26,"braintree-request":9,"braintree-utilities":18}],20:[function(t,e,n){(function(n){"use strict";function r(t,e){var r,c,l,f,d=a(),p={merchantAppId:n.location.host,platform:u.PLATFORM,sdkVersion:u.VERSION,source:u.SOURCE,integration:u.INTEGRATION,integrationType:u.INTEGRATION,sessionId:d};try{c=s(t.authorization)}catch(x){return void e(new i({type:i.types.MERCHANT,message:"Authorization is invalid. Make sure your client token or tokenization key is valid."}))}l=c.attrs,f=c.configUrl,l._meta=p,l.braintreeLibraryVersion=u.BRAINTREE_LIBRARY_VERSION,o({enableCORS:!0}).get(f,l,function(t){return t},function(n,i){return n?void e(n):(r={authorization:t.authorization,analyticsMetadata:p,gatewayConfiguration:i},void e(null,r))})}var i=t("../lib/error"),o=t("braintree-request").chooseDriver,a=t("../lib/uuid"),u=t("../lib/constants"),s=t("../lib/create-authorization-data");e.exports={getConfiguration:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/constants":23,"../lib/create-authorization-data":24,"../lib/error":26,"../lib/uuid":29,"braintree-request":9}],21:[function(t,e,n){"use strict";function r(t,e){return t.authorization?void a(t,function(t,n){var r;if(null!=t)return void e("Unknown error"===t.errors?new i({type:i.types.NETWORK,message:"Cannot contact the gateway at this time."}):t);try{r=new o(n)}catch(a){return void e(a)}e(null,r)}):void e(new i({type:i.types.MERCHANT,message:"options.authorization is required"}))}var i=t("../lib/error"),o=t("./client"),a=t("./get-configuration").getConfiguration,u="3.0.0-beta.4";e.exports={create:r,VERSION:u}},{"../lib/error":26,"./client":19,"./get-configuration":20}],22:[function(t,e,n){"use strict";function r(t,e){var n,r=e?o(e):{},u=i(t.authorization).attrs,s=o(t.analyticsMetadata);r.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(s[n]=r._meta[n]);return r._meta=s,u.clientKey?r.clientKey=u.clientKey:r.authorizationFingerprint=u.authorizationFingerprint,r}var i=t("./create-authorization-data"),o=t("./json-clone"),a=t("./constants");e.exports=r},{"./constants":23,"./create-authorization-data":24,"./json-clone":27}],23:[function(t,e,n){"use strict";var r="3.0.0-beta.4",i="web";e.exports={ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:i,BRAINTREE_LIBRARY_VERSION:"braintree/"+i+"/"+r}},{}],24:[function(t,e,n){"use strict";function r(t){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(t)}function i(t){var e=t.split("_"),n=e[0],r=e.slice(2).join("_");return{merchantId:r,environment:n}}function o(t){var e,n,o={attrs:{},configUrl:""};return r(t)?(n=i(t),o.attrs.clientKey=t,o.configUrl=u[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(e=JSON.parse(a(t)),o.attrs.authorizationFingerprint=e.authorizationFingerprint,o.configUrl=e.configUrl),o}var a=t("../lib/polyfill").atob,u={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};e.exports=o},{"../lib/polyfill":28}],25:[function(t,e,n){"use strict";function r(t,e){return e=null==e?"":e,t.reduce(function(t,n){return t[n]=e+n,t},{})}e.exports=r},{}],26:[function(t,e,n){"use strict";function r(t){if(!r.types.hasOwnProperty(t.type))throw new Error(t.type+" is not a valid type");if(!t.message)throw new Error("Error message required");this.message=t.message,this.type=t.type,this.details=t.details}var i=t("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),e.exports=r},{"./enumerate":25}],27:[function(t,e,n){"use strict";e.exports=function(t){return JSON.parse(JSON.stringify(t))}},{}],28:[function(t,e,n){(function(t){"use strict";function n(t){var e,n,r,i,o,a,u,s,c=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="";if(!c.test(t))throw new Error("Non base64 encoded input passed to window.atob polyfill");s=0;do i=l.indexOf(t.charAt(s++)),o=l.indexOf(t.charAt(s++)),a=l.indexOf(t.charAt(s++)),u=l.indexOf(t.charAt(s++)),e=(63&i)<<2|o>>4&3,n=(15&o)<<4|a>>2&15,r=(3&a)<<6|63&u,f+=String.fromCharCode(e)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(s<t.length);return f}var r="function"==typeof t.atob?t.atob:n;e.exports={atob:r,_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],29:[function(t,e,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}e.exports=r},{}]},{},[21])(21)});
