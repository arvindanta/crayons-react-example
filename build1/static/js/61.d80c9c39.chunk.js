(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[61],{237:function(t,e,a){"use strict";a.r(e);var n=a(333),i={lessThanXSeconds:{one:"\u0561\u057e\u0565\u056c\u056b \u0584\u056b\u0579 \u0584\u0561\u0576 1 \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",other:"\u0561\u057e\u0565\u056c\u056b \u0584\u056b\u0579 \u0584\u0561\u0576 {{count}} \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576"},xSeconds:{one:"1 \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",other:"{{count}} \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576"},halfAMinute:"\u056f\u0565\u057d \u0580\u0578\u057a\u0565",lessThanXMinutes:{one:"\u0561\u057e\u0565\u056c\u056b \u0584\u056b\u0579 \u0584\u0561\u0576 1 \u0580\u0578\u057a\u0565",other:"\u0561\u057e\u0565\u056c\u056b \u0584\u056b\u0579 \u0584\u0561\u0576 {{count}} \u0580\u0578\u057a\u0565"},xMinutes:{one:"1 \u0580\u0578\u057a\u0565",other:"{{count}} \u0580\u0578\u057a\u0565"},aboutXHours:{one:"\u0574\u0578\u057f 1 \u056a\u0561\u0574",other:"\u0574\u0578\u057f {{count}} \u056a\u0561\u0574"},xHours:{one:"1 \u056a\u0561\u0574",other:"{{count}} \u056a\u0561\u0574"},xDays:{one:"1 \u0585\u0580",other:"{{count}} \u0585\u0580"},aboutXWeeks:{one:"\u0574\u0578\u057f 1 \u0577\u0561\u0562\u0561\u0569",other:"\u0574\u0578\u057f {{count}} \u0577\u0561\u0562\u0561\u0569"},xWeeks:{one:"1 \u0577\u0561\u0562\u0561\u0569",other:"{{count}} \u0577\u0561\u0562\u0561\u0569"},aboutXMonths:{one:"\u0574\u0578\u057f 1 \u0561\u0574\u056b\u057d",other:"\u0574\u0578\u057f {{count}} \u0561\u0574\u056b\u057d"},xMonths:{one:"1 \u0561\u0574\u056b\u057d",other:"{{count}} \u0561\u0574\u056b\u057d"},aboutXYears:{one:"\u0574\u0578\u057f 1 \u057f\u0561\u0580\u056b",other:"\u0574\u0578\u057f {{count}} \u057f\u0561\u0580\u056b"},xYears:{one:"1 \u057f\u0561\u0580\u056b",other:"{{count}} \u057f\u0561\u0580\u056b"},overXYears:{one:"\u0561\u057e\u0565\u056c\u056b \u0584\u0561\u0576 1 \u057f\u0561\u0580\u056b",other:"\u0561\u057e\u0565\u056c\u056b \u0584\u0561\u0576 {{count}} \u057f\u0561\u0580\u056b"},almostXYears:{one:"\u0570\u0561\u0574\u0561\u0580\u0575\u0561 1 \u057f\u0561\u0580\u056b",other:"\u0570\u0561\u0574\u0561\u0580\u0575\u0561 {{count}} \u057f\u0561\u0580\u056b"}};var r={date:Object(n.b)({formats:{full:"d MMMM, y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:Object(n.b)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(n.b)({formats:{full:"{{date}} '\u056a\u2024'{{time}}",long:"{{date}} '\u056a\u2024'{{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'\u0576\u0561\u056d\u0578\u0580\u0564' eeee p'\u058a\u056b\u0576'",yesterday:"'\u0565\u0580\u0565\u056f' p'\u058a\u056b\u0576'",today:"'\u0561\u0575\u057d\u0585\u0580' p'\u058a\u056b\u0576'",tomorrow:"'\u057e\u0561\u0572\u0568' p'\u058a\u056b\u0576'",nextWeek:"'\u0570\u0561\u057b\u0578\u0580\u0564' eeee p'\u058a\u056b\u0576'",other:"P"};var u={code:"hy",formatDistance:function(t,e,a){var n;return a=a||{},n="string"===typeof i[t]?i[t]:1===e?i[t].one:i[t].other.replace("{{count}}",e),a.addSuffix?a.comparison>0?n+" \u0570\u0565\u057f\u0578":n+" \u0561\u057c\u0561\u057b":n},formatLong:r,formatRelative:function(t,e,a,n){return o[t]},localize:{ordinalNumber:function(t,e){var a=Number(t),n=a%100;return n<10&&n%10===1?a+"\u058a\u056b\u0576":a+"\u058a\u0580\u0564"},era:Object(n.a)({values:{narrow:["\u0554","\u0544"],abbreviated:["\u0554\u0531","\u0544\u0539"],wide:["\u0554\u0580\u056b\u057d\u057f\u0578\u057d\u056b\u0581 \u0561\u057c\u0561\u057b","\u0544\u0565\u0580 \u0569\u057e\u0561\u0580\u056f\u0578\u0582\u0569\u0575\u0561\u0576"]},defaultWidth:"wide"}),quarter:Object(n.a)({values:{narrow:["1","2","3","4"],abbreviated:["\u05541","\u05542","\u05543","\u05544"],wide:["1\u058a\u056b\u0576 \u0584\u0561\u057c\u0578\u0580\u0564","2\u058a\u0580\u0564 \u0584\u0561\u057c\u0578\u0580\u0564","3\u058a\u0580\u0564 \u0584\u0561\u057c\u0578\u0580\u0564","4\u058a\u0580\u0564 \u0584\u0561\u057c\u0578\u0580\u0564"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(n.a)({values:{narrow:["\u0540","\u0553","\u0544","\u0531","\u0544","\u0540","\u0540","\u0555","\u054d","\u0540","\u0546","\u0534"],abbreviated:["\u0570\u0578\u0582\u0576","\u0583\u0565\u057f","\u0574\u0561\u0580","\u0561\u057a\u0580","\u0574\u0561\u0575","\u0570\u0578\u0582\u0576","\u0570\u0578\u0582\u056c","\u0585\u0563\u057d","\u057d\u0565\u057a","\u0570\u0578\u056f","\u0576\u0578\u0575","\u0564\u0565\u056f"],wide:["\u0570\u0578\u0582\u0576\u057e\u0561\u0580","\u0583\u0565\u057f\u0580\u057e\u0561\u0580","\u0574\u0561\u0580\u057f","\u0561\u057a\u0580\u056b\u056c","\u0574\u0561\u0575\u056b\u057d","\u0570\u0578\u0582\u0576\u056b\u057d","\u0570\u0578\u0582\u056c\u056b\u057d","\u0585\u0563\u0578\u057d\u057f\u0578\u057d","\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580","\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580","\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580","\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580"]},defaultWidth:"wide"}),day:Object(n.a)({values:{narrow:["\u053f","\u0535","\u0535","\u0549","\u0540","\u0548","\u0547"],short:["\u056f\u0580","\u0565\u0580","\u0565\u0584","\u0579\u0584","\u0570\u0563","\u0578\u0582\u0580","\u0577\u0562"],abbreviated:["\u056f\u056b\u0580","\u0565\u0580\u056f","\u0565\u0580\u0584","\u0579\u0578\u0580","\u0570\u0576\u0563","\u0578\u0582\u0580\u0562","\u0577\u0561\u0562"],wide:["\u056f\u056b\u0580\u0561\u056f\u056b","\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b","\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b","\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b","\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b","\u0578\u0582\u0580\u0562\u0561\u0569","\u0577\u0561\u0562\u0561\u0569"]},defaultWidth:"wide"}),dayPeriod:Object(n.a)({values:{narrow:{am:"a",pm:"p",midnight:"\u056f\u0565\u057d\u0563\u0577",noon:"\u056f\u0565\u057d\u0585\u0580",morning:"\u0561\u057c\u0561\u057e\u0578\u057f",afternoon:"\u0581\u0565\u0580\u0565\u056f",evening:"\u0565\u0580\u0565\u056f\u0578",night:"\u0563\u056b\u0577\u0565\u0580"},abbreviated:{am:"AM",pm:"PM",midnight:"\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580",noon:"\u056f\u0565\u057d\u0585\u0580",morning:"\u0561\u057c\u0561\u057e\u0578\u057f",afternoon:"\u0581\u0565\u0580\u0565\u056f",evening:"\u0565\u0580\u0565\u056f\u0578",night:"\u0563\u056b\u0577\u0565\u0580"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580",noon:"\u056f\u0565\u057d\u0585\u0580",morning:"\u0561\u057c\u0561\u057e\u0578\u057f",afternoon:"\u0581\u0565\u0580\u0565\u056f",evening:"\u0565\u0580\u0565\u056f\u0578",night:"\u0563\u056b\u0577\u0565\u0580"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"\u056f\u0565\u057d\u0563\u0577",noon:"\u056f\u0565\u057d\u0585\u0580",morning:"\u0561\u057c\u0561\u057e\u0578\u057f\u0568",afternoon:"\u0581\u0565\u0580\u0565\u056f\u0568",evening:"\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576",night:"\u0563\u056b\u0577\u0565\u0580\u0568"},abbreviated:{am:"AM",pm:"PM",midnight:"\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580\u056b\u0576",noon:"\u056f\u0565\u057d\u0585\u0580\u056b\u0576",morning:"\u0561\u057c\u0561\u057e\u0578\u057f\u0568",afternoon:"\u0581\u0565\u0580\u0565\u056f\u0568",evening:"\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576",night:"\u0563\u056b\u0577\u0565\u0580\u0568"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580\u056b\u0576",noon:"\u056f\u0565\u057d\u0585\u0580\u056b\u0576",morning:"\u0561\u057c\u0561\u057e\u0578\u057f\u0568",afternoon:"\u0581\u0565\u0580\u0565\u056f\u0568",evening:"\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576",night:"\u0563\u056b\u0577\u0565\u0580\u0568"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Object(n.c)({matchPattern:/^(\d+)((-|\u058a)?(\u056b\u0576|\u0580\u0564))?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(n.d)({matchPatterns:{narrow:/^(\u0554|\u0544)/i,abbreviated:/^(\u0554\.?\s?\u0531\.?|\u0544\.?\s?\u0539\.?\s?\u0531\.?|\u0544\.?\s?\u0539\.?|\u0554\.?\s?\u0540\.?)/i,wide:/^(\u0584\u0580\u056b\u057d\u057f\u0578\u057d\u056b\u0581 \u0561\u057c\u0561\u057b|\u0574\u0565\u0580 \u0569\u057e\u0561\u0580\u056f\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u056b\u0581 \u0561\u057c\u0561\u057b|\u0574\u0565\u0580 \u0569\u057e\u0561\u0580\u056f\u0578\u0582\u0569\u0575\u0561\u0576|\u0584\u0580\u056b\u057d\u057f\u0578\u057d\u056b\u0581 \u0570\u0565\u057f\u0578)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u0584|\u0574)/i]},defaultParseWidth:"any"}),quarter:Object(n.d)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0584[1234]/i,wide:/^[1234]((-|\u058a)?(\u056b\u0576|\u0580\u0564)) \u0584\u0561\u057c\u0578\u0580\u0564/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(n.d)({matchPatterns:{narrow:/^[\u0570\u0583\u0574\u0561\u0585\u057d\u0576\u0564]/i,abbreviated:/^(\u0570\u0578\u0582\u0576|\u0583\u0565\u057f|\u0574\u0561\u0580|\u0561\u057a\u0580|\u0574\u0561\u0575|\u0570\u0578\u0582\u0576|\u0570\u0578\u0582\u056c|\u0585\u0563\u057d|\u057d\u0565\u057a|\u0570\u0578\u056f|\u0576\u0578\u0575|\u0564\u0565\u056f)/i,wide:/^(\u0570\u0578\u0582\u0576\u057e\u0561\u0580|\u0583\u0565\u057f\u0580\u057e\u0561\u0580|\u0574\u0561\u0580\u057f|\u0561\u057a\u0580\u056b\u056c|\u0574\u0561\u0575\u056b\u057d|\u0570\u0578\u0582\u0576\u056b\u057d|\u0570\u0578\u0582\u056c\u056b\u057d|\u0585\u0563\u0578\u057d\u057f\u0578\u057d|\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580|\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580|\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580|\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0570/i,/^\u0583/i,/^\u0574/i,/^\u0561/i,/^\u0574/i,/^\u0570/i,/^\u0570/i,/^\u0585/i,/^\u057d/i,/^\u0570/i,/^\u0576/i,/^\u0564/i],any:[/^\u0570\u0578\u0582/i,/^\u0583/i,/^\u0574\u0561\u0580/i,/^\u0561/i,/^\u0574\u0561\u0575/i,/^\u0570\u0578\u0582\u0576/i,/^\u0570\u0578\u0582\u056c/i,/^\u0585/i,/^\u057d/i,/^\u0570\u0578\u056f/i,/^\u0576/i,/^\u0564/i]},defaultParseWidth:"any"}),day:Object(n.d)({matchPatterns:{narrow:/^[\u0565\u0579\u0570\u0578\u0577\u056f]/i,short:/^(\u056f\u0580|\u0565\u0580|\u0565\u0584|\u0579\u0584|\u0570\u0563|\u0578\u0582\u0580|\u0577\u0562)/i,abbreviated:/^(\u056f\u056b\u0580|\u0565\u0580\u056f|\u0565\u0580\u0584|\u0579\u0578\u0580|\u0570\u0576\u0563|\u0578\u0582\u0580\u0562|\u0577\u0561\u0562)/i,wide:/^(\u056f\u056b\u0580\u0561\u056f\u056b|\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b|\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b|\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b|\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b|\u0578\u0582\u0580\u0562\u0561\u0569|\u0577\u0561\u0562\u0561\u0569)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u056f/i,/^\u0565/i,/^\u0565/i,/^\u0579/i,/^\u0570/i,/^(\u0578|\u0548)/,/^\u0577/i],short:[/^\u056f/i,/^\u0565\u0580/i,/^\u0565\u0584/i,/^\u0579/i,/^\u0570/i,/^(\u0578|\u0548)/,/^\u0577/i],abbreviated:[/^\u056f/i,/^\u0565\u0580\u056f/i,/^\u0565\u0580\u0584/i,/^\u0579/i,/^\u0570/i,/^(\u0578|\u0548)/,/^\u0577/i],wide:[/^\u056f/i,/^\u0565\u0580\u056f/i,/^\u0565\u0580\u0565/i,/^\u0579/i,/^\u0570/i,/^(\u0578|\u0548)/,/^\u0577/i]},defaultParseWidth:"any"}),dayPeriod:Object(n.d)({matchPatterns:{narrow:/^([ap]|\u056f\u0565\u057d\u0563\u0577|\u056f\u0565\u057d\u0585\u0580|(\u0561\u057c\u0561\u057e\u0578\u057f\u0568?|\u0581\u0565\u0580\u0565\u056f\u0568?|\u0565\u0580\u0565\u056f\u0578(\u0575\u0561\u0576)?|\u0563\u056b\u0577\u0565\u0580\u0568?))/i,any:/^([ap]\.?\s?m\.?|\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580(\u056b\u0576)?|\u056f\u0565\u057d\u0585\u0580(\u056b\u0576)?|(\u0561\u057c\u0561\u057e\u0578\u057f\u0568?|\u0581\u0565\u0580\u0565\u056f\u0568?|\u0565\u0580\u0565\u056f\u0578(\u0575\u0561\u0576)?|\u0563\u056b\u0577\u0565\u0580\u0568?))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580/i,noon:/\u056f\u0565\u057d\u0585\u0580/i,morning:/\u0561\u057c\u0561\u057e\u0578\u057f/i,afternoon:/\u0581\u0565\u0580\u0565\u056f/i,evening:/\u0565\u0580\u0565\u056f\u0578/i,night:/\u0563\u056b\u0577\u0565\u0580/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=u},333:function(t,e,a){"use strict";function n(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth,n=t.formats[a]||t.formats[t.defaultWidth];return n}}function i(t){return function(e,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=i.width?String(i.width):r;n=t.formattingValues[o]||t.formattingValues[r]}else{var u=t.defaultWidth,d=i.width?String(i.width):t.defaultWidth;n=t.values[d]||t.values[u]}return n[t.argumentCallback?t.argumentCallback(e):e]}}function r(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var i=n[0],r=e.match(t.parsePattern);if(!r)return null;var o=t.valueCallback?t.valueCallback(r[0]):r[0];o=a.valueCallback?a.valueCallback(o):o;var u=e.slice(i.length);return{value:o,rest:u}}}function o(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,i=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],r=e.match(i);if(!r)return null;var o,l=r[0],s=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(s)?d(s,(function(t){return t.test(l)})):u(s,(function(t){return t.test(l)}));o=t.valueCallback?t.valueCallback(h):h,o=a.valueCallback?a.valueCallback(o):o;var c=e.slice(l.length);return{value:o,rest:c}}}function u(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}function d(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return o}))}}]);
//# sourceMappingURL=61.d80c9c39.chunk.js.map