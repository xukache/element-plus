import{h as p,k as _,r as s,o as u,g as i,c as m,b as d,a as r,F as v,f,w as b,d as g}from"../app.d0cca265.js";const V=p({__name:"alpha",setup(c){const e=_("rgba(19, 206, 102, 0.8)");return(t,a)=>{const o=s("el-color-picker");return u(),i(o,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),"show-alpha":""},null,8,["modelValue"])}}});var w=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));const y={class:"demo-color-block"},k=d("span",{class:"demonstration"},"With default value",-1),x={class:"demo-color-block"},h=d("span",{class:"demonstration"},"With no default value",-1),z=p({__name:"basic",setup(c){const e=_("#409EFF"),t=_();return(a,o)=>{const l=s("el-color-picker");return u(),m(v,null,[d("div",y,[k,r(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n)},null,8,["modelValue"])]),d("div",x,[h,r(l,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=n=>t.value=n)},null,8,["modelValue"])])],64)}}});var B=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));const j=p({__name:"predefined-color",setup(c){const e=_("rgba(255, 69, 0, 0.68)"),t=_(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);return(a,o)=>{const l=s("el-color-picker");return u(),i(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),"show-alpha":"",predefine:t.value},null,8,["modelValue","predefine"])}}});var C=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const O={class:"demo-color-sizes"},S=p({__name:"sizes",setup(c){const e=_("409EFF");return(t,a)=>{const o=s("el-color-picker");return u(),m("div",O,[r(o,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),size:"large"},null,8,["modelValue"]),r(o,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value=l)},null,8,["modelValue"]),r(o,{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value=l),size:"small"},null,8,["modelValue"])])}}});var M=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const U={},F=g("a11y");function T(c,e){const t=s("el-tag");return u(),i(t,{size:"small",effect:"plain",hit:"",round:"",class:"ml-2"},{default:b(()=>[F]),_:1})}var P=f(U,[["render",T],["__scopeId","data-v-ab284018"]]);export{w as _,B as a,C as b,M as c,P as d};
