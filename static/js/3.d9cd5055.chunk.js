(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[3],{302:function(e,t,s){e.exports={profileInfo:"ProfileInfo_profileInfo__2IJgv",photoWrapper:"ProfileInfo_photoWrapper__2Sf8d",label:"ProfileInfo_label__v3rdV",icon:"ProfileInfo_icon__31_Fp",inputFile:"ProfileInfo_inputFile__1x-DX"}},303:function(e,t,s){e.exports={statusWrapper:"ProfileStatus_statusWrapper__2EA8v",editStatusWrapper:"ProfileStatus_editStatusWrapper__2OqDz",status:"ProfileStatus_status__3vAMm",editStatus:"ProfileStatus_editStatus__36KXI"}},304:function(e,t,s){e.exports={list:"ProfileContacts_list__39Jki"}},305:function(e,t,s){e.exports={link:"link_link__2naQk"}},306:function(e,t,s){e.exports={checkboxField:"ProfileDataForm_checkboxField__lqqrf",textareaField:"ProfileDataForm_textareaField__10oqa",errorWrapper:"ProfileDataForm_errorWrapper__3ARJi errorMessageForm_errorWrapper__LmXZN",error:"ProfileDataForm_error__3SRn2 errorMessageForm_error__1dDl6"}},307:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},308:function(e,t,s){e.exports={post:"Post_post__A0EJd",avatar:"Post_avatar__1wBwP",message:"Post_message__3raFK",text:"Post_text__3_Vii",like:"Post_like__oViQh",heart:"Post_heart__1jJO2"}},309:function(e,t,s){e.exports={form:"AddPostForm_form__33A21"}},311:function(e,t,s){"use strict";s.r(t),s.d(t,"ProfileContainer",(function(){return te}));var a=s(3),r=s(96),o=s(60),i=s(61),n=s(72),c=s(71),l=s(1),d=s(11),u=s(18),p=s(12),j=s(104),b=s(302),h=s.n(b),f=s(103),m=s(50),O=s(303),x=s.n(O),v=s(0),_=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={status:e.props.status,editMode:!1},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.statusChangeHandler=function(t){e.setState({status:t.currentTarget.value})},e}return Object(i.a)(s,[{key:"componentDidUpdate",value:function(e){this.updateStatusIfNeeded(e.status)}},{key:"updateStatusIfNeeded",value:function(e){e!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){var e="What's on your mind?";return Object(v.jsx)(v.Fragment,{children:this.state.editMode?Object(v.jsx)("div",{className:"".concat(x.a.editStatusWrapper),children:Object(v.jsx)("input",{className:"".concat(x.a.editStatus),value:this.state.status,onBlur:this.deactivateEditMode,onChange:this.statusChangeHandler,placeholder:e,autoFocus:!0})}):Object(v.jsx)("div",{className:x.a.statusWrapper,children:Object(v.jsx)("span",{className:x.a.status,onClick:this.activateEditMode,role:"presentation",children:this.props.status||e})})})}}]),s}(l.Component),P=s(27),k=s.n(P),g=s(136),N=s(304),S=s.n(N),M=s(305),y=s.n(M),F=s(15),w=s(59),A=function(e){var t=e.contacts,s=e.editMode;return Object(v.jsx)("ul",{className:S.a.list,children:Object.entries(t).map((function(e){var t=Object(j.a)(e,2),a=t[0],r=t[1];return Object(v.jsx)("li",{children:s?Object(v.jsx)(g.a,{component:w.a,name:"contacts.".concat(a),placeholder:"Link to ".concat(a)}):r&&Object(v.jsx)("a",{className:y.a.link,href:r,target:"_blank",rel:"noreferrer noopener",children:a})},Object(F.a)())}))})},I=function(e){var t=e.isOwner,s=e.profile,a=e.turnOnEditMode,r=s.fullName,o=s.aboutMe,i=s.contacts,n=s.lookingForAJob,c=s.lookingForAJobDescription;return Object(v.jsxs)("div",{children:[t&&Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:k.a.btn,type:"button",onClick:a,children:"Edit"})}),Object(v.jsx)("div",{children:r}),Object(v.jsx)("div",{children:n?"Available for work":"Not available for work"}),n&&Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"My skills: "}),c]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"About me: "}),o]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Contacts: "}),Object(v.jsx)(A,{contacts:i})]})]})},C=s(137),W=s(306),D=s.n(W),J=Object(C.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.error,a=e.profile.contacts,r=e.editMode;return Object(v.jsxs)("form",{onSubmit:t,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"".concat(D.a.errorWrapper),children:s&&Object(v.jsx)("span",{className:"".concat(D.a.error),children:s})}),Object(v.jsx)("button",{className:k.a.btn,type:"submit",children:"Save"})]}),Object(v.jsx)("div",{children:Object(v.jsx)(g.a,{component:w.a,name:"fullName",placeholder:"Full name"})}),Object(v.jsx)("div",{children:Object(v.jsxs)("label",{className:D.a.checkboxFieldWrapper,children:[Object(v.jsx)(g.a,{className:D.a.checkboxField,component:w.a,name:"lookingForAJob",type:"checkbox"}),Object(v.jsx)("span",{children:"Available for work"})]})}),Object(v.jsx)("div",{children:Object(v.jsx)(g.a,{className:D.a.textareaField,component:w.b,name:"lookingForAJobDescription",placeholder:"My skills"})}),Object(v.jsx)("div",{children:Object(v.jsx)(g.a,{className:D.a.textareaField,component:w.b,name:"aboutMe",placeholder:"About me"})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Contacts: "}),Object(v.jsx)(A,{contacts:a,editMode:r})]})]})})),E=function(e){var t=e.isOwner,s=e.profile,a=e.status,r=e.updateStatus,o=e.savePhoto,i=e.saveProfile,n=Object(l.useState)(!1),c=Object(j.a)(n,2),d=c[0],u=c[1];if(!s)return Object(v.jsx)(m.a,{text:"Loading..."});var p=s.photos,b=s.fullName;return Object(v.jsxs)("div",{className:h.a.profileInfo,children:[Object(v.jsxs)("div",{className:h.a.photoWrapper,children:[Object(v.jsx)("img",{className:h.a.photo,src:p.large||f.a,alt:"".concat(b)}),t&&Object(v.jsxs)("label",{className:h.a.label,title:"Add photo",children:[Object(v.jsx)("input",{className:h.a.inputFile,type:"file",onChange:function(e){e.target.files&&o(e.target.files[0])}}),Object(v.jsx)("svg",{className:h.a.icon,viewBox:"0 0 32 32",width:"32",version:"1.1",height:"32",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"})})]})]}),d?Object(v.jsx)(J,{profile:s,editMode:d,initialValues:s,onSubmit:function(e){i(e).then((function(){u(!1)}))}}):Object(v.jsx)(I,{profile:s,isOwner:t,turnOnEditMode:function(){u(!0)}}),Object(v.jsx)(_,{status:a,updateStatus:r})]})},z=s(105),B=s(30),q=s(307),U=s.n(q),V=s(308),K=s.n(V),L=function(e){var t=e.message,s=e.likesCount;return Object(v.jsxs)("div",{className:K.a.post,children:[Object(v.jsx)("img",{className:K.a.avatar,src:f.a,width:"50",height:"50",alt:"Avatar"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:K.a.message,children:Object(v.jsx)("span",{className:K.a.text,children:t})}),Object(v.jsxs)("div",{className:K.a.like,children:[Object(v.jsx)("button",{type:"button",className:K.a.heart,children:"\u2661"}),Object(v.jsxs)("span",{children:["\xa0",s]}),Object(v.jsxs)("span",{children:["\xa0",1===s?"like":"likes"]})]})]})]})},X=s(309),H=s.n(X),Q=s(51),R=Object(Q.a)(100),Z=Object(C.a)({form:"profileAddPostForm"})((function(e){var t=e.handleSubmit;return Object(v.jsxs)("form",{className:H.a.form,onSubmit:t,children:[Object(v.jsx)(g.a,{component:w.b,name:"post",placeholder:"Enter your message...",validate:[Q.b,R]}),Object(v.jsx)("button",{type:"submit",className:k.a.btn,children:"Add post"})]})})),T=Object(l.memo)((function(e){var t=e.posts,s=e.addPost,a=Object(B.a)(t).reverse().map((function(e){return Object(v.jsx)(L,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}));return Object(v.jsxs)("div",{className:U.a.postsBlock,children:[Object(v.jsx)("h3",{children:"My posts"}),Object(v.jsx)(Z,{onSubmit:function(e){s(e.post)}}),Object(v.jsx)("div",{className:U.a.posts,children:a})]})}));T.displayName="MyPosts";var G=z.a.addPost,Y=Object(u.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:G})(T),$=function(e){var t=e.isOwner,s=e.profile,a=e.status,r=e.updateStatus,o=e.savePhoto,i=e.saveProfile;return Object(v.jsxs)("div",{children:[Object(v.jsx)(E,{isOwner:t,profile:s,status:a,updateStatus:r,savePhoto:o,saveProfile:i}),Object(v.jsx)(Y,{})]})},ee=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"refreshProfile",value:function(){var e=Number(this.props.match.params.userId)||this.props.authorizedUserId;e?(this.props.getProfile(e),this.props.getStatus(e)):this.props.history.push("/login")}},{key:"render",value:function(){var e=this.props,t=e.profile,s=e.status,o=e.updateStatus,i=e.savePhoto,n=e.saveProfile,c=Object(r.a)(e,["profile","status","updateStatus","savePhoto","saveProfile"]);return Object(v.jsx)($,Object(a.a)(Object(a.a)({},c),{},{isOwner:!this.props.match.params.userId,profile:t,status:s,updateStatus:o,savePhoto:i,saveProfile:n}))}}]),s}(l.Component),te=Object(d.d)(Object(u.b)((function(e){var t=e.profilePage;return{profile:t.profile,status:t.status,authorizedUserId:e.auth.id}}),{getProfile:z.b,getStatus:z.c,updateStatus:z.g,savePhoto:z.e,saveProfile:z.f}),p.g)(ee)}}]);
//# sourceMappingURL=3.d9cd5055.chunk.js.map