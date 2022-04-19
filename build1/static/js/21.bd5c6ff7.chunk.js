(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[21],{226:function(e,t,a){"use strict";a.r(t);var i=a(338),n=a(341),r=a(333),o={date:Object(r.b)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"yy-MM-dd"},defaultWidth:"full"}),time:Object(r.b)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.b)({formats:{full:"{{date}} '\xe0' {{time}}",long:"{{date}} '\xe0' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={code:"fr-CA",formatDistance:i.a,formatLong:o,formatRelative:n.a,localize:i.b,match:i.c,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=u},333:function(e,t,a){"use strict";function i(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,i=e.formats[a]||e.formats[e.defaultWidth];return i}}function n(e){return function(t,a){var i,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=n.width?String(n.width):r;i=e.formattingValues[o]||e.formattingValues[r]}else{var u=e.defaultWidth,d=n.width?String(n.width):e.defaultWidth;i=e.values[d]||e.values[u]}return i[e.argumentCallback?e.argumentCallback(t):t]}}function r(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(e.matchPattern);if(!i)return null;var n=i[0],r=t.match(e.parsePattern);if(!r)return null;var o=e.valueCallback?e.valueCallback(r[0]):r[0];o=a.valueCallback?a.valueCallback(o):o;var u=t.slice(n.length);return{value:o,rest:u}}}function o(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,n=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],r=t.match(n);if(!r)return null;var o,s=r[0],m=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(m)?d(m,(function(e){return e.test(s)})):u(m,(function(e){return e.test(s)}));o=e.valueCallback?e.valueCallback(l):l,o=a.valueCallback?a.valueCallback(o):o;var c=t.slice(s.length);return{value:o,rest:c}}}function u(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function d(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return o}))},338:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return u}));var i=a(333),n={lessThanXSeconds:{one:"moins d\u2019une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d\u2019une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d\u2019un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu\u2019un an",other:"presque {{count}} ans"}},r=function(e,t,a){var i,r=n[e];return i="string"===typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),null!==a&&void 0!==a&&a.addSuffix?a.comparison&&a.comparison>0?"dans "+i:"il y a "+i:i},o={ordinalNumber:function(e,t){var a=Number(e),i=null===t||void 0===t?void 0:t.unit;if(0===a)return"0";return a+(1===a?i&&["year","week","hour","minute","second"].includes(i)?"\xe8re":"er":"\xe8me")},era:Object(i.a)({values:{narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant J\xe9sus-Christ","apr\xe8s J\xe9sus-Christ"]},defaultWidth:"wide"}),quarter:Object(i.a)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2\xe8me trim.","3\xe8me trim.","4\xe8me trim."],wide:["1er trimestre","2\xe8me trimestre","3\xe8me trimestre","4\xe8me trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Object(i.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","f\xe9vr.","mars","avr.","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],wide:["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"]},defaultWidth:"wide"}),day:Object(i.a)({values:{narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},defaultWidth:"wide"}),dayPeriod:Object(i.a)({values:{narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"apr\xe8s-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l\u2019apr\xe8s-midi",evening:"du soir",night:"du matin"}},defaultWidth:"wide"})},u={ordinalNumber:Object(i.c)({matchPattern:/^(\d+)(i\xe8me|\xe8re|\xe8me|er|e)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e)}}),era:Object(i.d)({matchPatterns:{narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant J\xe9sus-Christ|apr\xe8s J\xe9sus-Christ)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^av/i,/^ap/i]},defaultParseWidth:"any"}),quarter:Object(i.d)({matchPatterns:{narrow:/^T?[1234]/i,abbreviated:/^[1234](er|\xe8me|e)? trim\.?/i,wide:/^[1234](er|\xe8me|e)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(i.d)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv|f\xe9vr|mars|avr|mai|juin|juill|juil|ao\xfbt|sept|oct|nov|d\xe9c)\.?/i,wide:/^(janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(i.d)({matchPatterns:{narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(i.d)({matchPatterns:{narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'apr\xe8s[-\s]midi|du soir|de la nuit)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},defaultParseWidth:"any"})}},341:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i={lastWeek:"eeee 'dernier \xe0' p",yesterday:"'hier \xe0' p",today:"'aujourd\u2019hui \xe0' p",tomorrow:"'demain \xe0' p'",nextWeek:"eeee 'prochain \xe0' p",other:"P"},n=function(e,t,a,n){return i[e]}}}]);
//# sourceMappingURL=21.bd5c6ff7.chunk.js.map