(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[48],{204:function(e,t,a){"use strict";a.r(t);var i=a(333),n={lessThanXSeconds:{one:"menys d'un segon",eleven:"menys d'onze segons",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",eleven:"menys d'onze minuts",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXWeeks:{one:"aproximadament una setmana",other:"aproximadament {{count}} setmanes"},xWeeks:{one:"1 setmana",other:"{{count}} setmanes"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"m\xe9s d'un any",eleven:"m\xe9s d'onze anys",other:"m\xe9s de {{count}} anys"},almostXYears:{one:"gaireb\xe9 un any",other:"gaireb\xe9 {{count}} anys"}};var r={date:Object(i.b)({formats:{full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:Object(i.b)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(i.b)({formats:{full:"{{date}} 'a les' {{time}}",long:"{{date}} 'a les' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'el' eeee 'passat a la' LT",yesterday:"'ahir a la' p",today:"'avui a la' p",tomorrow:"'dem\xe0 a la' p",nextWeek:"eeee 'a la' p",other:"P"},s={lastWeek:"'el' eeee 'passat a les' p",yesterday:"'ahir a les' p",today:"'avui a les' p",tomorrow:"'dem\xe0 a les' p",nextWeek:"eeee 'a les' p",other:"P"};var o={code:"ca",formatDistance:function(e,t,a){var i;return a=a||{},i="string"===typeof n[e]?n[e]:1===t?n[e].one:11===t&&n[e].eleven?n[e].eleven:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"en "+i:"fa "+i:i},formatLong:r,formatRelative:function(e,t,a,i){return 1!==t.getUTCHours()?s[e]:d[e]},localize:{ordinalNumber:function(e,t){var a=Number(e),i=a%100;if(i>20||i<10)switch(i%10){case 1:case 3:return a+"r";case 2:return a+"n";case 4:return a+"t"}return a+"\xe8"},era:Object(i.a)({values:{narrow:["aC","dC"],abbreviated:["a. de C.","d. de C."],wide:["abans de Crist","despr\xe9s de Crist"]},defaultWidth:"wide"}),quarter:Object(i.a)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1r trimestre","2n trimestre","3r trimestre","4t trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(i.a)({values:{narrow:["GN","FB","M\xc7","AB","MG","JN","JL","AG","ST","OC","NV","DS"],abbreviated:["gen.","febr.","mar\xe7","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],wide:["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]},defaultWidth:"wide"}),day:Object(i.a)({values:{narrow:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],short:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],wide:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},defaultWidth:"wide"}),dayPeriod:Object(i.a)({values:{narrow:{am:"am",pm:"pm",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},abbreviated:{am:"AM",pm:"PM",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Object(i.c)({matchPattern:/^(\d+)(\xe8|r|n|r|t)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(i.d)({matchPatterns:{narrow:/^(aC|dC)/i,abbreviated:/^(a. de C.|d. de C.)/i,wide:/^(abans de Crist|despr[e\xe9]s de Crist)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^aC/i,/^dC/i],abbreviated:[/^(a. de C.)/i,/^(d. de C.)/i],wide:[/^(abans de Crist)/i,/^(despr[e\xe9]s de Crist)/i]},defaultParseWidth:"any"}),quarter:Object(i.d)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xe8|r|n|r|t)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(i.d)({matchPatterns:{narrow:/^(GN|FB|M\xc7|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,abbreviated:/^(gen.|febr.|mar\xe7|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,wide:/^(gener|febrer|mar\xe7|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^GN/i,/^FB/i,/^M\xc7/i,/^AB/i,/^MG/i,/^JN/i,/^JL/i,/^AG/i,/^ST/i,/^OC/i,/^NV/i,/^DS/i],abbreviated:[/^gen./i,/^febr./i,/^mar\xe7/i,/^abr./i,/^maig/i,/^juny/i,/^jul./i,/^ag./i,/^set./i,/^oct./i,/^nov./i,/^des./i],wide:[/^gener/i,/^febrer/i,/^mar\xe7/i,/^abril/i,/^maig/i,/^juny/i,/^juliol/i,/^agost/i,/^setembre/i,/^octubre/i,/^novembre/i,/^desembre/i]},defaultParseWidth:"any"}),day:Object(i.d)({matchPatterns:{narrow:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,short:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,abbreviated:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,wide:/^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],abbreviated:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],wide:[/^diumenge/i,/^dilluns/i,/^dimarts/i,/^dimecres/i,/^dijous/i,/^divendres/i,/^disssabte/i]},defaultParseWidth:"any"}),dayPeriod:Object(i.d)({matchPatterns:{narrow:/^(a|p|mn|md|(del|de la) (mat\xed|tarda|vespre|nit))/i,abbreviated:/^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (mat\xed|tarda|vespre|nit))/i,wide:/^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (mat\xed|tarda|vespre|nit))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mitjanit/i,noon:/^migdia/i,morning:/mat\xed/i,afternoon:/tarda/i,evening:/vespre/i,night:/nit/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=o},333:function(e,t,a){"use strict";function i(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,i=e.formats[a]||e.formats[e.defaultWidth];return i}}function n(e){return function(t,a){var i,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=n.width?String(n.width):r;i=e.formattingValues[d]||e.formattingValues[r]}else{var s=e.defaultWidth,o=n.width?String(n.width):e.defaultWidth;i=e.values[o]||e.values[s]}return i[e.argumentCallback?e.argumentCallback(t):t]}}function r(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(e.matchPattern);if(!i)return null;var n=i[0],r=t.match(e.parsePattern);if(!r)return null;var d=e.valueCallback?e.valueCallback(r[0]):r[0];d=a.valueCallback?a.valueCallback(d):d;var s=t.slice(n.length);return{value:d,rest:s}}}function d(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,n=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],r=t.match(n);if(!r)return null;var d,m=r[0],u=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(u)?o(u,(function(e){return e.test(m)})):s(u,(function(e){return e.test(m)}));d=e.valueCallback?e.valueCallback(l):l,d=a.valueCallback?a.valueCallback(d):d;var c=t.slice(m.length);return{value:d,rest:c}}}function s(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function o(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return d}))}}]);
//# sourceMappingURL=48.1a7bd19b.chunk.js.map