import{d as u,s as w,u as i,r as a,o as p,c as v,w as t,a as e,b as o,e as f,f as k,p as A,g as C,_ as h,h as I}from"./index-CkzFi_wy.js";const B=l=>(A("data-v-59d7ac02"),l=l(),C(),l),S=B(()=>f("p",{class:"form__title"},"Добро пожаловать",-1)),F={class:"form__controls"},N=u({__name:"AuthForm",setup(l){const{form:s,isDisabled:c,isLoading:r}=w(i()),{submitForm:b}=i();return(M,n)=>{const m=a("el-input"),_=a("el-form-item"),V=a("el-button"),g=a("el-scrollbar"),x=a("el-form");return p(),v(x,{model:o(s),class:"form",size:"large"},{default:t(()=>[S,e(g,{"max-height":"600px",class:"form__content"},{default:t(()=>[e(_,{label:"Email",required:""},{default:t(()=>[e(m,{modelValue:o(s).login,"onUpdate:modelValue":n[0]||(n[0]=d=>o(s).login=d),modelModifiers:{trim:!0},placeholder:"Введите почту"},null,8,["modelValue"])]),_:1}),e(_,{label:"Пароль",required:""},{default:t(()=>[e(m,{modelValue:o(s).password,"onUpdate:modelValue":n[1]||(n[1]=d=>o(s).password=d),modelModifiers:{trim:!0},placeholder:"Введите пароль"},null,8,["modelValue"])]),_:1}),e(_,null,{default:t(()=>[f("div",F,[e(V,{type:"primary",disabled:o(c),loading:o(r),onClick:o(b)},{default:t(()=>[k(" Войти ")]),_:1},8,["disabled","loading","onClick"])])]),_:1})]),_:1})]),_:1},8,["model"])}}}),q=h(N,[["__scopeId","data-v-59d7ac02"]]),y={class:"auth"},E=u({__name:"AuthView",setup(l){return(s,c)=>{const r=a("el-card");return p(),I("div",y,[e(r,{class:"auth__card"},{default:t(()=>[e(q)]),_:1})])}}}),U=h(E,[["__scopeId","data-v-0b21042c"]]);export{U as default};