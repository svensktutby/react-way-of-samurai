(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[0],{101:function(e,t,n){"use strict";t.a=n.p+"static/media/userAvatar.3b076f75.svg"},102:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return m}));var r,a=n(8),c=n.n(a),o=n(13),s=n(31),i=n(5),u=n(16),l=n(12),d=function(e){return l.a.get("profile/".concat(e)).then((function(e){return e.data}))},p=function(e){return l.a.get("profile/status/".concat(e)).then((function(e){return e.data}))},b=function(e){return l.a.put("profile/status/",{status:e}).then((function(e){return e.data}))};!function(e){e.ADD_POST="SN/PROFILE/ADD_POST",e.DELETE_POST="SN/PROFILE/DELETE_POST",e.SET_USER_PROFILE="SN/PROFILE/SET_USER_PROFILE",e.SET_STATUS="SN/PROFILE/SET_STATUS"}(r||(r={}));var j={posts:[{id:Object(u.a)(),message:"Hi, dude!",likesCount:12},{id:Object(u.a)(),message:"yo bro",likesCount:8},{id:Object(u.a)(),message:"wazzup",likesCount:111}],profile:null,status:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.ADD_POST:var n={id:Object(u.a)(),message:t.payload,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case r.DELETE_POST:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload}))});case r.SET_USER_PROFILE:return Object(i.a)(Object(i.a)({},e),{},{profile:t.payload});case r.SET_STATUS:return Object(i.a)(Object(i.a)({},e),{},{status:t.payload});default:return e}},O={addPost:function(e){return{type:r.ADD_POST,payload:e}},deletePost:function(e){return{type:r.DELETE_POST,payload:e}},setUserProfile:function(e){return{type:r.SET_USER_PROFILE,payload:e}},setStatus:function(e){return{type:r.SET_STATUS,payload:e}}},_=function(e){return function(){var t=Object(o.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(O.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:r=t.sent,n(O.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:t.sent.resultCode===l.b.Success&&n(O.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},104:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r,a=n(31),c=n(5),o=n(16);!function(e){e.SEND_MESSAGE="SN/DIALOGS/SEND_MESSAGE"}(r||(r={}));var s={dialogs:[{id:Object(o.a)(),name:"Andrei"},{id:Object(o.a)(),name:"John Doe"},{id:Object(o.a)(),name:"Patrick"},{id:Object(o.a)(),name:"Someone"}],messages:[{id:Object(o.a)(),message:"Hi"},{id:Object(o.a)(),message:"Hi, dude!"},{id:Object(o.a)(),message:"Yo"}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SEND_MESSAGE:var n={id:Object(o.a)(),message:t.payload};return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}},u={sendMessage:function(e){return{type:r.SEND_MESSAGE,payload:e}}}},12:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r,a=n(139),c=n.n(a);!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={}));var o=c.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f0c49284-b587-4373-8b56-ded694176fd7"}})},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return Math.floor(1e9*Math.random()).toString(16)}},171:function(e,t,n){},22:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",list:"Navbar_list__2GzPV",link:"Navbar_link__TNvz9",active:"Navbar_active__3mbhk"}},27:function(e,t,n){e.exports={btn:"button_btn__3GHkQ","back-pulse":"button_back-pulse__1zdKZ"}},28:function(e,t,n){e.exports={form:"Login_form__2mvFD",title:"Login_title__bh47u",checkboxWrapper:"Login_checkboxWrapper__7_o-w",btnWrapper:"Login_btnWrapper__2bwwv",checkbox:"Login_checkbox__3UFrU",hint:"Login_hint__3ofnl",errorWrapper:"Login_errorWrapper__3WLZ5",error:"Login_error__17Wu6"}},294:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(70),c=n.n(a),o=(n(171),n(40)),s=n(41),i=n(43),u=n(42),l=n(8),d=n.n(l),p=n(13),b=n(11),j=n(23),f=n(10),O=n(18),_=n(48),h=n.n(_),m=n(135),g=n(137),S=n(138),v=(Object(S.createLogger)({duration:!0,collapsed:!0,colors:{title:function(){return"#139BFE"},prevState:function(){return"#1C5FAF"},action:function(){return"#149945"},nextState:function(){return"#A47104"},error:function(){return"#FF0005"}}}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,f.d),x=[g.a];var E,N=v(f.a.apply(void 0,x)),y=n(104),T=n(102),C=n(31),P=n(5),w=n(12),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return w.a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},L=function(e){return w.a.post("follow/".concat(e)).then((function(e){return e.data}))},A=function(e){return w.a.delete("follow/".concat(e)).then((function(e){return e.data}))};!function(e){e.FOLLOW="SN/USERS/FOLLOW",e.UNFOLLOW="SN/USERS/UNFOLLOW",e.SET_USERS="SN/USERS/SET_USERS",e.SET_CURRENT_PAGE="SN/USERS/SET_CURRENT_PAGE",e.SET_USERS_TOTAL_COUNT="SN/USERS/SET_USERS_TOTAL_COUNT",e.TOGGLE_IS_FETCHING="SN/USERS/TOGGLE_IS_FETCHING",e.TOGGLE_IS_FOLLOWING_PROGRESS="SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS"}(E||(E={}));var I,k={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},F=function(e){return{type:E.FOLLOW,payload:e}},R=function(e){return{type:E.UNFOLLOW,payload:e}},G=function(e){return{type:E.SET_USERS,payload:e}},W=function(e){return{type:E.SET_CURRENT_PAGE,payload:e}},D=function(e){return{type:E.SET_USERS_TOTAL_COUNT,payload:e}},z=function(e){return{type:E.TOGGLE_IS_FETCHING,payload:e}},H=function(e,t){return{type:E.TOGGLE_IS_FOLLOWING_PROGRESS,payload:{isFetching:e,userId:t}}},M=n(60),B=function(){return w.a.get("auth/me").then((function(e){return e.data}))},J=function(e){var t=e.email,n=e.password,r=e.rememberMe,a=void 0!==r&&r;return w.a.post("auth/login",{email:t,password:n,rememberMe:a}).then((function(e){return e.data}))},Z=function(){return w.a.delete("auth/login").then((function(e){return e.data}))};!function(e){e.SET_AUTH_USER_DATA="SN/AUTH/SET_AUTH_USER_DATA"}(I||(I={}));var V,q={id:null,email:null,login:null,isAuth:!1},K=function(e,t,n,r){return{type:I.SET_AUTH_USER_DATA,payload:{id:e,email:t,login:n,isAuth:r}}},Y=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r,a,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:(n=e.sent).resultCode===w.b.Success&&(r=n.data,a=r.id,c=r.email,o=r.login,t(K(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};!function(e){e.INITIALIZED_SUCCESS="SN/APP/INITIALIZED_SUCCESS"}(V||(V={}));var Q={initialized:!1},X=function(){return{type:V.INITIALIZED_SUCCESS}},$={},ee=Object(f.c)({profilePage:T.d,dialogsPage:y.b,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return t.type,e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.FOLLOW:return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload?Object(P.a)(Object(P.a)({},e),{},{followed:!0}):e}))});case E.UNFOLLOW:return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload?Object(P.a)(Object(P.a)({},e),{},{followed:!1}):e}))});case E.SET_USERS:return Object(P.a)(Object(P.a)({},e),{},{users:t.payload});case E.SET_CURRENT_PAGE:return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.payload});case E.SET_USERS_TOTAL_COUNT:return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.payload});case E.TOGGLE_IS_FETCHING:return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.payload});case E.TOGGLE_IS_FOLLOWING_PROGRESS:return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.payload.isFetching?[].concat(Object(C.a)(e.followingInProgress),[t.payload.userId]):e.followingInProgress.filter((function(e){return e!==t.payload.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.SET_AUTH_USER_DATA:return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.INITIALIZED_SUCCESS:return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},form:m.a}),te=Object(f.e)(ee,N);window.store=te;var ne,re=n(96),ae=n.n(re),ce=n(27),oe=n.n(ce),se=n(34),ie=n.n(se),ue=n(1),le=function(e){var t=e.pageSize,n=e.totalItemsCount,r=e.currentPage,a=void 0===r?1:r,c=e.changePageHandler,o=e.portionSize,s=void 0===o?10:o,i=Math.ceil(n/t),u=Math.floor((a-1)/s)*s,l=Array(s).fill(null).reduce((function(e,t,n){var r=n+1+u;return r<=i?[].concat(Object(C.a)(e),[r]):e}),[]);return Object(ue.jsxs)("div",{className:ie.a.paginator,children:[Object(ue.jsx)("button",{type:"button",className:"".concat(ie.a.btn),disabled:1===a,onClick:function(){return c(1)},children:"First"}),Object(ue.jsx)("button",{type:"button",className:"".concat(ie.a.btn),disabled:1===a,onClick:function(){return c(a-1)},children:"Previous"}),l.map((function(e){var t=e===a;return Object(ue.jsx)("button",{type:"button",className:"".concat(ie.a.btn," ").concat(t&&ie.a.selected),disabled:t,onClick:function(){return c(e)},children:e},e)})),Object(ue.jsx)("button",{type:"button",className:"".concat(ie.a.btn),disabled:a===i,onClick:function(){return c(a+1)},children:"Next"}),Object(ue.jsx)("button",{type:"button",className:"".concat(ie.a.btn),disabled:a===i,onClick:function(){return c(i)},children:"Last"})]})},de=n(35),pe=n.n(de),be=n(101),je=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(ue.jsxs)("li",{className:pe.a.item,children:[Object(ue.jsxs)("div",{children:[Object(ue.jsx)("div",{className:pe.a.avatarWrapper,children:Object(ue.jsx)(j.b,{to:"/profile/".concat(t.id),children:Object(ue.jsx)("img",{className:pe.a.avatar,src:t.photos.small?t.photos.small:be.a,width:"50",height:"50",alt:"User avatar"})})}),Object(ue.jsx)("div",{children:t.followed?Object(ue.jsx)("button",{className:oe.a.btn,type:"button",disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(ue.jsx)("button",{className:oe.a.btn,type:"button",disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(ue.jsxs)("div",{className:pe.a.info,children:[Object(ue.jsxs)("div",{children:[Object(ue.jsx)("div",{className:pe.a.name,children:t.name}),Object(ue.jsx)("div",{className:pe.a.status,children:t.status||"Status is empty"})]}),Object(ue.jsxs)("div",{className:pe.a.location,children:[Object(ue.jsx)("div",{children:"user.location.country"}),Object(ue.jsx)("div",{children:"user.location.city"})]})]})]})},fe=function(e){var t=e.users,n=e.pageSize,r=e.totalUsersCount,a=e.page,c=e.followingInProgress,o=e.follow,s=e.unfollow,i=e.changePageHandler,u=t.map((function(e){return Object(ue.jsx)(je,{user:e,followingInProgress:c,follow:o,unfollow:s},e.id)}));return Object(ue.jsxs)("div",{className:ae.a.usersBlock,children:[Object(ue.jsx)(le,{pageSize:n,totalItemsCount:r,currentPage:a,changePageHandler:i}),Object(ue.jsx)("ul",{className:ae.a.list,children:u}),Object(ue.jsx)("button",{className:oe.a.btn,type:"button",onClick:function(){},children:"Show more"})]})},Oe=n(53),_e=n(141),he=Object(_e.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!!e}))})),me=function(e){return e.usersPage.pageSize},ge=function(e){return e.usersPage.totalUsersCount},Se=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isFetching},xe=function(e){return e.usersPage.followingInProgress},Ee=W,Ne=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).changePageHandler=function(t){var n=e.props,r=n.pageSize;(0,n.requestUsers)(t,r)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.page,n=e.pageSize;(0,e.requestUsers)(t,n)}},{key:"render",value:function(){var e=this.props,t=e.users,n=e.pageSize,r=e.totalUsersCount,a=e.page,c=e.followingInProgress,o=e.followUser,s=e.unfollowUser,i=e.isFetching;return Object(ue.jsx)(ue.Fragment,{children:i?Object(ue.jsx)(Oe.a,{text:"Loading..."}):Object(ue.jsx)(fe,{users:t,pageSize:n,totalUsersCount:r,page:a,followingInProgress:c,follow:o,unfollow:s,changePageHandler:this.changePageHandler})})}}]),n}(r.Component),ye=Object(f.d)(Object(O.b)((function(e){return{users:he(e),pageSize:me(e),totalUsersCount:ge(e),page:Se(e),isFetching:ve(e),followingInProgress:xe(e)}}),{followUser:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(H(!0,e)),t.next=3,L(e);case 3:t.sent.resultCode===w.b.Success&&n(F(e)),n(H(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowUser:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(H(!0,e)),t.next=3,A(e);case 3:t.sent.resultCode===w.b.Success&&n(R(e)),n(H(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:Ee,requestUsers:function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(r){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(z(!0)),r(W(e)),n.next=4,U(e,t);case 4:a=n.sent,r(z(!1)),r(G(a.items)),r(D(a.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ne),Te=n(49),Ce=n.n(Te),Pe=n.p+"static/media/logo.d6c257c2.svg",we=function(e){var t=e.login,n=e.logout,r=e.isAuth;return Object(ue.jsx)("header",{className:Ce.a.header,children:Object(ue.jsxs)("div",{className:Ce.a.container,children:[Object(ue.jsx)("img",{className:Ce.a.logo,src:Pe,width:"40",height:"40",alt:"Logo"}),Object(ue.jsx)("div",{className:Ce.a.loginBlock,children:r?Object(ue.jsxs)("div",{children:[Object(ue.jsx)("span",{className:Ce.a.login,children:t}),Object(ue.jsx)("button",{type:"button",className:oe.a.btn,onClick:n,children:"Log out"})]}):Object(ue.jsx)(j.b,{className:oe.a.btn,to:"/login",children:"Log in"})})]})})},Ue=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.login,n=e.logout,r=e.isAuth;return Object(ue.jsx)(we,{login:t,logout:n,isAuth:r})}}]),n}(r.Component),Le=Object(O.b)((function(e){var t=e.auth;return{login:t.login,isAuth:t.isAuth}}),{logout:function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:e.sent.resultCode===w.b.Success&&t(K(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ue),Ae=n(22),Ie=n.n(Ae),ke=function(){return Object(ue.jsx)("nav",{className:Ie.a.nav,children:Object(ue.jsxs)("ul",{className:Ie.a.list,children:[Object(ue.jsx)("li",{className:Ie.a.item,children:Object(ue.jsx)(j.c,{className:Ie.a.link,to:"/profile",activeClassName:Ie.a.active,children:"Profile"})}),Object(ue.jsx)("li",{className:Ie.a.item,children:Object(ue.jsx)(j.c,{className:Ie.a.link,to:"/dialogs",activeClassName:Ie.a.active,children:"Messages"})}),Object(ue.jsx)("li",{className:Ie.a.item,children:Object(ue.jsx)(j.c,{className:Ie.a.link,to:"/users",activeClassName:Ie.a.active,children:"Users"})})]})})},Fe=n(133),Re=n(134),Ge=n(28),We=n.n(Ge),De=n(91),ze=n(71),He=Object(ze.a)(30),Me=Object(Re.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(ue.jsxs)("form",{className:We.a.form,onSubmit:t,children:[Object(ue.jsx)(Fe.a,{component:De.a,name:"email",placeholder:"Email",validate:[ze.b,He]}),Object(ue.jsx)(Fe.a,{component:De.a,type:"password",name:"password",placeholder:"Password",validate:[ze.b,He]}),Object(ue.jsxs)("label",{className:"".concat(We.a.checkboxWrapper),children:[Object(ue.jsx)(Fe.a,{className:We.a.checkbox,component:"input",type:"checkbox",name:"rememberMe"}),Object(ue.jsx)("span",{className:We.a.hint,children:"remember me"})]}),Object(ue.jsx)("div",{className:"".concat(We.a.errorWrapper),children:n&&Object(ue.jsx)("span",{className:"".concat(We.a.error),children:n})}),Object(ue.jsx)("div",{className:"".concat(We.a.btnWrapper),children:Object(ue.jsx)("button",{type:"submit",className:oe.a.btn,children:"Log in"})})]})})),Be=Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e);case 2:if((r=t.sent).resultCode!==w.b.Success){t.next=8;break}return t.next=6,n(Y());case 6:t.next=10;break;case 8:a=r.messages.length?r.messages[0]:"Some error",n(Object(M.a)("login",{_error:a}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.login;return e.isAuth?Object(ue.jsx)(b.a,{to:"/profile"}):Object(ue.jsxs)("div",{children:[Object(ue.jsx)("h1",{className:We.a.title,children:"LOGIN"}),Object(ue.jsx)("div",{className:We.a.loginFormWrapper,children:Object(ue.jsx)(Me,{onSubmit:function(e){t(Object(P.a)({},e))}})})]})})),Je=n(59),Ze=n.n(Je),Ve=function(){return Object(ue.jsx)("div",{className:Ze.a.page,children:Object(ue.jsxs)("div",{className:Ze.a.main,children:[Object(ue.jsx)("h1",{className:Ze.a.title,children:"404 - Not\xa0found"}),Object(ue.jsxs)("p",{className:Ze.a.text,children:["\u2014",Object(ue.jsx)("span",{children:"Uh oh."})," ",Object(ue.jsx)("span",{children:"\xaf\\_(\u30c4)_/\xaf"}),"\u2014"]})]})})},qe=Object(r.lazy)(Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(4).then(n.bind(null,306));case 2:return t=e.sent,e.abrupt("return",{default:t.DialogsContainer});case 4:case"end":return e.stop()}}),e)})))),Ke=Object(r.lazy)(Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,305));case 2:return t=e.sent,e.abrupt("return",{default:t.ProfileContainer});case 4:case"end":return e.stop()}}),e)})))),Ye=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(ue.jsxs)("div",{className:h.a.appWrapper,children:[Object(ue.jsx)(Le,{}),Object(ue.jsxs)("div",{className:h.a.container,children:[Object(ue.jsx)(ke,{}),Object(ue.jsx)("main",{className:h.a.appContent,children:Object(ue.jsx)(r.Suspense,{fallback:Object(ue.jsx)("div",{className:h.a.preloaderPageWrapper,children:Object(ue.jsx)(Oe.a,{text:"Loading..."})}),children:Object(ue.jsxs)(b.d,{children:[Object(ue.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(ue.jsx)(b.a,{to:"/profile"})}}),Object(ue.jsx)(b.b,{path:"/profile/:userId?",render:function(){return Object(ue.jsx)(Ke,{})}}),Object(ue.jsx)(b.b,{path:"/dialogs",render:function(){return Object(ue.jsx)(qe,{})}}),Object(ue.jsx)(b.b,{path:"/users",render:function(){return Object(ue.jsx)(ye,{})}}),Object(ue.jsx)(b.b,{path:"/login",render:function(){return Object(ue.jsx)(Be,{})}}),Object(ue.jsx)(b.b,{path:"/404",render:function(){return Object(ue.jsx)(Ve,{})}}),Object(ue.jsx)(b.b,{path:"*",render:function(){return Object(ue.jsx)(b.a,{to:"/404"})}})]})})})]})]}):Object(ue.jsx)("div",{className:h.a.preloaderAppWrapper,children:Object(ue.jsx)(Oe.a,{text:"Loading SamuraiJSApp"})})}}]),n}(r.Component),Qe=Object(f.d)(Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Y());case 2:n=e.sent,Promise.all([n]).then((function(){t(X())}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),b.g)(Ye),Xe=function(){return Object(ue.jsx)(O.a,{store:te,children:Object(ue.jsx)(j.a,{children:Object(ue.jsx)(Qe,{})})})};c.a.render(Object(ue.jsx)(Xe,{}),document.getElementById("root")),ne&&ne instanceof Function&&n.e(5).then(n.bind(null,304)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;t(ne),n(ne),r(ne),a(ne),c(ne)}))},34:function(e,t,n){e.exports={btn:"Paginator_btn__C1fmc",selected:"Paginator_selected__2cTTO"}},35:function(e,t,n){e.exports={item:"User_item__2PdYA",avatarWrapper:"User_avatarWrapper__abUew",avatar:"User_avatar__27DBJ",info:"User_info__2Xv8f",location:"User_location__2fcbB"}},48:function(e,t,n){e.exports={appWrapper:"App_appWrapper__3rnam",container:"App_container__1MQN3 container_container__1yKAy",appContent:"App_appContent__38mVk",preloaderAppWrapper:"App_preloaderAppWrapper__16ffo",preloaderPageWrapper:"App_preloaderPageWrapper__2SZJQ"}},49:function(e,t,n){e.exports={header:"Header_header__1VCKf",container:"Header_container__1VC87 container_container__1yKAy",logo:"Header_logo__3_SJs",login:"Header_login__3V3Qa"}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(0);var r=n(74),a=n.n(r),c=n(1),o=function(e){var t=e.text;return Object(c.jsxs)("div",{className:a.a.preloader,children:[Object(c.jsx)("div",{className:a.a.loaderCircle}),Object(c.jsx)("div",{className:a.a.loaderBottom,children:t})]})}},59:function(e,t,n){e.exports={page:"Error404_page__OgCEo",title:"Error404_title__AzCYh",text:"Error404_text__2CMhG"}},71:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e?void 0:"Field is required"},a=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}}},74:function(e,t,n){e.exports={preloader:"Preloader_preloader__2dvkO",loaderCircle:"Preloader_loaderCircle__2WGY1",load:"Preloader_load__3tO9j",loaderBottom:"Preloader_loaderBottom__3u2bT",pulse:"Preloader_pulse__2uAlH"}},75:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formControlError:"FormsControls_formControlError__MEb4f"}},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(5),a=n(94),c=(n(0),n(75)),o=n.n(c),s=n(1),i=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,c=e.className,i=void 0===c?"":c,u=n&&r,l="".concat(o.a.formControl," ").concat(i," ").concat(u&&o.a.formControlError);return Object(s.jsxs)("div",{className:l,children:[u&&Object(s.jsx)("span",{className:"".concat(o.a.error),children:r}),a]})},u=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(s.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({placeholder:"Write here..."},t),n))}))},l=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(s.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({type:"text",placeholder:"Write here..."},t),n))}))}},96:function(e,t,n){e.exports={usersBlock:"Users_usersBlock__2PNX-",list:"Users_list__bCqoi"}}},[[294,1,2]]]);
//# sourceMappingURL=main.5ba3e96e.chunk.js.map