import{f as O,r as o,o as s,c as d,b as _,a as t,w as e,F as i,d as l,g as $,j as m,t as y,h as z,k as x,Y as S,ax as V,u as k}from"../app.d0cca265.js";const w={},T={class:"alignment-container"},M=l(" string "),P=l(" button "),C=l(" header "),L=l(" body "),U={class:"alignment-container"},B=l(" string "),N=l(" button "),D=l(" header "),E=l(" body "),F={class:"alignment-container"},R=l(" string "),W=l(" button "),Y=l(" header "),q=l(" body ");function A(g,a){const r=o("el-button"),c=o("el-card"),n=o("el-space");return s(),d(i,null,[_("div",T,[t(n,null,{default:e(()=>[M,t(r,null,{default:e(()=>[P]),_:1}),t(c,null,{header:e(()=>[C]),default:e(()=>[L]),_:1})]),_:1})]),_("div",U,[t(n,{alignment:"flex-start"},{default:e(()=>[B,t(r,null,{default:e(()=>[N]),_:1}),t(c,null,{header:e(()=>[D]),default:e(()=>[E]),_:1})]),_:1})]),_("div",F,[t(n,{alignment:"flex-end"},{default:e(()=>[R,t(r,null,{default:e(()=>[W]),_:1}),t(c,null,{header:e(()=>[Y]),default:e(()=>[q]),_:1})]),_:1})])],64)}var G=O(w,[["render",A]]),Ee=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));const H={},I=l(" Text button ");function J(g,a){const r=o("el-button"),c=o("el-space");return s(),$(c,{wrap:""},{default:e(()=>[(s(),d(i,null,m(20,n=>_("div",{key:n},[t(r,{text:""},{default:e(()=>[I]),_:1})])),64))]),_:1})}var K=O(H,[["render",J]]),Fe=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));const Q={},X={class:"card-header"},Z=_("span",null,"Card name",-1),ee=l("Operation button");function te(g,a){const r=o("el-button"),c=o("el-card"),n=o("el-space");return s(),$(n,{wrap:""},{default:e(()=>[(s(),d(i,null,m(3,p=>t(c,{key:p,class:"box-card",style:{width:"250px"}},{header:e(()=>[_("div",X,[Z,t(r,{class:"button",text:""},{default:e(()=>[ee]),_:1})])]),default:e(()=>[(s(),d(i,null,m(4,u=>_("div",{key:u,class:"text item"},y("List item "+u),1)),64))]),_:2},1024)),64))]),_:1})}var oe=O(Q,[["render",te]]),Re=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));const le=l("large"),ne=l("default"),_e=l("small"),ae={class:"card-header"},se=_("span",null,"Card name",-1),ce=l("Operation button"),re=z({__name:"control-size",setup(g){const a=x("default");return(r,c)=>{const n=o("el-radio"),p=o("el-radio-group"),u=o("el-button"),v=o("el-card"),f=o("el-space");return s(),$(f,{direction:"vertical",alignment:"start",size:30},{default:e(()=>[t(p,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=b=>a.value=b)},{default:e(()=>[t(n,{label:"large"},{default:e(()=>[le]),_:1}),t(n,{label:"default"},{default:e(()=>[ne]),_:1}),t(n,{label:"small"},{default:e(()=>[_e]),_:1})]),_:1},8,["modelValue"]),t(f,{wrap:"",size:a.value},{default:e(()=>[(s(),d(i,null,m(3,b=>t(v,{key:b,class:"box-card",style:{width:"250px"}},{header:e(()=>[_("div",ae,[se,t(u,{class:"button",text:""},{default:e(()=>[ce]),_:1})])]),default:e(()=>[(s(),d(i,null,m(4,h=>_("div",{key:h,class:"text item"},y("List item "+h),1)),64))]),_:2},1024)),64))]),_:1},8,["size"])]),_:1})}}});var We=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));const de={class:"card-header"},ue=_("span",null,"Card name",-1),ie=l("Operation button"),pe=z({__name:"customized-size",setup(g){const a=x(20);return(r,c)=>{const n=o("el-slider"),p=o("el-button"),u=o("el-card"),v=o("el-space");return s(),d(i,null,[t(n,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=f=>a.value=f)},null,8,["modelValue"]),t(v,{wrap:"",size:a.value},{default:e(()=>[(s(),d(i,null,m(2,f=>t(u,{key:f,class:"box-card",style:{width:"250px"}},{header:e(()=>[_("div",de,[ue,t(p,{class:"button",text:""},{default:e(()=>[ie]),_:1})])]),default:e(()=>[(s(),d(i,null,m(4,b=>_("div",{key:b,class:"text item"},y("List item "+b),1)),64))]),_:2},1024)),64))]),_:1},8,["size"])],64)}}});var Ye=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"}));const me={style:{"margin-bottom":"15px"}},fe=l(" direction: "),be=l("horizontal"),ve=l("vertical"),he={style:{"margin-bottom":"15px"}},ge=l(" fillRatio:"),ye={class:"card-header"},xe=_("span",null,"Card name",-1),$e=l("Operation button"),ze=z({__name:"fill-ratio",setup(g){const a=x("horizontal"),r=x(30);return(c,n)=>{const p=o("el-radio"),u=o("el-slider"),v=o("el-button"),f=o("el-card"),b=o("el-space");return s(),d("div",null,[_("div",me,[fe,t(p,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=h=>a.value=h),label:"horizontal"},{default:e(()=>[be]),_:1},8,["modelValue"]),t(p,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=h=>a.value=h),label:"vertical"},{default:e(()=>[ve]),_:1},8,["modelValue"])]),_("div",he,[ge,t(u,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=h=>r.value=h)},null,8,["modelValue"])]),t(b,{fill:"",wrap:"","fill-ratio":r.value,direction:a.value,style:{width:"100%"}},{default:e(()=>[(s(),d(i,null,m(5,h=>t(f,{key:h,class:"box-card"},{header:e(()=>[_("div",ye,[xe,t(v,{class:"button",text:""},{default:e(()=>[$e]),_:1})])]),default:e(()=>[(s(),d(i,null,m(4,j=>_("div",{key:j,class:"text item"},y("List item "+j),1)),64))]),_:2},1024)),64))]),_:1},8,["fill-ratio","direction"])])}}});var qe=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));const Oe={style:{"margin-bottom":"15px"}},je=l("fill: "),Se={class:"card-header"},Ve=_("span",null,"Card name",-1),ke=l("Operation button"),we=z({__name:"fill",setup(g){const a=x(!0);return(r,c)=>{const n=o("el-switch"),p=o("el-button"),u=o("el-card"),v=o("el-space");return s(),d("div",null,[_("div",Oe,[je,t(n,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=f=>a.value=f)},null,8,["modelValue"])]),t(v,{fill:a.value,wrap:""},{default:e(()=>[(s(),d(i,null,m(3,f=>t(u,{key:f,class:"box-card"},{header:e(()=>[_("div",Se,[Ve,t(p,{class:"button",text:""},{default:e(()=>[ke]),_:1})])]),default:e(()=>[(s(),d(i,null,m(4,b=>_("div",{key:b,class:"text item"},y("List item "+b),1)),64))]),_:2},1024)),64))]),_:1},8,["fill"])])}}});var Ae=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));const Te=z({__name:"literal-type-spacer",setup(g){const a=x(10);return(r,c)=>{const n=o("el-button"),p=o("el-space");return s(),$(p,{size:a.value,spacer:"|"},{default:e(()=>[(s(),d(i,null,m(2,u=>_("div",{key:u},[t(n,null,{default:e(()=>[l(" button "+y(u),1)]),_:2},1024)])),64))]),_:1},8,["size"])}}});var Ge=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"}));const Me={},Pe={class:"card-header"},Ce=_("span",null,"Card name",-1),Le=l("Operation button");function Ue(g,a){const r=o("el-button"),c=o("el-card"),n=o("el-space");return s(),$(n,{direction:"vertical"},{default:e(()=>[(s(),d(i,null,m(2,p=>t(c,{key:p,class:"box-card",style:{width:"250px"}},{header:e(()=>[_("div",Pe,[Ce,t(r,{class:"button",text:""},{default:e(()=>[Le]),_:1})])]),default:e(()=>[(s(),d(i,null,m(4,u=>_("div",{key:u,class:"text item"},y("List item "+u),1)),64))]),_:2},1024)),64))]),_:1})}var Be=O(Me,[["render",Ue]]),He=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"}));const Ne=z({__name:"vnode-type-spacer",setup(g){const a=x(10),r=S(V,{direction:"vertical"});return(c,n)=>{const p=o("el-button"),u=o("el-space");return s(),$(u,{size:a.value,spacer:k(r)},{default:e(()=>[(s(),d(i,null,m(2,v=>_("div",{key:v},[t(p,null,{default:e(()=>[l(" button "+y(v),1)]),_:2},1024)])),64))]),_:1},8,["size","spacer"])}}});var Ie=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"}));export{Ee as _,Fe as a,Re as b,We as c,Ye as d,qe as e,Ae as f,Ge as g,He as h,Ie as i};
