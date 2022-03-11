/*! For license information please see subscribers-import.js.LICENSE.txt */
(()=>{var t={7460:function(t,e){var r,n;r=function t(){"use strict";var e="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{},r=!e.document&&!!e.postMessage,n=r&&/blob:/i.test((e.location||{}).protocol),i={},o=0,s={parse:function(r,n){var a=(n=n||{}).dynamicTyping||!1;if(b(a)&&(n.dynamicTypingFunction=a,a={}),n.dynamicTyping=a,n.transform=!!b(n.transform)&&n.transform,n.worker&&s.WORKERS_SUPPORTED){var u=function(){if(!s.WORKERS_SUPPORTED)return!1;var r,n,a=(r=e.URL||e.webkitURL||null,n=t.toString(),s.BLOB_URL||(s.BLOB_URL=r.createObjectURL(new Blob(["(",n,")();"],{type:"text/javascript"})))),u=new e.Worker(a);return u.onmessage=g,u.id=o++,i[u.id]=u}();return u.userStep=n.step,u.userChunk=n.chunk,u.userComplete=n.complete,u.userError=n.error,n.step=b(n.step),n.chunk=b(n.chunk),n.complete=b(n.complete),n.error=b(n.error),delete n.worker,void u.postMessage({input:r,config:n,workerId:u.id})}var d=null;return s.NODE_STREAM_INPUT,"string"==typeof r?d=n.download?new h(n):new l(n):!0===r.readable&&b(r.read)&&b(r.on)?d=new f(n):(e.File&&r instanceof File||r instanceof Object)&&(d=new c(n)),d.stream(r)},unparse:function(t,e){var r=!1,n=!0,i=",",o="\r\n",a='"',u=a+a,h=!1,c=null,l=!1;!function(){if("object"==typeof e){if("string"!=typeof e.delimiter||s.BAD_DELIMITERS.filter((function(t){return-1!==e.delimiter.indexOf(t)})).length||(i=e.delimiter),("boolean"==typeof e.quotes||"function"==typeof e.quotes||Array.isArray(e.quotes))&&(r=e.quotes),"boolean"!=typeof e.skipEmptyLines&&"string"!=typeof e.skipEmptyLines||(h=e.skipEmptyLines),"string"==typeof e.newline&&(o=e.newline),"string"==typeof e.quoteChar&&(a=e.quoteChar),"boolean"==typeof e.header&&(n=e.header),Array.isArray(e.columns)){if(0===e.columns.length)throw new Error("Option columns is empty");c=e.columns}void 0!==e.escapeChar&&(u=e.escapeChar+a),"boolean"==typeof e.escapeFormulae&&(l=e.escapeFormulae)}}();var f=new RegExp(p(a),"g");if("string"==typeof t&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return d(null,t,h);if("object"==typeof t[0])return d(c||Object.keys(t[0]),t,h)}else if("object"==typeof t)return"string"==typeof t.data&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:"object"==typeof t.data[0]?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||"object"==typeof t.data[0]||(t.data=[t.data])),d(t.fields||[],t.data||[],h);throw new Error("Unable to serialize unrecognized input");function d(t,e,r){var s="";"string"==typeof t&&(t=JSON.parse(t)),"string"==typeof e&&(e=JSON.parse(e));var a=Array.isArray(t)&&0<t.length,u=!Array.isArray(e[0]);if(a&&n){for(var h=0;h<t.length;h++)0<h&&(s+=i),s+=m(t[h],h);0<e.length&&(s+=o)}for(var c=0;c<e.length;c++){var l=a?t.length:e[c].length,f=!1,d=a?0===Object.keys(e[c]).length:0===e[c].length;if(r&&!a&&(f="greedy"===r?""===e[c].join("").trim():1===e[c].length&&0===e[c][0].length),"greedy"===r&&a){for(var p=[],g=0;g<l;g++){var _=u?t[g]:g;p.push(e[c][_])}f=""===p.join("").trim()}if(!f){for(var y=0;y<l;y++){0<y&&!d&&(s+=i);var v=a&&u?t[y]:y;s+=m(e[c][v],y)}c<e.length-1&&(!r||0<l&&!d)&&(s+=o)}}return s}function m(t,e){if(null==t)return"";if(t.constructor===Date)return JSON.stringify(t).slice(1,25);!0===l&&"string"==typeof t&&null!==t.match(/^[=+\-@].*$/)&&(t="'"+t);var n=t.toString().replace(f,u),o="boolean"==typeof r&&r||"function"==typeof r&&r(t,e)||Array.isArray(r)&&r[e]||function(t,e){for(var r=0;r<e.length;r++)if(-1<t.indexOf(e[r]))return!0;return!1}(n,s.BAD_DELIMITERS)||-1<n.indexOf(i)||" "===n.charAt(0)||" "===n.charAt(n.length-1);return o?a+n+a:n}}};if(s.RECORD_SEP=String.fromCharCode(30),s.UNIT_SEP=String.fromCharCode(31),s.BYTE_ORDER_MARK="\ufeff",s.BAD_DELIMITERS=["\r","\n",'"',s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!e.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=",",s.Parser=m,s.ParserHandle=d,s.NetworkStreamer=h,s.FileStreamer=c,s.StringStreamer=l,s.ReadableStreamStreamer=f,e.jQuery){var a=e.jQuery;a.fn.parse=function(t){var r=t.config||{},n=[];return this.each((function(t){if("INPUT"!==a(this).prop("tagName").toUpperCase()||"file"!==a(this).attr("type").toLowerCase()||!e.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},r)})})),i(),this;function i(){if(0!==n.length){var e,r,i,u=n[0];if(b(t.before)){var h=t.before(u.file,u.inputElem);if("object"==typeof h){if("abort"===h.action)return"AbortError",e=u.file,r=u.inputElem,i=h.reason,void(b(t.error)&&t.error({name:"AbortError"},e,r,i));if("skip"===h.action)return void o();"object"==typeof h.config&&(u.instanceConfig=a.extend(u.instanceConfig,h.config))}else if("skip"===h)return void o()}var c=u.instanceConfig.complete;u.instanceConfig.complete=function(t){b(c)&&c(t,u.file,u.inputElem),o()},s.parse(u.file,u.instanceConfig)}else b(t.complete)&&t.complete()}function o(){n.splice(0,1),i()}}}function u(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(t){var e=v(t);e.chunkSize=parseInt(e.chunkSize),t.step||t.chunk||(e.chunkSize=null),this._handle=new d(e),(this._handle.streamer=this)._config=e}.call(this,t),this.parseChunk=function(t,r){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(t);void 0!==i&&(t=i)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+t;this._partialLine="";var a=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=a.meta.cursor;this._finished||(this._partialLine=o.substring(u-this._baseIndex),this._baseIndex=u),a&&a.data&&(this._rowCount+=a.data.length);var h=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)e.postMessage({results:a,workerId:s.WORKER_ID,finished:h});else if(b(this._config.chunk)&&!r){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!h||!b(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),h||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(t){b(this._config.error)?this._config.error(t):n&&this._config.error&&e.postMessage({workerId:s.WORKER_ID,error:t,finished:!1})}}function h(t){var e;(t=t||{}).chunkSize||(t.chunkSize=s.RemoteChunkSize),u.call(this,t),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(t){this._input=t,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),r||(e.onload=w(this._chunkLoaded,this),e.onerror=w(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var t=this._config.downloadRequestHeaders;for(var n in t)e.setRequestHeader(n,t[n])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{e.send(this._config.downloadRequestBody)}catch(t){this._chunkError(t.message)}r&&0===e.status&&this._chunkError()}},this._chunkLoaded=function(){4===e.readyState&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(t){var e=t.getResponseHeader("Content-Range");return null===e?-1:parseInt(e.substring(e.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(t){var r=e.statusText||t;this._sendError(new Error(r))}}function c(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=s.LocalChunkSize),u.call(this,t);var n="undefined"!=typeof FileReader;this.stream=function(t){this._input=t,r=t.slice||t.webkitSlice||t.mozSlice,n?((e=new FileReader).onload=w(this._chunkLoaded,this),e.onerror=w(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var t=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);t=r.call(t,this._start,i)}var o=e.readAsText(t,this._config.encoding);n||this._chunkLoaded({target:{result:o}})},this._chunkLoaded=function(t){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(t.target.result)},this._chunkError=function(){this._sendError(e.error)}}function l(t){var e;u.call(this,t=t||{}),this.stream=function(t){return e=t,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var t,r=this._config.chunkSize;return r?(t=e.substring(0,r),e=e.substring(r)):(t=e,e=""),this._finished=!e,this.parseChunk(t)}}}function f(t){u.call(this,t=t||{});var e=[],r=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(t){this._input=t,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===e.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=w((function(t){try{e.push("string"==typeof t?t:t.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(t){this._streamError(t)}}),this),this._streamError=w((function(t){this._streamCleanUp(),this._sendError(t)}),this),this._streamEnd=w((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=w((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function d(t){var e,r,n,i=Math.pow(2,53),o=-i,a=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,h=this,c=0,l=0,f=!1,d=!1,g=[],_={data:[],errors:[],meta:{}};if(b(t.step)){var y=t.step;t.step=function(e){if(_=e,E())k();else{if(k(),0===_.data.length)return;c+=e.data.length,t.preview&&c>t.preview?r.abort():(_.data=_.data[0],y(_,h))}}}function w(e){return"greedy"===t.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function k(){if(_&&n&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+s.DefaultDelimiter+"'"),n=!1),t.skipEmptyLines)for(var e=0;e<_.data.length;e++)w(_.data[e])&&_.data.splice(e--,1);return E()&&function(){if(_)if(Array.isArray(_.data[0])){for(var e=0;E()&&e<_.data.length;e++)_.data[e].forEach(r);_.data.splice(0,1)}else _.data.forEach(r);function r(e,r){b(t.transformHeader)&&(e=t.transformHeader(e,r)),g.push(e)}}(),function(){if(!_||!t.header&&!t.dynamicTyping&&!t.transform)return _;function e(e,r){var n,i=t.header?{}:[];for(n=0;n<e.length;n++){var o=n,s=e[n];t.header&&(o=n>=g.length?"__parsed_extra":g[n]),t.transform&&(s=t.transform(s,o)),s=x(o,s),"__parsed_extra"===o?(i[o]=i[o]||[],i[o].push(s)):i[o]=s}return t.header&&(n>g.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+g.length+" fields but parsed "+n,l+r):n<g.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+g.length+" fields but parsed "+n,l+r)),i}var r=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(e),r=_.data.length):_.data=e(_.data,0),t.header&&_.meta&&(_.meta.fields=g),l+=r,_}()}function E(){return t.header&&0===g.length}function x(e,r){return n=e,t.dynamicTypingFunction&&void 0===t.dynamicTyping[n]&&(t.dynamicTyping[n]=t.dynamicTypingFunction(n)),!0===(t.dynamicTyping[n]||t.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(t){if(a.test(t)){var e=parseFloat(t);if(o<e&&e<i)return!0}return!1}(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r;var n}function C(t,e,r,n){var i={type:t,code:e,message:r};void 0!==n&&(i.row=n),_.errors.push(i)}this.parse=function(i,o,a){var u=t.quoteChar||'"';if(t.newline||(t.newline=function(t,e){t=t.substring(0,1048576);var r=new RegExp(p(e)+"([^]*?)"+p(e),"gm"),n=(t=t.replace(r,"")).split("\r"),i=t.split("\n"),o=1<i.length&&i[0].length<n[0].length;if(1===n.length||o)return"\n";for(var s=0,a=0;a<n.length;a++)"\n"===n[a][0]&&s++;return s>=n.length/2?"\r\n":"\r"}(i,u)),n=!1,t.delimiter)b(t.delimiter)&&(t.delimiter=t.delimiter(i),_.meta.delimiter=t.delimiter);else{var h=function(e,r,n,i,o){var a,u,h,c;o=o||[",","\t","|",";",s.RECORD_SEP,s.UNIT_SEP];for(var l=0;l<o.length;l++){var f=o[l],d=0,p=0,g=0;h=void 0;for(var _=new m({comments:i,delimiter:f,newline:r,preview:10}).parse(e),y=0;y<_.data.length;y++)if(n&&w(_.data[y]))g++;else{var v=_.data[y].length;p+=v,void 0!==h?0<v&&(d+=Math.abs(v-h),h=v):h=v}0<_.data.length&&(p/=_.data.length-g),(void 0===u||d<=u)&&(void 0===c||c<p)&&1.99<p&&(u=d,a=f,c=p)}return{successful:!!(t.delimiter=a),bestDelimiter:a}}(i,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);h.successful?t.delimiter=h.bestDelimiter:(n=!0,t.delimiter=s.DefaultDelimiter),_.meta.delimiter=t.delimiter}var c=v(t);return t.preview&&t.header&&c.preview++,e=i,r=new m(c),_=r.parse(e,o,a),k(),f?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,r.abort(),e=b(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){h.streamer._halted?(f=!1,h.streamer.parseChunk(e,!0)):setTimeout(h.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,r.abort(),_.meta.aborted=!0,b(t.complete)&&t.complete(_),e=""}}function p(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(t){var e,r=(t=t||{}).delimiter,n=t.newline,i=t.comments,o=t.step,a=t.preview,u=t.fastMode,h=e=void 0===t.quoteChar?'"':t.quoteChar;if(void 0!==t.escapeChar&&(h=t.escapeChar),("string"!=typeof r||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<s.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var c=0,l=!1;this.parse=function(t,s,f){if("string"!=typeof t)throw new Error("Input must be a string");var d=t.length,m=r.length,g=n.length,_=i.length,y=b(o),v=[],w=[],k=[],E=c=0;if(!t)return N();if(u||!1!==u&&-1===t.indexOf(e)){for(var x=t.split(n),C=0;C<x.length;C++){if(k=x[C],c+=k.length,C!==x.length-1)c+=n.length;else if(f)return N();if(!i||k.substring(0,_)!==i){if(y){if(v=[],A(k.split(r)),z(),l)return N()}else A(k.split(r));if(a&&a<=C)return v=v.slice(0,a),N(!0)}}return N()}for(var S=t.indexOf(r,c),R=t.indexOf(n,c),O=new RegExp(p(h)+p(e),"g"),L=t.indexOf(e,c);;)if(t[c]!==e)if(i&&0===k.length&&t.substring(c,c+_)===i){if(-1===R)return N();c=R+g,R=t.indexOf(n,c),S=t.indexOf(r,c)}else if(-1!==S&&(S<R||-1===R))k.push(t.substring(c,S)),c=S+m,S=t.indexOf(r,c);else{if(-1===R)break;if(k.push(t.substring(c,R)),F(R+g),y&&(z(),l))return N();if(a&&v.length>=a)return N(!0)}else for(L=c,c++;;){if(-1===(L=t.indexOf(e,L+1)))return f||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:v.length,index:c}),j();if(L===d-1)return j(t.substring(c,L).replace(O,e));if(e!==h||t[L+1]!==h){if(e===h||0===L||t[L-1]!==h){-1!==S&&S<L+1&&(S=t.indexOf(r,L+1)),-1!==R&&R<L+1&&(R=t.indexOf(n,L+1));var T=D(-1===R?S:Math.min(S,R));if(t[L+1+T]===r){k.push(t.substring(c,L).replace(O,e)),t[c=L+1+T+m]!==e&&(L=t.indexOf(e,c)),S=t.indexOf(r,c),R=t.indexOf(n,c);break}var I=D(R);if(t.substring(L+1+I,L+1+I+g)===n){if(k.push(t.substring(c,L).replace(O,e)),F(L+1+I+g),S=t.indexOf(r,c),L=t.indexOf(e,c),y&&(z(),l))return N();if(a&&v.length>=a)return N(!0);break}w.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:v.length,index:c}),L++}}else L++}return j();function A(t){v.push(t),E=c}function D(e){var r=0;if(-1!==e){var n=t.substring(L+1,e);n&&""===n.trim()&&(r=n.length)}return r}function j(e){return f||(void 0===e&&(e=t.substring(c)),k.push(e),c=d,A(k),y&&z()),N()}function F(e){c=e,A(k),k=[],R=t.indexOf(n,c)}function N(t){return{data:v,errors:w,meta:{delimiter:r,linebreak:n,aborted:l,truncated:!!t,cursor:E+(s||0)}}}function z(){o(N()),v=[],w=[]}},this.abort=function(){l=!0},this.getCharIndex=function(){return c}}function g(t){var e=t.data,r=i[e.workerId],n=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var o={abort:function(){n=!0,_(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(b(r.userStep)){for(var s=0;s<e.results.data.length&&(r.userStep({data:e.results.data[s],errors:e.results.errors,meta:e.results.meta},o),!n);s++);delete e.results}else b(r.userChunk)&&(r.userChunk(e.results,o,e.file),delete e.results)}e.finished&&!n&&_(e.workerId,e.results)}function _(t,e){var r=i[t];b(r.userComplete)&&r.userComplete(e),r.terminate(),delete i[t]}function y(){throw new Error("Not implemented.")}function v(t){if("object"!=typeof t||null===t)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=v(t[r]);return e}function w(t,e){return function(){t.apply(e,arguments)}}function b(t){return"function"==typeof t}return n&&(e.onmessage=function(t){var r=t.data;if(void 0===s.WORKER_ID&&r&&(s.WORKER_ID=r.workerId),"string"==typeof r.input)e.postMessage({workerId:s.WORKER_ID,results:s.parse(r.input,r.config),finished:!0});else if(e.File&&r.input instanceof File||r.input instanceof Object){var n=s.parse(r.input,r.config);n&&e.postMessage({workerId:s.WORKER_ID,results:n,finished:!0})}}),(h.prototype=Object.create(u.prototype)).constructor=h,(c.prototype=Object.create(u.prototype)).constructor=c,(l.prototype=Object.create(l.prototype)).constructor=l,(f.prototype=Object.create(u.prototype)).constructor=f,s},void 0===(n=r.apply(e,[]))||(t.exports=n)},5666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),s=new O(n||[]);return o._invoke=function(t,e,r){var n=l;return function(i,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return T()}for(r.method=i,r.arg=o;;){var s=r.delegate;if(s){var a=C(s,r);if(a){if(a===m)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=c(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,s),o}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var l="suspendedStart",f="suspendedYield",d="executing",p="completed",m={};function g(){}function _(){}function y(){}var v={};u(v,o,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(L([])));b&&b!==r&&n.call(b,o)&&(v=b);var k=y.prototype=g.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(i,o,s,a){var u=c(t[i],t,o);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,s,a)}),(function(t){r("throw",t,s,a)})):e.resolve(l).then((function(t){h.value=t,s(h)}),(function(t){return r("throw",t,s,a)}))}a(u.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=c(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function L(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return s.next=s}}return{next:T}}function T(){return{value:e,done:!0}}return _.prototype=y,u(k,"constructor",y),u(y,"constructor",_),_.displayName=u(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,a,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(x.prototype),u(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var s=new x(h(e,r,n,i),o);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},E(k),u(k,a,"Generator"),u(k,o,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return a.type="throw",a.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var u=n.call(s,"catchLoc"),h=n.call(s,"finallyLoc");if(u&&h){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;R(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e;r(5666),e=jQuery,window.noptin=window.noptin||{},window.noptin.Papa=r(7460),window.noptin.csv_parser={first_step:!0,headers:[],rows:[],mapped:{},custom:{},update:!1,updated:0,failed:0,imported:0,skipped:0,validate_csv_file:function(t){var e=t.name.match(/\.([^\.]+)$/)[1];switch(e.toString().toLowerCase()){case"csv":case"txt":return!0;default:return console.log(e),!1}},import:function(){var r=this,n={_wpnonce:noptinSubscribers.nonce,action:"noptin_import_subscribers",data:JSON.stringify({rows:window.noptin.csv_parser.rows,headers:window.noptin.csv_parser.headers,mapped:window.noptin.csv_parser.mapped,update:window.noptin.csv_parser.update,custom:window.noptin.csv_parser.custom})};return jQuery.post(noptinSubscribers.ajaxurl,n).done((function(e){"object"===t(e)&&e.success?(r.imported=Number(r.imported)+Number(e.data.imported),r.updated=Number(r.updated)+Number(e.data.updated),r.skipped=Number(r.skipped)+Number(e.data.skipped)):r.failed=Number(r.failed)+r.rows.length})).fail((function(t){console.log(t),r.failed=Number(r.failed)+r.rows.length})).always((function(){r.rows=[],e(".noptin-imported").text(r.imported),e(".noptin-failed").text(r.failed),e(".noptin-updated").text(r.updated),e(".noptin-skipped").text(r.skipped)}))},handle_import_form_submission:function(t){var r=this;t.preventDefault();var n=e("#noptin-upload").prop("files")[0];n?this.validate_csv_file(n)?(e(".noptin-import-subscribers-form .spinner").css("visibility","visible"),this.update=e("#noptin-importer-update-existing:checked").length>0,window.noptin.Papa.parse(n,{step:function(t,e){t.data&&(r.first_step?r.handle_first_step(t,e):r.handle_row(t,e))},complete:function(){r.rows.length?r.import().always((function(){e(".noptin-importing").addClass("hidden"),e(".noptin-import-complete").removeClass("hidden")})):(e(".noptin-importing").addClass("hidden"),e(".noptin-import-complete").removeClass("hidden"))},error:function(t,e){console.log(t)},skipEmptyLines:"greedy",dynamicTyping:!0})):alert("Invalid file type. Only CSV files are allowed"):alert("Select a CSV file first")},handle_first_step:function(t,r){var n=this;r.pause(),this.headers=t.data,this.first_step=!1;var i={_wpnonce:noptinSubscribers.nonce,headers:t.data,action:"noptin_prepare_subscriber_fields"};jQuery.post(noptinSubscribers.ajaxurl,i).done((function(t){t.success?(e(".noptin-import-subscribers-form").replaceWith(t.data),e(".noptin-import-subscribers-form-map-fields").on("submit",(function(t){t.preventDefault(),n.handle_field_map(r)}))):alert(t.data)})).fail((function(t){alert("An error occured. Please reload and try again.")})).always((function(){e(".noptin-import-subscribers-form .spinner").css("visibility","hidden")}))},handle_field_map:function(t){var r=this;e(".noptin-map-field").each((function(){"0"!=e(this).val()&&(r.mapped[e(this).data("maps")]=e(this).val()),"-1"==e(this).val()&&(r.custom[e(this).data("maps")]=e(this).closest("td").find(".noptin-custom-field-value input").val())})),this.mapped.email?(e(".noptin-import-subscribers-form-map-fields").addClass("hidden"),e(".noptin-import-progress").removeClass("hidden"),e("html, body").animate({scrollTop:0},"slow"),t.resume()):alert("You need to map the email field.")},handle_row:function(t,e){10==this.rows.push(t.data)&&(e.pause(),this.import().always((function(){e.resume()})))}},e(document).ready((function(){e(".noptin-import-subscribers-form #noptin-upload").on("change",(function(){e(this).prop("files")[0]?e(".noptin-import-continue").removeAttr("disabled"):e(".noptin-import-continue").attr("disabled","disabled")})),e(".noptin-import-subscribers-form").on("submit",(function(t){window.noptin.csv_parser.handle_import_form_submission(t)})),e("body").on("change",".noptin-field-can-have-custom-value",(function(){"-1"==e(this).val()?e(this).closest("td").find(".noptin-custom-field-value").removeClass("hidden"):e(this).closest("td").find(".noptin-custom-field-value").addClass("hidden")}))}))})()})();