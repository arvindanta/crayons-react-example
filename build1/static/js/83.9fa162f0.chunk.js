(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[83],{269:function(t,a,e){"use strict";e.r(a);var n=e(333),r={lessThanXSeconds:{singular:"mindre \xe4n en sekund",plural:"mindre \xe4n {{count}} sekunder"},xSeconds:{singular:"en sekund",plural:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{singular:"mindre \xe4n en minut",plural:"mindre \xe4n {{count}} minuter"},xMinutes:{singular:"en minut",plural:"{{count}} minuter"},aboutXHours:{singular:"ungef\xe4r en timme",plural:"ungef\xe4r {{count}} timmar"},xHours:{singular:"en timme",plural:"{{count}} timmar"},xDays:{singular:"en dag",plural:"{{count}} dagar"},aboutXWeeks:{singular:"ungef\xe4r en vecka",plural:"ungef\xe4r {{count}} vecka"},xWeeks:{singular:"en vecka",plural:"{{count}} vecka"},aboutXMonths:{singular:"ungef\xe4r en m\xe5nad",plural:"ungef\xe4r {{count}} m\xe5nader"},xMonths:{singular:"en m\xe5nad",plural:"{{count}} m\xe5nader"},aboutXYears:{singular:"ungef\xe4r ett \xe5r",plural:"ungef\xe4r {{count}} \xe5r"},xYears:{singular:"ett \xe5r",plural:"{{count}} \xe5r"},overXYears:{singular:"\xf6ver ett \xe5r",plural:"\xf6ver {{count}} \xe5r"},almostXYears:{singular:"n\xe4stan ett \xe5r",plural:"n\xe4stan {{count}} \xe5r"}},i=["noll","en","tv\xe5","tre","fyra","fem","sex","sju","\xe5tta","nio","tio","elva","tolv"];var u={date:Object(n.b)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},defaultWidth:"full"}),time:Object(n.b)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(n.b)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},l={lastWeek:"'i' EEEE's kl.' p",yesterday:"'ig\xe5r kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"};var d={code:"sv",formatDistance:function(t,a,e){e=e||{onlyNumeric:!1};var n,u=r[t];return n="string"===typeof u?u:0===a||a>1?e.onlyNumeric?u.plural.replace("{{count}}",a):u.plural.replace("{{count}}",a<13?i[a]:a):u.singular,e.addSuffix?e.comparison>0?"om "+n:n+" sedan":n},formatLong:u,formatRelative:function(t,a,e,n){return l[t]},localize:{ordinalNumber:function(t){var a=Number(t),e=a%100;if(e>20||e<10)switch(e%10){case 1:case 2:return a+":a"}return a+":e"},era:Object(n.a)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["f\xf6re Kristus","efter Kristus"]},defaultWidth:"wide"}),quarter:Object(n.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(n.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},defaultWidth:"wide"}),day:Object(n.a)({values:{narrow:["S","M","T","O","T","F","L"],short:["s\xf6","m\xe5","ti","on","to","fr","l\xf6"],abbreviated:["s\xf6n","m\xe5n","tis","ons","tors","fre","l\xf6r"],wide:["s\xf6ndag","m\xe5ndag","tisdag","onsdag","torsdag","fredag","l\xf6rdag"]},defaultWidth:"wide"}),dayPeriod:Object(n.a)({values:{narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kv\xe4ll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kv\xe4ll",night:"natt"},wide:{am:"f\xf6rmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kv\xe4ll",night:"natt"}},defaultWidth:"wide",formattingValues:{narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 efterm.",evening:"p\xe5 kv\xe4llen",night:"p\xe5 natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 efterm.",evening:"p\xe5 kv\xe4llen",night:"p\xe5 natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"p\xe5 morgonen",afternoon:"p\xe5 eftermiddagen",evening:"p\xe5 kv\xe4llen",night:"p\xe5 natten"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Object(n.c)({matchPattern:/^(\d+)(:a|:e)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(n.d)({matchPatterns:{narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(f\xf6re Kristus|f\xf6re v\xe5r tid|efter Kristus|v\xe5r tid)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^[ev]/i]},defaultParseWidth:"any"}),quarter:Object(n.d)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(n.d)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(n.d)({matchPatterns:{narrow:/^[smtofl]/i,short:/^(s\xf6|m\xe5|ti|on|to|fr|l\xf6)/i,abbreviated:/^(s\xf6n|m\xe5n|tis|ons|tors|fre|l\xf6r)/i,wide:/^(s\xf6ndag|m\xe5ndag|tisdag|onsdag|torsdag|fredag|l\xf6rdag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:Object(n.d)({matchPatterns:{any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(p\xe5) (morgonen|eftermiddagen|kv\xe4llen|natten))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kv\xe4ll/i,night:/natt/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=d},333:function(t,a,e){"use strict";function n(t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=a.width?String(a.width):t.defaultWidth,n=t.formats[e]||t.formats[t.defaultWidth];return n}}function r(t){return function(a,e){var n,r=e||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,u=r.width?String(r.width):i;n=t.formattingValues[u]||t.formattingValues[i]}else{var l=t.defaultWidth,d=r.width?String(r.width):t.defaultWidth;n=t.values[d]||t.values[l]}return n[t.argumentCallback?t.argumentCallback(a):a]}}function i(t){return function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.match(t.matchPattern);if(!n)return null;var r=n[0],i=a.match(t.parsePattern);if(!i)return null;var u=t.valueCallback?t.valueCallback(i[0]):i[0];u=e.valueCallback?e.valueCallback(u):u;var l=a.slice(r.length);return{value:u,rest:l}}}function u(t){return function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.width,r=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],i=a.match(r);if(!i)return null;var u,o=i[0],m=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(m)?d(m,(function(t){return t.test(o)})):l(m,(function(t){return t.test(o)}));u=t.valueCallback?t.valueCallback(s):s,u=e.valueCallback?e.valueCallback(u):u;var f=a.slice(o.length);return{value:u,rest:f}}}function l(t,a){for(var e in t)if(t.hasOwnProperty(e)&&a(t[e]))return e}function d(t,a){for(var e=0;e<t.length;e++)if(a(t[e]))return e}e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"d",(function(){return u}))}}]);
//# sourceMappingURL=83.9fa162f0.chunk.js.map