"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5683],{33156:function(P,_,t){t.r(_);var E=t(805574),a=t.n(E),r=t(667294),d=t(75529),e=t(811834),n=t(879587),i=t(941346),l=t(785893),o=(0,l.jsx)("span",{children:"prompt text"}),c=80,s=function(){var j=(0,r.useState)("Show"),m=a()(j,2),x=m[0],D=m[1],h=(0,r.useMemo)(function(){return x==="Hide"?!1:x==="Show"?!0:{pointAtCenter:!0}},[x]);return(0,l.jsxs)(d.ZP,{button:{style:{width:c,margin:4}},children:[(0,l.jsx)(e.Z,{value:x,options:["Show","Hide","Center"],onChange:function(O){return D(O)},style:{marginBottom:24}}),(0,l.jsxs)("div",{className:"demo",children:[(0,l.jsxs)("div",{style:{marginInlineStart:c,whiteSpace:"nowrap"},children:[(0,l.jsx)(n.Z,{placement:"topLeft",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"TL"})}),(0,l.jsx)(n.Z,{placement:"top",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"Top"})}),(0,l.jsx)(n.Z,{placement:"topRight",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"TR"})})]}),(0,l.jsxs)("div",{style:{width:c,float:"inline-start"},children:[(0,l.jsx)(n.Z,{placement:"leftTop",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"LT"})}),(0,l.jsx)(n.Z,{placement:"left",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"Left"})}),(0,l.jsx)(n.Z,{placement:"leftBottom",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"LB"})})]}),(0,l.jsxs)("div",{style:{width:c,marginInlineStart:c*4+24},children:[(0,l.jsx)(n.Z,{placement:"rightTop",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"RT"})}),(0,l.jsx)(n.Z,{placement:"right",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"Right"})}),(0,l.jsx)(n.Z,{placement:"rightBottom",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"RB"})})]}),(0,l.jsxs)("div",{style:{marginInlineStart:c,clear:"both",whiteSpace:"nowrap"},children:[(0,l.jsx)(n.Z,{placement:"bottomLeft",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"BL"})}),(0,l.jsx)(n.Z,{placement:"bottom",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"Bottom"})}),(0,l.jsx)(n.Z,{placement:"bottomRight",title:o,arrow:h,children:(0,l.jsx)(i.ZP,{children:"BR"})})]})]})]})};_.default=s},463492:function(P,_,t){t.r(_);var E=t(97857),a=t.n(E),r=t(667294),d=t(879587),e=t(941346),n=t(259696),i=t(785893),l=r.forwardRef(function(c,s){return(0,i.jsx)("div",{style:{overflow:"auto",position:"relative",padding:"24px",border:"1px solid #e9e9e9"},ref:s,children:(0,i.jsxs)("div",{style:{width:"200%",display:"flex",flexDirection:"column",alignItems:"center",rowGap:16},children:[(0,i.jsx)(d.Z,a()(a()({},c),{},{placement:"left",title:"Prompt Text",children:(0,i.jsx)(e.ZP,{children:"Adjust automatically / \u81EA\u52A8\u8C03\u6574"})})),(0,i.jsx)(d.Z,a()(a()({},c),{},{placement:"left",title:"Prompt Text",autoAdjustOverflow:!1,children:(0,i.jsx)(e.ZP,{children:"Ignore / \u4E0D\u5904\u7406"})}))]})})}),o=function(){var s=r.useRef(null),u=r.useRef(null);return r.useEffect(function(){s.current.scrollLeft=s.current.clientWidth*.5,u.current.scrollLeft=u.current.clientWidth*.5},[]),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:16},children:[(0,i.jsx)(n.Z.Title,{level:5,children:"With `getPopupContainer`"}),(0,i.jsx)(l,{ref:s,getPopupContainer:function(m){return m.parentElement}}),(0,i.jsx)(n.Z.Title,{level:5,children:"Without `getPopupContainer`"}),(0,i.jsx)(l,{ref:u})]})};_.default=o},291621:function(P,_,t){t.r(_);var E=t(667294),a=t(879587),r=t(785893),d=function(){return(0,r.jsx)(a.Z,{title:"prompt text",children:(0,r.jsx)("span",{children:"Tooltip will show on mouse enter."})})};_.default=d},990405:function(P,_,t){t.r(_);var E=t(667294),a=t(315816),r=t(945016),d=t(879587),e=t(941346),n=t(785893),i=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],l=["#f50","#2db7f5","#87d068","#108ee9"],o=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{orientation:"left",children:"Presets"}),(0,n.jsx)(r.Z,{wrap:!0,children:i.map(function(s){return(0,n.jsx)(d.Z,{title:"prompt text",color:s,children:(0,n.jsx)(e.ZP,{children:s})},s)})}),(0,n.jsx)(a.Z,{orientation:"left",children:"Custom"}),(0,n.jsx)(r.Z,{wrap:!0,children:l.map(function(s){return(0,n.jsx)(d.Z,{title:"prompt text",color:s,children:(0,n.jsx)(e.ZP,{children:s})},s)})})]})};_.default=o},333810:function(P,_,t){t.r(_);var E=t(667294),a=t(879587),r=t(941346),d=t(785893),e=function(){return(0,d.jsx)(a.Z,{open:!0,title:"Thanks for using antd. Have a nice day!",arrow:{pointAtCenter:!0},placement:"topLeft",children:(0,d.jsx)(r.ZP,{children:"Point at center"})})};_.default=e},809995:function(P,_,t){t.r(_);var E=t(667294),a=t(879587),r=t(785893),d=function(){return(0,r.jsx)(a.Z,{destroyTooltipOnHide:!0,title:"prompt text",children:(0,r.jsx)("span",{children:"Tooltip will destroy when hidden."})})};_.default=d},193451:function(P,_,t){t.r(_);var E=t(97857),a=t.n(E),r=t(667294),d=t(879587),e=t(945016),n=t(941346),i=t(534826),l=t(877266),o=t(7575),c=t(469181),s=t(785893),u=function(x){return(0,s.jsx)(d.Z,a()({title:"Thanks for using antd. Have a nice day!"},x))},j=function(){return(0,s.jsxs)(e.Z,{children:[(0,s.jsx)(u,{children:(0,s.jsx)(n.ZP,{disabled:!0,children:"Disabled"})}),(0,s.jsx)(u,{children:(0,s.jsx)(i.Z,{disabled:!0,placeholder:"disabled"})}),(0,s.jsx)(u,{children:(0,s.jsx)(l.Z,{disabled:!0})}),(0,s.jsx)(u,{children:(0,s.jsx)(o.Z,{disabled:!0})}),(0,s.jsx)(u,{children:(0,s.jsx)(c.Z,{disabled:!0})})]})};_.default=j},415505:function(P,_,t){t.r(_);var E=t(805574),a=t.n(E),r=t(667294),d=t(945016),e=t(941346),n=t(879587),i=t(785893),l=function(){var c=(0,r.useState)(!0),s=a()(c,2),u=s[0],j=s[1];return(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(e.ZP,{onClick:function(){return j(!u)},children:u?"Enable":"Disable"}),(0,i.jsx)(n.Z,{title:u?"":"prompt text",children:(0,i.jsx)("span",{children:"Tooltip will show on mouse enter."})})]})};_.default=l},581222:function(P,_,t){t.r(_);var E=t(667294),a=t(75529),r=t(879587),d=t(941346),e=t(785893),n=(0,e.jsx)("span",{children:"prompt text"}),i=80,l=function(){return(0,e.jsx)(a.ZP,{button:{style:{width:i,margin:4}},children:(0,e.jsxs)("div",{className:"demo",children:[(0,e.jsxs)("div",{style:{marginInlineStart:i,whiteSpace:"nowrap"},children:[(0,e.jsx)(r.Z,{placement:"topLeft",title:n,children:(0,e.jsx)(d.ZP,{children:"TL"})}),(0,e.jsx)(r.Z,{placement:"top",title:n,children:(0,e.jsx)(d.ZP,{children:"Top"})}),(0,e.jsx)(r.Z,{placement:"topRight",title:n,children:(0,e.jsx)(d.ZP,{children:"TR"})})]}),(0,e.jsxs)("div",{style:{width:i,float:"inline-start"},children:[(0,e.jsx)(r.Z,{placement:"leftTop",title:n,children:(0,e.jsx)(d.ZP,{children:"LT"})}),(0,e.jsx)(r.Z,{placement:"left",title:n,children:(0,e.jsx)(d.ZP,{children:"Left"})}),(0,e.jsx)(r.Z,{placement:"leftBottom",title:n,children:(0,e.jsx)(d.ZP,{children:"LB"})})]}),(0,e.jsxs)("div",{style:{width:i,marginInlineStart:i*4+24},children:[(0,e.jsx)(r.Z,{placement:"rightTop",title:n,children:(0,e.jsx)(d.ZP,{children:"RT"})}),(0,e.jsx)(r.Z,{placement:"right",title:n,children:(0,e.jsx)(d.ZP,{children:"Right"})}),(0,e.jsx)(r.Z,{placement:"rightBottom",title:n,children:(0,e.jsx)(d.ZP,{children:"RB"})})]}),(0,e.jsxs)("div",{style:{marginInlineStart:i,clear:"both",whiteSpace:"nowrap"},children:[(0,e.jsx)(r.Z,{placement:"bottomLeft",title:n,children:(0,e.jsx)(d.ZP,{children:"BL"})}),(0,e.jsx)(r.Z,{placement:"bottom",title:n,children:(0,e.jsx)(d.ZP,{children:"Bottom"})}),(0,e.jsx)(r.Z,{placement:"bottomRight",title:n,children:(0,e.jsx)(d.ZP,{children:"BR"})})]})]})})};_.default=l},590229:function(P,_,t){t.r(_);var E=t(667294),a=t(879587),r=t(785893),d=a.Z._InternalPanelDoNotUseOrYouWillBeFired,e=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{title:"Hello, Pink Pure Panel!",color:"pink"}),(0,r.jsx)(d,{title:"Hello, Customize Color Pure Panel!",color:"#f50"}),(0,r.jsx)(d,{title:"Hello, Pure Panel!",placement:"bottomLeft",style:{width:200}})]})};_.default=e},511308:function(P,_,t){t.r(_);var E=t(667294),a=t(879587),r=t(941346),d=t(785893),e=function(){return E.useEffect(function(){document.documentElement.scrollTop=document.documentElement.clientHeight,document.documentElement.scrollLeft=document.documentElement.clientWidth},[]),(0,d.jsx)("div",{children:(0,d.jsx)("div",{style:{width:"300vw",height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)(a.Z,{title:"Thanks for using antd. Have a nice day!",trigger:"click",open:!0,children:(0,d.jsx)(r.ZP,{children:"Scroll The Window"})})})})};_.default=e}}]);
