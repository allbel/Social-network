"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[406],{5406:function(t,s,e){e.r(s),e.d(s,{default:function(){return U}});var r=e(8683),n=e(5671),i=e(3144),o=e(136),u=e(5716),a=e(2791),l=e(5987),d="ProfileInfo_descriptionBlock__znlLW",c=e(4374);var p=e(181);function f(t,s){return function(t){if(Array.isArray(t))return t}(t)||function(t,s){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,n,i=[],o=!0,u=!1;try{for(e=e.call(t);!(o=(r=e.next()).done)&&(i.push(r.value),!s||i.length!==s);o=!0);}catch(a){u=!0,n=a}finally{try{o||null==e.return||e.return()}finally{if(u)throw n}}return i}}(t,s)||(0,p.Z)(t,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=e(184),x=function(t){var s=f((0,a.useState)(!1),2),e=s[0],r=s[1],n=f((0,a.useState)(t.status),2),i=n[0],o=n[1];(0,a.useEffect)((function(){o(t.status)}),[t.status]);return(0,h.jsxs)(h.Fragment,{children:[!e&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){return r(!0)},children:t.status||"-------"})}),e&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),t.updateStatusProfile(i)},value:i,onChange:function(t){o(t.currentTarget.value)}})})]})},j=["profile","status","updateStatusProfile"],m=function(t){var s=t.profile,e=t.status,r=t.updateStatusProfile;(0,l.Z)(t,j);return s?(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:d,children:[s.photos.large&&(0,h.jsx)("img",{src:s.photos.large}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"FullName: "}),s.fullName]}),(0,h.jsx)(x,{status:e,updateStatusProfile:r})]})}):(0,h.jsx)(c.Z,{})},v=e(81),P="MyPosts_posts__AhxFh",g="MyPosts_postsBlock__LtpQN",y="Post_item__KwiPQ";var S=function(t){return(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("img",{src:"https://cdn.fishki.net/upload/post/201505/08/1526580/0_8af37_3d6ed850_xxl.jpg",alt:""}),t.message,(0,h.jsx)("div",{children:(0,h.jsxs)("span",{children:["like: ",t.likeCounts]})})]})},_=e(6139),b=e(704),k=e(3079),Z=e(1812),w=(0,k.D)(10),C=(0,b.Z)({form:"profileAddNewPostForm"})((function(t){return(0,h.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(_.Z,{component:Z.gx,name:"newPostText",placeholder:"Enter your post",validate:[k.C,w]})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add post"})})]})}));var N=function(t){var s=t.posts.map((function(t){return(0,h.jsx)(S,{id:t.id,message:t.message,likeCounts:t.likeCounts})}));return(0,h.jsxs)("div",{className:g,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)(C,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,h.jsx)("div",{className:P,children:s})]})},A=e(364),I=(0,A.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){t((0,v.Pi)(s))}}}))(N);var F=function(t){return(0,h.jsxs)("div",{children:[(0,h.jsx)(m,{profile:t.profile,status:t.status,updateStatusProfile:t.updateStatusProfile}),(0,h.jsx)(I,{})]})},E=e(9271),M=e(7781),T=function(t){(0,o.Z)(e,t);var s=(0,u.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authUserId)||this.props.history.push("/login"),this.props.getUserProfile(String(t)),this.props.getStatusProfile(String(t))}},{key:"render",value:function(){return(0,h.jsx)(F,(0,r.Z)((0,r.Z)({},this.props),{},{status:this.props.status,updateStatusProfile:this.props.updateStatusProfile}))}}]),e}(a.Component),U=(0,M.qC)((0,A.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:v.et,getStatusProfile:v.Z6,updateStatusProfile:v._H}),E.EN)(T)}}]);
//# sourceMappingURL=406.c7781a90.chunk.js.map