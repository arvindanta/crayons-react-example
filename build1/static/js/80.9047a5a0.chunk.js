(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[80],{262:function(a,e,i){"use strict";i.r(e);var t=i(333),n={lessThanXSeconds:{one:"mai pu\u021bin de o secund\u0103",other:"mai pu\u021bin de {{count}} secunde"},xSeconds:{one:"1 secund\u0103",other:"{{count}} secunde"},halfAMinute:"jum\u0103tate de minut",lessThanXMinutes:{one:"mai pu\u021bin de un minut",other:"mai pu\u021bin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 or\u0103",other:"circa {{count}} ore"},xHours:{one:"1 or\u0103",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXWeeks:{one:"circa o s\u0103pt\u0103m\xe2n\u0103",other:"circa {{count}} s\u0103pt\u0103m\xe2ni"},xWeeks:{one:"1 s\u0103pt\u0103m\xe2n\u0103",other:"{{count}} s\u0103pt\u0103m\xe2ni"},aboutXMonths:{one:"circa 1 lun\u0103",other:"circa {{count}} luni"},xMonths:{one:"1 lun\u0103",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}};var r={date:Object(t.b)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:Object(t.b)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(t.b)({formats:{full:"{{date}} 'la' {{time}}",long:"{{date}} 'la' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"eeee 'trecut\u0103 la' p",yesterday:"'ieri la' p",today:"'ast\u0103zi la' p",tomorrow:"'m\xe2ine la' p",nextWeek:"eeee 'viitoare la' p",other:"P"};var u={code:"ro",formatDistance:function(a,e,i){var t;return i=i||{},t="string"===typeof n[a]?n[a]:1===e?n[a].one:n[a].other.replace("{{count}}",e),i.addSuffix?i.comparison>0?"\xeen "+t:t+" \xeen urm\u0103":t},formatLong:r,formatRelative:function(a,e,i,t){return o[a]},localize:{ordinalNumber:function(a){var e=Number(a);return String(e)},era:Object(t.a)({values:{narrow:["\xce","D"],abbreviated:["\xce.d.C.","D.C."],wide:["\xcenainte de Cristos","Dup\u0103 Cristos"]},defaultWidth:"wide"}),quarter:Object(t.a)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["primul trimestru","al doilea trimestru","al treilea trimestru","al patrulea trimestru"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:Object(t.a)({values:{narrow:["I","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],wide:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},defaultWidth:"wide"}),day:Object(t.a)({values:{narrow:["d","l","m","m","j","v","s"],short:["du","lu","ma","mi","jo","vi","s\xe2"],abbreviated:["dum","lun","mar","mie","joi","vin","s\xe2m"],wide:["duminic\u0103","luni","mar\u021bi","miercuri","joi","vineri","s\xe2mb\u0103t\u0103"]},defaultWidth:"wide"}),dayPeriod:Object(t.a)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"ami",morning:"dim",afternoon:"da",evening:"s",night:"n"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Object(t.c)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:Object(t.d)({matchPatterns:{narrow:/^(\xce|D)/i,abbreviated:/^(\xce\.?\s?d\.?\s?C\.?|\xce\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,wide:/^(\xcenainte de Cristos|\xcenaintea erei noastre|Dup\u0103 Cristos|Era noastr\u0103)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\xceC/i,/^DC/i],wide:[/^(\xcenainte de Cristos|\xcenaintea erei noastre)/i,/^(Dup\u0103 Cristos|Era noastr\u0103)/i]},defaultParseWidth:"any"}),quarter:Object(t.d)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^trimestrul [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:Object(t.d)({matchPatterns:{narrow:/^[ifmaasond]/i,abbreviated:/^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,wide:/^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ia/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^iun/i,/^iul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(t.d)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(d|l|ma|mi|j|v|s)/i,abbreviated:/^(dum|lun|mar|mie|jo|vi|s\xe2)/i,wide:/^(duminica|luni|mar\u0163i|miercuri|joi|vineri|s\xe2mb\u0103t\u0103)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^mi/i,/^j/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:Object(t.d)({matchPatterns:{narrow:/^(a|p|mn|a|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i,any:/^([ap]\.?\s?m\.?|miezul nop\u021bii|amiaza|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/amiaza/i,morning:/diminea\u0163a/i,afternoon:/dup\u0103-amiaza/i,evening:/seara/i,night:/noaptea/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=u},333:function(a,e,i){"use strict";function t(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.width?String(e.width):a.defaultWidth,t=a.formats[i]||a.formats[a.defaultWidth];return t}}function n(a){return function(e,i){var t,n=i||{};if("formatting"===(n.context?String(n.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,o=n.width?String(n.width):r;t=a.formattingValues[o]||a.formattingValues[r]}else{var u=a.defaultWidth,m=n.width?String(n.width):a.defaultWidth;t=a.values[m]||a.values[u]}return t[a.argumentCallback?a.argumentCallback(e):e]}}function r(a){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.match(a.matchPattern);if(!t)return null;var n=t[0],r=e.match(a.parsePattern);if(!r)return null;var o=a.valueCallback?a.valueCallback(r[0]):r[0];o=i.valueCallback?i.valueCallback(o):o;var u=e.slice(n.length);return{value:o,rest:u}}}function o(a){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=i.width,n=t&&a.matchPatterns[t]||a.matchPatterns[a.defaultMatchWidth],r=e.match(n);if(!r)return null;var o,d=r[0],s=t&&a.parsePatterns[t]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(s)?m(s,(function(a){return a.test(d)})):u(s,(function(a){return a.test(d)}));o=a.valueCallback?a.valueCallback(l):l,o=i.valueCallback?i.valueCallback(o):o;var c=e.slice(d.length);return{value:o,rest:c}}}function u(a,e){for(var i in a)if(a.hasOwnProperty(i)&&e(a[i]))return i}function m(a,e){for(var i=0;i<a.length;i++)if(e(a[i]))return i}i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return o}))}}]);
//# sourceMappingURL=80.9047a5a0.chunk.js.map