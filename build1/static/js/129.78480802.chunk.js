(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[129],{318:function(e,i,l){"use strict";l.r(i),l.d(i,"datatable",(function(){return s})),l.d(i,"datepicker",(function(){return a})),l.d(i,"dropdown",(function(){return r})),l.d(i,"fileUploader",(function(){return t})),l.d(i,"filters",(function(){return f})),l.d(i,"form",(function(){return n})),l.d(i,"formBuilder",(function(){return u})),l.d(i,"modal",(function(){return o})),l.d(i,"pagination",(function(){return c})),l.d(i,"platformTable",(function(){return p})),l.d(i,"search",(function(){return d})),l.d(i,"searchDropdown",(function(){return m}));var a={cancel:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",update:"\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15",to:"\u0e16\u0e36\u0e07"},r={add:"\u0e40\u0e1e\u0e34\u0e48\u0e21",cancel:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"},t={text:"\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e44\u0e1f\u0e25\u0e4c",description:"\u0e2b\u0e23\u0e37\u0e2d\u0e25\u0e32\u0e01\u0e41\u0e25\u0e30\u0e27\u0e32\u0e07\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",acceptError:"\u0e44\u0e21\u0e48\u0e22\u0e2d\u0e21\u0e23\u0e31\u0e1a\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e44\u0e1f\u0e25\u0e4c",maxFileSizeError:"\u0e40\u0e01\u0e34\u0e19\u0e02\u0e19\u0e32\u0e14\u0e44\u0e1f\u0e25\u0e4c\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",maxFilesLimitError:"\u0e40\u0e01\u0e34\u0e19\u0e02\u0e35\u0e14\u0e08\u0e33\u0e01\u0e31\u0e14\u0e44\u0e1f\u0e25\u0e4c\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",fileUploadError:"\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e44\u0e1f\u0e25\u0e4c\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",uploading:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14",selectedFiles:"\u0e44\u0e1f\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e25\u0e37\u0e2d\u0e01",remove:"\u0e25\u0e1a"},o={cancel:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",ok:"\u0e15\u0e01\u0e25\u0e07"},d={search:"\u0e04\u0e49\u0e19\u0e2b\u0e32",noItemsFound:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",noDataAvailable:"\u0e44\u0e21\u0e48\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"},n={required:"\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35 {{field}}",invalidUrl:"\u0e01\u0e23\u0e2d\u0e01 URL \u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",invalidEmail:"\u0e01\u0e23\u0e2d\u0e01\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",invalidNumber:"\u0e01\u0e23\u0e2d\u0e01\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"},c={buttonGroupLabel:"\u0e01\u0e32\u0e23\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e01\u0e32\u0e23\u0e41\u0e1a\u0e48\u0e07\u0e2b\u0e19\u0e49\u0e32",previousButtonLabel:"\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32",nextButtonLabel:"\u0e16\u0e31\u0e14\u0e44\u0e1b",content:"<span class='record'>{{start}}</span> \u0e16\u0e36\u0e07 <span class='record'>{{end}}</span> \u0e08\u0e32\u0e01 {{total}}"},s={chooseColumns:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e2d\u0e25\u0e31\u0e21\u0e19\u0e4c",actions:"\u0e01\u0e32\u0e23\u0e01\u0e23\u0e30\u0e17\u0e33",hide:"\u0e0b\u0e48\u0e2d\u0e19",show:"\u0e41\u0e2a\u0e14\u0e07"},p={delete:"\u0e25\u0e1a",sortby:"\u0e08\u0e31\u0e14\u0e40\u0e23\u0e35\u0e22\u0e07\u0e15\u0e32\u0e21",orderby:"\u0e40\u0e23\u0e35\u0e22\u0e07\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e15\u0e32\u0e21"},u={fieldRequired:"\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e2a\u0e48\u0e07\u0e41\u0e1a\u0e1a\u0e1f\u0e2d\u0e23\u0e4c\u0e21",fieldRequiredTag:"\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19",fieldUnique:"\u0e22\u0e2d\u0e21\u0e23\u0e31\u0e1a\u0e04\u0e48\u0e32\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e0b\u0e49\u0e33\u0e01\u0e31\u0e19",fieldUniqueHoverText:"\u0e2b\u0e32\u0e01\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e44\u0e27\u0e49 \u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e44\u0e21\u0e48\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15\u0e43\u0e2b\u0e49\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2a\u0e2d\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e21\u0e35\u0e04\u0e48\u0e32\u0e40\u0e17\u0e48\u0e32\u0e01\u0e31\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e14\u0e31\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27 \u0e42\u0e1b\u0e23\u0e14\u0e17\u0e23\u0e32\u0e1a\u0e27\u0e48\u0e32\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e19\u0e35\u0e49\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15\u0e44\u0e14\u0e49\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e41\u0e25\u0e49\u0e27",fieldUniqueTag:"\u0e44\u0e21\u0e48\u0e0b\u0e49\u0e33\u0e01\u0e31\u0e19",fieldFilter:"\u0e41\u0e2a\u0e14\u0e07\u0e43\u0e19\u0e15\u0e31\u0e27\u0e01\u0e23\u0e2d\u0e07",fieldFilterHoverText:"\u0e2b\u0e32\u0e01\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e44\u0e27\u0e49 \u0e04\u0e38\u0e13\u0e08\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e04\u0e31\u0e14\u0e01\u0e23\u0e2d\u0e07\u0e21\u0e38\u0e21\u0e21\u0e2d\u0e07\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e19\u0e35\u0e49 \u0e42\u0e1b\u0e23\u0e14\u0e17\u0e23\u0e32\u0e1a\u0e27\u0e48\u0e32\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e19\u0e35\u0e49\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15\u0e44\u0e14\u0e49\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e41\u0e25\u0e49\u0e27",fieldFilterTag:"\u0e04\u0e31\u0e14\u0e01\u0e23\u0e2d\u0e07\u0e44\u0e14\u0e49",fieldTypeRelationship:"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c",fieldTypeRelationshipDesc:"\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e2d\u0e47\u0e2d\u0e1a\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e04\u0e49\u0e19\u0e2b\u0e32",fieldTypeRelationshipDescHoverText:"\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e19\u0e35\u0e49\u0e08\u0e30\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e44\u0e2d\u0e04\u0e2d\u0e19\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e48\u0e32\u0e08\u0e32\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c \u0e2d\u0e47\u0e2d\u0e1a\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22\u0e04\u0e37\u0e2d\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e17\u0e35\u0e48\u0e21\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e48\u0e32\u0e43\u0e19\u0e25\u0e34\u0e2a\u0e15\u0e4c",fieldTypeText:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",fieldTypeParagraph:"\u0e22\u0e48\u0e2d\u0e2b\u0e19\u0e49\u0e32",fieldTypeNumber:"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02",fieldTypeDecimal:"\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21",fieldTypeDate:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48",fieldTypeDropdown:"\u0e14\u0e23\u0e47\u0e2d\u0e1b\u0e14\u0e32\u0e27\u0e19\u0e4c",fieldTypeCheckbox:"\u0e40\u0e0a\u0e47\u0e04\u0e1a\u0e4a\u0e2d\u0e01\u0e0b\u0e4c",fieldTypeMultiselect:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e25\u0e32\u0e22\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",lookupUniqueTag:"\u0e44\u0e21\u0e48\u0e0b\u0e49\u0e33\u0e01\u0e31\u0e19",primaryFieldTag:"\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e2b\u0e25\u0e31\u0e01",primaryFieldHeader:"\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e2b\u0e25\u0e31\u0e01",primaryFieldNameHint:"\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e2b\u0e25\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e2d\u0e2d\u0e1a\u0e40\u0e08\u0e47\u0e01\u0e15\u0e4c\u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e25\u0e1a\u0e44\u0e14\u0e49 \u0e42\u0e14\u0e22\u0e21\u0e35\u0e02\u0e36\u0e49\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e31\u0e27\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e0b\u0e49\u0e33\u0e01\u0e31\u0e19\u0e02\u0e2d\u0e07\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e41\u0e15\u0e48\u0e25\u0e30\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 \u0e41\u0e25\u0e30\u0e08\u0e30\u0e1b\u0e23\u0e32\u0e01\u0e0f\u0e43\u0e19\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e41\u0e25\u0e30\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32",deleteFieldTitle:"\u0e04\u0e38\u0e13\u0e41\u0e19\u0e48\u0e43\u0e08\u0e2b\u0e23\u0e37\u0e2d\u0e27\u0e48\u0e32\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e25\u0e1a\u0e1f\u0e34\u0e25\u0e14\u0e4c?",deleteFieldMessage:"\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e19\u0e35\u0e49\u0e08\u0e30\u0e16\u0e39\u0e01\u0e25\u0e1a\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e16\u0e32\u0e27\u0e23\u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e08\u0e30\u0e2b\u0e32\u0e22\u0e44\u0e1b \u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e48\u0e2d\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48?",deleteFieldSubmit:"\u0e25\u0e1a",searchFields:"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e1f\u0e34\u0e25\u0e14\u0e4c",customizeWidget:"\u0e1b\u0e23\u0e31\u0e1a\u0e41\u0e15\u0e48\u0e07\u0e27\u0e34\u0e14\u0e40\u0e08\u0e47\u0e15",addChoices:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01",addChoice:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01",choicePlaceholderSuffix:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01",headerFieldTypes:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e1f\u0e34\u0e25\u0e14\u0e4c",headerFields:"\u0e1f\u0e34\u0e25\u0e14\u0e4c",fieldTypesDragDrop:"\u0e25\u0e32\u0e01\u0e41\u0e25\u0e30\u0e27\u0e32\u0e07\u0e08\u0e32\u0e01\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",behaviour:"\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19",fieldLabel:"\u0e0a\u0e37\u0e48\u0e2d\u0e1f\u0e34\u0e25\u0e14\u0e4c",fieldLabelPlaceholder:"\u0e01\u0e23\u0e2d\u0e01\u0e1b\u0e49\u0e32\u0e22\u0e1f\u0e34\u0e25\u0e14\u0e4c",addFieldBtn:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1f\u0e34\u0e25\u0e14\u0e4c",saveFieldBtn:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",cancelFieldBtn:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",disabledFilterCheck:"\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e0b\u0e49\u0e33\u0e08\u0e30\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e04\u0e31\u0e14\u0e01\u0e23\u0e2d\u0e07\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e43\u0e19\u0e21\u0e38\u0e21\u0e21\u0e2d\u0e07\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e40\u0e2a\u0e21\u0e2d",lookupSourceObject:"\u0e2d\u0e47\u0e2d\u0e1a\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e15\u0e49\u0e19\u0e17\u0e32\u0e07",lookupRelationshipPlaceholder:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c",lookupRelationshipLabel:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c",lookupTargetPlaceholder:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2d\u0e47\u0e2d\u0e1a\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22",lookupTargetLabel:"\u0e2d\u0e47\u0e2d\u0e1a\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22",dropdownChoiceDeleteMessage:"\u0e01\u0e32\u0e23\u0e25\u0e1a\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e08\u0e30\u0e2a\u0e48\u0e07\u0e1c\u0e25\u0e15\u0e48\u0e2d\u0e15\u0e31\u0e4b\u0e27\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07 \u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34 \u0e41\u0e25\u0e30\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07",relationshipManyToOne:"\u0e2b\u0e25\u0e32\u0e22\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e01\u0e31\u0e1a\u0e2b\u0e19\u0e36\u0e48\u0e07",relationshipManyToOneDesc:"\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e42\u0e22\u0e07\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2b\u0e25\u0e32\u0e22\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e02\u0e2d\u0e07\u0e2d\u0e47\u0e2d\u0e1a\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e15\u0e49\u0e19\u0e17\u0e32\u0e07\u0e01\u0e31\u0e1a\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e02\u0e2d\u0e07\u0e2d\u0e47\u0e2d\u0e1a\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22 \u0e04\u0e37\u0e2d \u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e15\u0e31\u0e4b\u0e27\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07\u0e44\u0e14\u0e49\u0e2b\u0e25\u0e32\u0e22\u0e43\u0e1a",relationshipOneToOne:"\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e01\u0e31\u0e1a\u0e2b\u0e19\u0e36\u0e48\u0e07",relationshipOneToOneDesc:"\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e42\u0e22\u0e07\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e02\u0e2d\u0e07\u0e2d\u0e47\u0e2d\u0e1a\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e15\u0e49\u0e19\u0e17\u0e32\u0e07\u0e01\u0e31\u0e1a\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e40\u0e14\u0e35\u0e22\u0e27\u0e02\u0e2d\u0e07\u0e2d\u0e47\u0e2d\u0e1a\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22 \u0e04\u0e37\u0e2d \u0e1a\u0e38\u0e04\u0e04\u0e25\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e21\u0e35\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e44\u0e14\u0e49\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e40\u0e25\u0e48\u0e21\u0e40\u0e14\u0e35\u0e22\u0e27",customizeWidgetModalHeader:"\u0e1b\u0e23\u0e31\u0e1a\u0e41\u0e15\u0e48\u0e07\u0e27\u0e34\u0e14\u0e40\u0e08\u0e47\u0e15",customizeWidgetModalHint:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 5 \u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e1a\u0e19\u0e27\u0e34\u0e14\u0e40\u0e08\u0e47\u0e15\u0e41\u0e25\u0e30\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32",customizeWidgetModalSaveBtn:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",customizeWidgetModalCancelBtn:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",noSearchItemsFound:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e17\u0e35\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e19!",errors:{emptyFieldName:"\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e1b\u0e49\u0e32\u0e22\u0e1f\u0e34\u0e25\u0e14\u0e4c!",emptyRelationshipType:"\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c!",emptyTargetObject:"\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e2d\u0e47\u0e2d\u0e1a\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22!",emptyChoice:"\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01!",duplicate:"\u0e21\u0e35\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e14\u0e23\u0e47\u0e2d\u0e1b\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e49\u0e27!",minimum:"\u0e01\u0e23\u0e2d\u0e01\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01!",formErrors:"\u0e41\u0e1a\u0e1a\u0e1f\u0e2d\u0e23\u0e4c\u0e21\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14!",fieldNameExists:"\u0e21\u0e35\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e1b\u0e49\u0e32\u0e22\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e49\u0e27!"},maximumLimits:{filterable:"\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e44\u0e14\u0e49\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 25 \u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e04\u0e31\u0e14\u0e01\u0e23\u0e2d\u0e07\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e43\u0e19\u0e21\u0e38\u0e21\u0e21\u0e2d\u0e07\u0e25\u0e34\u0e2a\u0e15\u0e4c",unique:"\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e21\u0e48\u0e0b\u0e49\u0e33\u0e01\u0e31\u0e19\u0e44\u0e14\u0e49\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 5 \u0e1f\u0e34\u0e25\u0e14\u0e4c",fields:"\u0e16\u0e36\u0e07\u0e02\u0e35\u0e14\u0e08\u0e33\u0e01\u0e31\u0e14\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 100 \u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e41\u0e25\u0e49\u0e27 \u0e25\u0e1a\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e43\u0e2b\u0e21\u0e48",lookups:"\u0e16\u0e36\u0e07\u0e02\u0e35\u0e14\u0e08\u0e33\u0e01\u0e31\u0e14\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e04\u0e49\u0e19\u0e2b\u0e32 5 \u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e41\u0e25\u0e49\u0e27 \u0e25\u0e1a\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e17\u0e35\u0e48\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e43\u0e2b\u0e21\u0e48"}},f={title:"\u0e01\u0e23\u0e2d\u0e07",addFilter:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e15\u0e31\u0e27\u0e01\u0e23\u0e2d\u0e07",noFilter:"\u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e15\u0e31\u0e27\u0e01\u0e23\u0e2d\u0e07\u0e43\u0e14\u0e46",validation:{required:"\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e23\u0e2d\u0e01",minMax:"\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 {{fromValue}}"},placeholder:{startRange:"\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19",endRange:"\u0e0a\u0e48\u0e27\u0e07\u0e2a\u0e34\u0e49\u0e19\u0e2a\u0e38\u0e14",and:"\u0e41\u0e25\u0e30"}},m={placeholder:{search:"\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e04\u0e49\u0e19\u0e2b\u0e32"}},h={datepicker:a,dropdown:r,fileUploader:t,modal:o,search:d,form:n,pagination:c,datatable:s,platformTable:p,formBuilder:u,filters:f,searchDropdown:m};i.default=h}}]);
//# sourceMappingURL=129.78480802.chunk.js.map