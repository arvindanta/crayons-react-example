(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[13],{259:function(e,t,n){"use strict";n.r(t);var i=n(333),a=n(335);function o(e,t,n){n=n||"regular";var i=function(e,t){if(1===t)return e.one;var n=t%100;if(n<=20&&n>10)return e.other;var i=n%10;return i>=2&&i<=4?e.twoFour:e.other}(e,t);return(i[n]||i).replace("{{count}}",t)}var r={lessThanXSeconds:{one:{regular:"mniej ni\u017c sekunda",past:"mniej ni\u017c sekund\u0119",future:"mniej ni\u017c sekund\u0119"},twoFour:"mniej ni\u017c {{count}} sekundy",other:"mniej ni\u017c {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekund\u0119",future:"sekund\u0119"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"p\xf3\u0142 minuty",twoFour:"p\xf3\u0142 minuty",other:"p\xf3\u0142 minuty"},lessThanXMinutes:{one:{regular:"mniej ni\u017c minuta",past:"mniej ni\u017c minut\u0119",future:"mniej ni\u017c minut\u0119"},twoFour:"mniej ni\u017c {{count}} minuty",other:"mniej ni\u017c {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minut\u0119",future:"minut\u0119"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"oko\u0142o godziny",past:"oko\u0142o godziny",future:"oko\u0142o godzin\u0119"},twoFour:"oko\u0142o {{count}} godziny",other:"oko\u0142o {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzin\u0119",future:"godzin\u0119"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzie\u0144",past:"dzie\u0144",future:"1 dzie\u0144"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"oko\u0142o tygodnia",twoFour:"oko\u0142o {{count}} tygodni",other:"oko\u0142o {{count}} tygodni"},xWeeks:{one:"tydzie\u0144",twoFour:"{{count}} tygodnie",other:"{{count}} tygodni"},aboutXMonths:{one:"oko\u0142o miesi\u0105c",twoFour:"oko\u0142o {{count}} miesi\u0105ce",other:"oko\u0142o {{count}} miesi\u0119cy"},xMonths:{one:"miesi\u0105c",twoFour:"{{count}} miesi\u0105ce",other:"{{count}} miesi\u0119cy"},aboutXYears:{one:"oko\u0142o rok",twoFour:"oko\u0142o {{count}} lata",other:"oko\u0142o {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};var u={date:Object(i.b)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:Object(i.b)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(i.b)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={masculine:"ostatni",feminine:"ostatnia"},c={masculine:"ten",feminine:"ta"},d={masculine:"nast\u0119pny",feminine:"nast\u0119pna"},l={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function p(e,t,n,i){var o=t.getUTCDay(),r=function(e,t,n,i){if(Object(a.a)(t,n,i))return c;if("lastWeek"===e)return s;if("nextWeek"===e)return d;throw new Error("Cannot determine adjectives for token ".concat(e))}(e,t,n,i);return r[l[o]]}function m(e,t,n,i){var a=p(e,t,n,i);return"'".concat(a,"' eeee 'o' p")}var w={lastWeek:m,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:m,other:"P"};var f={code:"pl",formatDistance:function(e,t,n){var i=r[e];return(n=n||{}).addSuffix?n.comparison>0?"za "+o(i,t,"future"):o(i,t,"past")+" temu":o(i,t)},formatLong:u,formatRelative:function(e,t,n,i){var a=w[e];return"function"===typeof a?a(e,t,n,i):a},localize:{ordinalNumber:function(e){var t=Number(e);return String(t)},era:Object(i.a)({values:{narrow:["p.n.e.","n.e."],abbreviated:["p.n.e.","n.e."],wide:["przed nasz\u0105 er\u0105","naszej ery"]},defaultWidth:"wide"}),quarter:Object(i.a)({values:{narrow:["1","2","3","4"],abbreviated:["I kw.","II kw.","III kw.","IV kw."],wide:["I kwarta\u0142","II kwarta\u0142","III kwarta\u0142","IV kwarta\u0142"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(i.a)({values:{narrow:["S","L","M","K","M","C","L","S","W","P","L","G"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],wide:["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"]},defaultWidth:"wide",formattingValues:{narrow:["s","l","m","k","m","c","l","s","w","p","l","g"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],wide:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","wrze\u015bnia","pa\u017adziernika","listopada","grudnia"]},defaultFormattingWidth:"wide"}),day:Object(i.a)({values:{narrow:["N","P","W","\u015a","C","P","S"],short:["nie","pon","wto","\u015bro","czw","pi\u0105","sob"],abbreviated:["niedz.","pon.","wt.","\u015br.","czw.","pt.","sob."],wide:["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"]},defaultWidth:"wide",formattingValues:{narrow:["n","p","w","\u015b","c","p","s"],short:["nie","pon","wto","\u015bro","czw","pi\u0105","sob"],abbreviated:["niedz.","pon.","wt.","\u015br.","czw.","pt.","sob."],wide:["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"]},defaultFormattingWidth:"wide"}),dayPeriod:Object(i.a)({values:{narrow:{am:"a",pm:"p",midnight:"p\xf3\u0142n.",noon:"po\u0142",morning:"rano",afternoon:"popo\u0142.",evening:"wiecz.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"p\xf3\u0142noc",noon:"po\u0142udnie",morning:"rano",afternoon:"popo\u0142udnie",evening:"wiecz\xf3r",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"p\xf3\u0142noc",noon:"po\u0142udnie",morning:"rano",afternoon:"popo\u0142udnie",evening:"wiecz\xf3r",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"o p\xf3\u0142n.",noon:"w po\u0142.",morning:"rano",afternoon:"po po\u0142.",evening:"wiecz.",night:"w nocy"},abbreviated:{am:"AM",pm:"PM",midnight:"o p\xf3\u0142nocy",noon:"w po\u0142udnie",morning:"rano",afternoon:"po po\u0142udniu",evening:"wieczorem",night:"w nocy"},wide:{am:"AM",pm:"PM",midnight:"o p\xf3\u0142nocy",noon:"w po\u0142udnie",morning:"rano",afternoon:"po po\u0142udniu",evening:"wieczorem",night:"w nocy"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Object(i.c)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(i.d)({matchPatterns:{narrow:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,abbreviated:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,wide:/^(przed\s*nasz(\u0105|a)\s*er(\u0105|a)|naszej\s*ery)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^n/i]},defaultParseWidth:"any"}),quarter:Object(i.d)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^(I|II|III|IV)\s*kw\.?/i,wide:/^(I|II|III|IV)\s*kwarta(\u0142|l)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/^I kw/i,/^II kw/i,/^III kw/i,/^IV kw/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(i.d)({matchPatterns:{narrow:/^[slmkcwpg]/i,abbreviated:/^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(\u017a|z)|lis|gru)/i,wide:/^(stycznia|stycze(\u0144|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(\u0144|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(\u0144|n)|wrze(\u015b|s)nia|wrzesie(\u0144|n)|pa(\u017a|z)dziernika|pa(\u017a|z)dziernik|listopada|listopad|grudnia|grudzie(\u0144|n))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^l/i,/^m/i,/^k/i,/^m/i,/^c/i,/^l/i,/^s/i,/^w/i,/^p/i,/^l/i,/^g/i],any:[/^st/i,/^lu/i,/^mar/i,/^k/i,/^maj/i,/^c/i,/^lip/i,/^si/i,/^w/i,/^p/i,/^lis/i,/^g/i]},defaultParseWidth:"any"}),day:Object(i.d)({matchPatterns:{narrow:/^[npw\u015bcs]/i,short:/^(nie|pon|wto|(\u015b|s)ro|czw|pi(\u0105|a)|sob)/i,abbreviated:/^(niedz|pon|wt|(\u015b|s)r|czw|pt|sob)\.?/i,wide:/^(niedziela|poniedzia(\u0142|l)ek|wtorek|(\u015b|s)roda|czwartek|pi(\u0105|a)tek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^w/i,/^\u015b/i,/^c/i,/^p/i,/^s/i],abbreviated:[/^n/i,/^po/i,/^w/i,/^(\u015b|s)r/i,/^c/i,/^pt/i,/^so/i],any:[/^n/i,/^po/i,/^w/i,/^(\u015b|s)r/i,/^c/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:Object(i.d)({matchPatterns:{narrow:/^(^a$|^p$|p\xf3(\u0142|l)n\.?|o\s*p\xf3(\u0142|l)n\.?|po(\u0142|l)\.?|w\s*po(\u0142|l)\.?|po\s*po(\u0142|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,any:/^(am|pm|p\xf3(\u0142|l)noc|o\s*p\xf3(\u0142|l)nocy|po(\u0142|l)udnie|w\s*po(\u0142|l)udnie|popo(\u0142|l)udnie|po\s*po(\u0142|l)udniu|rano|wiecz\xf3r|wieczorem|noc|w\s*nocy)/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^a$/i,pm:/^p$/i,midnight:/p\xf3(\u0142|l)n/i,noon:/po(\u0142|l)/i,morning:/rano/i,afternoon:/po\s*po(\u0142|l)/i,evening:/wiecz/i,night:/noc/i},any:{am:/^am/i,pm:/^pm/i,midnight:/p\xf3(\u0142|l)n/i,noon:/po(\u0142|l)/i,morning:/rano/i,afternoon:/po\s*po(\u0142|l)/i,evening:/wiecz/i,night:/noc/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=f},333:function(e,t,n){"use strict";function i(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,i=e.formats[n]||e.formats[e.defaultWidth];return i}}function a(e){return function(t,n){var i,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=a.width?String(a.width):o;i=e.formattingValues[r]||e.formattingValues[o]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;i=e.values[s]||e.values[u]}return i[e.argumentCallback?e.argumentCallback(t):t]}}function o(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(e.matchPattern);if(!i)return null;var a=i[0],o=t.match(e.parsePattern);if(!o)return null;var r=e.valueCallback?e.valueCallback(o[0]):o[0];r=n.valueCallback?n.valueCallback(r):r;var u=t.slice(a.length);return{value:r,rest:u}}}function r(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.width,a=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var r,c=o[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?s(d,(function(e){return e.test(c)})):u(d,(function(e){return e.test(c)}));r=e.valueCallback?e.valueCallback(l):l,r=n.valueCallback?n.valueCallback(r):r;var p=t.slice(c.length);return{value:r,rest:p}}}function u(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function s(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r}))},334:function(e,t,n){"use strict";function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}n.d(t,"a",(function(){return i}))},335:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var i=n(334);function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===Object(i.a)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function u(e,t){a(1,arguments);var n=t||{},i=n.locale,u=i&&i.options&&i.options.weekStartsOn,s=null==u?0:r(u),c=null==n.weekStartsOn?s:r(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=o(e),l=d.getUTCDay(),p=(l<c?7:0)+l-c;return d.setUTCDate(d.getUTCDate()-p),d.setUTCHours(0,0,0,0),d}function s(e,t,n){a(2,arguments);var i=u(e,n),o=u(t,n);return i.getTime()===o.getTime()}}}]);
//# sourceMappingURL=13.562abede.chunk.js.map