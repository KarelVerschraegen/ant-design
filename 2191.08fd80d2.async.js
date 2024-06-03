"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2191],{232308:function(_,g,h){h.d(g,{S:function(){return L}});var i=h(338471),L=function(){function v(p,y,x){x===void 0&&(x={}),this.status="idle",this.options=x,this.sandboxSetup=y,this.iframeSelector=p}return v.prototype.updateOptions=function(p){(0,i.J)(this.options,p)||(this.options=p,this.updateSandbox())},v.prototype.updateSandbox=function(p,y){throw p===void 0&&(p=this.sandboxSetup),Error("Method not implemented")},v.prototype.destroy=function(){throw Error("Method not implemented")},v.prototype.dispatch=function(p){throw Error("Method not implemented")},v.prototype.listen=function(p){throw Error("Method not implemented")},v}()},752191:function(_,g,h){h.r(g),h.d(g,{SandpackRuntime:function(){return R}});var i=h(82366),L=h(338471),v=h(232308),p=h(395002),y=function(){function d(o,t,r){var s=this;this.type=o,this.handleMessage=t,this.protocol=r,this._disposeMessageListener=this.protocol.channelListen(function(e){return(0,i._)(s,void 0,void 0,function(){var n,c,l,u,l;return(0,i.a)(this,function(f){switch(f.label){case 0:if(!(e.type===this.getTypeId()&&e.method))return[3,4];n=e,f.label=1;case 1:return f.trys.push([1,3,,4]),[4,this.handleMessage(n)];case 2:return c=f.sent(),l={type:this.getTypeId(),msgId:n.msgId,result:c},this.protocol.dispatch(l),[3,4];case 3:return u=f.sent(),l={type:this.getTypeId(),msgId:n.msgId,error:{message:u.message}},this.protocol.dispatch(l),[3,4];case 4:return[2]}})})})}return d.prototype.getTypeId=function(){return"protocol-".concat(this.type)},d.prototype.dispose=function(){this._disposeMessageListener()},d}(),x=function(){function d(o,t){this.globalListeners={},this.globalListenersCount=0,this.channelListeners={},this.channelListenersCount=0,this.channelId=Math.floor(Math.random()*1e6),this.frameWindow=o.contentWindow,this.origin=t,this.globalListeners=[],this.channelListeners=[],this.eventListener=this.eventListener.bind(this),typeof window!="undefined"&&window.addEventListener("message",this.eventListener)}return d.prototype.cleanup=function(){window.removeEventListener("message",this.eventListener),this.globalListeners={},this.channelListeners={},this.globalListenersCount=0,this.channelListenersCount=0},d.prototype.register=function(){this.frameWindow&&this.frameWindow.postMessage({type:"register-frame",origin:document.location.origin,id:this.channelId},this.origin)},d.prototype.dispatch=function(o){this.frameWindow&&this.frameWindow.postMessage((0,i.h)({$id:this.channelId,codesandbox:!0},o),this.origin)},d.prototype.globalListen=function(o){var t=this;if(typeof o!="function")return function(){};var r=this.globalListenersCount;return this.globalListeners[r]=o,this.globalListenersCount++,function(){delete t.globalListeners[r]}},d.prototype.channelListen=function(o){var t=this;if(typeof o!="function")return function(){};var r=this.channelListenersCount;return this.channelListeners[r]=o,this.channelListenersCount++,function(){delete t.channelListeners[r]}},d.prototype.eventListener=function(o){if(o.source===this.frameWindow){var t=o.data;t.codesandbox&&(Object.values(this.globalListeners).forEach(function(r){return r(t)}),t.$id===this.channelId&&Object.values(this.channelListeners).forEach(function(r){return r(t)}))}},d}(),S=50;function I(d,o){if(!d)return"static";var t=d.dependencies,r=t===void 0?{}:t,s=d.devDependencies,e=s===void 0?{}:s,n=(0,i.i)((0,i.i)([],Object.keys(r),!0),Object.keys(e),!0),c=Object.keys(o),u=["@adonisjs/framework","@adonisjs/core"];if(n.some(function(a){return u.indexOf(a)>-1}))return"adonis";var l=["nuxt","nuxt-edge","nuxt-ts","nuxt-ts-edge","nuxt3"];if(n.some(function(a){return l.indexOf(a)>-1}))return"nuxt";if(n.indexOf("next")>-1)return"next";var f=["apollo-server","apollo-server-express","apollo-server-hapi","apollo-server-koa","apollo-server-lambda","apollo-server-micro"];if(n.some(function(a){return f.indexOf(a)>-1}))return"apollo";if(n.indexOf("mdx-deck")>-1)return"mdx-deck";if(n.indexOf("gridsome")>-1)return"gridsome";if(n.indexOf("vuepress")>-1)return"vuepress";if(n.indexOf("ember-cli")>-1)return"ember";if(n.indexOf("sapper")>-1)return"sapper";if(n.indexOf("gatsby")>-1)return"gatsby";if(n.indexOf("quasar")>-1)return"quasar";if(n.indexOf("@docusaurus/core")>-1)return"docusaurus";if(n.indexOf("remix")>-1)return"remix";if(n.indexOf("astro")>-1)return"node";if(c.some(function(a){return a.endsWith(".re")}))return"reason";var w=["parcel-bundler","parcel"];if(n.some(function(a){return w.indexOf(a)>-1}))return"parcel";var b=["@dojo/core","@dojo/framework"];if(n.some(function(a){return b.indexOf(a)>-1}))return"@dojo/cli-create-app";if(n.indexOf("@nestjs/core")>-1||n.indexOf("@nestjs/common")>-1)return"nest";if(n.indexOf("react-styleguidist")>-1)return"styleguidist";if(n.indexOf("react-scripts")>-1)return"create-react-app";if(n.indexOf("react-scripts-ts")>-1)return"create-react-app-typescript";if(n.indexOf("@angular/core")>-1)return"angular-cli";if(n.indexOf("preact-cli")>-1)return"preact-cli";if(n.indexOf("@sveltech/routify")>-1||n.indexOf("@roxi/routify")>-1||n.indexOf("vite")>-1||n.indexOf("@frontity/core")>-1)return"node";if(n.indexOf("svelte")>-1)return"svelte";if(n.indexOf("vue")>-1)return"vue-cli";if(n.indexOf("cx")>-1)return"cxjs";var m=["express","koa","nodemon","ts-node","@tensorflow/tfjs-node","webpack-dev-server","snowpack"];if(n.some(function(a){return m.indexOf(a)>-1})||Object.keys(r).length>=S)return"node"}var O,E="https://".concat((O="2.13.8")===null||O===void 0?void 0:O.replace(/\./g,"-"),"-sandpack.codesandbox.io/"),R=function(d){(0,i.g)(o,d);function o(t,r,s){s===void 0&&(s={});var e=d.call(this,t,r,s)||this;if(e.getTranspilerContext=function(){return new Promise(function(c){var u=e.listen(function(l){l.type==="transpiler-context"&&(c(l.data),u())});e.dispatch({type:"get-transpiler-context"})})},e.bundlerURL=s.bundlerURL||E,s.teamId&&(e.bundlerURL=e.bundlerURL.replace("https://","https://"+s.teamId+"-")+"?cache=".concat(Date.now())),e.bundlerState=void 0,e.errors=[],e.status="initializing",typeof t=="string"){e.selector=t;var n=document.querySelector(t);(0,i.n)(n,"The element '".concat(t,"' was not found")),e.element=n,e.iframe=document.createElement("iframe"),e.initializeElement()}else e.element=t,e.iframe=t;return e.iframe.getAttribute("sandbox")||(e.iframe.setAttribute("sandbox","allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-pointer-lock"),e.iframe.setAttribute("allow","accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-write;")),e.setLocationURLIntoIFrame(),e.iframeProtocol=new x(e.iframe,e.bundlerURL),e.unsubscribeGlobalListener=e.iframeProtocol.globalListen(function(c){c.type!=="initialized"||!e.iframe.contentWindow||(e.iframeProtocol.register(),e.options.fileResolver&&(e.fileResolverProtocol=new y("fs",function(u){return(0,i._)(e,void 0,void 0,function(){return(0,i.a)(this,function(l){if(u.method==="isFile")return[2,this.options.fileResolver.isFile(u.params[0])];if(u.method==="readFile")return[2,this.options.fileResolver.readFile(u.params[0])];throw new Error("Method not supported")})})},e.iframeProtocol)),e.updateSandbox(e.sandboxSetup,!0))}),e.unsubscribeChannelListener=e.iframeProtocol.channelListen(function(c){switch(c.type){case"start":{e.errors=[];break}case"status":{e.status=c.status;break}case"action":{c.action==="show-error"&&(e.errors=(0,i.i)((0,i.i)([],e.errors,!0),[(0,i.e)(c)],!1));break}case"done":{e.status="done";break}case"state":{e.bundlerState=c.state;break}}}),e}return o.prototype.setLocationURLIntoIFrame=function(){var t,r=this.options.startRoute?new URL(this.options.startRoute,this.bundlerURL).toString():this.bundlerURL;(t=this.iframe.contentWindow)===null||t===void 0||t.location.replace(r),this.iframe.src=r},o.prototype.destroy=function(){this.unsubscribeChannelListener(),this.unsubscribeGlobalListener(),this.iframeProtocol.cleanup()},o.prototype.updateOptions=function(t){(0,L.J)(this.options,t)||(this.options=t,this.updateSandbox())},o.prototype.updateSandbox=function(t,r){var s,e,n,c;t===void 0&&(t=this.sandboxSetup),this.sandboxSetup=(0,i.h)((0,i.h)({},this.sandboxSetup),t);var u=this.getFiles(),l=Object.keys(u).reduce(function(b,m){var a;return(0,i.h)((0,i.h)({},b),(a={},a[m]={code:u[m].code,path:m},a))},{}),f=JSON.parse((0,i.b)(this.sandboxSetup.dependencies,this.sandboxSetup.devDependencies,this.sandboxSetup.entry));try{f=JSON.parse(u["/package.json"].code)}catch(b){console.error((0,i.c)("could not parse package.json file: "+b.message))}var w=Object.keys(u).reduce(function(b,m){var a;return(0,i.h)((0,i.h)({},b),(a={},a[m]={content:u[m].code,path:m},a))},{});this.dispatch((0,i.h)((0,i.h)({},this.options),{type:"compile",codesandbox:!0,version:3,isInitializationCompile:r,modules:l,reactDevTools:this.options.reactDevTools,externalResources:this.options.externalResources||[],hasFileResolver:!!this.options.fileResolver,disableDependencyPreprocessing:this.sandboxSetup.disableDependencyPreprocessing,template:this.sandboxSetup.template||I(f,w),showOpenInCodeSandbox:(s=this.options.showOpenInCodeSandbox)!==null&&s!==void 0?s:!0,showErrorScreen:(e=this.options.showErrorScreen)!==null&&e!==void 0?e:!0,showLoadingScreen:(n=this.options.showLoadingScreen)!==null&&n!==void 0?n:!1,skipEval:this.options.skipEval||!1,clearConsoleDisabled:!this.options.clearConsoleOnFirstCompile,logLevel:(c=this.options.logLevel)!==null&&c!==void 0?c:i.S.Info,customNpmRegistries:this.options.customNpmRegistries,teamId:this.options.teamId,sandboxId:this.options.sandboxId}))},o.prototype.dispatch=function(t){t.type==="refresh"&&this.setLocationURLIntoIFrame(),this.iframeProtocol.dispatch(t)},o.prototype.listen=function(t){return this.iframeProtocol.channelListen(t)},o.prototype.getCodeSandboxURL=function(){var t=this.getFiles(),r=Object.keys(t).reduce(function(s,e){var n;return(0,i.h)((0,i.h)({},s),(n={},n[e.replace("/","")]={content:t[e].code,isBinary:!1},n))},{});return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",body:JSON.stringify({files:r}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(s){return s.json()}).then(function(s){return{sandboxId:s.sandbox_id,editorUrl:"https://codesandbox.io/s/".concat(s.sandbox_id),embedUrl:"https://codesandbox.io/embed/".concat(s.sandbox_id)}})},o.prototype.getFiles=function(){var t=this.sandboxSetup;return t.files["/package.json"]===void 0?(0,i.d)(t.files,t.dependencies,t.devDependencies,t.entry):this.sandboxSetup.files},o.prototype.initializeElement=function(){this.iframe.style.border="0",this.iframe.style.width=this.options.width||"100%",this.iframe.style.height=this.options.height||"100%",this.iframe.style.overflow="hidden",(0,i.n)(this.element.parentNode,"The given iframe does not have a parent."),this.element.parentNode.replaceChild(this.iframe,this.element)},o}(v.S)}}]);
