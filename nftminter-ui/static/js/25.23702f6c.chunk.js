(this["webpackJsonpnft-minter-ui"]=this["webpackJsonpnft-minter-ui"]||[]).push([[25],{1064:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s.n(t),o=s(540),n=s(18),l=s(42),i=s(11),r=s.n(i),d=s(114),b=s.n(d),u=s(85),m={tag:u.c,inverse:r.a.bool,color:r.a.string,body:r.a.bool,outline:r.a.bool,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])},j=function(e){var a=e.className,s=e.cssModule,t=e.color,o=e.body,i=e.inverse,r=e.outline,d=e.tag,m=e.innerRef,j=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.b)(b()(a,"card",!!i&&"text-white",!!o&&"card-body",!!t&&(r?"border":"bg")+"-"+t),s);return c.a.createElement(d,Object(n.a)({},j,{className:p,ref:m}))};j.propTypes=m,j.defaultProps={tag:"div"};var p=j,f={tag:u.c,className:r.a.string,cssModule:r.a.object},h=function(e){var a=e.className,s=e.cssModule,t=e.tag,o=Object(l.a)(e,["className","cssModule","tag"]),i=Object(u.b)(b()(a,"card-title"),s);return c.a.createElement(t,Object(n.a)({},o,{className:i}))};h.propTypes=f,h.defaultProps={tag:"div"};var g=h,v=s(277),O=s(70),N={active:r.a.bool,"aria-label":r.a.string,block:r.a.bool,color:r.a.string,disabled:r.a.bool,outline:r.a.bool,tag:u.c,innerRef:r.a.oneOfType([r.a.object,r.a.func,r.a.string]),onClick:r.a.func,size:r.a.string,children:r.a.node,className:r.a.string,cssModule:r.a.object,close:r.a.bool},x=function(e){function a(a){var s;return(s=e.call(this,a)||this).onClick=s.onClick.bind(Object(v.a)(s)),s}Object(O.a)(a,e);var s=a.prototype;return s.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},s.render=function(){var e=this.props,a=e.active,s=e["aria-label"],t=e.block,o=e.className,i=e.close,r=e.cssModule,d=e.color,m=e.outline,j=e.size,p=e.tag,f=e.innerRef,h=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof h.children&&(h.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(m?"-outline":"")+"-"+d,v=Object(u.b)(b()(o,{close:i},i||"btn",i||g,!!j&&"btn-"+j,!!t&&"btn-block",{active:a,disabled:this.props.disabled}),r);h.href&&"button"===p&&(p="a");var O=i?"Close":null;return c.a.createElement(p,Object(n.a)({type:"button"===p&&h.onClick?"button":void 0},h,{className:v,ref:f,onClick:this.onClick,"aria-label":s||O}))},a}(c.a.Component);x.propTypes=N,x.defaultProps={color:"secondary",tag:"button"};var y=x,k=s(50),C=s(1);a.default=function(){return Object(t.useEffect)((function(){return document.body.classList.add("background"),document.body.classList.add("no-footer"),function(){document.body.classList.remove("background"),document.body.classList.remove("no-footer")}}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"fixed-background"}),Object(C.jsx)("main",{children:Object(C.jsx)("div",{className:"container",children:Object(C.jsx)(o.a,{className:"h-100",children:Object(C.jsxs)(p,{className:"auth-card",children:[Object(C.jsxs)("div",{className:"position-relative image-side ",children:[Object(C.jsx)("p",{className:"text-white h2",children:"MAGIC IS IN THE DETAILS"}),Object(C.jsx)("p",{className:"white mb-0",children:"Yes, it is indeed!"})]}),Object(C.jsxs)("div",{className:"form-side",children:[Object(C.jsx)(k.c,{to:"/",className:"white",children:Object(C.jsx)("span",{className:"logo-single"})}),Object(C.jsx)(g,{className:"mb-4",children:"Page Not Found"}),Object(C.jsx)("p",{className:"mb-0 text-muted text-small mb-0",children:"Error 404"}),Object(C.jsx)("p",{className:"display-1 font-weight-bold mb-5",children:"404"}),Object(C.jsx)(y,{href:"/pages",color:"primary",className:"btn-shadow",size:"lg",children:"Go Home"})]})]})})})})]})}}}]);