(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[49],{280:function(t,e,a){"use strict";a.r(e);var n=a(333),r={lessThanXSeconds:{one:"\u5c11\u65bc 1 \u79d2",other:"\u5c11\u65bc {{count}} \u79d2"},xSeconds:{one:"1 \u79d2",other:"{{count}} \u79d2"},halfAMinute:"\u534a\u5206\u9418",lessThanXMinutes:{one:"\u5c11\u65bc 1 \u5206\u9418",other:"\u5c11\u65bc {{count}} \u5206\u9418"},xMinutes:{one:"1 \u5206\u9418",other:"{{count}} \u5206\u9418"},xHours:{one:"1 \u5c0f\u6642",other:"{{count}} \u5c0f\u6642"},aboutXHours:{one:"\u5927\u7d04 1 \u5c0f\u6642",other:"\u5927\u7d04 {{count}} \u5c0f\u6642"},xDays:{one:"1 \u5929",other:"{{count}} \u5929"},aboutXWeeks:{one:"\u5927\u7d04 1 \u500b\u661f\u671f",other:"\u5927\u7d04 {{count}} \u500b\u661f\u671f"},xWeeks:{one:"1 \u500b\u661f\u671f",other:"{{count}} \u500b\u661f\u671f"},aboutXMonths:{one:"\u5927\u7d04 1 \u500b\u6708",other:"\u5927\u7d04 {{count}} \u500b\u6708"},xMonths:{one:"1 \u500b\u6708",other:"{{count}} \u500b\u6708"},aboutXYears:{one:"\u5927\u7d04 1 \u5e74",other:"\u5927\u7d04 {{count}} \u5e74"},xYears:{one:"1 \u5e74",other:"{{count}} \u5e74"},overXYears:{one:"\u8d85\u904e 1 \u5e74",other:"\u8d85\u904e {{count}} \u5e74"},almostXYears:{one:"\u5c07\u8fd1 1 \u5e74",other:"\u5c07\u8fd1 {{count}} \u5e74"}};var i={date:Object(n.b)({formats:{full:"y'\u5e74'M'\u6708'd'\u65e5' EEEE",long:"y'\u5e74'M'\u6708'd'\u65e5'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},defaultWidth:"full"}),time:Object(n.b)({formats:{full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},defaultWidth:"full"}),dateTime:Object(n.b)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},o={lastWeek:"'\u4e0a\u500b'eeee p",yesterday:"'\u6628\u5929' p",today:"'\u4eca\u5929' p",tomorrow:"'\u660e\u5929' p",nextWeek:"'\u4e0b\u500b'eeee p",other:"P"};var u={code:"zh-HK",formatDistance:function(t,e,a){var n;return a=a||{},n="string"===typeof r[t]?r[t]:1===e?r[t].one:r[t].other.replace("{{count}}",e),a.addSuffix?a.comparison>0?n+"\u5167":n+"\u524d":n},formatLong:i,formatRelative:function(t,e,a,n){return o[t]},localize:{ordinalNumber:function(t,e){var a=Number(t);switch(String((e||{}).unit)){case"date":return a.toString()+"\u65e5";case"hour":return a.toString()+"\u6642";case"minute":return a.toString()+"\u5206";case"second":return a.toString()+"\u79d2";default:return"\u7b2c "+a.toString()}},era:Object(n.a)({values:{narrow:["\u524d","\u516c\u5143"],abbreviated:["\u524d","\u516c\u5143"],wide:["\u516c\u5143\u524d","\u516c\u5143"]},defaultWidth:"wide"}),quarter:Object(n.a)({values:{narrow:["1","2","3","4"],abbreviated:["\u7b2c\u4e00\u5b63","\u7b2c\u4e8c\u5b63","\u7b2c\u4e09\u5b63","\u7b2c\u56db\u5b63"],wide:["\u7b2c\u4e00\u5b63\u5ea6","\u7b2c\u4e8c\u5b63\u5ea6","\u7b2c\u4e09\u5b63\u5ea6","\u7b2c\u56db\u5b63\u5ea6"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(n.a)({values:{narrow:["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u5341\u4e00","\u5341\u4e8c"],abbreviated:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],wide:["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"]},defaultWidth:"wide"}),day:Object(n.a)({values:{narrow:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],short:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],abbreviated:["\u9031\u65e5","\u9031\u4e00","\u9031\u4e8c","\u9031\u4e09","\u9031\u56db","\u9031\u4e94","\u9031\u516d"],wide:["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"]},defaultWidth:"wide"}),dayPeriod:Object(n.a)({values:{narrow:{am:"\u4e0a",pm:"\u4e0b",midnight:"\u5348\u591c",noon:"\u664c",morning:"\u65e9",afternoon:"\u5348",evening:"\u665a",night:"\u591c"},abbreviated:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u5348\u591c",noon:"\u4e2d\u5348",morning:"\u4e0a\u5348",afternoon:"\u4e0b\u5348",evening:"\u665a\u4e0a",night:"\u591c\u665a"},wide:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u5348\u591c",noon:"\u4e2d\u5348",morning:"\u4e0a\u5348",afternoon:"\u4e0b\u5348",evening:"\u665a\u4e0a",night:"\u591c\u665a"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u4e0a",pm:"\u4e0b",midnight:"\u5348\u591c",noon:"\u664c",morning:"\u65e9",afternoon:"\u5348",evening:"\u665a",night:"\u591c"},abbreviated:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u5348\u591c",noon:"\u4e2d\u5348",morning:"\u4e0a\u5348",afternoon:"\u4e0b\u5348",evening:"\u665a\u4e0a",night:"\u591c\u665a"},wide:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u5348\u591c",noon:"\u4e2d\u5348",morning:"\u4e0a\u5348",afternoon:"\u4e0b\u5348",evening:"\u665a\u4e0a",night:"\u591c\u665a"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Object(n.c)({matchPattern:/^(\u7b2c\s*)?\d+(\u65e5|\u6642|\u5206|\u79d2)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(n.d)({matchPatterns:{narrow:/^(\u524d)/i,abbreviated:/^(\u524d)/i,wide:/^(\u516c\u5143\u524d|\u516c\u5143)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u524d)/i,/^(\u516c\u5143)/i]},defaultParseWidth:"any"}),quarter:Object(n.d)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u5b63/i,wide:/^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u5b63\u5ea6/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|\u4e00)/i,/(2|\u4e8c)/i,/(3|\u4e09)/i,/(4|\u56db)/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(n.d)({matchPatterns:{narrow:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])/i,abbreviated:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00]|\d|1[12])\u6708/i,wide:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])\u6708/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u4e00/i,/^\u4e8c/i,/^\u4e09/i,/^\u56db/i,/^\u4e94/i,/^\u516d/i,/^\u4e03/i,/^\u516b/i,/^\u4e5d/i,/^\u5341(?!(\u4e00|\u4e8c))/i,/^\u5341\u4e00/i,/^\u5341\u4e8c/i],any:[/^\u4e00|1/i,/^\u4e8c|2/i,/^\u4e09|3/i,/^\u56db|4/i,/^\u4e94|5/i,/^\u516d|6/i,/^\u4e03|7/i,/^\u516b|8/i,/^\u4e5d|9/i,/^\u5341(?!(\u4e00|\u4e8c))|10/i,/^\u5341\u4e00|11/i,/^\u5341\u4e8c|12/i]},defaultParseWidth:"any"}),day:Object(n.d)({matchPatterns:{narrow:/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,short:/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,abbreviated:/^\u9031[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,wide:/^\u661f\u671f[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/\u65e5/i,/\u4e00/i,/\u4e8c/i,/\u4e09/i,/\u56db/i,/\u4e94/i,/\u516d/i]},defaultParseWidth:"any"}),dayPeriod:Object(n.d)({matchPatterns:{any:/^(\u4e0a\u5348?|\u4e0b\u5348?|\u5348\u591c|[\u4e2d\u6b63]\u5348|\u65e9\u4e0a?|\u4e0b\u5348|\u665a\u4e0a?|\u51cc\u6668)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u4e0a\u5348?/i,pm:/^\u4e0b\u5348?/i,midnight:/^\u5348\u591c/i,noon:/^[\u4e2d\u6b63]\u5348/i,morning:/^\u65e9\u4e0a/i,afternoon:/^\u4e0b\u5348/i,evening:/^\u665a\u4e0a?/i,night:/^\u51cc\u6668/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};e.default=u},333:function(t,e,a){"use strict";function n(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth,n=t.formats[a]||t.formats[t.defaultWidth];return n}}function r(t){return function(e,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;n=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,d=r.width?String(r.width):t.defaultWidth;n=t.values[d]||t.values[u]}return n[t.argumentCallback?t.argumentCallback(e):e]}}function i(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var r=n[0],i=e.match(t.parsePattern);if(!i)return null;var o=t.valueCallback?t.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;var u=e.slice(r.length);return{value:o,rest:u}}}function o(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,l=i[0],s=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?d(s,(function(t){return t.test(l)})):u(s,(function(t){return t.test(l)}));o=t.valueCallback?t.valueCallback(c):c,o=a.valueCallback?a.valueCallback(o):o;var h=e.slice(l.length);return{value:o,rest:h}}}function u(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}function d(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return o}))}}]);
//# sourceMappingURL=49.07c14d25.chunk.js.map