import{i as J,j as f,d as q,s as B,k as X,r,o as i,c as V,w as a,a as t,e as m,t as W,b as o,l as Y,m as z,_ as E,n as D,E as Z,q as G,f as C,v as U,h as w,x as M,F as A,p as ee,g as le,u as te}from"./index-quLkJuw-.js";async function oe(){return{data:[{id:1,name:"IceCoffee",block1:23,block2:2,block3:34,block4:45,twin:11,all:677,result:655991,hasIcon:!0},{id:2,name:"KissMyWeapon",block1:45,block2:25,block3:11,block4:36,twin:32,all:548,result:450933},{id:2,name:"KissMyWeapon",block1:45,block2:25,block3:11,block4:36,twin:32,all:548,result:450933},{id:2,name:"KissMyWeapon",block1:45,block2:25,block3:11,block4:36,twin:32,all:548,result:450933},{id:2,name:"KissMyWeapon",block1:45,block2:25,block3:11,block4:36,twin:32,all:548,result:450933},{id:2,name:"KissMyWeapon",block1:45,block2:25,block3:11,block4:36,twin:32,all:548,result:450933},{id:2,name:"KissMyWeapon",block1:45,block2:25,block3:11,block4:36,twin:32,all:548,result:450933}]}.data}const H=J("table",()=>{const d=f(!1),e=f([]);return{isLoading:d,tableData:e,fetchTableData:async()=>{e.value=await oe()}}}),ae={class:"table__cell-name"},se=q({__name:"AppTable",setup(d){const{fetchTableData:e}=H(),{isLoading:_,tableData:b}=B(H());return X(async()=>{await e()}),(v,g)=>{const u=r("el-table-column"),h=r("el-icon"),p=r("el-table");return i(),V(p,{data:o(b),"row-class-name":"table__row",class:"table",border:"",style:{width:"100%"}},{default:a(()=>[t(u,{type:"index",width:"50",label:"№"}),t(u,{prop:"name",label:"Ник",width:"170"},{default:a(({row:c})=>[m("div",ae,[m("span",null,W(c.name),1),c.hasIcon?(i(),V(h,{key:0,size:"large"},{default:a(()=>[t(o(Y))]),_:1})):z("",!0)])]),_:1}),t(u,{prop:"block1",label:"Баллы за заходы",width:"140"}),t(u,{prop:"twin",label:"Твины (кол-во)",width:"140"}),t(u,{prop:"block2",label:"Баллы за твинов",width:"140"}),t(u,{prop:"all",label:"Всего баллов",width:"140"}),t(u,{prop:"result",label:"Итог (адена)",width:"140"})]),_:1},8,["data"])}}}),ne=E(se,[["__scopeId","data-v-23a5377a"]]),L=J("form",()=>{const d=f(15),e=f({damagers:[],type:"valakas",twins:[],count_of_randoms:0,price_of_random:0,comment:""}),_=f([{id:1,name:"IceCoffee",count_of_twins:0,points:0},{id:2,name:"iichka",count_of_twins:0,points:0},{id:3,name:"KissMyWeapon",count_of_twins:0,points:0},{id:4,name:"Query",count_of_twins:0,points:0},{id:5,name:"Клюквенный",count_of_twins:0,points:0}]),b=f([]),v=f([]),g=f(""),u=f(""),h=D(()=>{const s=_.value.filter(k=>k.name.toLowerCase().includes(g.value.toLowerCase()));return s.length?s:_.value}),p=D(()=>{const s=_.value.filter(k=>k.name.toLowerCase().includes(u.value.toLowerCase()));return s.length?s:_.value}),c=f(!1),y=f(!1),$=()=>{let s;return e.value.twins.length?s=e.value.twins.reduce((k,I)=>k+I.count_of_twins,0):s=0,s},x=D(()=>e.value.damagers.length+$()+e.value.count_of_randoms),F=D(()=>d.value===x.value);return{users:_,damagers:b,twins:v,form:e,damagersSearch:g,twinsSearch:u,isDisabled:c,isAvailableCount:F,allMembersCount:x,filteredDamagers:h,filteredTwinks:p,isVisible:y,resetForm:()=>{e.value.twins.forEach(s=>s.count_of_twins=0),e.value.damagers.forEach(s=>s.points=0),e.value.damagers=[],e.value.type="valakas",e.value.twins=[],e.value.count_of_randoms=0,e.value.price_of_random=0,e.value.comment="",g.value="",u.value="",b.value=[],v.value=[],y.value=!1},toggleForm:()=>{y.value=!y.value},submitForm:()=>{if(!F.value){Z({type:"error",message:`Общее число участников рейда: ${x.value} из ${d.value}`});return}}}}),N=d=>(ee("data-v-64f83c51"),d=d(),le(),d),ue=N(()=>m("p",{class:"form__title"},"Добавить заход",-1)),ie={key:0,class:"form__item-sublist"},re={class:"form__item-sub-name"},de={style:{"line-height":"20px"}},ce=N(()=>m("span",{style:{"line-height":"20px","margin-right":"8px"}},"баллов",-1)),me={key:0,class:"form__item-sublist"},_e={class:"form__item-sub-name"},pe={style:{"line-height":"20px"}},fe=N(()=>m("span",{style:{"line-height":"20px","margin-right":"8px"}},"количество",-1)),be={class:"form__controls"},ve=q({__name:"AppForm",setup(d){const{form:e,isDisabled:_,users:b,twinsSearch:v,damagersSearch:g,filteredDamagers:u,filteredTwinks:h,damagers:p,twins:c}=B(L()),{submitForm:y,resetForm:$}=L(),x=(F,n)=>F.filter(S=>n.includes(S.id));return G(c,()=>{e.value.twins=x(b.value,c.value)},{deep:!0}),G(p,()=>{e.value.damagers=x(b.value,p.value)},{deep:!0}),(F,n)=>{const S=r("el-radio"),R=r("el-radio-group"),s=r("el-form-item"),k=r("el-input"),I=r("el-option"),j=r("el-select"),T=r("el-input-number"),Q=r("el-button"),O=r("el-scrollbar"),P=r("el-form");return i(),V(P,{model:o(e),ref:"ruleFormRef",class:"form",size:"large"},{default:a(()=>[ue,t(O,{"max-height":"600px",class:"form__content"},{default:a(()=>[t(s,{label:"Активность",required:""},{default:a(()=>[t(R,{modelValue:o(e).type,"onUpdate:modelValue":n[0]||(n[0]=l=>o(e).type=l),size:"large"},{default:a(()=>[t(S,{value:"valakas",size:"large"},{default:a(()=>[C("Валакас")]),_:1}),t(S,{value:"frintezza"},{default:a(()=>[C("Фринтеза")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"Основные персонажи",required:""},{default:a(()=>[t(j,{modelValue:o(p),"onUpdate:modelValue":n[2]||(n[2]=l=>U(p)?p.value=l:null),multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":3,placeholder:"Select",class:"form__select"},{default:a(()=>[t(k,{modelValue:o(g),"onUpdate:modelValue":n[1]||(n[1]=l=>U(g)?g.value=l:null),size:"default",class:"form__input-search",placeholder:"Поиск"},null,8,["modelValue"]),(i(!0),w(A,null,M(o(u),l=>(i(),V(I,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),o(e).damagers.length?(i(),w("div",ie,[(i(!0),w(A,null,M(o(e).damagers,l=>(i(),w("div",{key:l.id,class:"form__item-sub"},[m("div",re,W(l.name),1),m("div",de,[ce,t(T,{modelValue:l.points,"onUpdate:modelValue":K=>l.points=K,step:5,size:"small",min:0,max:100},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])):z("",!0)]),_:1}),t(s,{label:"Твины",required:""},{default:a(()=>[t(j,{modelValue:o(c),"onUpdate:modelValue":n[4]||(n[4]=l=>U(c)?c.value=l:null),multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":3,placeholder:"Select",class:"form__select"},{default:a(()=>[t(k,{modelValue:o(v),"onUpdate:modelValue":n[3]||(n[3]=l=>U(v)?v.value=l:null),size:"default",class:"form__input-search",placeholder:"Поиск"},null,8,["modelValue"]),(i(!0),w(A,null,M(o(h),l=>(i(),V(I,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),o(e).twins.length?(i(),w("div",me,[(i(!0),w(A,null,M(o(e).twins,l=>(i(),w("div",{key:l.id,class:"form__item-sub"},[m("div",_e,W(l.name),1),m("div",pe,[fe,t(T,{modelValue:l.count_of_twins,"onUpdate:modelValue":K=>l.count_of_twins=K,size:"small",min:0,max:14},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])):z("",!0)]),_:1}),t(s,{label:"Количество рандомов"},{default:a(()=>[t(T,{modelValue:o(e).count_of_randoms,"onUpdate:modelValue":n[5]||(n[5]=l=>o(e).count_of_randoms=l),min:0,max:14,size:"default"},null,8,["modelValue"])]),_:1}),o(e).count_of_randoms>0?(i(),V(s,{key:0,label:"Стоимость одного рандома (кк)"},{default:a(()=>[t(T,{modelValue:o(e).price_of_random,"onUpdate:modelValue":n[6]||(n[6]=l=>o(e).price_of_random=l),min:0,max:99,size:"default"},null,8,["modelValue"])]),_:1})):z("",!0),t(s,null,{default:a(()=>[t(k,{modelValue:o(e).comment,"onUpdate:modelValue":n[7]||(n[7]=l=>o(e).comment=l),rows:3,type:"textarea",placeholder:"Комментарий (не обязательно)"},null,8,["modelValue"])]),_:1}),t(s,null,{default:a(()=>[m("div",be,[t(Q,{onClick:o($)},{default:a(()=>[C("Отмена")]),_:1},8,["onClick"]),t(Q,{type:"primary",disabled:o(_),onClick:o(y)},{default:a(()=>[C(" Подвтердить ")]),_:1},8,["disabled","onClick"])])]),_:1})]),_:1})]),_:1},8,["model"])}}}),ge=E(ve,[["__scopeId","data-v-64f83c51"]]),ke={class:"container"},we={class:"content"},he={class:"controls"},Ve=q({__name:"MainView",setup(d){const{isVisible:e}=B(L()),{isLoggedIn:_}=te(),{toggleForm:b,resetForm:v}=L();return(g,u)=>{const h=r("el-button"),p=r("el-dialog");return i(),w("main",ke,[m("div",we,[t(ne),m("div",he,[t(h,{type:"primary",onClick:o(b)},{default:a(()=>[C(" Добавить заход ")]),_:1},8,["onClick"]),o(_)?(i(),V(h,{key:0,type:"primary"},{default:a(()=>[C(" Редактировать ")]),_:1})):z("",!0)])]),t(p,{modelValue:o(e),"onUpdate:modelValue":u[0]||(u[0]=c=>U(e)?e.value=c:null),onClosed:o(v)},{default:a(()=>[t(ge)]),_:1},8,["modelValue","onClosed"])])}}}),xe=E(Ve,[["__scopeId","data-v-d14af965"]]);export{xe as default};
