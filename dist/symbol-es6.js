!function(t,e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e(t):e(t)}("undefined"!=typeof window?window:global,function(t){"use strict";var e=Object.defineProperty,r=Object.defineProperties,n=0,o=[],i=Array.prototype.slice,a="object"==typeof t.ES6?t.ES6:t.ES6={},u=Array.isArray,l=Object.prototype.toString,f=Array.prototype.push,c=function(){},s=function(t){return t},p=function(t){return"function"==typeof t},h=function(t){return p(t)},y=function(){},g=function(t,e){this._array=t,this._flag=e,this._nextIndex=0},b=function(t,e){this._string=t,this._flag=e,this._nextIndex=0},d=function(t){return null!==t&&("object"==typeof t||"function"==typeof t)},v=function(t){return"function"==typeof this&&t instanceof this},w=function(t,e){if(!d(e))throw new TypeError("Right-hand side of 'instanceof' is not an object");var r=e[k.hasInstance];if(void 0===r)return t instanceof e;if("function"!=typeof r)throw new TypeError(typeof r+" is not a function");return r.call(e,t)},_=function(t){return"@@_____"+t+"_____"},S=function(){return n++},x=function(t,e){return r(t,{_description:{value:e},_isSymbol:{value:!0},_id:{value:S()}}),t},m=function(t){return!0===t._isSymbol&&"number"==typeof t._id&&"string"==typeof t._description},T=function(t){return t instanceof k&&m(t)},E=function(t){t=String(t);for(var e,r=o.length,n=0;n<r;++n)if((e=o[n]).key===t)return e.symbol;return e={key:t,symbol:k(t)},o.push(e),e.symbol},I=function(t,e){if("number"==typeof t.length&&t.length>=0&&"number"==typeof e.length&&e.length>=0){var r=Math.floor(t.length),n=Math.floor(e.length),o=0;for(t.length=r+n;o<n;++o)e.hasOwnProperty(o)&&(t[r+o]=e[o])}},j=function(){return void 0===this||null===this?l.call(this):"string"==typeof this[k.toStringTag]?"[object "+this[k.toStringTag]+"]":l.call(this)},O=function(){if(void 0===this||null===this)throw new TypeError("Array.prototype.concat called on null or undefined");var t=Object(this),e=i.call(arguments),r=[];return e.unshift(t),e.forEach(function(t){d(t)?void 0!==t[k.isConcatSpreadable]?t[k.isConcatSpreadable]?I(r,t):r.push(t):u(t)?I(r,t):r.push(t):r.push(t)}),r},A=function(t,e,r){if(e="function"!=typeof e?c:e,"function"!=typeof t[k.iterator])throw new TypeError("Iterable[Symbol.iterator] is not a function");var n,o=t[k.iterator]();if("function"!=typeof o.next)throw new TypeError(".iterator.next is not a function");for(;;){if(n=o.next(),!d(n))throw new TypeError("Iterator result "+n+" is not an object");if(n.done)break;e.call(r,n.value)}},C=function(t,e){if("function"!=typeof t||"function"!=typeof e)throw new TypeError("Child and Parent must be function type");t.prototype=Object.create(e.prototype),t.prototype.constructor=t},k=function t(e){if(e=void 0===e?"":String(e),this instanceof t)throw new TypeError("Symbol is not a constructor");return x(Object.create(t.prototype),e)};r(k,{for:{value:E,writable:!0,configurable:!0},keyFor:{value:function(t){if(!a.isSymbol(t))throw new TypeError(String(t)+" is not a symbol");for(var e,r=o.length,n=0;n<r;++n)if((e=o[n]).symbol===t)return e.key},writable:!0,configurable:!0},hasInstance:{value:k("Symbol.hasInstance")},isConcatSpreadable:{value:k("Symbol.isConcatSpreadable")},iterator:{value:k("Symbol.iterator")},toStringTag:{value:k("Symbol.toStringTag")}}),k.prototype.toString=function(){return _(this._id)},k.prototype.valueOf=function(){return this},e(y.prototype,k.iterator.toString(),{value:function(){return this},writable:!0,configurable:!0}),C(g,y),C(b,y),e(g.prototype,k.toStringTag.toString(),{value:"Array Iterator",configurable:!0}),e(b.prototype,k.toStringTag.toString(),{value:"String Iterator",configurable:!0}),g.prototype.next=function(){if(!(this instanceof g))throw new TypeError("Method Array Iterator.prototype.next called on incompatible receiver "+String(this));var t,e=this;return-1===e._nextIndex?{done:!0,value:void 0}:"number"==typeof e._array.length&&e._array.length>=0&&e._nextIndex<Math.floor(e._array.length)?(1===e._flag?t=[e._nextIndex,e._array[e._nextIndex]]:2===e._flag?t=e._array[e._nextIndex]:3===e._flag&&(t=e._nextIndex),e._nextIndex++,{done:!1,value:t}):(e._nextIndex=-1,{done:!0,value:void 0})},b.prototype.next=function(){if(!(this instanceof b))throw new TypeError("Method String Iterator.prototype.next called on incompatible receiver "+String(this));var t,e=this,r=new String(this._string);return-1===e._nextIndex?{done:!0,value:void 0}:e._nextIndex<r.length?(t=r[e._nextIndex],e._nextIndex++,{done:!1,value:t}):(e._nextIndex=-1,{done:!0,value:void 0})};var M=function(){if(void 0===this||null===this)throw new TypeError("Cannot convert undefined or null to object");var t=Object(this);return new g(t,2)},P=function(){if(void 0===this||null===this)throw new TypeError("String.prototype[Symbol.iterator] called on null or undefined");return new b(String(this),0)},F=function(){if(void 0===this||null===this)throw new TypeError("Cannot convert undefined or null to object");var t=Object(this);return new g(t,1)},R=function(){if(void 0===this||null===this)throw new TypeError("Cannot convert undefined or null to object");var t=Object(this);return new g(t,3)},q=function(t,e){this._target=t,this._values=[],this._thisArg=e};q.prototype.spread=function(){var t=this;return i.call(arguments).forEach(function(e){a.forOf(e,function(e){t._values.push(e)})}),t},q.prototype.add=function(){var t=this;return i.call(arguments).forEach(function(e){t._values.push(e)}),t},q.prototype.call=function(t){if("function"!=typeof this._target)throw new TypeError("Target is not a function");return t=arguments.length<=0?this._thisArg:t,this._target.apply(t,this._values)},q.prototype.new=function(){if("function"!=typeof this._target)throw new TypeError("Target is not a constructor");var t,e;return t=Object.create(this._target.prototype),e=this._target.apply(t,this._values),d(e)?e:t},q.prototype.array=function(){if(!u(this._target))throw new TypeError("Target is not a array");return f.apply(this._target,this._values),this._target};var z=function(t,e,r){var n,o,i,u=0;if(n=h(this)?this:Array,void 0===t||null===t)throw new TypeError("Cannot convert undefined or null to object");if(t=Object(t),void 0===e)e=s;else if(!p(e))throw new TypeError(e+" is not a function");if(void 0===t[k.iterator]){if(!("number"==typeof t.length&&t.length>=0))return i=new n(0),i.length=0,i;for(o=Math.floor(t.length),(i=new n(o)).length=o;u<o;++u)i[u]=e.call(r,t[u])}else(i=new n).length=0,a.forOf(t,function(t){i[++i.length-1]=e.call(r,t)});return i};return r(a,{isSymbol:{value:T,writable:!0,configurable:!0},instanceOf:{value:w,writable:!0,configurable:!0},forOf:{value:A,writable:!0,configurable:!0},spreadOperator:{value:function(t,e){if("function"!=typeof t&&!u(t))throw new TypeError("Spread operator only supports on array and function objects at this moment");return new q(t,e)},writable:!0,configurable:!0}}),e(t,"Symbol",{value:k,writable:!0,configurable:!0}),e(Function.prototype,k.hasInstance.toString(),{value:v}),e(Array.prototype,"concat",{value:O,writable:!0,configurable:!0}),e(Object.prototype,"toString",{value:j,writable:!0,configurable:!0}),e(Array.prototype,k.iterator.toString(),{value:M,writable:!0,configurable:!0}),e(Array,"from",{value:z,writable:!0,configurable:!0}),e(Array.prototype,"entries",{value:F,writable:!0,configurable:!0}),e(Array.prototype,"keys",{value:R,writable:!0,configurable:!0}),e(String.prototype,k.iterator.toString(),{value:P,writable:!0,configurable:!0}),a});