(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[7],{244:function(t,n,e){"use strict";e.r(n);var i=e(333),a=e(335);function r(t,n){if(void 0!==t.one&&1===n)return t.one;var e=n%10,i=n%100;return 1===e&&11!==i?t.singularNominative.replace("{{count}}",n):e>=2&&e<=4&&(i<10||i>20)?t.singularGenitive.replace("{{count}}",n):t.pluralGenitive.replace("{{count}}",n)}function u(t){return function(n,e){return e.addSuffix?e.comparison>0?t.future?r(t.future,n):r(t.regular,n)+" \u043a\u0435\u0439\u0456\u043d":t.past?r(t.past,n):r(t.regular,n)+" \u0431\u04b1\u0440\u044b\u043d":r(t.regular,n)}}var o={lessThanXSeconds:u({regular:{one:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437",singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437"},future:{one:"\u0431\u0456\u0440 \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xSeconds:u({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d"},future:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),halfAMinute:function(t,n){return n.addSuffix?n.comparison>0?"\u0436\u0430\u0440\u0442\u044b \u043c\u0438\u043d\u0443\u0442 \u0456\u0448\u0456\u043d\u0434\u0435":"\u0436\u0430\u0440\u0442\u044b \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d":"\u0436\u0430\u0440\u0442\u044b \u043c\u0438\u043d\u0443\u0442"},lessThanXMinutes:u({regular:{one:"1 \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437",singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437"},future:{one:"\u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c ",singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c"}}),xMinutes:u({regular:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442"},past:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d"},future:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),aboutXHours:u({regular:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442"},future:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xHours:u({regular:{singularNominative:"{{count}} \u0441\u0430\u0493\u0430\u0442",singularGenitive:"{{count}} \u0441\u0430\u0493\u0430\u0442",pluralGenitive:"{{count}} \u0441\u0430\u0493\u0430\u0442"}}),xDays:u({regular:{singularNominative:"{{count}} \u043a\u04af\u043d",singularGenitive:"{{count}} \u043a\u04af\u043d",pluralGenitive:"{{count}} \u043a\u04af\u043d"},future:{singularNominative:"{{count}} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d"}}),aboutXWeeks:{one:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d 1 \u0430\u043f\u0442\u0430",other:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u043f\u0442\u0430"},xWeeks:{one:"1 \u0430\u043f\u0442\u0430",other:"{{count}} \u0430\u043f\u0442\u0430"},aboutXMonths:u({regular:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439"},future:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xMonths:u({regular:{singularNominative:"{{count}} \u0430\u0439",singularGenitive:"{{count}} \u0430\u0439",pluralGenitive:"{{count}} \u0430\u0439"}}),aboutXYears:u({regular:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b"},future:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xYears:u({regular:{singularNominative:"{{count}} \u0436\u044b\u043b",singularGenitive:"{{count}} \u0436\u044b\u043b",pluralGenitive:"{{count}} \u0436\u044b\u043b"},future:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),overXYears:u({regular:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c"},future:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c"}}),almostXYears:u({regular:{singularNominative:"{{count}} \u0436\u044b\u043b\u0493\u0430 \u0436\u0430\u049b\u044b\u043d",singularGenitive:"{{count}} \u0436\u044b\u043b\u0493\u0430 \u0436\u0430\u049b\u044b\u043d",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0493\u0430 \u0436\u0430\u049b\u044b\u043d"},future:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}})};var l={date:Object(i.b)({formats:{full:"EEEE, do MMMM y '\u0436.'",long:"do MMMM y '\u0436.'",medium:"d MMM y '\u0436.'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:Object(i.b)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:Object(i.b)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})},c=["\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0436\u04b1\u043c\u0430\u0434\u0430","\u0441\u0435\u043d\u0431\u0456\u0434\u0435"];function s(t){return"'"+c[t]+" \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'"}var d={lastWeek:function(t,n,e){var i=t.getUTCDay();return Object(a.a)(t,n,e)?s(i):function(t){return"'\u04e9\u0442\u043a\u0435\u043d "+c[t]+" \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'"}(i)},yesterday:"'\u043a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",today:"'\u0431\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",tomorrow:"'\u0435\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",nextWeek:function(t,n,e){var i=t.getUTCDay();return Object(a.a)(t,n,e)?s(i):function(t){return"'\u043a\u0435\u043b\u0435\u0441\u0456 "+c[t]+" \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'"}(i)},other:"P"};var v={0:"-\u0448\u0456",1:"-\u0448\u0456",2:"-\u0448\u0456",3:"-\u0448\u0456",4:"-\u0448\u0456",5:"-\u0448\u0456",6:"-\u0448\u044b",7:"-\u0448\u0456",8:"-\u0448\u0456",9:"-\u0448\u044b",10:"-\u0448\u044b",20:"-\u0448\u044b",30:"-\u0448\u044b",40:"-\u0448\u044b",50:"-\u0448\u0456",60:"-\u0448\u044b",70:"-\u0448\u0456",80:"-\u0448\u0456",90:"-\u0448\u044b",100:"-\u0448\u0456"};var f={code:"kk",formatDistance:function(t,n,e){return e=e||{},o[t](n,e)},formatLong:l,formatRelative:function(t,n,e,i){var a=d[t];return"function"===typeof a?a(n,e,i):a},localize:{ordinalNumber:function(t){var n=Number(t);return n+(v[n]||v[n%10]||v[n>=100?100:null])},era:Object(i.a)({values:{narrow:["\u0431.\u0437.\u0434.","\u0431.\u0437."],abbreviated:["\u0431.\u0437.\u0434.","\u0431.\u0437."],wide:["\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043d","\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437"]},defaultWidth:"wide"}),quarter:Object(i.a)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0448\u0456 \u0442\u043e\u049b.","2-\u0448\u0456 \u0442\u043e\u049b.","3-\u0448\u0456 \u0442\u043e\u049b.","4-\u0448\u0456 \u0442\u043e\u049b."],wide:["1-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d","2-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d","3-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d","4-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(i.a)({values:{narrow:["\u049a","\u0410","\u041d","\u0421","\u041c","\u041c","\u0428","\u0422","\u049a","\u049a","\u049a","\u0416"],abbreviated:["\u049b\u0430\u04a3","\u0430\u049b\u043f","\u043d\u0430\u0443","\u0441\u04d9\u0443","\u043c\u0430\u043c","\u043c\u0430\u0443","\u0448\u0456\u043b","\u0442\u0430\u043c","\u049b\u044b\u0440","\u049b\u0430\u0437","\u049b\u0430\u0440","\u0436\u0435\u043b"],wide:["\u049b\u0430\u04a3\u0442\u0430\u0440","\u0430\u049b\u043f\u0430\u043d","\u043d\u0430\u0443\u0440\u044b\u0437","\u0441\u04d9\u0443\u0456\u0440","\u043c\u0430\u043c\u044b\u0440","\u043c\u0430\u0443\u0441\u044b\u043c","\u0448\u0456\u043b\u0434\u0435","\u0442\u0430\u043c\u044b\u0437","\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a","\u049b\u0430\u0437\u0430\u043d","\u049b\u0430\u0440\u0430\u0448\u0430","\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d"]},defaultWidth:"wide",formattingValues:{narrow:["\u049a","\u0410","\u041d","\u0421","\u041c","\u041c","\u0428","\u0422","\u049a","\u049a","\u049a","\u0416"],abbreviated:["\u049b\u0430\u04a3","\u0430\u049b\u043f","\u043d\u0430\u0443","\u0441\u04d9\u0443","\u043c\u0430\u043c","\u043c\u0430\u0443","\u0448\u0456\u043b","\u0442\u0430\u043c","\u049b\u044b\u0440","\u049b\u0430\u0437","\u049b\u0430\u0440","\u0436\u0435\u043b"],wide:["\u049b\u0430\u04a3\u0442\u0430\u0440","\u0430\u049b\u043f\u0430\u043d","\u043d\u0430\u0443\u0440\u044b\u0437","\u0441\u04d9\u0443\u0456\u0440","\u043c\u0430\u043c\u044b\u0440","\u043c\u0430\u0443\u0441\u044b\u043c","\u0448\u0456\u043b\u0434\u0435","\u0442\u0430\u043c\u044b\u0437","\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a","\u049b\u0430\u0437\u0430\u043d","\u049b\u0430\u0440\u0430\u0448\u0430","\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d"]},defaultFormattingWidth:"wide"}),day:Object(i.a)({values:{narrow:["\u0416","\u0414","\u0421","\u0421","\u0411","\u0416","\u0421"],short:["\u0436\u0441","\u0434\u0441","\u0441\u0441","\u0441\u0440","\u0431\u0441","\u0436\u043c","\u0441\u0431"],abbreviated:["\u0436\u0441","\u0434\u0441","\u0441\u0441","\u0441\u0440","\u0431\u0441","\u0436\u043c","\u0441\u0431"],wide:["\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456","\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456","\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456","\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456","\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456","\u0436\u04b1\u043c\u0430","\u0441\u0435\u043d\u0431\u0456"]},defaultWidth:"wide"}),dayPeriod:Object(i.a)({values:{narrow:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b",noon:"\u0442\u04af\u0441",morning:"\u0442\u0430\u04a3",afternoon:"\u043a\u04af\u043d\u0434\u0456\u0437",evening:"\u043a\u0435\u0448",night:"\u0442\u04af\u043d"},wide:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b",noon:"\u0442\u04af\u0441",morning:"\u0442\u0430\u04a3",afternoon:"\u043a\u04af\u043d\u0434\u0456\u0437",evening:"\u043a\u0435\u0448",night:"\u0442\u04af\u043d"}},defaultWidth:"any",formattingValues:{narrow:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430",noon:"\u0442\u04af\u0441",morning:"\u0442\u0430\u04a3",afternoon:"\u043a\u04af\u043d",evening:"\u043a\u0435\u0448",night:"\u0442\u04af\u043d"},wide:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430",noon:"\u0442\u04af\u0441\u0442\u0435",morning:"\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3",afternoon:"\u043a\u04af\u043d\u0434\u0456\u0437",evening:"\u043a\u0435\u0448\u0442\u0435",night:"\u0442\u04af\u043d\u0434\u0435"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Object(i.c)({matchPattern:/^(\d+)(-?(\u0448\u0456|\u0448\u044b))?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(i.d)({matchPatterns:{narrow:/^((\u0431 )?\u0437\.?\s?\u0434\.?)/i,abbreviated:/^((\u0431 )?\u0437\.?\s?\u0434\.?)/i,wide:/^(\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043d|\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437|\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437\u0434\u0430\u043d)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0431/i,/^\u0437/i]},defaultParseWidth:"any"}),quarter:Object(i.d)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?\u0448\u0456)? \u0442\u043e\u049b.?/i,wide:/^[1234](-?\u0448\u0456)? \u0442\u043e\u049b\u0441\u0430\u043d/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(i.d)({matchPatterns:{narrow:/^(\u049b|\u0430|\u043d|\u0441|\u043c|\u043c\u0430\u0443|\u0448|\u0442|\u049b\u044b\u0440|\u049b\u0430\u0437|\u049b\u0430\u0440|\u0436)/i,abbreviated:/^(\u049b\u0430\u04a3|\u0430\u049b\u043f|\u043d\u0430\u0443|\u0441\u04d9\u0443|\u043c\u0430\u043c|\u043c\u0430\u0443|\u0448\u0456\u043b|\u0442\u0430\u043c|\u049b\u044b\u0440|\u049b\u0430\u0437|\u049b\u0430\u0440|\u0436\u0435\u043b)/i,wide:/^(\u049b\u0430\u04a3\u0442\u0430\u0440|\u0430\u049b\u043f\u0430\u043d|\u043d\u0430\u0443\u0440\u044b\u0437|\u0441\u04d9\u0443\u0456\u0440|\u043c\u0430\u043c\u044b\u0440|\u043c\u0430\u0443\u0441\u044b\u043c|\u0448\u0456\u043b\u0434\u0435|\u0442\u0430\u043c\u044b\u0437|\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a|\u049b\u0430\u0437\u0430\u043d|\u049b\u0430\u0440\u0430\u0448\u0430|\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u049b/i,/^\u0430/i,/^\u043d/i,/^\u0441/i,/^\u043c/i,/^\u043c/i,/^\u0448/i,/^\u0442/i,/^\u049b/i,/^\u049b/i,/^\u049b/i,/^\u0436/i],abbreviated:[/^\u049b\u0430\u04a3/i,/^\u0430\u049b\u043f/i,/^\u043d\u0430\u0443/i,/^\u0441\u04d9\u0443/i,/^\u043c\u0430\u043c/i,/^\u043c\u0430\u0443/i,/^\u0448\u0456\u043b/i,/^\u0442\u0430\u043c/i,/^\u049b\u044b\u0440/i,/^\u049b\u0430\u0437/i,/^\u049b\u0430\u0440/i,/^\u0436\u0435\u043b/i],any:[/^\u049b/i,/^\u0430/i,/^\u043d/i,/^\u0441/i,/^\u043c/i,/^\u043c/i,/^\u0448/i,/^\u0442/i,/^\u049b/i,/^\u049b/i,/^\u049b/i,/^\u0436/i]},defaultParseWidth:"any"}),day:Object(i.d)({matchPatterns:{narrow:/^(\u0436|\u0434|\u0441|\u0441|\u0431|\u0436|\u0441)/i,short:/^(\u0436\u0441|\u0434\u0441|\u0441\u0441|\u0441\u0440|\u0431\u0441|\u0436\u043c|\u0441\u0431)/i,wide:/^(\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456|\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456|\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456|\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456|\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456|\u0436\u04b1\u043c\u0430|\u0441\u0435\u043d\u0431\u0456)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0436/i,/^\u0434/i,/^\u0441/i,/^\u0441/i,/^\u0431/i,/^\u0436/i,/^\u0441/i],short:[/^\u0436\u0441/i,/^\u0434\u0441/i,/^\u0441\u0441/i,/^\u0441\u0440/i,/^\u0431\u0441/i,/^\u0436\u043c/i,/^\u0441\u0431/i],any:[/^\u0436[\u0435\u043a]/i,/^\u0434[\u04af\u0439]/i,/^\u0441e[\u0439]/i,/^\u0441\u04d9[\u0440]/i,/^\u0431[\u0435\u0439]/i,/^\u0436[\u04b1\u043c]/i,/^\u0441\u0435[\u043d]/i]},defaultParseWidth:"any"}),dayPeriod:Object(i.d)({matchPatterns:{narrow:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i,wide:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i,any:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^\u0422\u0414/i,pm:/^\u0422\u041a/i,midnight:/^\u0442\u04af\u043d \u043e\u0440\u0442\u0430/i,noon:/^\u043a\u04af\u043d\u0434\u0456\u0437/i,morning:/\u0442\u0430\u04a3/i,afternoon:/\u0442\u04af\u0441/i,evening:/\u043a\u0435\u0448/i,night:/\u0442\u04af\u043d/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};n.default=f},333:function(t,n,e){"use strict";function i(t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.width?String(n.width):t.defaultWidth,i=t.formats[e]||t.formats[t.defaultWidth];return i}}function a(t){return function(n,e){var i,a=e||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,u=a.width?String(a.width):r;i=t.formattingValues[u]||t.formattingValues[r]}else{var o=t.defaultWidth,l=a.width?String(a.width):t.defaultWidth;i=t.values[l]||t.values[o]}return i[t.argumentCallback?t.argumentCallback(n):n]}}function r(t){return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.match(t.matchPattern);if(!i)return null;var a=i[0],r=n.match(t.parsePattern);if(!r)return null;var u=t.valueCallback?t.valueCallback(r[0]):r[0];u=e.valueCallback?e.valueCallback(u):u;var o=n.slice(a.length);return{value:u,rest:o}}}function u(t){return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],r=n.match(a);if(!r)return null;var u,c=r[0],s=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?l(s,(function(t){return t.test(c)})):o(s,(function(t){return t.test(c)}));u=t.valueCallback?t.valueCallback(d):d,u=e.valueCallback?e.valueCallback(u):u;var v=n.slice(c.length);return{value:u,rest:v}}}function o(t,n){for(var e in t)if(t.hasOwnProperty(e)&&n(t[e]))return e}function l(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return e}e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return u}))},334:function(t,n,e){"use strict";function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}e.d(n,"a",(function(){return i}))},335:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return r}));var i=e(334);function a(t,n){if(n.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+n.length+" present")}function r(t){a(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"===Object(i.a)(t)&&"[object Date]"===n?new Date(t.getTime()):"number"===typeof t||"[object Number]"===n?new Date(t):("string"!==typeof t&&"[object String]"!==n||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function u(t){if(null===t||!0===t||!1===t)return NaN;var n=Number(t);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}function o(t,n){a(1,arguments);var e=n||{},i=e.locale,o=i&&i.options&&i.options.weekStartsOn,l=null==o?0:u(o),c=null==e.weekStartsOn?l:u(e.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=r(t),d=s.getUTCDay(),v=(d<c?7:0)+d-c;return s.setUTCDate(s.getUTCDate()-v),s.setUTCHours(0,0,0,0),s}function l(t,n,e){a(2,arguments);var i=o(t,e),r=o(n,e);return i.getTime()===r.getTime()}}}]);
//# sourceMappingURL=7.b09d85c0.chunk.js.map