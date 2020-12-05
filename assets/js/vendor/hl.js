/*
  Highlight.js 10.2.0 (da7d149b)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs=function(){"use strict";function e(n){Object.freeze(n);var t="function"==typeof n;return Object.getOwnPropertyNames(n).forEach((function(r){!Object.hasOwnProperty.call(n,r)||null===n[r]||"object"!=typeof n[r]&&"function"!=typeof n[r]||t&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(n[r])||e(n[r])})),n}class n{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(e,...n){var t={};for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function a(e){return e.nodeName.toLowerCase()}var i=Object.freeze({__proto__:null,escapeHTML:t,inherit:r,nodeStream:function(e){var n=[];return function e(t,r){for(var i=t.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:r,node:i}),r=e(i,r),a(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:i}));return r}(e,0),n},mergeStreams:function(e,n,r){var i=0,s="",o=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){s+="<"+a(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+t(e.value)+'"'})).join("")+">"}function u(e){s+="</"+a(e)+">"}function g(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){var d=l();if(s+=t(r.substring(i,d[0].offset)),i=d[0].offset,d===e){o.reverse().forEach(u);do{g(d.splice(0,1)[0]),d=l()}while(d===e&&d.length&&d[0].offset===i);o.reverse().forEach(c)}else"start"===d[0].event?o.push(d[0].node):o.pop(),g(d.splice(0,1)[0])}return s+t(r.substr(i))}});const s="</span>",o=e=>!!e.kind;class l{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=t(e)}openNode(e){if(!o(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){o(e)&&(this.buffer+=s)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{c._collapse(e)}))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}const d="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",h={begin:"\\\\[\\s\\S]",relevance:0},f={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[h]},p={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[h]},m={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},b=function(e,n,t={}){var a=r({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(m),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},v=b("//","$"),x=b("/\\*","\\*/"),E=b("#","$");var _=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:d,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>g(e)).join("")}(n,/.*\b/,e.binary,/\b.*/)),r({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:h,APOS_STRING_MODE:f,QUOTE_STRING_MODE:p,PHRASAL_WORDS_MODE:m,COMMENT:b,C_LINE_COMMENT_MODE:v,C_BLOCK_COMMENT_MODE:x,HASH_COMMENT_MODE:E,NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{className:"number",begin:d,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:"\\b(0b[01]+)",relevance:0},CSS_NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[h,{begin:/\[/,end:/\]/,relevance:0,contains:[h]}]}]},TITLE_MODE:{className:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}}),w="of and for in not or if then".split(" ");function N(e,n){return n?+n:function(e){return w.includes(e.toLowerCase())}(e)?0:1}const y={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!hljs.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,t(this.code);let e;return this.autoDetect?(e=hljs.highlightAuto(this.code),this.detectedLanguage=e.language):(e=hljs.highlight(this.language,this.code,this.ignoreIllegals),this.detectectLanguage=this.language),e.value},autoDetect(){return!(this.language&&(e=this.autodetect,!e&&""!==e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}},R={install(e){e.component("highlightjs",y)}},k=t,O=r,{nodeStream:M,mergeStreams:L}=i,T=Symbol("nomatch");return function(t){var a=[],i=Object.create(null),s=Object.create(null),o=[],l=!0,c=/(^(<[^>]+>|\t|)+|\n)/gm,d="Could not find the language '{}', did you forget to load/include a language module?";const h={disableAutodetect:!0,name:"Plain text",contains:[]};var f={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function p(e){return f.noHighlightRe.test(e)}function m(e,n,t,r){var a={code:n,language:e};S("before:highlight",a);var i=a.result?a.result:b(a.language,a.code,t,r);return i.code=a.code,S("after:highlight",i),i}function b(e,t,a,s){var o=t;function c(e,n){var t=E.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=R.subLanguage?function(){if(""!==L){var e=null;if("string"==typeof R.subLanguage){if(!i[R.subLanguage])return void M.addText(L);e=b(R.subLanguage,L,!0,O[R.subLanguage]),O[R.subLanguage]=e.top}else e=v(L,R.subLanguage.length?R.subLanguage:null);R.relevance>0&&(j+=e.relevance),M.addSublanguage(e.emitter,e.language)}}():function(){if(!R.keywords)return void M.addText(L);let e=0;R.keywordPatternRe.lastIndex=0;let n=R.keywordPatternRe.exec(L),t="";for(;n;){t+=L.substring(e,n.index);const r=c(R,n);if(r){const[e,a]=r;M.addText(t),t="",j+=a,M.addKeyword(n[0],e)}else t+=n[0];e=R.keywordPatternRe.lastIndex,n=R.keywordPatternRe.exec(L)}t+=L.substr(e),M.addText(t)}(),L=""}function h(e){return e.className&&M.openNode(e.className),R=Object.create(e,{parent:{value:R}})}function p(e){return 0===R.matcher.regexIndex?(L+=e[0],1):(I=!0,0)}var m={};function x(t,r){var i=r&&r[0];if(L+=t,null==i)return u(),0;if("begin"===m.type&&"end"===r.type&&m.index===r.index&&""===i){if(L+=o.slice(r.index,r.index+1),!l){const n=Error("0 width match regex");throw n.languageName=e,n.badRule=m.rule,n}return 1}if(m=r,"begin"===r.type)return function(e){var t=e[0],r=e.rule;const a=new n(r),i=[r.__beforeBegin,r["on:begin"]];for(const n of i)if(n&&(n(e,a),a.ignore))return p(t);return r&&r.endSameAsBegin&&(r.endRe=RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),r.skip?L+=t:(r.excludeBegin&&(L+=t),u(),r.returnBegin||r.excludeBegin||(L=t)),h(r),r.returnBegin?0:t.length}(r);if("illegal"===r.type&&!a){const e=Error('Illegal lexeme "'+i+'" for mode "'+(R.className||"<unnamed>")+'"');throw e.mode=R,e}if("end"===r.type){var s=function(e){var t=e[0],r=o.substr(e.index),a=function e(t,r,a){let i=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(t.endRe,a);if(i){if(t["on:end"]){const e=new n(t);t["on:end"](r,e),e.ignore&&(i=!1)}if(i){for(;t.endsParent&&t.parent;)t=t.parent;return t}}if(t.endsWithParent)return e(t.parent,r,a)}(R,e,r);if(!a)return T;var i=R;i.skip?L+=t:(i.returnEnd||i.excludeEnd||(L+=t),u(),i.excludeEnd&&(L=t));do{R.className&&M.closeNode(),R.skip||R.subLanguage||(j+=R.relevance),R=R.parent}while(R!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),h(a.starts)),i.returnEnd?0:t.length}(r);if(s!==T)return s}if("illegal"===r.type&&""===i)return 1;if(S>1e5&&S>3*r.index)throw Error("potential infinite loop, way more iterations than matches");return L+=i,i.length}var E=y(e);if(!E)throw console.error(d.replace("{}",e)),Error('Unknown language: "'+e+'"');var _=function(e){function n(n,t){return RegExp(g(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(function(e,n="|"){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){var s=r+=1,o=g(e[i]);for(i>0&&(a+=n),a+="(";o.length>0;){var l=t.exec(o);if(null==l){a+=o;break}a+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),"\\"===l[0][0]&&l[1]?a+="\\"+(+l[1]+s):(a+=l[0],"("===l[0]&&r++)}a+=")"}return a}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),r=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,r)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!=this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;const t=n.exec(e);return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&(this.regexIndex=0)),t}}function i(e,n){const t=e.input[e.index-1],r=e.input[e.index+e[0].length];"."!==t&&"."!==r||n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return function t(s,o){const l=s;if(s.compiled)return l;s.compiled=!0,s.__beforeBegin=null,s.keywords=s.keywords||s.beginKeywords;let c=null;if("object"==typeof s.keywords&&(c=s.keywords.$pattern,delete s.keywords.$pattern),s.keywords&&(s.keywords=function(e,n){var t={};return"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(n){r(n,e[n])})),t;function r(e,r){n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){var r=n.split("|");t[r[0]]=[e,N(r[0],r[1])]}))}}(s.keywords,e.case_insensitive)),s.lexemes&&c)throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(s.lexemes||c||/\w+/,!0),o&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",s.__beforeBegin=i),s.begin||(s.begin=/\B|\b/),l.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(l.endRe=n(s.end)),l.terminator_end=g(s.end)||"",s.endsWithParent&&o.terminator_end&&(l.terminator_end+=(s.end?"|":"")+o.terminator_end)),s.illegal&&(l.illegalRe=n(s.illegal)),void 0===s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return r(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e)?r(e,{starts:e.starts?r(e.starts):null}):Object.isFrozen(e)?r(e):e}("self"===e?s:e)}))),s.contains.forEach((function(e){t(e,l)})),s.starts&&t(s.starts,o),l.matcher=function(e){const n=new a;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}(E),w="",R=s||_,O={},M=new f.__emitter(f);!function(){for(var e=[],n=R;n!==E;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>M.openNode(e))}();var L="",j=0,A=0,S=0,I=!1;try{for(R.matcher.considerAll();;){S++,I?I=!1:(R.matcher.lastIndex=A,R.matcher.considerAll());const e=R.matcher.exec(o);if(!e&&R.matcher.resumingScanAtSamePosition()){L+=o[A],A+=1;continue}if(!e)break;const n=x(o.substring(A,e.index),e);A=e.index+n}return x(o.substr(A)),M.closeAllNodes(),M.finalize(),w=M.toHTML(),{relevance:j,value:w,language:e,illegal:!1,emitter:M,top:R}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:o.slice(A-100,A+100),mode:n.mode},sofar:w,relevance:0,value:k(o),emitter:M};if(l)return{illegal:!1,relevance:0,value:k(o),emitter:M,language:e,top:R,errorRaised:n};throw n}}function v(e,n){n=n||f.languages||Object.keys(i);var t=function(e){const n={relevance:0,emitter:new f.__emitter(f),value:k(e),illegal:!1,top:h};return n.emitter.addText(e),n}(e),r=t;return n.filter(y).filter(A).forEach((function(n){var a=b(n,e,!1);a.language=n,a.relevance>r.relevance&&(r=a),a.relevance>t.relevance&&(r=t,t=a)})),r.language&&(t.second_best=r),t}function x(e){return f.tabReplace||f.useBR?e.replace(c,e=>"\n"===e?f.useBR?"<br>":e:f.tabReplace?e.replace(/\t/g,f.tabReplace):e):e}function E(e){let n=null;const t=function(e){var n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=f.languageDetectRe.exec(n);if(t){var r=y(t[1]);return r||(console.warn(d.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),r?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>p(e)||y(e))}(e);if(p(t))return;S("before:highlightBlock",{block:e,language:t}),f.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"):n=e;const r=n.textContent,a=t?m(t,r,!0):v(r),i=M(n);if(i.length){const e=document.createElement("div");e.innerHTML=a.value,a.value=L(i,M(e),r)}a.value=x(a.value),S("after:highlightBlock",{block:e,result:a}),e.innerHTML=a.value,e.className=function(e,n,t){var r=n?s[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),e.includes(r)||a.push(r),a.join(" ").trim()}(e.className,t,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const w=()=>{if(!w.called){w.called=!0;var e=document.querySelectorAll("pre code");a.forEach.call(e,E)}};function y(e){return e=(e||"").toLowerCase(),i[e]||i[s[e]]}function j(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{s[e]=n})}function A(e){var n=y(e);return n&&!n.disableAutodetect}function S(e,n){var t=e;o.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(t,{highlight:m,highlightAuto:v,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),x(e)},highlightBlock:E,configure:function(e){f=O(f,e)},initHighlighting:w,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",w,!1)},registerLanguage:function(e,n){var r=null;try{r=n(t)}catch(n){if(console.error("Language definition for '{}' could not be registered.".replace("{}",e)),!l)throw n;console.error(n),r=h}r.name||(r.name=e),i[e]=r,r.rawDefinition=n.bind(null,t),r.aliases&&j(r.aliases,{languageName:e})},listLanguages:function(){return Object.keys(i)},getLanguage:y,registerAliases:j,requireLanguage:function(e){var n=y(e);if(n)return n;throw Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:A,inherit:O,addPlugin:function(e){o.push(e)},vuePlugin:R}),t.debugMode=function(){l=!1},t.safeMode=function(){l=!0},t.versionString="10.2.0";for(const n in _)"object"==typeof _[n]&&e(_[n]);return Object.assign(t,_),t}({})}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);hljs.registerLanguage("perl",function(){"use strict";return function(e){var n={$pattern:/[\w.]+/,keyword:"getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmget sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"},t={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:n},s={begin:"->{",end:"}"},r={variants:[{begin:/\$\d/},{begin:/[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},{begin:/[\$%@][^\s\w{]/,relevance:0}]},i=[e.BACKSLASH_ESCAPE,t,r],a=[r,e.HASH_COMMENT_MODE,e.COMMENT("^\\=\\w","\\=cut",{endsWithParent:!0}),s,{className:"string",contains:i,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*\\<",end:"\\>",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE]},{begin:"{\\w+}",contains:[],relevance:0},{begin:"-?\\w+\\s*\\=\\>",contains:[],relevance:0}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[e.HASH_COMMENT_MODE,{className:"regexp",begin:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",relevance:10},{className:"regexp",begin:"(m|qr)?/",end:"/[a-z]*",contains:[e.BACKSLASH_ESCAPE],relevance:0}]},{className:"function",beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return t.contains=a,s.contains=a,{name:"Perl",aliases:["pl","pm"],keywords:n,contains:a}}}());