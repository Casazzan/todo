!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t),n.d(t,"dataController",(function(){return Te}));var r=(...e)=>{e.length<4&&console.log("Invalid input into todoFactory of "+e);return{name:e[0],date:e[1],notes:e[2],priority:e[3],isComplete:!1,subList:e.slice(4)}};var a=e=>{const t=[];return{name:e,todos:t,addTodo:e=>{t.push(e)},removeTodo:e=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}};function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){i(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function u(e){i(1,arguments);var t=o(e);return!isNaN(t)}var d={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var c={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,d=a.width?String(a.width):e.defaultWidth;r=e.values[d]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var d,s=u[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(c,(function(e){return e.test(s)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(c,(function(e){return e.test(s)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=a.valueCallback?a.valueCallback(d):d,rest:r.slice(s.length)}}}var f,g={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof d[e]?d[e]:1===t?d[e].one:d[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:c,formatRelative:function(e,t,n,r){return l[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(f.matchPattern);if(!a)return null;var i=a[0],o=n.match(f.parsePattern);if(!o)return null;var u=f.valueCallback?f.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(e,t){i(2,arguments);var n=o(e).getTime(),r=p(t);return new Date(n+r)}function v(e,t){i(2,arguments);var n=p(t);return w(e,-n)}function y(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var b={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return y("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):y(n+1,2)},d:function(e,t){return y(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return y(e.getUTCHours()%12||12,t.length)},H:function(e,t){return y(e.getUTCHours(),t.length)},m:function(e,t){return y(e.getUTCMinutes(),t.length)},s:function(e,t){return y(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return y(Math.floor(r*Math.pow(10,n-3)),t.length)}};function C(e){i(1,arguments);var t=1,n=o(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function T(e){i(1,arguments);var t=o(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=C(r),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var d=C(u);return t.getTime()>=a.getTime()?n+1:t.getTime()>=d.getTime()?n:n-1}function M(e){i(1,arguments);var t=T(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=C(n);return r}function x(e,t){i(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,u=null==a?0:p(a),d=null==n.weekStartsOn?u:p(n.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=o(e),c=s.getUTCDay(),l=(c<d?7:0)+c-d;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function D(e,t){i(1,arguments);var n=o(e,t),r=n.getUTCFullYear(),a=t||{},u=a.locale,d=u&&u.options&&u.options.firstWeekContainsDate,s=null==d?1:p(d),c=null==a.firstWeekContainsDate?s:p(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,c),l.setUTCHours(0,0,0,0);var m=x(l,t),h=new Date(0);h.setUTCFullYear(r,0,c),h.setUTCHours(0,0,0,0);var f=x(h,t);return n.getTime()>=m.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function P(e,t){i(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:p(a),u=null==n.firstWeekContainsDate?o:p(n.firstWeekContainsDate),d=D(e,t),s=new Date(0);s.setUTCFullYear(d,0,u),s.setUTCHours(0,0,0,0);var c=x(s,t);return c}var E="midnight",U="noon",k="morning",S="afternoon",j="evening",N="night";function W(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+y(i,2)}function L(e,t){return e%60==0?(e>0?"-":"+")+y(Math.abs(e)/60,2):O(e,t)}function O(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+y(Math.floor(a/60),2)+n+y(a%60,2)}var Y={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return b.y(e,t)},Y:function(e,t,n,r){var a=D(e,r),i=a>0?a:1-a;return"YY"===t?y(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):y(i,t.length)},R:function(e,t){return y(T(e),t.length)},u:function(e,t){return y(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return b.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){i(1,arguments);var n=o(e),r=x(n,t).getTime()-P(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):y(a,t.length)},I:function(e,t,n){var r=function(e){i(1,arguments);var t=o(e),n=C(t).getTime()-M(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):y(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):b.d(e,t)},D:function(e,t,n){var r=function(e){i(1,arguments);var t=o(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):y(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return y(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return y(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return y(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?U:0===a?E:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?j:a>=12?S:a>=4?k:N,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):b.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):y(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):y(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):b.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):b.s(e,t)},S:function(e,t){return b.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return L(a);case"XXXX":case"XX":return O(a);case"XXXXX":case"XXX":default:return O(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return L(a);case"xxxx":case"xx":return O(a);case"xxxxx":case"xxx":default:return O(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+W(a,":");case"OOOO":default:return"GMT"+O(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+W(a,":");case"zzzz":default:return"GMT"+O(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return y(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return y((r._originalDate||e).getTime(),t.length)}};function q(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function B(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var I={p:B,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return q(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",q(a,t)).replace("{{time}}",B(i,t))}};function H(e){return e.getTime()%6e4}function A(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+H(t))%6e4:H(t))}var z=["D","DD"],F=["YY","YYYY"];function X(e){return-1!==z.indexOf(e)}function Q(e){return-1!==F.indexOf(e)}function G(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,Z=/''/g,$=/[a-zA-Z]/;function V(e,t,n){i(2,arguments);var r=String(t),a=n||{},d=a.locale||g,s=d.options&&d.options.firstWeekContainsDate,c=null==s?1:p(s),l=null==a.firstWeekContainsDate?c:p(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=d.options&&d.options.weekStartsOn,h=null==m?0:p(m),f=null==a.weekStartsOn?h:p(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var w=o(e);if(!u(w))throw new RangeError("Invalid time value");var y=A(w),b=v(w,y),C={firstWeekContainsDate:l,weekStartsOn:f,locale:d,_originalDate:w},T=r.match(_).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,I[t])(e,d.formatLong,C):e})).join("").match(R).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return K(e);var n=Y[t];if(n)return!a.useAdditionalWeekYearTokens&&Q(e)&&G(e),!a.useAdditionalDayOfYearTokens&&X(e)&&G(e),n(b,e,d.localize,C);if(t.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return T}function K(e){return e.match(J)[1].replace(Z,"'")}var ee={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},te=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ne=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,re=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ae(e){var t,n={},r=e.split(ee.dateTimeDelimiter);if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],ee.timeZoneDelimiter.test(n.date)&&(n.date=e.split(ee.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=ee.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function ie(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function oe(e,t){if(null===t)return null;var n=e.match(te);if(!n)return null;var r=!!n[4],a=ue(n[1]),i=ue(n[2])-1,o=ue(n[3]),u=ue(n[4]),d=ue(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,d)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,u,d):new Date(NaN);var s=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(le[t]||(me(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(me(e)?366:365)}(t,a)?(s.setUTCFullYear(t,i,Math.max(a,o)),s):new Date(NaN)}function ue(e){return e?parseInt(e):1}function de(e){var t=e.match(ne);if(!t)return null;var n=se(t[1]),r=se(t[2]),a=se(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?36e5*n+6e4*r+1e3*a:NaN}function se(e){return e&&parseFloat(e.replace(",","."))||0}function ce(e){if("Z"===e)return 0;var t=e.match(re);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(36e5*r+6e4*a):NaN}var le=[31,null,31,30,31,30,31,31,30,31,30,31];function me(e){return e%400==0||e%4==0&&e%100}const he=(e,t,n=t)=>{const r=document.createElement("option");return r.setAttribute("name",e),r.value=n,r.innerHTML=t,r},fe=(e,t,n)=>{const r=document.createElement("input");return r.value=n,r.id=e,r.setAttribute("type",t),r},ge=(e,t)=>{const n=document.createElement("label");return n.setAttribute("for",t),n.innerHTML=e,n},pe=()=>{const e=document.getElementById("proj").value,t=document.getElementById("name").value,n=document.getElementById("note").value;let r=document.getElementById("date").value;r&&(r=V(function(e,t){i(1,arguments);var n=t||{},r=null==n.additionalDigits?2:p(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,o=ae(e);if(o.date){var u=ie(o.date,r);a=oe(u.restDateString,u.year)}if(isNaN(a)||!a)return new Date(NaN);var d,s=a.getTime(),c=0;if(o.time&&(c=de(o.time),isNaN(c)||null===c))return new Date(NaN);if(!o.timezone){var l=new Date(s+c),m=new Date(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate(),l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds());return m.setFullYear(l.getUTCFullYear()),m}return d=ce(o.timezone),isNaN(d)?new Date(NaN):new Date(s+c+d)}(r),"mm-dd-yyyy"));const a=document.getElementById("prior").value,o=[];document.getElementById("task-container").childNodes.forEach(e=>{e.value&&o.push(e.value)}),Te.addTodo(e,t,r,n,a,o),ve()},we=()=>{const e=document.getElementById("project-input"),t=e.value;t&&(Te.addNewProject(t),e.value="")},ve=()=>{const e=document.querySelector(".form");for(;e.firstChild;)e.removeChild(e.lastChild);e.parentNode.removeChild(e)},ye=()=>{const e=document.getElementById("task-container"),t=document.createElement("input");t.classList.add("sub-task"),t.setAttribute("type","text"),e.prepend(t)},be=(()=>{const e=e=>{const t=e.target.dataset.idx;t?Ce.openProject(t):console.log("Error: "+e+"has no idx")},t=()=>{const e=document.getElementById("proj-list");for(;e.childNodes.length>2;)e.removeChild(e.firstChild)};return{updateProjectDisplay:()=>{t();const n=document.getElementById("proj-list"),r=document.getElementById("new-proj-container"),a=Te.getProjects();for(let t=0;t<a.length;t++){const i=document.createElement("p");i.classList.add("project"),i.dataset.idx=t,i.textContent=a[t].name,i.addEventListener("click",e),n.insertBefore(i,r)}}}})(),Ce=(()=>{const e=e=>{const i=document.getElementById("todos");i.setAttribute("display","none"),a(),e.forEach(e=>{const a=document.createElement("div");a.classList="todo";const o=document.createElement("div");o.classList="todo-content";const u=document.createElement("div");u.classList="todo-main",u.appendChild(t("name",e.name)),u.appendChild(t("date",e.date)),u.appendChild(t("priority",e.priority)),e.isCompleted&&e.classList.add("complete"),o.appendChild(u);const d=document.createElement("div");d.classList="todo-sub hidden",d.appendChild(t("notes",e.notes)),d.appendChild(t("notes",JSON.stringify(e.subList))),o.appendChild(d),a.appendChild(o),a.appendChild(n()),a.appendChild(r()),i.appendChild(a)}),i.setAttribute("display","")},t=(e,t)=>{const n=document.createElement("p");return n.classList=e,n.textContent=t,n},n=()=>{const e=document.createElement("button");return e.classList.add("edit-btn"),e.textContent="...",e.setAttribute("type","button"),e},r=()=>{const e=document.createElement("button");return e.classList.add("del-btn"),e.textContent="X",e.setAttribute("type","button"),e},a=()=>{const e=document.getElementById("todos");for(;e.hasChildNodes();)e.removeChild(e.lastChild)};return{openProject:t=>{const n=Te.getProject(t);document.getElementById("display-proj").textContent=n.name,e(n.todos),Te.activeProjectIdx=t}}})(),Te=(()=>{const e=[],t=(e,t)=>{e.addTodo(t)},n=t=>e[t];return{addNewProject:t=>{e.push(a(t)),be.updateProjectDisplay(),Ce.openProject(e.length-1)},addTodoToProject:t,getProjects:()=>e,addExistingProject:t=>{e.push(t)},getProject:n,addTodo:(n,a,i,o,u,d)=>{const s=r(a,i,o,u,d);let c=0;for(let r=1;r<e.length;r++)(e[r].name=n)&&(t(e[r],s),c=r);t(e[0],s),Ce.openProject(c)},getActiveProject:()=>n(0),activeProjectIdx:0}})(),Me=r("Conquer the world",V(new Date(2002,1,1),"mm-dd-yyyy"),"Be ruler of every country",2,["conquer england","tell england to conquer everyone else"]);const xe=a("All Tasks");xe.addTodo(Me),Te.addExistingProject(xe),document.getElementById("todo-btn").addEventListener("click",()=>{console.log(Te.getActiveProject()),((e,t,n,r,a,i)=>{const o=document.createElement("div");o.classList.add("todo-form"),o.classList.add("form"),o.appendChild(ge("Project","proj"));const u=document.createElement("select");u.id="proj",u.appendChild(he("proj","None"));let d=0;const s=Te.getProjects();for(let t=1;t<s.length;t++)u.appendChild(he("proj",s[t].name)),(s[t].name=e)&&(d=t-1);u.selectedIndex=d,o.appendChild(u),o.appendChild(ge("Add Sub Task"),"tasks");const c=document.createElement("div");c.id="task-container";const l=document.createElement("button");l.setAttribute("type","button"),l.innerHTML="+",l.addEventListener("click",ye),c.appendChild(l),o.appendChild(c),o.appendChild(ge("Todo name","name")),o.appendChild(fe("name","text",t)),o.appendChild(ge("Notes","note"));const m=document.createElement("textarea");m.id="note",m.setAttribute("rows","4"),m.value=n,o.appendChild(m),o.appendChild(ge("Due Date","date")),o.appendChild(fe("date","date",r)),o.appendChild(ge("Priority","prior"));const h=document.createElement("select");h.id="prior",h.appendChild(he("prior","None")),h.appendChild(he("prior","Low")),h.appendChild(he("prior","Medium")),h.appendChild(he("prior","High")),"Low"===a&&(h.selectedIndex=1),"Medium"===a&&(h.selectedIndex=2),"High"===a&&(h.selectedIndex=3),o.appendChild(h);const f=document.createElement("button");f.setAttribute("type","submit"),f.classList.add("submit-btn"),f.addEventListener("click",pe),f.innerHTML="Submit",o.appendChild(f),document.body.prepend(o)})(Te.getActiveProject().name,"","","",0)}),document.getElementById("project-btn").addEventListener("click",we),document.getElementById("project-input").addEventListener("keydown",e=>{"Enter"===e.key&&we()}),be.updateProjectDisplay(),Ce.openProject(0)}]);