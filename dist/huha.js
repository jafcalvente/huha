!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Huha=t()}}(function(){return function i(s,a,c){function u(e,t){if(!a[e]){if(!s[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(f)return f(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var o=a[e]={exports:{}};s[e][0].call(o.exports,function(t){return u(s[e][1][t]||t)},o,o.exports,i,s,a,c)}return a[e].exports}for(var f="function"==typeof require&&require,t=0;t<c.length;t++)u(c[t]);return u}({1:[function(t,e,n){e.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},{}],2:[function(t,e,n){var r=t("./_wks")("unscopables"),o=Array.prototype;null==o[r]&&t("./_hide")(o,r,{}),e.exports=function(t){o[r][t]=!0}},{"./_hide":20,"./_wks":54}],3:[function(t,e,n){var r=t("./_is-object");e.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},{"./_is-object":25}],4:[function(t,e,n){var c=t("./_to-iobject"),u=t("./_to-length"),f=t("./_to-absolute-index");e.exports=function(a){return function(t,e,n){var r,o=c(t),i=u(o.length),s=f(n,i);if(a&&e!=e){for(;s<i;)if((r=o[s++])!=r)return!0}else for(;s<i;s++)if((a||s in o)&&o[s]===e)return a||s||0;return!a&&-1}}},{"./_to-absolute-index":47,"./_to-iobject":49,"./_to-length":50}],5:[function(t,e,n){var b=t("./_ctx"),m=t("./_iobject"),k=t("./_to-object"),j=t("./_to-length"),r=t("./_array-species-create");e.exports=function(l,t){var p=1==l,_=2==l,d=3==l,h=4==l,y=6==l,v=5==l||y,g=t||r;return function(t,e,n){for(var r,o,i=k(t),s=m(i),a=b(e,n,3),c=j(s.length),u=0,f=p?g(t,c):_?g(t,0):void 0;u<c;u++)if((v||u in s)&&(o=a(r=s[u],u,i),l))if(p)f[u]=o;else if(o)switch(l){case 3:return!0;case 5:return r;case 6:return u;case 2:f.push(r)}else if(h)return!1;return y?-1:d||h?h:f}}},{"./_array-species-create":7,"./_ctx":10,"./_iobject":23,"./_to-length":50,"./_to-object":51}],6:[function(t,e,n){var r=t("./_is-object"),o=t("./_is-array"),i=t("./_wks")("species");e.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},{"./_is-array":24,"./_is-object":25,"./_wks":54}],7:[function(t,e,n){var r=t("./_array-species-constructor");e.exports=function(t,e){return new(r(t))(e)}},{"./_array-species-constructor":6}],8:[function(t,e,n){var r={}.toString;e.exports=function(t){return r.call(t).slice(8,-1)}},{}],9:[function(t,e,n){var r=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=r)},{}],10:[function(t,e,n){var i=t("./_a-function");e.exports=function(r,o,t){if(i(r),void 0===o)return r;switch(t){case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}},{"./_a-function":1}],11:[function(t,e,n){e.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},{}],12:[function(t,e,n){e.exports=!t("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":16}],13:[function(t,e,n){var r=t("./_is-object"),o=t("./_global").document,i=r(o)&&r(o.createElement);e.exports=function(t){return i?o.createElement(t):{}}},{"./_global":18,"./_is-object":25}],14:[function(t,e,n){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],15:[function(t,e,n){var h=t("./_global"),y=t("./_core"),v=t("./_hide"),g=t("./_redefine"),b=t("./_ctx"),m="prototype",k=function(t,e,n){var r,o,i,s,a=t&k.F,c=t&k.G,u=t&k.S,f=t&k.P,l=t&k.B,p=c?h:u?h[e]||(h[e]={}):(h[e]||{})[m],_=c?y:y[e]||(y[e]={}),d=_[m]||(_[m]={});for(r in c&&(n=e),n)i=((o=!a&&p&&void 0!==p[r])?p:n)[r],s=l&&o?b(i,h):f&&"function"==typeof i?b(Function.call,i):i,p&&g(p,r,i,t&k.U),_[r]!=i&&v(_,r,s),f&&d[r]!=i&&(d[r]=i)};h.core=y,k.F=1,k.G=2,k.S=4,k.P=8,k.B=16,k.W=32,k.U=64,k.R=128,e.exports=k},{"./_core":9,"./_ctx":10,"./_global":18,"./_hide":20,"./_redefine":42}],16:[function(t,e,n){e.exports=function(t){try{return!!t()}catch(t){return!0}}},{}],17:[function(t,e,n){e.exports=t("./_shared")("native-function-to-string",Function.toString)},{"./_shared":46}],18:[function(t,e,n){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},{}],19:[function(t,e,n){var r={}.hasOwnProperty;e.exports=function(t,e){return r.call(t,e)}},{}],20:[function(t,e,n){var r=t("./_object-dp"),o=t("./_property-desc");e.exports=t("./_descriptors")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},{"./_descriptors":12,"./_object-dp":33,"./_property-desc":41}],21:[function(t,e,n){var r=t("./_global").document;e.exports=r&&r.documentElement},{"./_global":18}],22:[function(t,e,n){e.exports=!t("./_descriptors")&&!t("./_fails")(function(){return 7!=Object.defineProperty(t("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":12,"./_dom-create":13,"./_fails":16}],23:[function(t,e,n){var r=t("./_cof");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},{"./_cof":8}],24:[function(t,e,n){var r=t("./_cof");e.exports=Array.isArray||function(t){return"Array"==r(t)}},{"./_cof":8}],25:[function(t,e,n){e.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},{}],26:[function(t,e,n){"use strict";var r=t("./_object-create"),o=t("./_property-desc"),i=t("./_set-to-string-tag"),s={};t("./_hide")(s,t("./_wks")("iterator"),function(){return this}),e.exports=function(t,e,n){t.prototype=r(s,{next:o(1,n)}),i(t,e+" Iterator")}},{"./_hide":20,"./_object-create":32,"./_property-desc":41,"./_set-to-string-tag":44,"./_wks":54}],27:[function(t,e,n){"use strict";var b=t("./_library"),m=t("./_export"),k=t("./_redefine"),j=t("./_hide"),x=t("./_iterators"),O=t("./_iter-create"),S=t("./_set-to-string-tag"),w=t("./_object-gpo"),T=t("./_wks")("iterator"),E=!([].keys&&"next"in[].keys()),I="values",A=function(){return this};e.exports=function(t,e,n,r,o,i,s){O(n,e,r);var a,c,u,f=function(t){if(!E&&t in d)return d[t];switch(t){case"keys":case I:return function(){return new n(this,t)}}return function(){return new n(this,t)}},l=e+" Iterator",p=o==I,_=!1,d=t.prototype,h=d[T]||d["@@iterator"]||o&&d[o],y=h||f(o),v=o?p?f("entries"):y:void 0,g="Array"==e&&d.entries||h;if(g&&(u=w(g.call(new t)))!==Object.prototype&&u.next&&(S(u,l,!0),b||"function"==typeof u[T]||j(u,T,A)),p&&h&&h.name!==I&&(_=!0,y=function(){return h.call(this)}),b&&!s||!E&&!_&&d[T]||j(d,T,y),x[e]=y,x[l]=A,o)if(a={values:p?y:f(I),keys:i?y:f("keys"),entries:v},s)for(c in a)c in d||k(d,c,a[c]);else m(m.P+m.F*(E||_),e,a);return a}},{"./_export":15,"./_hide":20,"./_iter-create":26,"./_iterators":29,"./_library":30,"./_object-gpo":37,"./_redefine":42,"./_set-to-string-tag":44,"./_wks":54}],28:[function(t,e,n){e.exports=function(t,e){return{value:e,done:!!t}}},{}],29:[function(t,e,n){e.exports={}},{}],30:[function(t,e,n){e.exports=!1},{}],31:[function(t,e,n){"use strict";var p=t("./_object-keys"),_=t("./_object-gops"),d=t("./_object-pie"),h=t("./_to-object"),y=t("./_iobject"),o=Object.assign;e.exports=!o||t("./_fails")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=o({},t)[n]||Object.keys(o({},e)).join("")!=r})?function(t,e){for(var n=h(t),r=arguments.length,o=1,i=_.f,s=d.f;o<r;)for(var a,c=y(arguments[o++]),u=i?p(c).concat(i(c)):p(c),f=u.length,l=0;l<f;)s.call(c,a=u[l++])&&(n[a]=c[a]);return n}:o},{"./_fails":16,"./_iobject":23,"./_object-gops":36,"./_object-keys":39,"./_object-pie":40,"./_to-object":51}],32:[function(r,t,e){var o=r("./_an-object"),i=r("./_object-dps"),s=r("./_enum-bug-keys"),a=r("./_shared-key")("IE_PROTO"),c=function(){},u="prototype",f=function(){var t,e=r("./_dom-create")("iframe"),n=s.length;for(e.style.display="none",r("./_html").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;n--;)delete f[u][s[n]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[u]=o(t),n=new c,c[u]=null,n[a]=t):n=f(),void 0===e?n:i(n,e)}},{"./_an-object":3,"./_dom-create":13,"./_enum-bug-keys":14,"./_html":21,"./_object-dps":34,"./_shared-key":45}],33:[function(t,e,n){var r=t("./_an-object"),o=t("./_ie8-dom-define"),i=t("./_to-primitive"),s=Object.defineProperty;n.f=t("./_descriptors")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},{"./_an-object":3,"./_descriptors":12,"./_ie8-dom-define":22,"./_to-primitive":52}],34:[function(t,e,n){var s=t("./_object-dp"),a=t("./_an-object"),c=t("./_object-keys");e.exports=t("./_descriptors")?Object.defineProperties:function(t,e){a(t);for(var n,r=c(e),o=r.length,i=0;i<o;)s.f(t,n=r[i++],e[n]);return t}},{"./_an-object":3,"./_descriptors":12,"./_object-dp":33,"./_object-keys":39}],35:[function(t,e,n){var r=t("./_object-pie"),o=t("./_property-desc"),i=t("./_to-iobject"),s=t("./_to-primitive"),a=t("./_has"),c=t("./_ie8-dom-define"),u=Object.getOwnPropertyDescriptor;n.f=t("./_descriptors")?u:function(t,e){if(t=i(t),e=s(e,!0),c)try{return u(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},{"./_descriptors":12,"./_has":19,"./_ie8-dom-define":22,"./_object-pie":40,"./_property-desc":41,"./_to-iobject":49,"./_to-primitive":52}],36:[function(t,e,n){n.f=Object.getOwnPropertySymbols},{}],37:[function(t,e,n){var r=t("./_has"),o=t("./_to-object"),i=t("./_shared-key")("IE_PROTO"),s=Object.prototype;e.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},{"./_has":19,"./_shared-key":45,"./_to-object":51}],38:[function(t,e,n){var s=t("./_has"),a=t("./_to-iobject"),c=t("./_array-includes")(!1),u=t("./_shared-key")("IE_PROTO");e.exports=function(t,e){var n,r=a(t),o=0,i=[];for(n in r)n!=u&&s(r,n)&&i.push(n);for(;e.length>o;)s(r,n=e[o++])&&(~c(i,n)||i.push(n));return i}},{"./_array-includes":4,"./_has":19,"./_shared-key":45,"./_to-iobject":49}],39:[function(t,e,n){var r=t("./_object-keys-internal"),o=t("./_enum-bug-keys");e.exports=Object.keys||function(t){return r(t,o)}},{"./_enum-bug-keys":14,"./_object-keys-internal":38}],40:[function(t,e,n){n.f={}.propertyIsEnumerable},{}],41:[function(t,e,n){e.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},{}],42:[function(t,e,n){var i=t("./_global"),s=t("./_hide"),a=t("./_has"),c=t("./_uid")("src"),r=t("./_function-to-string"),o="toString",u=(""+r).split(o);t("./_core").inspectSource=function(t){return r.call(t)},(e.exports=function(t,e,n,r){var o="function"==typeof n;o&&(a(n,"name")||s(n,"name",e)),t[e]!==n&&(o&&(a(n,c)||s(n,c,t[e]?""+t[e]:u.join(String(e)))),t===i?t[e]=n:r?t[e]?t[e]=n:s(t,e,n):(delete t[e],s(t,e,n)))})(Function.prototype,o,function(){return"function"==typeof this&&this[c]||r.call(this)})},{"./_core":9,"./_function-to-string":17,"./_global":18,"./_has":19,"./_hide":20,"./_uid":53}],43:[function(e,t,n){var r=e("./_is-object"),o=e("./_an-object"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e("./_ctx")(Function.call,e("./_object-gopd").f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},{"./_an-object":3,"./_ctx":10,"./_is-object":25,"./_object-gopd":35}],44:[function(t,e,n){var r=t("./_object-dp").f,o=t("./_has"),i=t("./_wks")("toStringTag");e.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},{"./_has":19,"./_object-dp":33,"./_wks":54}],45:[function(t,e,n){var r=t("./_shared")("keys"),o=t("./_uid");e.exports=function(t){return r[t]||(r[t]=o(t))}},{"./_shared":46,"./_uid":53}],46:[function(t,e,n){var r=t("./_core"),o=t("./_global"),i="__core-js_shared__",s=o[i]||(o[i]={});(e.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:t("./_library")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},{"./_core":9,"./_global":18,"./_library":30}],47:[function(t,e,n){var r=t("./_to-integer"),o=Math.max,i=Math.min;e.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},{"./_to-integer":48}],48:[function(t,e,n){var r=Math.ceil,o=Math.floor;e.exports=function(t){return isNaN(t=+t)?0:(0<t?o:r)(t)}},{}],49:[function(t,e,n){var r=t("./_iobject"),o=t("./_defined");e.exports=function(t){return r(o(t))}},{"./_defined":11,"./_iobject":23}],50:[function(t,e,n){var r=t("./_to-integer"),o=Math.min;e.exports=function(t){return 0<t?o(r(t),9007199254740991):0}},{"./_to-integer":48}],51:[function(t,e,n){var r=t("./_defined");e.exports=function(t){return Object(r(t))}},{"./_defined":11}],52:[function(t,e,n){var o=t("./_is-object");e.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":25}],53:[function(t,e,n){var r=0,o=Math.random();e.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+o).toString(36))}},{}],54:[function(t,e,n){var r=t("./_shared")("wks"),o=t("./_uid"),i=t("./_global").Symbol,s="function"==typeof i;(e.exports=function(t){return r[t]||(r[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=r},{"./_global":18,"./_shared":46,"./_uid":53}],55:[function(t,e,n){"use strict";var r=t("./_export"),o=t("./_array-methods")(5),i="find",s=!0;i in[]&&Array(1)[i](function(){s=!1}),r(r.P+r.F*s,"Array",{find:function(t){return o(this,t,1<arguments.length?arguments[1]:void 0)}}),t("./_add-to-unscopables")(i)},{"./_add-to-unscopables":2,"./_array-methods":5,"./_export":15}],56:[function(t,e,n){"use strict";var r=t("./_add-to-unscopables"),o=t("./_iter-step"),i=t("./_iterators"),s=t("./_to-iobject");e.exports=t("./_iter-define")(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},{"./_add-to-unscopables":2,"./_iter-define":27,"./_iter-step":28,"./_iterators":29,"./_to-iobject":49}],57:[function(t,e,n){var r=t("./_object-dp").f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||t("./_descriptors")&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},{"./_descriptors":12,"./_object-dp":33}],58:[function(t,e,n){var r=t("./_export");r(r.S+r.F,"Object",{assign:t("./_object-assign")})},{"./_export":15,"./_object-assign":31}],59:[function(t,e,n){var r=t("./_export");r(r.S,"Object",{setPrototypeOf:t("./_set-proto").set})},{"./_export":15,"./_set-proto":43}],60:[function(t,e,n){for(var r=t("./es6.array.iterator"),o=t("./_object-keys"),i=t("./_redefine"),s=t("./_global"),a=t("./_hide"),c=t("./_iterators"),u=t("./_wks"),f=u("iterator"),l=u("toStringTag"),p=c.Array,_={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(_),h=0;h<d.length;h++){var y,v=d[h],g=_[v],b=s[v],m=b&&b.prototype;if(m&&(m[f]||a(m,f,p),m[l]||a(m,l,v),c[v]=p,g))for(y in r)m[y]||i(m,y,r[y],!0)}},{"./_global":18,"./_hide":20,"./_iterators":29,"./_object-keys":39,"./_redefine":42,"./_wks":54,"./es6.array.iterator":56}],61:[function(t,e,n){for(var o=[],r=0;r<256;++r)o[r]=(r+256).toString(16).substr(1);e.exports=function(t,e){var n=e||0,r=o;return[r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]]].join("")}},{}],62:[function(t,e,n){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var o=new Uint8Array(16);e.exports=function(){return r(o),o}}else{var i=new Array(16);e.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),i[e]=t>>>((3&e)<<3)&255;return i}}},{}],63:[function(t,e,n){var d,h,y=t("./lib/rng"),v=t("./lib/bytesToUuid"),g=0,b=0;e.exports=function(t,e,n){var r=e&&n||0,o=e||[],i=(t=t||{}).node||d,s=void 0!==t.clockseq?t.clockseq:h;if(null==i||null==s){var a=y();null==i&&(i=d=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==s&&(s=h=16383&(a[6]<<8|a[7]))}var c=void 0!==t.msecs?t.msecs:(new Date).getTime(),u=void 0!==t.nsecs?t.nsecs:b+1,f=c-g+(u-b)/1e4;if(f<0&&void 0===t.clockseq&&(s=s+1&16383),(f<0||g<c)&&void 0===t.nsecs&&(u=0),1e4<=u)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");g=c,h=s;var l=(1e4*(268435455&(c+=122192928e5))+(b=u))%4294967296;o[r++]=l>>>24&255,o[r++]=l>>>16&255,o[r++]=l>>>8&255,o[r++]=255&l;var p=c/4294967296*1e4&268435455;o[r++]=p>>>8&255,o[r++]=255&p,o[r++]=p>>>24&15|16,o[r++]=p>>>16&255,o[r++]=s>>>8|128,o[r++]=255&s;for(var _=0;_<6;++_)o[r+_]=i[_];return e||v(o)}},{"./lib/bytesToUuid":61,"./lib/rng":62}],64:[function(u,_,t){(function(t){"use strict";u("core-js/modules/web.dom.iterable"),u("core-js/modules/es6.object.set-prototype-of"),u("core-js/modules/es6.array.find"),u("core-js/modules/es6.function.name"),u("core-js/modules/es6.object.assign");var e,f=(e=u("uuid/v1"))&&e.__esModule?e:{default:e};function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var i=t.document,s="In progress",p={trackOnGoogleAnalytics:!1,trackOnIntercom:!1,trackOnSegment:!0},a=function(){function r(t,e){l(this,r);var n=Object.assign(p,e);this.name=t.name,this.category=t.category||"",this.value=t.value,this.status=s,this.effort=0,this.errors=0,this.start=(new Date).getTime(),this.end=null,this.parentExecId=null,this.trackOnGoogleAnalytics=n.trackOnGoogleAnalytics,this.trackOnIntercom=n.trackOnIntercom,this.trackOnSegment=n.trackOnSegment,t.parentTask&&(this.parentTask=t.parentTask,this.parentExecId=t.parentTask.execId),this.execId=t.execId||(0,f.default)(),this.persistent=t.persistent||!1}return o(r,[{key:"addInteraction",value:function(){this.effort+=1,this.parentTask&&(this.parentTask.addInteraction(),this.updateFromLocalStorage())}},{key:"addError",value:function(){this.errors+=1,this.parentTask&&(this.parentTask.addError(),this.updateFromLocalStorage())}},{key:"finish",value:function(t){this.status===s&&(this.end=(new Date).getTime(),this.status=t,this.track(),this.removeFromLocalStorage())}},{key:"complete",value:function(){this.finish("Completed")}},{key:"abandon",value:function(){this.finish("Abandoned")}},{key:"track",value:function(){this.trackOnGoogleAnalytics&&this.sendToGoogleAnalytics(),this.trackOnIntercom&&this.sendToIntercom(),this.trackOnSegment&&this.sendToSegment()}},{key:"sendToGoogleAnalytics",value:function(){"undefined"!=typeof gtag?(gtag("event","timing_complete",{event_category:this.name,event_label:"Time on task",value:this.time,name:this.status}),gtag("event",this.status,{event_category:this.name,event_label:"Error",value:this.errors}),gtag("event",this.status,{event_category:this.name,event_label:"Effort",value:this.effort})):"undefined"!=typeof ga&&(ga("send","timing",this.name,this.status,this.time,"Time on task"),ga("send","event",this.name,this.status,"Error",this.errors),ga("send","event",this.name,this.status,"Effort",this.effort))}},{key:"sendToIntercom",value:function(){"undefined"!=typeof Intercom&&Intercom("trackEvent",this.name,{errors:this.errors,effort:this.effort,time:this.time,status:this.status,execId:this.execId,persistent:this.persistent,parentExecId:this.parentExecId,category:this.section,value:this.value||this.time})}},{key:"sendToSegment",value:function(){"undefined"!=typeof analytics&&analytics.track(this.name,{name:this.name,category:this.section,value:this.value||this.time,action:this.status,label:"Task",errors:this.errors,effort:this.effort,time:this.time,result:this.status,started:this.start,execId:this.execId,persistent:this.persistent,parentExecId:this.parentExecId})}},{key:"updateFromLocalStorage",value:function(){this.parentTask.persistent&&localStorage.setItem(this.parentTask.name,JSON.stringify(this.parentTask))}},{key:"removeFromLocalStorage",value:function(){this.persistent&&localStorage.removeItem(this.name)}},{key:"time",get:function(){var t=0;return this.end&&(t=this.end-this.start),t}}]),r}(),c=function(){function u(t,e,n,r,o,i,s,a){l(this,u);var c=Object.assign(p,a||{});this.name=t,this.object=e,this.action=n,this.section=r,this.value=o,this.task=i,s?this.eventGroup=s:this.task&&this.task.execId?this.eventGroup=this.task.execId:this.eventGroup=(0,f.default)(),this.trackOnGoogleAnalytics=c.trackOnGoogleAnalytics,this.trackOnSegment=c.trackOnSegment}return o(u,[{key:"track",value:function(){this.trackOnGoogleAnalytics&&this.sendToGoogleAnalytics(),this.trackOnSegment&&this.sendToSegment()}},{key:"sendToGoogleAnalytics",value:function(){"undefined"!=typeof gtag?gtag("event",this.action,{event_category:this.section,event_label:this.object,value:this.value}):"undefined"!=typeof ga&&ga("send","event",this.section,this.action,this.object,this.value)}},{key:"sendToSegment",value:function(){"undefined"!=typeof analytics&&analytics.track(this.name,{category:this.section,label:this.object,action:this.action,value:this.value,eventGroup:this.eventGroup})}}]),u}(),n=function(){function n(t){l(this,n),this.tasks=[],this.events=[];var e=Object.assign(p,t||{});this.trackOnGoogleAnalytics=e.trackOnGoogleAnalytics,this.trackOnIntercom=e.trackOnIntercom,this.trackOnSegment=e.trackOnSegment,this.setUpEvents()}return o(n,[{key:"createTask",value:function(t){var e=this.getTask(t.name);void 0===e||e.persistent||e.abandon();var n=null;return e&&e.persistent?n=e:(n=new a(t,{trackOnGoogleAnalytics:this.trackOnGoogleAnalytics,trackOnIntercom:this.trackOnIntercom,trackOnSegment:this.trackOnSegment}),t.persistent&&localStorage.setItem(n.name,JSON.stringify(n))),this.tasks.push(n),n}},{key:"createEvent",value:function(t,e,n,r,o,i,s){var a=new c(t,e,n,r,o,i,s,{trackOnGoogleAnalytics:this.trackOnGoogleAnalytics,trackOnSegment:this.trackOnSegment});return a.track(),this.events.push(a),a}},{key:"getTask",value:function(e){var t=this.tasks.find(function(t){return t.name===e&&t.status===s});if(!t&&(t=JSON.parse(localStorage.getItem(e))||void 0)){var n=new a({name:e},{});Object.setPrototypeOf(t,Object.getPrototypeOf(n)),t.parentTask&&Object.setPrototypeOf(t.parentTask,Object.getPrototypeOf(n))}return t}},{key:"setUpEvents",value:function(){var n=this;t.addEventListener("unload",function(){n.abandonInProgressTasks()});["click","focus","change"].forEach(function(e){i.querySelector("body").addEventListener(e,function(t){"huhaTask"in t.target.dataset&&n.registerEvent(e,t.target)},!0)})}},{key:"registerEvent",value:function(t,e){var n=e.dataset,r=n.huhaTask,o=n.huhaTrigger,i=n.huhaEvent;if(t===o)if("start"===i)this.createTask({name:r});else{var s=this.getTask(r);s&&("complete"===i?s.complete():"abandon"===i?s.abandon():"interaction"===i?s.addInteraction():"error"===i&&s.addError())}}},{key:"abandonInProgressTasks",value:function(){this.tasks.filter(function(t){return t.status===s}).forEach(function(t){t.persistent||t.abandon()})}}]),n}();_.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"core-js/modules/es6.array.find":55,"core-js/modules/es6.function.name":57,"core-js/modules/es6.object.assign":58,"core-js/modules/es6.object.set-prototype-of":59,"core-js/modules/web.dom.iterable":60,"uuid/v1":63}]},{},[64])(64)});
//# sourceMappingURL=huha.js.map
