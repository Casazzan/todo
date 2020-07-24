!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t),n.d(t,"dataController",(function(){return Ee}));var r=(...e)=>{e.length<4&&console.log("Invalid input into todoFactory of "+e);return{name:e[0],date:e[1],notes:e[2],priority:e[3],isComplete:!1,subList:e[4]}};var a=e=>{let t=[];const n={todos:t,name:e,addTodo:e=>{t.push(e)},removeTodo:e=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},removeTodoByIdx:e=>{t.splice(e,1)},getTodo:e=>t[e],setTodos:e=>{n.todos=e}};return n};function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){o(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(e){o(1,arguments);var t=i(e);return!isNaN(t)}var s={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var c={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var d=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[d]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,n){var r=String(t),a=n||{},o=a.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],d=r.match(i);if(!d)return null;var s,u=d[0],c=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(c,(function(e){return e.test(u)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(c,(function(e){return e.test(u)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(u.length)}}}var f,g={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof s[e]?s[e]:1===t?s[e].one:s[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:c,formatRelative:function(e,t,n,r){return l[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(f.matchPattern);if(!a)return null;var o=a[0],i=n.match(f.parsePattern);if(!i)return null;var d=f.valueCallback?f.valueCallback(i[0]):i[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(o.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function v(e,t){o(2,arguments);var n=i(e).getTime(),r=p(t);return new Date(n+r)}function w(e,t){o(2,arguments);var n=p(t);return v(e,-n)}function b(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var y={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return b("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):b(n+1,2)},d:function(e,t){return b(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return b(e.getUTCHours()%12||12,t.length)},H:function(e,t){return b(e.getUTCHours(),t.length)},m:function(e,t){return b(e.getUTCMinutes(),t.length)},s:function(e,t){return b(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return b(Math.floor(r*Math.pow(10,n-3)),t.length)}};function C(e){o(1,arguments);var t=1,n=i(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function T(e){o(1,arguments);var t=i(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=C(r),d=new Date(0);d.setUTCFullYear(n,0,4),d.setUTCHours(0,0,0,0);var s=C(d);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function x(e){o(1,arguments);var t=T(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=C(n);return r}function E(e,t){o(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,d=null==a?0:p(a),s=null==n.weekStartsOn?d:p(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=i(e),c=u.getUTCDay(),l=(c<s?7:0)+c-s;return u.setUTCDate(u.getUTCDate()-l),u.setUTCHours(0,0,0,0),u}function M(e,t){o(1,arguments);var n=i(e,t),r=n.getUTCFullYear(),a=t||{},d=a.locale,s=d&&d.options&&d.options.firstWeekContainsDate,u=null==s?1:p(s),c=null==a.firstWeekContainsDate?u:p(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,c),l.setUTCHours(0,0,0,0);var m=E(l,t),h=new Date(0);h.setUTCFullYear(r,0,c),h.setUTCHours(0,0,0,0);var f=E(h,t);return n.getTime()>=m.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function D(e,t){o(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:p(a),d=null==n.firstWeekContainsDate?i:p(n.firstWeekContainsDate),s=M(e,t),u=new Date(0);u.setUTCFullYear(s,0,d),u.setUTCHours(0,0,0,0);var c=E(u,t);return c}var P="midnight",k="noon",S="morning",N="afternoon",L="evening",j="night";function U(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+b(o,2)}function O(e,t){return e%60==0?(e>0?"-":"+")+b(Math.abs(e)/60,2):W(e,t)}function W(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+b(Math.floor(a/60),2)+n+b(a%60,2)}var Y={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y.y(e,t)},Y:function(e,t,n,r){var a=M(e,r),o=a>0?a:1-a;return"YY"===t?b(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):b(o,t.length)},R:function(e,t){return b(T(e),t.length)},u:function(e,t){return b(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return b(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return y.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){o(1,arguments);var n=i(e),r=E(n,t).getTime()-D(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):b(a,t.length)},I:function(e,t,n){var r=function(e){o(1,arguments);var t=i(e),n=C(t).getTime()-x(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):b(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):y.d(e,t)},D:function(e,t,n){var r=function(e){o(1,arguments);var t=i(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):b(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return b(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return b(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return b(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?k:0===a?P:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?L:a>=12?N:a>=4?S:j,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):y.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):b(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):b(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):y.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):y.s(e,t)},S:function(e,t){return y.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return O(a);case"XXXX":case"XX":return W(a);case"XXXXX":case"XXX":default:return W(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return O(a);case"xxxx":case"xx":return W(a);case"xxxxx":case"xxx":default:return W(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+U(a,":");case"OOOO":default:return"GMT"+W(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+U(a,":");case"zzzz":default:return"GMT"+W(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return b(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return b((r._originalDate||e).getTime(),t.length)}};function q(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function A(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var I={p:A,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return q(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",q(a,t)).replace("{{time}}",A(o,t))}};function B(e){return e.getTime()%6e4}function H(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+B(t))%6e4:B(t))}var z=["D","DD"],F=["YY","YYYY"];function X(e){return-1!==z.indexOf(e)}function Q(e){return-1!==F.indexOf(e)}function G(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,Z=/''/g,$=/[a-zA-Z]/;function V(e,t,n){o(2,arguments);var r=String(t),a=n||{},s=a.locale||g,u=s.options&&s.options.firstWeekContainsDate,c=null==u?1:p(u),l=null==a.firstWeekContainsDate?c:p(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=s.options&&s.options.weekStartsOn,h=null==m?0:p(m),f=null==a.weekStartsOn?h:p(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var v=i(e);if(!d(v))throw new RangeError("Invalid time value");var b=H(v),y=w(v,b),C={firstWeekContainsDate:l,weekStartsOn:f,locale:s,_originalDate:v},T=r.match(_).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,I[t])(e,s.formatLong,C):e})).join("").match(R).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return K(e);var n=Y[t];if(n)return!a.useAdditionalWeekYearTokens&&Q(e)&&G(e),!a.useAdditionalDayOfYearTokens&&X(e)&&G(e),n(y,e,s.localize,C);if(t.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return T}function K(e){return e.match(J)[1].replace(Z,"'")}var ee={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},te=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ne=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,re=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ae(e){var t,n={},r=e.split(ee.dateTimeDelimiter);if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],ee.timeZoneDelimiter.test(n.date)&&(n.date=e.split(ee.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=ee.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function oe(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),o=r[2]&&parseInt(r[2]);return{year:null==o?a:100*o,restDateString:e.slice((r[1]||r[2]).length)}}function ie(e,t){if(null===t)return null;var n=e.match(te);if(!n)return null;var r=!!n[4],a=de(n[1]),o=de(n[2])-1,i=de(n[3]),d=de(n[4]),s=de(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,d,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,o=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+o),r}(t,d,s):new Date(NaN);var u=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(le[t]||(me(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(me(e)?366:365)}(t,a)?(u.setUTCFullYear(t,o,Math.max(a,i)),u):new Date(NaN)}function de(e){return e?parseInt(e):1}function se(e){var t=e.match(ne);if(!t)return null;var n=ue(t[1]),r=ue(t[2]),a=ue(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?36e5*n+6e4*r+1e3*a:NaN}function ue(e){return e&&parseFloat(e.replace(",","."))||0}function ce(e){if("Z"===e)return 0;var t=e.match(re);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(36e5*r+6e4*a):NaN}var le=[31,null,31,30,31,30,31,31,30,31,30,31];function me(e){return e%400==0||e%4==0&&e%100}const he=(e,t,n,r,a,o,i=null)=>{const d=document.createElement("div");d.id="todo-form",i&&(d.dataset.idx=i,console.log(i));const s=document.createElement("h1");s.textContent="Create New To Do",s.id="form-header",d.appendChild(s);const u=document.createElement("button");u.setAttribute("type","button"),u.id="exit-form",u.title="Exit",u.innerHTML="X",u.addEventListener("click",be),d.appendChild(u),d.appendChild(pe("Project","proj"));const c=document.createElement("select");c.id="proj",c.appendChild(fe("proj","None"));let l=0;const m=Ee.getProjects();for(let t=1;t<m.length;t++)c.appendChild(fe("proj",m[t].name)),m[t].name===e&&(l=t);c.selectedIndex=l,d.appendChild(c),d.appendChild(pe("Add Sub Task","task-container"));const h=document.createElement("div");h.id="task-container";const f=document.createElement("button");f.id="add-btn",f.setAttribute("type","button"),f.innerHTML="+",f.addEventListener("click",ye),h.appendChild(f),d.appendChild(h),d.appendChild(pe("Todo name","name")),d.appendChild(ge("name","text",t)),d.appendChild(pe("Notes","note"));const g=document.createElement("textarea");g.id="note",g.setAttribute("rows","4"),g.value=n,d.appendChild(g),d.appendChild(pe("Due Date","date")),d.appendChild(ge("date","date",r)),d.appendChild(pe("Priority","prior"));const p=document.createElement("select");p.id="prior",p.appendChild(fe("prior","None","")),p.appendChild(fe("prior","Low","!")),p.appendChild(fe("prior","Medium","!!")),p.appendChild(fe("prior","High","!!!")),"!"===a&&(p.selectedIndex=1),"!!"===a&&(p.selectedIndex=2),"!!!"===a&&(p.selectedIndex=3),d.appendChild(p);const v=document.createElement("button");v.setAttribute("type","submit"),v.classList.add("submit-btn"),v.addEventListener("click",ve),v.innerHTML="Submit",d.appendChild(v),document.body.prepend(d),document.querySelector("#main").classList.add("dimmed"),document.querySelector("header").classList.add("dimmed"),o&&o.forEach(e=>{Ce(e)})},fe=(e,t,n=t)=>{const r=document.createElement("option");return r.setAttribute("name",e),r.value=n,r.innerHTML=t,r},ge=(e,t,n)=>{const r=document.createElement("input");return r.value=n,r.id=e,r.setAttribute("type",t),r},pe=(e,t)=>{const n=document.createElement("label");return n.setAttribute("for",t),n.innerHTML=e,n},ve=()=>{const e=document.getElementById("proj").value,t=document.getElementById("name").value,n=document.getElementById("note").value;let r=document.getElementById("date").value;r&&(r=V(function(e,t){o(1,arguments);var n=t||{},r=null==n.additionalDigits?2:p(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,i=ae(e);if(i.date){var d=oe(i.date,r);a=ie(d.restDateString,d.year)}if(isNaN(a)||!a)return new Date(NaN);var s,u=a.getTime(),c=0;if(i.time&&(c=se(i.time),isNaN(c)||null===c))return new Date(NaN);if(!i.timezone){var l=new Date(u+c),m=new Date(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate(),l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds());return m.setFullYear(l.getUTCFullYear()),m}return s=ce(i.timezone),isNaN(s)?new Date(NaN):new Date(u+c+s)}(r),"mm-dd-yyyy"));const a=document.getElementById("prior").value,i=[];document.getElementById("task-container").childNodes.forEach(e=>{e.value&&i.push(e.value)});const d=document.getElementById("todo-form");d.hasAttribute("data-idx")?Ee.changeTodo(e,t,r,n,a,i,d.dataset.idx):Ee.addTodo(e,t,r,n,a,i),be()},we=()=>{const e=document.getElementById("project-input"),t=e.value;t&&(Ee.addNewProject(t),e.value="")},be=()=>{const e=document.querySelector("#todo-form");for(;e.firstChild;)e.removeChild(e.lastChild);e.parentNode.removeChild(e),document.querySelector("#main").classList.remove("dimmed"),document.querySelector("header").classList.remove("dimmed")},ye=()=>{Ce("")},Ce=e=>{const t=document.getElementById("task-container"),n=document.createElement("input");n.classList.add("sub-task"),n.setAttribute("type","text"),n.value=e,t.prepend(n)},Te=(()=>{const e=()=>{const e=document.createElement("button");return e.classList.add("proj-del-btn"),e.classList.add("clickable"),e.innerHTML='<i class="fas fa-trash"></i>',e.setAttribute("type","button"),e.setAttribute("title","Delete"),e.addEventListener("click",(function(e){confirm("Are you sure you want to delete this Project?")&&Ee.removeProject(e.target.parentNode.previousSibling.dataset.idx)})),e},t=e=>{const t=e.target.dataset.idx;t?xe.openProject(t):console.log("Error: "+e+"has no idx")},n=()=>{const e=document.getElementById("proj-list");for(;e.childNodes.length>2;)e.removeChild(e.firstChild)};return{updateProjectDisplay:()=>{n();const r=document.getElementById("proj-list"),a=document.getElementById("new-proj-container"),o=Ee.getProjects();for(let n=0;n<o.length;n++){const i=document.createElement("div");i.classList="project-div";const d=document.createElement("p");d.classList.add("project"),d.dataset.idx=n,d.textContent=o[n].name,d.addEventListener("click",t),i.appendChild(d),i.appendChild(e()),r.insertBefore(i,a)}}}})(),xe=(()=>{const e=e=>{const u=document.getElementById("todos");u.setAttribute("display","none"),s();for(let s=0;s<e.length;s++){const c=e[s],l=document.createElement("div");l.classList="todo",l.dataset.idx=s;const m=document.createElement("div");m.classList="todo-content";const h=document.createElement("div");h.classList="todo-main";const f=r(s);c.isCompleted&&f.setAttribute("checked","checked"),f.addEventListener("click",a),h.appendChild(f),c.name?h.appendChild(n("name",c.name)):h.appendChild(n("name","Unnamed Todo")),c.date&&h.appendChild(n("date",c.date));const g=n("priority",c.priority);if("!"===c.priority&&g.classList.add("low-p"),"!!"===c.priority&&g.classList.add("medium-p"),"!!!"===c.priority&&g.classList.add("high-p"),h.appendChild(g),c.isCompleted&&l.classList.add("complete"),m.appendChild(h),c.notes||c.subList){const e=document.createElement("div");if(e.classList="todo-sub hidden",c.notes&&e.appendChild(n("notes","Notes: "+c.notes)),c.subList){const t=document.createElement("div");t.id="sub-list";for(let e=0;e<c.subList.length;e++){const a=r(e);c.isCompleted&&a.setAttribute("checked","checked"),a.addEventListener("click",o),t.appendChild(a),t.appendChild(n("sub-item",c.subList[e]))}e.appendChild(t)}m.appendChild(e),h.classList.add("clickable"),h.addEventListener("click",t)}const p=document.createElement("div");p.classList="todo-btns",p.appendChild(i()),p.appendChild(d()),l.appendChild(p),l.appendChild(m),u.appendChild(l)}u.setAttribute("display","")},t=e=>{if("INPUT"==e.target.tagName)return;const t=document.querySelector(".shown");t&&(t.classList.toggle("shown"),t.classList.toggle("hidden"));const n=e.target.parentNode.nextSibling;n&&n!==t&&(n.classList.toggle("shown"),n.classList.toggle("hidden"))},n=(e,t)=>{const n=document.createElement("p");return n.classList=e,n.textContent=t,n},r=e=>{const t=document.createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("value",e),t.classList.add("round-check"),t},a=e=>{Ee.changeCompleteState(e.target.value),e.target.parentNode.parentNode.parentNode.classList.toggle("complete")},o=e=>{e.target.nextSibling.classList.toggle("sub-complete")},i=()=>{const e=document.createElement("button");return e.classList.add("edit-btn"),e.classList.add("clickable"),e.innerHTML='<i class="fas fa-edit"></i>',e.setAttribute("type","button"),e.setAttribute("title","Edit"),e.addEventListener("click",e=>{Ee.editTodo(e.target.parentNode.parentNode.parentNode.dataset.idx)}),e},d=()=>{const e=document.createElement("button");return e.classList.add("del-btn"),e.classList.add("clickable"),e.innerHTML='<i class="fas fa-trash"></i>',e.setAttribute("type","button"),e.setAttribute("title","Delete"),e.addEventListener("click",(function(e){confirm("Are you sure you want to delete this To Do?")&&Ee.removeTodo(e.target.parentNode.parentNode.parentNode.dataset.idx)})),e},s=()=>{const e=document.getElementById("todos");for(;e.hasChildNodes();)e.removeChild(e.lastChild)};return{openProject:t=>{const n=Ee.getProject(t);n?(document.getElementById("display-proj").textContent=n.name,e(n.todos)):(document.getElementById("display-proj").textContent="",e([])),Ee.setActiveProjectIdx(t)},updateTodoDisplay:e}})(),Ee=(()=>{let e=0,t=[];const n=(e,t)=>{e.addTodo(t),i()},o=()=>t[e],i=()=>{localStorage.setItem("projects",JSON.stringify(t))};return{addNewProject:e=>{t.push(a(e)),Te.updateProjectDisplay(),xe.openProject(t.length-1),i()},addTodoToProject:n,getProjects:()=>t,loadStoredProjects:e=>{t=e},getProject:e=>t[e],addTodo:(e,a,o,i,d,s)=>{const u=r(a,o,i,d,s);let c=0;for(let n=1;n<t.length;n++)if(t[n].name===e){c=n;break}n(t[c],u),xe.openProject(c)},getActiveProject:o,removeTodo:e=>{o().removeTodoByIdx(e),xe.updateTodoDisplay(o().todos)},editTodo:e=>{const t=o().getTodo(e);((e,t,n,r,a,o,i)=>{he(e,t,n,r,a,o,i)})(o().name,t.name,t.notes,t.date,t.priority,t.subList,e)},setActiveProjectIdx:t=>{e=t},changeCompleteState:e=>{o().todos[e].isCompleted=!o().todos[e].isCompleted},changeTodo:(e,n,a,o,d,s,u)=>{const c=r(n,a,o,d,s);let l=0;for(let n=0;n<t.length;n++)if(t[n].name===e){l=n;break}t[l].todos.splice(u,1,c),xe.updateTodoDisplay(t[l].todos),i()},removeProject:e=>{t.splice(e,1),Te.updateProjectDisplay(),xe.openProject(0),i()}}})();!function(){if(localStorage.getItem("projects")){const e=JSON.parse(localStorage.getItem("projects")),t=[];e.forEach(e=>{const n=a(e.name);e.todos.forEach(e=>{n.addTodo(e)}),t.push(n)}),Ee.loadStoredProjects(t)}else{const e=r("Conquer the world",V(new Date(2020,6,20),"mm-dd-yyyy"),"Be ruler of every country","!!!",["conquer england","tell england to conquer everyone else"]),t=a("Unassigned To Do's");t.addTodo(e);const n=[t];Ee.loadStoredProjects(n)}document.getElementById("todo-btn").addEventListener("click",()=>{var e;e=Ee.getActiveProject().name,he(e,"","","",0,"")}),document.getElementById("project-btn").addEventListener("click",we),document.getElementById("project-input").addEventListener("keydown",e=>{"Enter"===e.key&&we()}),Te.updateProjectDisplay(),xe.openProject(0)}()}]);