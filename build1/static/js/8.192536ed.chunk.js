(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[8],{200:function(t,n,e){"use strict";e.r(n);var i=e(333),a=e(335);function r(t,n){if(void 0!==t.one&&1===n)return t.one;var e=n%10,i=n%100;return 1===e&&11!==i?t.singularNominative.replace("{{count}}",String(n)):e>=2&&e<=4&&(i<10||i>20)?t.singularGenitive.replace("{{count}}",String(n)):t.pluralGenitive.replace("{{count}}",String(n))}function u(t){return function(n,e){return e&&e.addSuffix?e.comparison&&e.comparison>0?t.future?r(t.future,n):"\u043f\u0440\u0430\u0437 "+r(t.regular,n):t.past?r(t.past,n):r(t.regular,n)+" \u0442\u0430\u043c\u0443":r(t.regular,n)}}var o={lessThanXSeconds:u({regular:{one:"\u043c\u0435\u043d\u0448 \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},future:{one:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),xSeconds:u({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0430",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0442\u0430\u043c\u0443",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u0442\u0430\u043c\u0443",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0442\u0430\u043c\u0443"},future:{singularNominative:"\u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),halfAMinute:function(t,n){return n&&n.addSuffix?n.comparison&&n.comparison>0?"\u043f\u0440\u0430\u0437 \u043f\u0430\u045e\u0445\u0432\u0456\u043b\u0456\u043d\u044b":"\u043f\u0430\u045e\u0445\u0432\u0456\u043b\u0456\u043d\u044b \u0442\u0430\u043c\u0443":"\u043f\u0430\u045e\u0445\u0432\u0456\u043b\u0456\u043d\u044b"},lessThanXMinutes:u({regular:{one:"\u043c\u0435\u043d\u0448 \u0437\u0430 \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularNominative:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d"},future:{one:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularNominative:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d"}}),xMinutes:u({regular:{singularNominative:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0430",singularGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d"},past:{singularNominative:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",singularGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b \u0442\u0430\u043c\u0443",pluralGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d \u0442\u0430\u043c\u0443"},future:{singularNominative:"\u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d"}}),aboutXHours:u({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u0437\u0456\u043d",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u0437\u0456\u043d"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0443",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d"}}),xHours:u({regular:{singularNominative:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0430",singularGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",pluralGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d"},past:{singularNominative:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",singularGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b \u0442\u0430\u043c\u0443",pluralGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d \u0442\u0430\u043c\u0443"},future:{singularNominative:"\u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0443",singularGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",pluralGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d"}}),xDays:u({regular:{singularNominative:"{{count}} \u0434\u0437\u0435\u043d\u044c",singularGenitive:"{{count}} \u0434\u043d\u0456",pluralGenitive:"{{count}} \u0434\u0437\u0451\u043d"}}),aboutXWeeks:u({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),xWeeks:u({regular:{singularNominative:"{{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),aboutXMonths:u({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),xMonths:u({regular:{singularNominative:"{{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),aboutXYears:u({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u0433\u043e\u0434\u0430",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u043e\u045e",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u043e\u045e"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043e\u045e"}}),xYears:u({regular:{singularNominative:"{{count}} \u0433\u043e\u0434",singularGenitive:"{{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"{{count}} \u0433\u0430\u0434\u043e\u045e"}}),overXYears:u({regular:{singularNominative:"\u0431\u043e\u043b\u044c\u0448 \u0437\u0430 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0431\u043e\u043b\u044c\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u043e\u045e"},future:{singularNominative:"\u0431\u043e\u043b\u044c\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0431\u043e\u043b\u044c\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043e\u045e"}}),almostXYears:u({regular:{singularNominative:"\u0430\u043c\u0430\u043b\u044c {{count}} \u0433\u043e\u0434",singularGenitive:"\u0430\u043c\u0430\u043b\u044c {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0430\u043c\u0430\u043b\u044c {{count}} \u0433\u0430\u0434\u043e\u045e"},future:{singularNominative:"\u0430\u043c\u0430\u043b\u044c \u043f\u0440\u0430\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0430\u043c\u0430\u043b\u044c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0430\u043c\u0430\u043b\u044c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043e\u045e"}})},l={date:Object(i.b)({formats:{full:"EEEE, d MMMM y '\u0433.'",long:"d MMMM y '\u0433.'",medium:"d MMM y '\u0433.'",short:"dd.MM.y"},defaultWidth:"full"}),time:Object(i.b)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:Object(i.b)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})},c=["\u043d\u044f\u0434\u0437\u0435\u043b\u044e","\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a","\u0430\u045e\u0442\u043e\u0440\u0430\u043a","\u0441\u0435\u0440\u0430\u0434\u0443","\u0447\u0430\u0446\u0432\u0435\u0440","\u043f\u044f\u0442\u043d\u0456\u0446\u0443","\u0441\u0443\u0431\u043e\u0442\u0443"];function s(t){return"'\u0443 "+c[t]+" \u0430' p"}var v={lastWeek:function(t,n,e){var i=Object(a.b)(t),r=i.getUTCDay();return Object(a.a)(i,n,e)?s(r):function(t){var n=c[t];switch(t){case 0:case 3:case 5:case 6:return"'\u0443 \u043c\u0456\u043d\u0443\u043b\u0443\u044e "+n+" \u0430' p";case 1:case 2:case 4:return"'\u0443 \u043c\u0456\u043d\u0443\u043b\u044b "+n+" \u0430' p"}}(r)},yesterday:"'\u0443\u0447\u043e\u0440\u0430 \u0430' p",today:"'\u0441\u0451\u043d\u043d\u044f \u0430' p",tomorrow:"'\u0437\u0430\u045e\u0442\u0440\u0430 \u0430' p",nextWeek:function(t,n,e){var i=Object(a.b)(t),r=i.getUTCDay();return Object(a.a)(i,n,e)?s(r):function(t){var n=c[t];switch(t){case 0:case 3:case 5:case 6:return"'\u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e "+n+" \u0430' p";case 1:case 2:case 4:return"'\u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u044b "+n+" \u0430' p"}}(r)},other:"P"},d={code:"be",formatDistance:function(t,n,e){return e=e||{},o[t](n,e)},formatLong:l,formatRelative:function(t,n,e,i){var a=v[t];return"function"===typeof a?a(n,e,i):a},localize:{ordinalNumber:function(t,n){var e=String((n||{}).unit),i=Number(t);return i+("date"===e?"-\u0433\u0430":"hour"===e||"minute"===e||"second"===e?"-\u044f":i%10!==2&&i%10!==3||i%100===12||i%100===13?"-\u044b":"-\u0456")},era:Object(i.a)({values:{narrow:["\u0434\u0430 \u043d.\u044d.","\u043d.\u044d."],abbreviated:["\u0434\u0430 \u043d. \u044d.","\u043d. \u044d."],wide:["\u0434\u0430 \u043d\u0430\u0448\u0430\u0439 \u044d\u0440\u044b","\u043d\u0430\u0448\u0430\u0439 \u044d\u0440\u044b"]},defaultWidth:"wide"}),quarter:Object(i.a)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u044b \u043a\u0432.","2-\u0456 \u043a\u0432.","3-\u0456 \u043a\u0432.","4-\u044b \u043a\u0432."],wide:["1-\u044b \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0456 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0456 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u044b \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(i.a)({values:{narrow:["\u0421","\u041b","\u0421","\u041a","\u041c","\u0427","\u041b","\u0416","\u0412","\u041a","\u041b","\u0421"],abbreviated:["\u0441\u0442\u0443\u0434\u0437.","\u043b\u044e\u0442.","\u0441\u0430\u043a.","\u043a\u0440\u0430\u0441.","\u043c\u0430\u0439","\u0447\u044d\u0440\u0432.","\u043b\u0456\u043f.","\u0436\u043d.","\u0432\u0435\u0440.","\u043a\u0430\u0441\u0442\u0440.","\u043b\u0456\u0441\u0442.","\u0441\u043d\u0435\u0436."],wide:["\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c","\u043b\u044e\u0442\u044b","\u0441\u0430\u043a\u0430\u0432\u0456\u043a","\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a","\u043c\u0430\u0439","\u0447\u044d\u0440\u0432\u0435\u043d\u044c","\u043b\u0456\u043f\u0435\u043d\u044c","\u0436\u043d\u0456\u0432\u0435\u043d\u044c","\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c","\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a","\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434","\u0441\u043d\u0435\u0436\u0430\u043d\u044c"]},defaultWidth:"wide",formattingValues:{narrow:["\u0421","\u041b","\u0421","\u041a","\u041c","\u0427","\u041b","\u0416","\u0412","\u041a","\u041b","\u0421"],abbreviated:["\u0441\u0442\u0443\u0434\u0437.","\u043b\u044e\u0442.","\u0441\u0430\u043a.","\u043a\u0440\u0430\u0441.","\u043c\u0430\u044f","\u0447\u044d\u0440\u0432.","\u043b\u0456\u043f.","\u0436\u043d.","\u0432\u0435\u0440.","\u043a\u0430\u0441\u0442\u0440.","\u043b\u0456\u0441\u0442.","\u0441\u043d\u0435\u0436."],wide:["\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f","\u043b\u044e\u0442\u0430\u0433\u0430","\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430","\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430","\u043c\u0430\u044f","\u0447\u044d\u0440\u0432\u0435\u043d\u044f","\u043b\u0456\u043f\u0435\u043d\u044f","\u0436\u043d\u0456\u045e\u043d\u044f","\u0432\u0435\u0440\u0430\u0441\u043d\u044f","\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430","\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430","\u0441\u043d\u0435\u0436\u043d\u044f"]},defaultFormattingWidth:"wide"}),day:Object(i.a)({values:{narrow:["\u041d","\u041f","\u0410","\u0421","\u0427","\u041f","\u0421"],short:["\u043d\u0434","\u043f\u043d","\u0430\u045e","\u0441\u0440","\u0447\u0446","\u043f\u0442","\u0441\u0431"],abbreviated:["\u043d\u044f\u0434\u0437","\u043f\u0430\u043d","\u0430\u045e\u0442","\u0441\u0435\u0440","\u0447\u0430\u0446","\u043f\u044f\u0442","\u0441\u0443\u0431"],wide:["\u043d\u044f\u0434\u0437\u0435\u043b\u044f","\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a","\u0430\u045e\u0442\u043e\u0440\u0430\u043a","\u0441\u0435\u0440\u0430\u0434\u0430","\u0447\u0430\u0446\u0432\u0435\u0440","\u043f\u044f\u0442\u043d\u0456\u0446\u0430","\u0441\u0443\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:Object(i.a)({values:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d.",noon:"\u043f\u043e\u045e\u0434.",morning:"\u0440\u0430\u043d.",afternoon:"\u0434\u0437\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d.",noon:"\u043f\u043e\u045e\u0434.",morning:"\u0440\u0430\u043d.",afternoon:"\u0434\u0437\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d\u0430\u0447",noon:"\u043f\u043e\u045e\u0434\u0437\u0435\u043d\u044c",morning:"\u0440\u0430\u043d\u0456\u0446\u0430",afternoon:"\u0434\u0437\u0435\u043d\u044c",evening:"\u0432\u0435\u0447\u0430\u0440",night:"\u043d\u043e\u0447"}},defaultWidth:"any",formattingValues:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d.",noon:"\u043f\u043e\u045e\u0434.",morning:"\u0440\u0430\u043d.",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u044b"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d.",noon:"\u043f\u043e\u045e\u0434.",morning:"\u0440\u0430\u043d.",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u044b"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d\u0430\u0447",noon:"\u043f\u043e\u045e\u0434\u0437\u0435\u043d\u044c",morning:"\u0440\u0430\u043d\u0456\u0446\u044b",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447\u0430\u0440\u0430",night:"\u043d\u043e\u0447\u044b"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Object(i.c)({matchPattern:/^(\d+)(-?(\u0435|\u044f|\u0433\u0430|\u0456|\u044b|\u0430\u0435|\u0430\u044f|\u044f\u044f|\u0448\u044b|\u0433\u0456|\u0446\u0456|\u0442\u044b|\u043c\u044b))?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(i.d)({matchPatterns:{narrow:/^((\u0434\u0430 )?\u043d\.?\s?\u044d\.?)/i,abbreviated:/^((\u0434\u0430 )?\u043d\.?\s?\u044d\.?)/i,wide:/^(\u0434\u0430 \u043d\u0430\u0448\u0430\u0439 \u044d\u0440\u044b|\u043d\u0430\u0448\u0430\u0439 \u044d\u0440\u044b|\u043d\u0430\u0448\u0430 \u044d\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0434/i,/^\u043d/i]},defaultParseWidth:"any"}),quarter:Object(i.d)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[\u044b\u0456]?)? \u043a\u0432.?/i,wide:/^[1234](-?[\u044b\u0456]?)? \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return Number(t)+1}}),month:Object(i.d)({matchPatterns:{narrow:/^[\u0441\u043b\u043a\u043c\u0447\u0436\u0432]/i,abbreviated:/^(\u0441\u0442\u0443\u0434\u0437|\u043b\u044e\u0442|\u0441\u0430\u043a|\u043a\u0440\u0430\u0441|\u043c\u0430[\u0439\u044f]|\u0447\u044d\u0440\u0432|\u043b\u0456\u043f|\u0436\u043d|\u0432\u0435\u0440|\u043a\u0430\u0441\u0442\u0440|\u043b\u0456\u0441\u0442|\u0441\u043d\u0435\u0436)\.?/i,wide:/^(\u0441\u0442\u0443\u0434\u0437\u0435\u043d[\u044c\u044f]|\u043b\u044e\u0442(\u044b|\u0430\u0433\u0430)|\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430?|\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430?|\u043c\u0430[\u0439\u044f]|\u0447\u044d\u0440\u0432\u0435\u043d[\u044c\u044f]|\u043b\u0456\u043f\u0435\u043d[\u044c\u044f]|\u0436\u043d\u0456(\u0432\u0435\u043d\u044c|\u045e\u043d\u044f)|\u0432\u0435\u0440\u0430\u0441(\u0435\u043d\u044c|\u043d\u044f)|\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430?|\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430?|\u0441\u043d\u0435\u0436(\u0430\u043d\u044c|\u043d\u044f))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0441/i,/^\u043b/i,/^\u0441/i,/^\u043a/i,/^\u043c/i,/^\u0447/i,/^\u043b/i,/^\u0436/i,/^\u0432/i,/^\u043a/i,/^\u043b/i,/^\u0441/i],any:[/^\u0441\u0442/i,/^\u043b\u044e/i,/^\u0441\u0430/i,/^\u043a\u0440/i,/^\u043c\u0430/i,/^\u0447/i,/^\u043b\u0456\u043f/i,/^\u0436/i,/^\u0432/i,/^\u043a\u0430/i,/^\u043b\u0456\u0441/i,/^\u0441\u043d/i]},defaultParseWidth:"any"}),day:Object(i.d)({matchPatterns:{narrow:/^[\u043d\u043f\u0430\u0441\u0447]/i,short:/^(\u043d\u0434|\u043d\u044f|\u043f\u043d|\u043f\u0430|\u0430\u045e|\u0430\u0442|\u0441\u0440|\u0441\u0435|\u0447\u0446|\u0447\u0430|\u043f\u0442|\u043f\u044f|\u0441\u0431|\u0441\u0443)\.?/i,abbreviated:/^(\u043d\u044f\u0434\u0437?|\u043d\u0434\u0437|\u043f\u043d\u0434|\u043f\u0430\u043d|\u0430\u045e\u0442|\u0441\u0440\u0434|\u0441\u0435\u0440|\u0447\u0446\u0432|\u0447\u0430\u0446|\u043f\u0442\u043d|\u043f\u044f\u0442|\u0441\u0443\u0431).?/i,wide:/^(\u043d\u044f\u0434\u0437\u0435\u043b[\u044f\u0456]|\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b(\u0430\u043a|\u043a\u0430)|\u0430\u045e\u0442\u043e\u0440(\u0430\u043a|\u043a\u0430)|\u0441\u0435\u0440\u0430\u0434[\u0430\u044b]|\u0447\u0430\u0446\u0432(\u0435\u0440|\u044f\u0440\u0433\u0430)|\u043f\u044f\u0442\u043d\u0456\u0446[\u0430\u044b]|\u0441\u0443\u0431\u043e\u0442[\u0430\u044b])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u043d/i,/^\u043f/i,/^\u0430/i,/^\u0441/i,/^\u0447/i,/^\u043f/i,/^\u0441/i],any:[/^\u043d/i,/^\u043f[\u0430\u043d]/i,/^\u0430/i,/^\u0441[\u0435\u0440]/i,/^\u0447/i,/^\u043f[\u044f\u0442]/i,/^\u0441[\u0443\u0431]/i]},defaultParseWidth:"any"}),dayPeriod:Object(i.d)({matchPatterns:{narrow:/^([\u0434\u043f]\u043f|\u043f\u043e\u045e\u043d\.?|\u043f\u043e\u045e\u0434\.?|\u0440\u0430\u043d\.?|\u0434\u0437\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u043e\u0447\u044b?)/i,abbreviated:/^([\u0434\u043f]\u043f|\u043f\u043e\u045e\u043d\.?|\u043f\u043e\u045e\u0434\.?|\u0440\u0430\u043d\.?|\u0434\u0437\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u043e\u0447\u044b?)/i,wide:/^([\u0434\u043f]\u043f|\u043f\u043e\u045e\u043d\u0430\u0447|\u043f\u043e\u045e\u0434\u0437\u0435\u043d\u044c|\u0440\u0430\u043d\u0456\u0446[\u0430\u044b]|\u0434\u0437\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430?|\u043d\u043e\u0447\u044b?)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^\u0434\u043f/i,pm:/^\u043f\u043f/i,midnight:/^\u043f\u043e\u045e\u043d/i,noon:/^\u043f\u043e\u045e\u0434/i,morning:/^\u0440/i,afternoon:/^\u0434[\u0437\u043d]/i,evening:/^\u0432/i,night:/^\u043d/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};n.default=d},333:function(t,n,e){"use strict";function i(t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.width?String(n.width):t.defaultWidth,i=t.formats[e]||t.formats[t.defaultWidth];return i}}function a(t){return function(n,e){var i,a=e||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,u=a.width?String(a.width):r;i=t.formattingValues[u]||t.formattingValues[r]}else{var o=t.defaultWidth,l=a.width?String(a.width):t.defaultWidth;i=t.values[l]||t.values[o]}return i[t.argumentCallback?t.argumentCallback(n):n]}}function r(t){return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.match(t.matchPattern);if(!i)return null;var a=i[0],r=n.match(t.parsePattern);if(!r)return null;var u=t.valueCallback?t.valueCallback(r[0]):r[0];u=e.valueCallback?e.valueCallback(u):u;var o=n.slice(a.length);return{value:u,rest:o}}}function u(t){return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],r=n.match(a);if(!r)return null;var u,c=r[0],s=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],v=Array.isArray(s)?l(s,(function(t){return t.test(c)})):o(s,(function(t){return t.test(c)}));u=t.valueCallback?t.valueCallback(v):v,u=e.valueCallback?e.valueCallback(u):u;var d=n.slice(c.length);return{value:u,rest:d}}}function o(t,n){for(var e in t)if(t.hasOwnProperty(e)&&n(t[e]))return e}function l(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return e}e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return u}))},334:function(t,n,e){"use strict";function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}e.d(n,"a",(function(){return i}))},335:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return r}));var i=e(334);function a(t,n){if(n.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+n.length+" present")}function r(t){a(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"===Object(i.a)(t)&&"[object Date]"===n?new Date(t.getTime()):"number"===typeof t||"[object Number]"===n?new Date(t):("string"!==typeof t&&"[object String]"!==n||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function u(t){if(null===t||!0===t||!1===t)return NaN;var n=Number(t);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}function o(t,n){a(1,arguments);var e=n||{},i=e.locale,o=i&&i.options&&i.options.weekStartsOn,l=null==o?0:u(o),c=null==e.weekStartsOn?l:u(e.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=r(t),v=s.getUTCDay(),d=(v<c?7:0)+v-c;return s.setUTCDate(s.getUTCDate()-d),s.setUTCHours(0,0,0,0),s}function l(t,n,e){a(2,arguments);var i=o(t,e),r=o(n,e);return i.getTime()===r.getTime()}}}]);
//# sourceMappingURL=8.192536ed.chunk.js.map