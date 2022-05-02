!function(){"use strict";function e(){try{return window.self!==window.top}catch(e){return!0}}var n=window.MFEController=window.MFEController||function(){var n={},o={},i=function(e){var n,o,i,r,a,d=void 0===e?{action:{type:"",sender:"",receiver:""},payload:null,broadcast:!1,targetOrigin:"",senderOrigin:window.origin}:e,c=d.action,l=c.type,s=void 0===l?"":l,u=c.sender,p=void 0===u?"":u,v=c.receiver,g=void 0===v?"":v,f=d.payload,w=void 0===f?null:f,y=d.broadcast,m=void 0!==y&&y,b=d.targetOrigin,h=void 0===b?"":b,O=d.senderOrigin,_=void 0===O?window.origin:O,E=document.querySelector('[app-id="'+g+'"]'),A=null===(n=E)||void 0===n?void 0:n.iframe;if(console.log("is iframe",A),console.log("sendmessage to "+g),A){var C=null===(r=null===(i=null!==(o=null==E?void 0:E.shadowRoot)&&void 0!==o?o:E)||void 0===i?void 0:i.querySelector(".mfe__container"))||void 0===r?void 0:r.querySelector("iframe");null===(a=null==C?void 0:C.contentWindow)||void 0===a||a.postMessage({action:{type:s,sender:p,receiver:g},payload:w,senderOrigin:_},h||"*")}else null==t||t({action:{type:s,sender:p,receiver:g},payload:w,broadcast:m})},t=function(e){var n=void 0===e?{action:{type:"",sender:"",receiver:""},payload:null,broadcast:!1}:e,i=n.action,t=i.type,r=void 0===t?"":t,a=i.sender,d=void 0===a?"":a,c=i.receiver,l=void 0===c?"":c,s=n.payload,u=void 0===s?null:s,p=n.broadcast;if(void 0!==p&&p){var v=Object.keys(o).filter((function(e){return e!==d}));v.forEach((function(e){var n=o[e],i={type:r,sender:d,receiver:e};n.forEach((function(e){return e({action:i,payload:u})}))}))}else window.dispatchEvent(new CustomEvent("__mfe_pubsub",{detail:{action:{type:r,sender:d,receiver:l},payload:u,appId:l}}))};window.addEventListener("__mfe_pubsub",(function(e){var n=e.detail,i=n.appId,t=n.action,r=n.payload;(o[i]||[]).forEach((function(e){return e({action:t,payload:r})}))})),window.addEventListener("message",(function(n){var o;if(n.origin===(null===(o=n.data)||void 0===o?void 0:o.senderOrigin))if(e())a=null==(r=n.data)?void 0:r.action,d=null==r?void 0:r.payload,window.dispatchEvent(new CustomEvent("__mfe_pubsub",{detail:{action:{type:a.type,sender:a.sender,receiver:a.receiver},payload:d,appId:a.receiver}}));else{console.log("from iframe child ",n);var r,a=null==(r=n.data)?void 0:r.action,d=null==r?void 0:r.payload;a&&"root"!==a.receiver?i({action:{receiver:a.receiver,type:a.type,sender:a.sender},payload:d,broadcast:r.broadcast,targetOrigin:r.targetOrigin||"*"}):a&&t({action:{type:a.type,sender:a.sender,receiver:a.receiver},payload:d,broadcast:null==r?void 0:r.broadcast})}else console.error("Invalid Origin")}));var r=function(e,o){n[e]?n[e]=Object.assign(Object.assign({},n[e]),o):n[e]=Object.assign({},o)};return{registerApplication:function(e,n){r(e,n)},setRootConfig:function(e,n){r(e,n)},mount:function(e,o,i){var t;null===(t=n[e])||void 0===t||t.mount(o,i)},unmount:function(e,o){var i;null===(i=n[e])||void 0===i||i.unmount(o)},getApplication:function(e){return n[e]},deRegisterApplication:function(e){n[e]={}},getRegistry:function(){return n},start:function(){!function(){var e=new URL(window.location).pathname;Object.keys(n).forEach((function(o){if(e.includes(n[o].activeWhen)){var i=document.createElement("mfe-application");i.setAttribute("app-id",o),i.setAttribute("app-name",n[o].name),i.setAttribute("id",n[o].id),i.setAttribute("style",n[o].styles),document.querySelector("div#mfe-application-"+o).appendChild(i)}}))}()},__mfe_publish:function(n){var o,r=void 0===n?{action:{type:"",sender:"",receiver:""},payload:null,broadcast:!1,targetOrigin:"",senderOrigin:window.origin}:n,a=r.action,d=a.type,c=void 0===d?"":d,l=a.sender,s=void 0===l?"":l,u=a.receiver,p=void 0===u?"":u,v=r.payload,g=void 0===v?null:v,f=r.broadcast,w=void 0!==f&&f,y=r.targetOrigin,m=void 0===y?"":y,b=r.senderOrigin,h=void 0===b?window.origin:b;e()?null===(o=window.top)||void 0===o||o.postMessage({action:{type:c,sender:s,receiver:p},payload:g,broadcast:w,senderOrigin:window.origin},m||"*"):(console.log("receiver ",p),"root"!==p?i({action:{receiver:p,type:c,sender:s},payload:g,broadcast:w,targetOrigin:m,senderOrigin:h}):null==t||t({action:{type:c,sender:s,receiver:p},payload:g,broadcast:w}))},__mfe_subscribe:function(e,n){var i=o[e]||[];i.push(n),o[e]=i},__mfe_unsubscribe:function(e,n){var i=o[e]||[],t=i.indexOf(n);t>=0&&i.splice(t,1)}}}();class o extends HTMLElement{constructor(){super(),console.log("apprProps",this.getAttribute("appProps")),this.addEventListener("click",(e=>{this.handler()})),n?.__mfe_subscribe?.("web12",(e=>{console.log(`msg from outside for web12 is ${e}`)}))}handler(){console.log("jdjdhjso "),n?.__mfe_publish?.({action:{type:"from_child webc",sender:"web12",receiver:"root"},payload:"from child webc",senderOrigin:window.origin,targetOrigin:this.getAttribute("appProps")?.targetOrigin||"http://localhost:3333"}),n?.__mfe_publish?.({action:{type:"navigate",sender:"wc1",receiver:"reactForm"},payload:{from:window.origin,to:"/about"},senderOrigin:window.origin,targetOrigin:this.getAttribute("appProps")?.targetOrigin||"http://localhost:3333"})}connectedCallback(){this.innerHTML="<h1>Hello world</h1>\n        <button>publish event</button>\n      "}}window.customElements.get("my-component")||customElements.define("my-component",o);const i=document.createElement("my-component"),t={mount:async(e,n)=>{e?(console.log("MOUNT: web12",e,n),e.appendChild(i)):console.warn("APP - web12 container not found")},unmount:e=>{console.log("UNMOUNT: web12"),e.remove(i)}};n?.setRootConfig?.("web12",t),window.onload=()=>{t.mount(document.getElementById("webroot"),{title:"test",targetOrigin:window.origin})}}();