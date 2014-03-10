function(){return function(){function g(a){throw a;}var k=void 0,l=!0,m=null,n=!1;function p(a){return function(){return this[a]}}function q(a){return function(){return a}}var r=this;function s(a){return"string"==typeof a}Math.floor(2147483648*Math.random()).toString(36);function t(a,b){function c(){}c.prototype=b.prototype;a.aa=b.prototype;a.prototype=new c};function u(a){Error.captureStackTrace?Error.captureStackTrace(this,u):this.stack=Error().stack||"";a&&(this.message=String(a))}t(u,Error);u.prototype.name="CustomError";function aa(a,b){for(var c=1;c<arguments.length;c++){var d=String(arguments[c]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,d)}return a}
function ca(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var w=d[h]||"",y=e[h]||"",z=RegExp("(\\d*)(\\D*)","g"),ba=RegExp("(\\d*)(\\D*)","g");do{var C=z.exec(w)||["","",""],D=ba.exec(y)||["","",""];if(0==C[0].length&&0==D[0].length)break;c=((0==C[1].length?0:parseInt(C[1],10))<(0==D[1].length?0:parseInt(D[1],10))?-1:(0==C[1].length?0:parseInt(C[1],10))>(0==D[1].length?
0:parseInt(D[1],10))?1:0)||((0==C[2].length)<(0==D[2].length)?-1:(0==C[2].length)>(0==D[2].length)?1:0)||(C[2]<D[2]?-1:C[2]>D[2]?1:0)}while(0==c)}return c};function da(a,b){b.unshift(a);u.call(this,aa.apply(m,b));b.shift();this.Z=a}t(da,u);da.prototype.name="AssertionError";function ea(a,b,c){if(!a){var d=Array.prototype.slice.call(arguments,2),e="Assertion failed";if(b)var e=e+(": "+b),f=d;g(new da(""+e,f||[]))}};var v=Array.prototype;function x(a,b){for(var c=a.length,d=s(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(k,d[e],e,a)}function fa(a,b,c){if(a.reduce)return a.reduce(b,c);var d=c;x(a,function(c,f){d=b.call(k,d,c,f,a)});return d}function A(a,b){for(var c=a.length,d=s(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(k,d[e],e,a))return l;return n}function ga(a){return v.concat.apply(v,arguments)}function ha(a,b,c){ea(a.length!=m);return 2>=arguments.length?v.slice.call(a,b):v.slice.call(a,b,c)};function ia(a,b){this.code=a;this.message=b||"";this.name=ja[a]||ja[13];var c=Error(this.message);c.name=this.name;this.stack=c.stack||""}t(ia,Error);
var ja={7:"NoSuchElementError",8:"NoSuchFrameError",9:"UnknownCommandError",10:"StaleElementReferenceError",11:"ElementNotVisibleError",12:"InvalidElementStateError",13:"UnknownError",15:"ElementNotSelectableError",19:"XPathLookupError",23:"NoSuchWindowError",24:"InvalidCookieDomainError",25:"UnableToSetCookieError",26:"ModalDialogOpenedError",27:"NoModalDialogOpenError",28:"ScriptTimeoutError",32:"InvalidSelectorError",35:"SqlDatabaseError",34:"MoveTargetOutOfBoundsError"};
ia.prototype.toString=function(){return this.name+": "+this.message};function B(){return r.navigator?r.navigator.userAgent:m}var ka,la="",ma=/WebKit\/(\S+)/.exec(B());ka=la=ma?ma[1]:"";var na={};function oa(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function pa(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?qa(a,b):!c&&oa(e,b)?-1*ra(a,b):!d&&oa(f,a)?ra(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?a:a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(l);
d=d.createRange();d.selectNode(b);d.collapse(l);return c.compareBoundaryPoints(r.Range.START_TO_END,d)}function ra(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return qa(d,a)}function qa(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};var sa,ta,ua,va,wa,xa,ya;ya=xa=wa=va=ua=ta=sa=n;var E=B();E&&(-1!=E.indexOf("Firefox")?sa=l:-1!=E.indexOf("Camino")?ta=l:-1!=E.indexOf("iPhone")||-1!=E.indexOf("iPod")?ua=l:-1!=E.indexOf("iPad")?va=l:-1!=E.indexOf("Android")?wa=l:-1!=E.indexOf("Chrome")?xa=l:-1!=E.indexOf("Safari")&&(ya=l));var za=sa,Aa=ta,Ba=ua,Ca=va,F=wa,Da=xa,Ea=ya;function G(a,b,c){this.g=a;this.W=b||1;this.f=c||1};function H(a){var b=m,c=a.nodeType;1==c&&(b=a.textContent,b=b==k||b==m?a.innerText:b,b=b==k||b==m?"":b);if("string"!=typeof b)if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}function I(a,b,c){if(b===m)return l;try{if(!a.getAttribute)return n}catch(d){return n}return c==m?!!a.getAttribute(b):a.getAttribute(b,2)==c}
function J(a,b,c,d,e){return Fa.call(m,a,b,s(c)?c:m,s(d)?d:m,e||new K)}function Fa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c?(b=b.getElementsByName(d),x(b,function(b){a.matches(b)&&e.add(b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),x(b,function(b){b.className==d&&a.matches(b)&&e.add(b)})):a instanceof L?Ga(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.getName()),x(b,function(a){I(a,c,d)&&e.add(a)}));return e}
function Ha(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)I(b,c,d)&&a.matches(b)&&e.add(b);return e}function Ga(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)I(b,c,d)&&a.matches(b)&&e.add(b),Ga(a,b,c,d,e)};function K(){this.f=this.d=m;this.r=0}function Ia(a){this.o=a;this.next=this.n=m}function Ja(a,b){if(a.d){if(!b.d)return a}else return b;for(var c=a.d,d=b.d,e=m,f=m,h=0;c&&d;)c.o==d.o?(f=c,c=c.next,d=d.next):0<pa(c.o,d.o)?(f=d,d=d.next):(f=c,c=c.next),(f.n=e)?e.next=f:a.d=f,e=f,h++;for(f=c||d;f;)f.n=e,e=e.next=f,h++,f=f.next;a.f=e;a.r=h;return a}K.prototype.unshift=function(a){a=new Ia(a);a.next=this.d;this.f?this.d.n=a:this.d=this.f=a;this.d=a;this.r++};
K.prototype.add=function(a){a=new Ia(a);a.n=this.f;this.d?this.f.next=a:this.d=this.f=a;this.f=a;this.r++};function Ka(a){return(a=a.d)?a.o:m}K.prototype.l=p("r");function La(a){return(a=Ka(a))?H(a):""}function M(a,b){return new Ma(a,!!b)}function Ma(a,b){this.T=a;this.G=(this.t=b)?a.f:a.d;this.C=m}Ma.prototype.next=function(){var a=this.G;if(a==m)return m;var b=this.C=a;this.G=this.t?a.n:a.next;return b.o};
Ma.prototype.remove=function(){var a=this.T,b=this.C;b||g(Error("Next must be called at least once before remove."));var c=b.n,b=b.next;c?c.next=b:a.d=b;b?b.n=c:a.f=c;a.r--;this.C=m};function N(a){this.c=a;this.e=this.h=n;this.s=m}N.prototype.b=p("h");function Na(a,b){a.h=b}function Oa(a,b){a.e=b}N.prototype.j=p("s");function O(a,b){var c=a.evaluate(b);return c instanceof K?+La(c):+c}function P(a,b){var c=a.evaluate(b);return c instanceof K?La(c):""+c}function Q(a,b){var c=a.evaluate(b);return c instanceof K?!!c.l():!!c};function Pa(a,b,c){N.call(this,a.c);this.F=a;this.J=b;this.N=c;this.h=b.b()||c.b();this.e=b.e||c.e;this.F==Qa&&(!c.e&&!c.b()&&4!=c.c&&0!=c.c&&b.j()?this.s={name:b.j().name,q:c}:!b.e&&(!b.b()&&4!=b.c&&0!=b.c&&c.j())&&(this.s={name:c.j().name,q:b}))}t(Pa,N);
function R(a,b,c,d,e){b=b.evaluate(d);c=c.evaluate(d);var f;if(b instanceof K&&c instanceof K){f=M(b);for(b=f.next();b;b=f.next()){e=M(c);for(d=e.next();d;d=e.next())if(a(H(b),H(d)))return l}return n}if(b instanceof K||c instanceof K){b instanceof K?e=b:(e=c,c=b);e=M(e);b=typeof c;for(d=e.next();d;d=e.next()){switch(b){case "number":f=+H(d);break;case "boolean":f=!!H(d);break;case "string":f=H(d);break;default:g(Error("Illegal primitive type for comparison."))}if(a(f,c))return l}return n}return e?
"boolean"==typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}Pa.prototype.evaluate=function(a){return this.F.k(this.J,this.N,a)};Pa.prototype.toString=function(a){a=a||"";var b=a+"binary expression: "+this.F+"\n";a+="  ";b+=this.J.toString(a)+"\n";return b+=this.N.toString(a)};function Ra(a,b,c,d){this.V=a;this.$=b;this.c=c;this.k=d}Ra.prototype.toString=p("V");var Sa={};
function S(a,b,c,d){a in Sa&&g(Error("Binary operator already created: "+a));a=new Ra(a,b,c,d);return Sa[a.toString()]=a}S("div",6,1,function(a,b,c){return O(a,c)/O(b,c)});S("mod",6,1,function(a,b,c){return O(a,c)%O(b,c)});S("*",6,1,function(a,b,c){return O(a,c)*O(b,c)});S("+",5,1,function(a,b,c){return O(a,c)+O(b,c)});S("-",5,1,function(a,b,c){return O(a,c)-O(b,c)});S("<",4,2,function(a,b,c){return R(function(a,b){return a<b},a,b,c)});
S(">",4,2,function(a,b,c){return R(function(a,b){return a>b},a,b,c)});S("<=",4,2,function(a,b,c){return R(function(a,b){return a<=b},a,b,c)});S(">=",4,2,function(a,b,c){return R(function(a,b){return a>=b},a,b,c)});var Qa=S("=",3,2,function(a,b,c){return R(function(a,b){return a==b},a,b,c,l)});S("!=",3,2,function(a,b,c){return R(function(a,b){return a!=b},a,b,c,l)});S("and",2,2,function(a,b,c){return Q(a,c)&&Q(b,c)});S("or",1,2,function(a,b,c){return Q(a,c)||Q(b,c)});function Ta(a,b){b.l()&&4!=a.c&&g(Error("Primary expression must evaluate to nodeset if filter has predicate(s)."));N.call(this,a.c);this.M=a;this.a=b;this.h=a.b();this.e=a.e}t(Ta,N);Ta.prototype.evaluate=function(a){a=this.M.evaluate(a);return Ua(this.a,a)};Ta.prototype.toString=function(a){a=a||"";var b=a+"Filter: \n";a+="  ";b+=this.M.toString(a);return b+=this.a.toString(a)};function Va(a,b){b.length<a.L&&g(Error("Function "+a.m+" expects at least"+a.L+" arguments, "+b.length+" given"));a.D!==m&&b.length>a.D&&g(Error("Function "+a.m+" expects at most "+a.D+" arguments, "+b.length+" given"));a.U&&x(b,function(b,d){4!=b.c&&g(Error("Argument "+d+" to function "+a.m+" is not of type Nodeset: "+b))});N.call(this,a.c);this.v=a;this.A=b;Na(this,a.h||A(b,function(a){return a.b()}));Oa(this,a.S&&!b.length||a.R&&!!b.length||A(b,function(a){return a.e}))}t(Va,N);
Va.prototype.evaluate=function(a){return this.v.k.apply(m,ga(a,this.A))};Va.prototype.toString=function(a){var b=a||"";a=b+"Function: "+this.v+"\n";b+="  ";this.A.length&&(a+=b+"Arguments:",b+="  ",a=fa(this.A,function(a,d){return a+"\n"+d.toString(b)},a));return a};function Wa(a,b,c,d,e,f,h,w,y){this.m=a;this.c=b;this.h=c;this.S=d;this.R=e;this.k=f;this.L=h;this.D=w!==k?w:h;this.U=!!y}Wa.prototype.toString=p("m");var Xa={};
function T(a,b,c,d,e,f,h,w){a in Xa&&g(Error("Function already created: "+a+"."));Xa[a]=new Wa(a,b,c,d,n,e,f,h,w)}T("boolean",2,n,n,function(a,b){return Q(b,a)},1);T("ceiling",1,n,n,function(a,b){return Math.ceil(O(b,a))},1);T("concat",3,n,n,function(a,b){var c=ha(arguments,1);return fa(c,function(b,c){return b+P(c,a)},"")},2,m);T("contains",2,n,n,function(a,b,c){b=P(b,a);a=P(c,a);return-1!=b.indexOf(a)},2);T("count",1,n,n,function(a,b){return b.evaluate(a).l()},1,1,l);T("false",2,n,n,q(n),0);
T("floor",1,n,n,function(a,b){return Math.floor(O(b,a))},1);T("id",4,n,n,function(a,b){var c=a.g,d=9==c.nodeType?c:c.ownerDocument,c=P(b,a).split(/\s+/),e=[];x(c,function(a){a=d.getElementById(a);var b;if(b=a){a:if(s(e))b=!s(a)||1!=a.length?-1:e.indexOf(a,0);else{for(b=0;b<e.length;b++)if(b in e&&e[b]===a)break a;b=-1}b=!(0<=b)}b&&e.push(a)});e.sort(pa);var f=new K;x(e,function(a){f.add(a)});return f},1);T("lang",2,n,n,q(n),1);
T("last",1,l,n,function(a){1!=arguments.length&&g(Error("Function last expects ()"));return a.f},0);T("local-name",3,n,l,function(a,b){var c=b?Ka(b.evaluate(a)):a.g;return c?c.nodeName.toLowerCase():""},0,1,l);T("name",3,n,l,function(a,b){var c=b?Ka(b.evaluate(a)):a.g;return c?c.nodeName.toLowerCase():""},0,1,l);T("namespace-uri",3,l,n,q(""),0,1,l);T("normalize-space",3,n,l,function(a,b){return(b?P(b,a):H(a.g)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
T("not",2,n,n,function(a,b){return!Q(b,a)},1);T("number",1,n,l,function(a,b){return b?O(b,a):+H(a.g)},0,1);T("position",1,l,n,function(a){return a.W},0);T("round",1,n,n,function(a,b){return Math.round(O(b,a))},1);T("starts-with",2,n,n,function(a,b,c){b=P(b,a);a=P(c,a);return 0==b.lastIndexOf(a,0)},2);T("string",3,n,l,function(a,b){return b?P(b,a):H(a.g)},0,1);T("string-length",1,n,l,function(a,b){return(b?P(b,a):H(a.g)).length},0,1);
T("substring",3,n,n,function(a,b,c,d){c=O(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?O(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=P(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);T("substring-after",3,n,n,function(a,b,c){b=P(b,a);a=P(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
T("substring-before",3,n,n,function(a,b,c){b=P(b,a);a=P(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);T("sum",1,n,n,function(a,b){for(var c=M(b.evaluate(a)),d=0,e=c.next();e;e=c.next())d+=+H(e);return d},1,1,l);T("translate",3,n,n,function(a,b,c,d){b=P(b,a);c=P(c,a);var e=P(d,a);a=[];for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);T("true",2,n,n,q(l),0);function L(a,b){this.P=a;this.K=b!==k?b:m;this.p=m;switch(a){case "comment":this.p=8;break;case "text":this.p=3;break;case "processing-instruction":this.p=7;break;case "node":break;default:g(Error("Unexpected argument"))}}L.prototype.matches=function(a){return this.p===m||this.p==a.nodeType};L.prototype.getName=p("P");L.prototype.toString=function(a){a=a||"";var b=a+"kindtest: "+this.P;this.K===m||(b+="\n"+this.K.toString(a+"  "));return b};function Ya(a){N.call(this,3);this.O=a.substring(1,a.length-1)}t(Ya,N);Ya.prototype.evaluate=p("O");Ya.prototype.toString=function(a){return(a||"")+"literal: "+this.O};function Za(a){N.call(this,1);this.Q=a}t(Za,N);Za.prototype.evaluate=p("Q");Za.prototype.toString=function(a){return(a||"")+"number: "+this.Q};function $a(a,b){N.call(this,a.c);this.I=a;this.u=b;this.h=a.b();this.e=a.e;if(1==this.u.length){var c=this.u[0];!c.B&&c.i==ab&&(c=c.z,"*"!=c.getName()&&(this.s={name:c.getName(),q:m}))}}t($a,N);function bb(){N.call(this,4)}t(bb,N);bb.prototype.evaluate=function(a){var b=new K;a=a.g;9==a.nodeType?b.add(a):b.add(a.ownerDocument);return b};bb.prototype.toString=function(a){return a+"RootHelperExpr"};function cb(){N.call(this,4)}t(cb,N);cb.prototype.evaluate=function(a){var b=new K;b.add(a.g);return b};
cb.prototype.toString=function(a){return a+"ContextHelperExpr"};
$a.prototype.evaluate=function(a){var b=this.I.evaluate(a);b instanceof K||g(Error("FilterExpr must evaluate to nodeset."));a=this.u;for(var c=0,d=a.length;c<d&&b.l();c++){var e=a[c],f=M(b,e.i.t),h;if(!e.b()&&e.i==db){for(h=f.next();(b=f.next())&&(!h.contains||h.contains(b))&&b.compareDocumentPosition(h)&8;h=b);b=e.evaluate(new G(h))}else if(!e.b()&&e.i==eb)h=f.next(),b=e.evaluate(new G(h));else{h=f.next();for(b=e.evaluate(new G(h));(h=f.next())!=m;)h=e.evaluate(new G(h)),b=Ja(b,h)}}return b};
$a.prototype.toString=function(a){var b=a||"",c=b+"PathExpr:\n",b=b+"  ",c=c+this.I.toString(b);this.u.length&&(c+=b+"Steps:\n",b+="  ",x(this.u,function(a){c+=a.toString(b)}));return c};function U(a,b){this.a=a;this.t=!!b}function Ua(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=M(b),f=b.l(),h,w=0;h=e.next();w++){var y=a.t?f-w:w+1;h=d.evaluate(new G(h,y,f));var z;"number"==typeof h?z=y==h:"string"==typeof h||"boolean"==typeof h?z=!!h:h instanceof K?z=0<h.l():g(Error("Predicate.evaluate returned an unexpected type."));z||e.remove()}return b}U.prototype.j=function(){return 0<this.a.length?this.a[0].j():m};
U.prototype.b=function(){for(var a=0;a<this.a.length;a++){var b=this.a[a];if(b.b()||1==b.c||0==b.c)return l}return n};U.prototype.l=function(){return this.a.length};U.prototype.toString=function(a){var b=a||"";a=b+"Predicates:";b+="  ";return fa(this.a,function(a,d){return a+"\n"+b+d.toString(b)},a)};function V(a,b,c,d){N.call(this,4);this.i=a;this.z=b;this.a=c||new U([]);this.B=!!d;b=this.a.j();a.X&&b&&(this.s={name:b.name,q:b.q});this.h=this.a.b()}t(V,N);V.prototype.evaluate=function(a){var b=a.g,c=m,c=this.j(),d=m,e=m,f=0;c&&(d=c.name,e=c.q?P(c.q,a):m,f=1);if(this.B)if(!this.b()&&this.i==fb)c=J(this.z,b,d,e),c=Ua(this.a,c,f);else if(a=M((new V(gb,new L("node"))).evaluate(a)),b=a.next())for(c=this.k(b,d,e,f);(b=a.next())!=m;)c=Ja(c,this.k(b,d,e,f));else c=new K;else c=this.k(a.g,d,e,f);return c};
V.prototype.k=function(a,b,c,d){a=this.i.v(this.z,a,b,c);return a=Ua(this.a,a,d)};V.prototype.toString=function(a){a=a||"";var b=a+"Step: \n";a+="  ";b+=a+"Operator: "+(this.B?"//":"/")+"\n";this.i.m&&(b+=a+"Axis: "+this.i+"\n");b+=this.z.toString(a);if(this.a.length)for(var b=b+(a+"Predicates: \n"),c=0;c<this.a.length;c++)var d=c<this.a.length-1?", ":"",b=b+(this.a[c].toString(a)+d);return b};function hb(a,b,c,d){this.m=a;this.v=b;this.t=c;this.X=d}hb.prototype.toString=p("m");var ib={};
function W(a,b,c,d){a in ib&&g(Error("Axis already created: "+a));b=new hb(a,b,c,!!d);return ib[a]=b}W("ancestor",function(a,b){for(var c=new K,d=b;d=d.parentNode;)a.matches(d)&&c.unshift(d);return c},l);W("ancestor-or-self",function(a,b){var c=new K,d=b;do a.matches(d)&&c.unshift(d);while(d=d.parentNode);return c},l);
var ab=W("attribute",function(a,b){var c=new K,d=a.getName(),e=b.attributes;if(e)if(a instanceof L&&a.p===m||"*"==d)for(var d=0,f;f=e[d];d++)c.add(f);else(f=e.getNamedItem(d))&&c.add(f);return c},n),fb=W("child",function(a,b,c,d,e){return Ha.call(m,a,b,s(c)?c:m,s(d)?d:m,e||new K)},n,l);W("descendant",J,n,l);
var gb=W("descendant-or-self",function(a,b,c,d){var e=new K;I(b,c,d)&&a.matches(b)&&e.add(b);return J(a,b,c,d,e)},n,l),db=W("following",function(a,b,c,d){var e=new K;do for(var f=b;f=f.nextSibling;)I(f,c,d)&&a.matches(f)&&e.add(f),e=J(a,f,c,d,e);while(b=b.parentNode);return e},n,l);W("following-sibling",function(a,b){for(var c=new K,d=b;d=d.nextSibling;)a.matches(d)&&c.add(d);return c},n);W("namespace",function(){return new K},n);
W("parent",function(a,b){var c=new K;if(9==b.nodeType)return c;if(2==b.nodeType)return c.add(b.ownerElement),c;var d=b.parentNode;a.matches(d)&&c.add(d);return c},n);var eb=W("preceding",function(a,b,c,d){var e=new K,f=[];do f.unshift(b);while(b=b.parentNode);for(var h=1,w=f.length;h<w;h++){var y=[];for(b=f[h];b=b.previousSibling;)y.unshift(b);for(var z=0,ba=y.length;z<ba;z++)b=y[z],I(b,c,d)&&a.matches(b)&&e.add(b),e=J(a,b,c,d,e)}return e},l,l);
W("preceding-sibling",function(a,b){for(var c=new K,d=b;d=d.previousSibling;)a.matches(d)&&c.unshift(d);return c},l);W("self",function(a,b){var c=new K;a.matches(b)&&c.add(b);return c},n);function jb(a){N.call(this,1);this.H=a;this.h=a.b();this.e=a.e}t(jb,N);jb.prototype.evaluate=function(a){return-O(this.H,a)};jb.prototype.toString=function(a){a=a||"";var b=a+"UnaryExpr: -\n";return b+=this.H.toString(a+"  ")};function kb(a){N.call(this,4);this.w=a;Na(this,A(this.w,function(a){return a.b()}));Oa(this,A(this.w,function(a){return a.e}))}t(kb,N);kb.prototype.evaluate=function(a){var b=new K;x(this.w,function(c){c=c.evaluate(a);c instanceof K||g(Error("PathExpr must evaluate to NodeSet."));b=Ja(b,c)});return b};kb.prototype.toString=function(a){var b=a||"",c=b+"UnionExpr:\n",b=b+"  ";x(this.w,function(a){c+=a.toString(b)+"\n"});return c.substring(0,c.length)};function X(a){return(a=a.exec(B()))?a[1]:""}var lb=function(){if(za)return X(/Firefox\/([0-9.]+)/);if(Da)return X(/Chrome\/([0-9.]+)/);if(Ea)return X(/Version\/([0-9.]+)/);if(Ba||Ca){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(B());if(a)return a[1]+"."+a[2]}else{if(F)return(a=X(/Android\s+([0-9.]+)/))?a:X(/Version\/([0-9.]+)/);if(Aa)return X(/Camino\/([0-9.]+)/)}return""}();var mb;if(F){var nb=/Android\s+([0-9\.]+)/.exec(B());mb=nb?nb[1]:"0"}else mb="0";var ob=mb;F&&(F?ca(ob,2.3):ca(lb,2.3));na["533"]||(na["533"]=0<=ca(ka,"533"));var pb={}.Y,Y=["_"],Z=r;!(Y[0]in Z)&&Z.execScript&&Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)!Y.length&&pb!==k?Z[$]=pb:Z=Z[$]?Z[$]:Z[$]={};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}