(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[73],{233:function(t,e,a){"use strict";a.r(e);var n=a(333),i={locale:{1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},number:{"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"}};function r(t){return t.toString().replace(/\d/g,(function(t){return i.locale[t]}))}var o={ordinalNumber:function(t,e){return r(Number(t))},era:Object(n.a)({values:{narrow:["\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935","\u0908\u0938\u094d\u0935\u0940"],abbreviated:["\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935","\u0908\u0938\u094d\u0935\u0940"],wide:["\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935","\u0908\u0938\u0935\u0940 \u0938\u0928"]},defaultWidth:"wide"}),quarter:Object(n.a)({values:{narrow:["1","2","3","4"],abbreviated:["\u0924\u093f1","\u0924\u093f2","\u0924\u093f3","\u0924\u093f4"],wide:["\u092a\u0939\u0932\u0940 \u0924\u093f\u092e\u093e\u0939\u0940","\u0926\u0942\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940","\u0924\u0940\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940","\u091a\u094c\u0925\u0940 \u0924\u093f\u092e\u093e\u0939\u0940"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Object(n.a)({values:{narrow:["\u091c","\u092b\u093c","\u092e\u093e","\u0905","\u092e\u0908","\u091c\u0942","\u091c\u0941","\u0905\u0917","\u0938\u093f","\u0905\u0915\u094d\u091f\u0942","\u0928","\u0926\u093f"],abbreviated:["\u091c\u0928","\u092b\u093c\u0930","\u092e\u093e\u0930\u094d\u091a","\u0905\u092a\u094d\u0930\u0948\u0932","\u092e\u0908","\u091c\u0942\u0928","\u091c\u0941\u0932","\u0905\u0917","\u0938\u093f\u0924","\u0905\u0915\u094d\u091f\u0942","\u0928\u0935","\u0926\u093f\u0938"],wide:["\u091c\u0928\u0935\u0930\u0940","\u092b\u093c\u0930\u0935\u0930\u0940","\u092e\u093e\u0930\u094d\u091a","\u0905\u092a\u094d\u0930\u0948\u0932","\u092e\u0908","\u091c\u0942\u0928","\u091c\u0941\u0932\u093e\u0908","\u0905\u0917\u0938\u094d\u0924","\u0938\u093f\u0924\u0902\u092c\u0930","\u0905\u0915\u094d\u091f\u0942\u092c\u0930","\u0928\u0935\u0902\u092c\u0930","\u0926\u093f\u0938\u0902\u092c\u0930"]},defaultWidth:"wide"}),day:Object(n.a)({values:{narrow:["\u0930","\u0938\u094b","\u092e\u0902","\u092c\u0941","\u0917\u0941","\u0936\u0941","\u0936"],short:["\u0930","\u0938\u094b","\u092e\u0902","\u092c\u0941","\u0917\u0941","\u0936\u0941","\u0936"],abbreviated:["\u0930\u0935\u093f","\u0938\u094b\u092e","\u092e\u0902\u0917\u0932","\u092c\u0941\u0927","\u0917\u0941\u0930\u0941","\u0936\u0941\u0915\u094d\u0930","\u0936\u0928\u093f"],wide:["\u0930\u0935\u093f\u0935\u093e\u0930","\u0938\u094b\u092e\u0935\u093e\u0930","\u092e\u0902\u0917\u0932\u0935\u093e\u0930","\u092c\u0941\u0927\u0935\u093e\u0930","\u0917\u0941\u0930\u0941\u0935\u093e\u0930","\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930","\u0936\u0928\u093f\u0935\u093e\u0930"]},defaultWidth:"wide"}),dayPeriod:Object(n.a)({values:{narrow:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},abbreviated:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},wide:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},abbreviated:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},wide:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"}},defaultFormattingWidth:"wide"})},u={lessThanXSeconds:{one:"\u0967 \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092e",other:"{{count}} \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092e"},xSeconds:{one:"\u0967 \u0938\u0947\u0915\u0902\u0921",other:"{{count}} \u0938\u0947\u0915\u0902\u0921"},halfAMinute:"\u0906\u0927\u093e \u092e\u093f\u0928\u091f",lessThanXMinutes:{one:"\u0967 \u092e\u093f\u0928\u091f \u0938\u0947 \u0915\u092e",other:"{{count}} \u092e\u093f\u0928\u091f \u0938\u0947 \u0915\u092e"},xMinutes:{one:"\u0967 \u092e\u093f\u0928\u091f",other:"{{count}} \u092e\u093f\u0928\u091f"},aboutXHours:{one:"\u0932\u0917\u092d\u0917 \u0967 \u0918\u0902\u091f\u093e",other:"\u0932\u0917\u092d\u0917 {{count}} \u0918\u0902\u091f\u0947"},xHours:{one:"\u0967 \u0918\u0902\u091f\u093e",other:"{{count}} \u0918\u0902\u091f\u0947"},xDays:{one:"\u0967 \u0926\u093f\u0928",other:"{{count}} \u0926\u093f\u0928"},aboutXWeeks:{one:"\u0932\u0917\u092d\u0917 \u0967 \u0938\u092a\u094d\u0924\u093e\u0939",other:"\u0932\u0917\u092d\u0917 {{count}} \u0938\u092a\u094d\u0924\u093e\u0939"},xWeeks:{one:"\u0967 \u0938\u092a\u094d\u0924\u093e\u0939",other:"{{count}} \u0938\u092a\u094d\u0924\u093e\u0939"},aboutXMonths:{one:"\u0932\u0917\u092d\u0917 \u0967 \u092e\u0939\u0940\u0928\u093e",other:"\u0932\u0917\u092d\u0917 {{count}} \u092e\u0939\u0940\u0928\u0947"},xMonths:{one:"\u0967 \u092e\u0939\u0940\u0928\u093e",other:"{{count}} \u092e\u0939\u0940\u0928\u0947"},aboutXYears:{one:"\u0932\u0917\u092d\u0917 \u0967 \u0935\u0930\u094d\u0937",other:"\u0932\u0917\u092d\u0917 {{count}} \u0935\u0930\u094d\u0937"},xYears:{one:"\u0967 \u0935\u0930\u094d\u0937",other:"{{count}} \u0935\u0930\u094d\u0937"},overXYears:{one:"\u0967 \u0935\u0930\u094d\u0937 \u0938\u0947 \u0905\u0927\u093f\u0915",other:"{{count}} \u0935\u0930\u094d\u0937 \u0938\u0947 \u0905\u0927\u093f\u0915"},almostXYears:{one:"\u0932\u0917\u092d\u0917 \u0967 \u0935\u0930\u094d\u0937",other:"\u0932\u0917\u092d\u0917 {{count}} \u0935\u0930\u094d\u0937"}},d={date:Object(n.b)({formats:{full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:Object(n.b)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Object(n.b)({formats:{full:"{{date}} '\u0915\u094b' {{time}}",long:"{{date}} '\u0915\u094b' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l={lastWeek:"'\u092a\u093f\u091b\u0932\u0947' eeee p",yesterday:"'\u0915\u0932' p",today:"'\u0906\u091c' p",tomorrow:"'\u0915\u0932' p",nextWeek:"eeee '\u0915\u094b' p",other:"P"},c={ordinalNumber:Object(n.c)({matchPattern:/^[\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f]+/i,parsePattern:/^[\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f]+/i,valueCallback:function(t){var e=t.toString().replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,(function(t){return i.number[t]}));return Number(e)}}),era:Object(n.d)({matchPatterns:{narrow:/^(\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935|\u0908\u0938\u094d\u0935\u0940)/i,abbreviated:/^(\u0908\u0938\u093e\.?\s?\u092a\u0942\u0930\u094d\u0935\.?|\u0908\u0938\u093e\.?)/i,wide:/^(\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935|\u0908\u0938\u0935\u0940 \u092a\u0942\u0930\u094d\u0935|\u0908\u0938\u0935\u0940 \u0938\u0928|\u0908\u0938\u0935\u0940)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Object(n.d)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0924\u093f[1234]/i,wide:/^[1234](\u092a\u0939\u0932\u0940|\u0926\u0942\u0938\u0930\u0940|\u0924\u0940\u0938\u0930\u0940|\u091a\u094c\u0925\u0940)? \u0924\u093f\u092e\u093e\u0939\u0940/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(n.d)({matchPatterns:{narrow:/^[\u091c\u092b\u093c\u092e\u093e\u0905\u092a\u094d\u092e\u0908\u091c\u0942\u0928\u091c\u0941\u0905\u0917\u0938\u093f\u0905\u0915\u094d\u0924\u0928\u0926\u093f]/i,abbreviated:/^(\u091c\u0928|\u092b\u093c\u0930|\u092e\u093e\u0930\u094d\u091a|\u0905\u092a\u094d|\u092e\u0908|\u091c\u0942\u0928|\u091c\u0941\u0932|\u0905\u0917|\u0938\u093f\u0924|\u0905\u0915\u094d\u0924\u0942|\u0928\u0935|\u0926\u093f\u0938)/i,wide:/^(\u091c\u0928\u0935\u0930\u0940|\u092b\u093c\u0930\u0935\u0930\u0940|\u092e\u093e\u0930\u094d\u091a|\u0905\u092a\u094d\u0930\u0948\u0932|\u092e\u0908|\u091c\u0942\u0928|\u091c\u0941\u0932\u093e\u0908|\u0905\u0917\u0938\u094d\u0924|\u0938\u093f\u0924\u0902\u092c\u0930|\u0905\u0915\u094d\u0924\u0942\u092c\u0930|\u0928\u0935\u0902\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u091c/i,/^\u092b\u093c/i,/^\u092e\u093e/i,/^\u0905\u092a\u094d/i,/^\u092e\u0908/i,/^\u091c\u0942/i,/^\u091c\u0941/i,/^\u0905\u0917/i,/^\u0938\u093f/i,/^\u0905\u0915\u094d\u0924\u0942/i,/^\u0928/i,/^\u0926\u093f/i],any:[/^\u091c\u0928/i,/^\u092b\u093c/i,/^\u092e\u093e/i,/^\u0905\u092a\u094d/i,/^\u092e\u0908/i,/^\u091c\u0942/i,/^\u091c\u0941/i,/^\u0905\u0917/i,/^\u0938\u093f/i,/^\u0905\u0915\u094d\u0924\u0942/i,/^\u0928\u0935/i,/^\u0926\u093f\u0938/i]},defaultParseWidth:"any"}),day:Object(n.d)({matchPatterns:{narrow:/^[\u0930\u0935\u093f\u0938\u094b\u092e\u092e\u0902\u0917\u0932\u092c\u0941\u0927\u0917\u0941\u0930\u0941\u0936\u0941\u0915\u094d\u0930\u0936\u0928\u093f]/i,short:/^(\u0930\u0935\u093f|\u0938\u094b\u092e|\u092e\u0902\u0917\u0932|\u092c\u0941\u0927|\u0917\u0941\u0930\u0941|\u0936\u0941\u0915\u094d\u0930|\u0936\u0928\u093f)/i,abbreviated:/^(\u0930\u0935\u093f|\u0938\u094b\u092e|\u092e\u0902\u0917\u0932|\u092c\u0941\u0927|\u0917\u0941\u0930\u0941|\u0936\u0941\u0915\u094d\u0930|\u0936\u0928\u093f)/i,wide:/^(\u0930\u0935\u093f\u0935\u093e\u0930|\u0938\u094b\u092e\u0935\u093e\u0930|\u092e\u0902\u0917\u0932\u0935\u093e\u0930|\u092c\u0941\u0927\u0935\u093e\u0930|\u0917\u0941\u0930\u0941\u0935\u093e\u0930|\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930|\u0936\u0928\u093f\u0935\u093e\u0930)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0930\u0935\u093f/i,/^\u0938\u094b\u092e/i,/^\u092e\u0902\u0917\u0932/i,/^\u092c\u0941\u0927/i,/^\u0917\u0941\u0930\u0941/i,/^\u0936\u0941\u0915\u094d\u0930/i,/^\u0936\u0928\u093f/i],any:[/^\u0930\u0935\u093f/i,/^\u0938\u094b\u092e/i,/^\u092e\u0902\u0917\u0932/i,/^\u092c\u0941\u0927/i,/^\u0917\u0941\u0930\u0941/i,/^\u0936\u0941\u0915\u094d\u0930/i,/^\u0936\u0928\u093f/i]},defaultParseWidth:"any"}),dayPeriod:Object(n.d)({matchPatterns:{narrow:/^(\u092a\u0942|\u0905|\u092e|\u0926.\?|\u0938\u0941|\u0926\u094b|\u0936\u093e|\u0930\u093e)/i,any:/^(\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928|\u0905\u092a\u0930\u093e\u0939\u094d\u0928|\u092e|\u0926.\?|\u0938\u0941|\u0926\u094b|\u0936\u093e|\u0930\u093e)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928/i,pm:/^\u0905\u092a\u0930\u093e\u0939\u094d\u0928/i,midnight:/^\u092e\u0927\u094d\u092f/i,noon:/^\u0926\u094b/i,morning:/\u0938\u0941/i,afternoon:/\u0926\u094b/i,evening:/\u0936\u093e/i,night:/\u0930\u093e/i}},defaultParseWidth:"any"})},h={code:"hi",formatDistance:function(t,e,a){var n,i=u[t];return n="string"===typeof i?i:1===e?i.one:i.other.replace("{{count}}",r(e)),null!==a&&void 0!==a&&a.addSuffix?a.comparison&&a.comparison>0?n+"\u092e\u0947 ":n+" \u092a\u0939\u0932\u0947":n},formatLong:d,formatRelative:function(t,e,a,n){return l[t]},localize:o,match:c,options:{weekStartsOn:0,firstWeekContainsDate:4}};e.default=h},333:function(t,e,a){"use strict";function n(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth,n=t.formats[a]||t.formats[t.defaultWidth];return n}}function i(t){return function(e,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=i.width?String(i.width):r;n=t.formattingValues[o]||t.formattingValues[r]}else{var u=t.defaultWidth,d=i.width?String(i.width):t.defaultWidth;n=t.values[d]||t.values[u]}return n[t.argumentCallback?t.argumentCallback(e):e]}}function r(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var i=n[0],r=e.match(t.parsePattern);if(!r)return null;var o=t.valueCallback?t.valueCallback(r[0]):r[0];o=a.valueCallback?a.valueCallback(o):o;var u=e.slice(i.length);return{value:o,rest:u}}}function o(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,i=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],r=e.match(i);if(!r)return null;var o,l=r[0],c=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(c)?d(c,(function(t){return t.test(l)})):u(c,(function(t){return t.test(l)}));o=t.valueCallback?t.valueCallback(h):h,o=a.valueCallback?a.valueCallback(o):o;var s=e.slice(l.length);return{value:o,rest:s}}}function u(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}function d(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return o}))}}]);
//# sourceMappingURL=73.a267ec23.chunk.js.map