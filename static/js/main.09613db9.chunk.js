(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(n,e,t){n.exports=t(77)},77:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(14),c=t.n(a),i=t(10),u=t(4),s=t(11),l=t(5),d=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n,payload:e}}},f=function(n,e){var t=function(n){return{request:d("".concat(n,"_REQUEST")),success:d("".concat(n,"_SUCCESS")),failure:d("".concat(n,"_FAILURE"))}}(n);return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(r){return e({request:t,payload:n,dispatch:r})}}},h={SET_THEME:"".concat("@hackerNewsReader/app","/SET_THEME")},p={setTheme:d(h.SET_THEME)},m="dark",g="light",y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:m},e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload;switch(t){case h.SET_THEME:return Object(s.a)({},n,r);default:return n}},v=t(23),b=t(8),E=t(9),S=t(33),w=t.n(S),O=Object({NODE_ENV:"production",PUBLIC_URL:"/HackerNewsClone"}).URL||"http://localhost:3000/",x=2e4,k={"Content-Type":"application/json",Accept:"application/json"},j=new(function(){function n(e){var t=e.baseURL,r=void 0===t?O:t,o=e.timeout,a=void 0===o?x:o,c=e.headers,i=void 0===c?k:c,u=e.auth;Object(b.a)(this,n);var s=w.a.create({baseURL:r,timeout:a,headers:i,auth:u});s.interceptors.response.use(this.handleSuccess,this.handleError),this.client=s}return Object(E.a)(n,[{key:"handleSuccess",value:function(n){return n}},{key:"handleError",value:function(n){return Promise.reject(n)}},{key:"get",value:function(n){return this.client.get(n).then(function(n){return n.data})}},{key:"post",value:function(n,e){return this.client.post(n,e).then(function(n){return n.data})}},{key:"put",value:function(n,e){return this.client.put(n,e).then(function(n){return n.data})}},{key:"patch",value:function(n,e){return this.client.patch(n,e).then(function(n){return n.data})}},{key:"delete",value:function(n){return this.client.delete(n).then(function(n){return n.data})}}]),n}())({baseURL:"https://hacker-news.firebaseio.com/v0"}),T={};T.getTopStoryIds=function(){return j.get("/topstories".concat(".json?print=pretty"))},T.getStory=function(n){return j.get("/item/".concat(n).concat(".json?print=pretty"))},T.getStoriesByPage=function(n,e){var t=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{begin:e*n,end:(e+1)*n}}(20,e),r=function(n){var e=n.begin,t=n.end;return n.items.slice(e,t)}({begin:t.begin,end:t.end,items:n}).map(function(n){return T.getStory(n)});return Promise.all(r)};var C=T,_={FETCH_STORY_IDS:"".concat("@hackerNewsReader/story","/FETCH_STORY_IDS"),FETCH_STORIES:"".concat("@hackerNewsReader/story","/FETCH_STORIES")},I={fetchStoryIds:f(_.FETCH_STORY_IDS,function(n){var e=n.request,t=n.payload,r=n.dispatch;return r(e.request(t)),C.getTopStoryIds().then(function(n){return r(e.success({storyIds:n})),r(I.fetchStories({storyIds:n,page:0})),n}).catch(function(n){return r(e.failure(n))})}),fetchStories:f(_.FETCH_STORIES,function(n){var e=n.request,t=n.payload,r=n.dispatch,o=t.storyIds,a=t.page;return r(e.request(t)),C.getStoriesByPage(o,a).then(function(n){return r(e.success({stories:n}))}).catch(function(n){return r(e.failure(n))})})},R=I,F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{storyIds:[],stories:[],page:0,isFetching:!1,error:""},e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload;switch(t){case"".concat(_.FETCH_STORY_IDS,"_REQUEST"):case"".concat(_.FETCH_STORIES,"_REQUEST"):return Object(s.a)({},n,{isFetching:!0});case"".concat(_.FETCH_STORY_IDS,"_SUCCESS"):return Object(s.a)({},n,r);case"".concat(_.FETCH_STORIES,"_SUCCESS"):return Object(s.a)({},n,{stories:Object(v.a)(n.stories).concat(Object(v.a)(r.stories)),page:n.page+1,isFetching:!1});default:return n}},H=Object(u.c)({story:F,app:y}),U=t(34),N=(t(35),[]);N.push(U.a);var A=Object(u.d)(u.a.apply(void 0,N)),L=function(n){return Object(u.e)(H,n,A)},B=t(36),P=Object(B.a)(function(n){return n.story.storyIds},function(n){return n.story.stories},function(n,e){return n.length>e.length}),D=t(16),M=t(15),z=t(17),W=t(1),q=t(37),Y=t.n(q),K=t(2),J="@media only screen and  (max-width: 768px)";function Q(){var n=Object(K.a)(["\n  height: ","px;\n"]);return Q=function(){return n},n}function V(){var n=Object(K.a)(["\n  margin-left: 12px;\n  font-size: 18px;\n  cursor: pointer;\n"]);return V=function(){return n},n}function $(){var n=Object(K.a)(["\n  display: flex;\n  align-items: center;\n"]);return $=function(){return n},n}function G(){var n=Object(K.a)(["\n  height: 100%;\n  width: 100%;\n  max-width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  "," {\n    max-width: 96%;\n  }\n"]);return G=function(){return n},n}function X(){var n=Object(K.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 300;\n  margin-top: 24px;\n  margin-bottom: 26px;\n"]);return X=function(){return n},n}function Z(){var n=Object(K.a)(["\n  background-color: ",";\n  height: ","px;\n  color: ",";\n  width: 100%;\n  box-shadow: 0 1px 0 0 black;\n  position: fixed;\n  top: 0;\n"]);return Z=function(){return n},n}var nn=W.c.header(Z(),function(n){return n.theme.backgroundSecondary},48,function(n){return n.theme.text}),en=W.c.h1(X(),function(n){return n.theme.textSecondary}),tn=W.c.div(G(),J),rn=W.c.div($()),on=W.c.div(V()),an=W.c.div(Q(),48),cn=function(n){n.layout;var e=n.theme,t=(n.setLayout,n.setTheme);return o.a.createElement("div",null,o.a.createElement(nn,null,o.a.createElement(tn,null,o.a.createElement(en,null,"Hacker News Clone"),o.a.createElement(rn,null,e===g?o.a.createElement(on,{onClick:function(){return t(m)}},o.a.createElement("i",{className:"fas fa-moon"})):o.a.createElement(on,{onClick:function(){return t(g)}},o.a.createElement("i",{className:"fas fa-sun"}))))),o.a.createElement(an,null))},un=Object(i.b)(function(n){return{layout:n.app.layout,theme:n.app.theme}},function(n){return{setTheme:function(e){return n(p.setTheme({theme:e}))},setLayout:function(e){return n(p.setLayout({layout:e}))}}})(cn),sn=t(40),ln=t.n(sn),dn=t(41),fn=t.n(dn),hn=function(n){var e="";return n&&(n.includes("//")||(n="http://".concat(n)),e=fn.a.parse(n).hostname),e.includes("www.")&&(e=e.split("www.")[1]),e},pn="https://news.ycombinator.com",mn="".concat(pn,"/item?id="),gn="".concat(pn,"/user?id="),yn=function(n){var e=n.url,t=n.id,r="".concat(mn).concat(t);return e||r};function vn(){var n=Object(K.a)(["\n  color: ",";\n\n  &:visited {\n    color: ",";\n  }\n"]);return vn=function(){return n},n}function bn(){var n=Object(K.a)(["\n  font-size: 14px;\n  color: ",";\n"]);return bn=function(){return n},n}function En(){var n=Object(K.a)(["\n  color: ",";\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n"]);return En=function(){return n},n}function Sn(){var n=Object(K.a)(["\n  color: ",";\n  font-size: 12px;\n"]);return Sn=function(){return n},n}function wn(){var n=Object(K.a)(["\n  color: ",";\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: 0.4px;\n"]);return wn=function(){return n},n}function On(){var n=Object(K.a)(["\n  border-bottom: 1px solid ",";\n  padding: 14px 24px;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return On=function(){return n},n}var xn=W.c.li(On(),function(n){return n.theme.border}),kn=W.c.h3(wn(),function(n){return n.theme.text}),jn=W.c.span(Sn(),function(n){return n.theme.textSecondary}),Tn=W.c.a(En(),function(n){return n.theme.text}),Cn=W.c.div(bn(),function(n){return n.theme.textSecondary}),_n=W.c.a(vn(),function(n){return n.theme.textSecondary},function(n){return n.theme.textSecondary}),In=function(n){var e=n.by,t=n.kids,r=void 0===t?[]:t,a=n.score,c=n.url,i=n.title,u=n.id,s=(n.type,n.time),l=hn(c)||"news.ycombinator.com",d=yn({url:c,id:u}),f="".concat(mn).concat(u);return o.a.createElement(xn,null,o.a.createElement(Tn,{href:d,rel:"nofollow noreferrer noopener",target:"_blank"},o.a.createElement(kn,null,i," ",o.a.createElement(jn,null,"(",l,")"))),o.a.createElement(Cn,null,a," points by"," ",o.a.createElement(_n,{href:"".concat(gn).concat(e),rel:"nofollow noreferrer noopener",target:"_blank"},e)," ",o.a.createElement(ln.a,{date:new Date(1e3*s).toISOString()})," | ",o.a.createElement(_n,{href:f,rel:"nofollow noreferrer noopener",target:"_blank"},r.length," Comments")))};function Rn(){var n=Object(K.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n"]);return Rn=function(){return n},n}var Fn=W.c.ul(Rn(),function(n){return n.theme.backgroundSecondary}),Hn=function(n){function e(){return Object(b.a)(this,e),Object(D.a)(this,Object(M.a)(e).apply(this,arguments))}return Object(z.a)(e,n),Object(E.a)(e,[{key:"render",value:function(){var n=this.props.stories;return o.a.createElement(Fn,null,n.map(function(n){return o.a.createElement(In,Object.assign({key:n.id},n))}))}}]),e}(r.Component);function Un(){var n=Object(K.a)(["\n  text-align: center;\n\n  span {\n    color: ",";\n    display: inline-block;\n    margin-left: 4px;\n    margin-right: 4px;\n    font-size: 80px;\n    line-height: 0.1;\n\n    animation-name: ",";\n\n    animation-duration: 1s;\n\n    animation-iteration-count: infinite;\n\n    animation-fill-mode: both;\n  }\n\n  span:nth-child(2) {\n    animation-delay: 0.2s;\n  }\n  span:nth-child(3) {\n    animation-delay: 0.4s;\n  }\n"]);return Un=function(){return n},n}function Nn(){var n=Object(K.a)(["\n  \n  0% {\n    opacity: .2;\n  }\n  \n  20% {\n    opacity: 1;\n  }\n  \n  100% {\n    opacity: .2;\n  }\n"]);return Nn=function(){return n},n}var An=Object(W.d)(Nn()),Ln=W.c.div(Un(),function(n){return n.theme.textSecondary},An),Bn=function(){return o.a.createElement(Ln,null,o.a.createElement("span",null,"."),o.a.createElement("span",null,"."),o.a.createElement("span",null,"."))},Pn={background:"#272727",backgroundSecondary:"#393C3E",text:"#bfbebe",textSecondary:"#848886",border:"#272727"},Dn={background:"#EAEAEA",backgroundSecondary:"#F8F8F8",text:"#848886",textSecondary:"#aaaaaa",border:"#EAEAEA"};function Mn(){var n=Object(K.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 300;\n"]);return Mn=function(){return n},n}function zn(){var n=Object(K.a)(["\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  overflow: hidden;\n  padding-bottom: 200px;\n\n  "," {\n    width: 96%;\n  }\n"]);return zn=function(){return n},n}var Wn=W.c.div(zn(),J),qn=(W.c.h1(Mn(),function(n){return n.theme.textSecondary}),function(n){function e(){var n,t;Object(b.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(D.a)(this,(n=Object(M.a)(e)).call.apply(n,[this].concat(o)))).fetchStories=function(){var n=t.props,e=n.storyIds,r=n.page,o=n.fetchStories;n.isFetching||o({storyIds:e,page:r})},t}return Object(z.a)(e,n),Object(E.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchStoriesFirstPage(),this.setBodyBackgroundColor()}},{key:"componentDidUpdate",value:function(n){n.theme!==this.props.theme&&this.setBodyBackgroundColor()}},{key:"setBodyBackgroundColor",value:function(){this.props.theme===g?document.body.style="background-color: ".concat(Dn.background,";"):document.body.style="background-color: ".concat(Pn.background,";")}},{key:"render",value:function(){var n=this.props,e=n.stories,t=n.theme,r=n.hasMoreStores;return o.a.createElement(W.a,{theme:t===g?Dn:Pn},o.a.createElement("div",null,o.a.createElement(un,null),o.a.createElement(Wn,null,o.a.createElement(Y.a,{dataLength:e.length,next:this.fetchStories,hasMore:r,loader:o.a.createElement(Bn,null),style:{height:"100%",overflow:"visible"}},o.a.createElement(Hn,{stories:e})))))}}]),e}(r.Component));qn.defaultProps={stories:[]};var Yn=qn,Kn=Object(i.b)(function(n){return{layout:n.app.layout,theme:n.app.theme,stories:n.story.stories,page:n.story.page,storyIds:n.story.storyIds,isFetching:n.story.isFetching,hasMoreStores:P(n)}},function(n){return{fetchStories:function(e){var t=e.storyIds,r=e.page;return n(R.fetchStories({storyIds:t,page:r}))},fetchStoriesFirstPage:function(){return n(R.fetchStoryIds())}}})(Yn);function Jn(){var n=Object(K.a)(["\n    * {\n      box-sizing: border-box;\n    }\n\n    html, body {\n      font-family: Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;\n      width: 100vw;\n      overflow-x: hidden;\n      margin: 0;\n      padding: 0;\n    }\n\n    ul {\n      list-style: none;\n      padding: 0;\n    }\n\n    a {\n      text-decoration: none;\n\n      &:visited {\n        color: inherit;\n      }\n    }\n  "]);return Jn=function(){return n},n}var Qn,Vn=Object(W.b)(Jn()),$n="".concat("@@hackerNewsReader/storage","/theme"),Gn="".concat("@@hackerNewsReader/storage","/layout");Qn={},Object(l.a)(Qn,h.SET_THEME,[function(n){var e=n.action;return(0,n.saveState)({state:e.payload.theme,storageKey:$n})}]),Object(l.a)(Qn,h.SET_LAYOUT,[function(n){var e=n.action;return(0,n.saveState)({state:e.payload.layout,storageKey:Gn})}]);var Xn=function(n){var e=n.storageKey;try{var t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(r){return}},Zn=function(){var n={},e=Xn({storageKey:Gn}),t=Xn({storageKey:$n});return(e||t)&&(n.app={},n.app.layout=e,n.app.theme=t),n},ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}!function(){var n=Zn(),e=L(n);c.a.render(o.a.createElement(i.a,{store:e},o.a.createElement("div",null,o.a.createElement(Vn,null),o.a.createElement(Kn,null))),document.getElementById("root"))}(),function(n){if("serviceWorker"in navigator){if(new URL("/HackerNewsClone",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/HackerNewsClone","/service-worker.js");ne?(function(n,e){fetch(n).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):ee(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ee(e,n)})}}()}},[[43,2,1]]]);
//# sourceMappingURL=main.09613db9.chunk.js.map