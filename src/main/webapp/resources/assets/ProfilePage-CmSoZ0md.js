import{b as w,a as y,c as m,r as x,d as k,j as V,o as u,e as p,f as a,h as s,t as f,w as c,v as d,g as N,k as S,l as P,i as B}from"./index-p_1THz6I.js";import{a as C}from"./authApi-r5Bq7cZs.js";import"./index-DRcVQfPh.js";const U={class:"mt-5 mx-auto",style:{width:"500px"}},j=a("h1",null,[a("i",{class:"fa-solid fa-user-gear my-3"}),s(" 회원 정보")],-1),A={class:"mb-3 mt-3"},D={class:"mb-3 mt-3"},E=a("label",{for:"avatar",class:"form-label"},[a("i",{class:"fa-solid fa-user-astronaut"}),s(" 아바타 이미지: ")],-1),M={class:"mb-3 mt-3"},T=a("label",{for:"name",class:"form-label"},[a("i",{class:"fa-solid fa-circle-user"}),s(" name ")],-1),R={class:"mb-3 mt-3"},$=a("label",{for:"email",class:"form-label"},[a("i",{class:"fa-solid fa-envelope"}),s(" email ")],-1),q={class:"mb-3"},z=a("label",{for:"password",class:"form-label"},[a("i",{class:"fa-solid fa-lock"}),s(" 비밀번호: ")],-1),F={key:0,class:"text-danger"},G={class:"text-center"},H=["disabled"],I=a("i",{class:"fa-solid fa-user-plus"},null,-1),J=a("i",{class:"fa-solid fa-lock"},null,-1),W={__name:"ProfilePage",setup(K){const t=w(),_=y(),r=m(null),v=`/api/member/${t.id}/avatar`,e=x({id:t.id,name:t.name,email:t.email,password:"",avatar:null}),i=m(""),h=k(()=>!e.email||!e.password),b=async()=>{if(r.value.files.length>0&&(e.avatar=r.value.files[0]),console.log(t),!!confirm("수정하시겠습니까?"))try{await C.update(e),i.value="",t.changeProfile(e),alert("정보를 수정하였습니다."),_.go(0)}catch(n){console.log(n),i.value=n.response.data}};return(n,o)=>{const g=V("router-link");return u(),p("div",U,[j,a("form",{onSubmit:B(b,["prevent"])},[a("div",A,[a("img",{src:v,class:"avatar avatar-lg me-4"}),s(" "+f(e.id),1)]),a("div",D,[E,a("input",{type:"file",class:"form-control",ref_key:"avatar",ref:r,id:"avatar",accept:"image/png, image/jpeg"},null,512)]),a("div",M,[T,c(a("input",{type:"text",class:"form-control",placeholder:"Name",id:"name","onUpdate:modelValue":o[0]||(o[0]=l=>e.name=l)},null,512),[[d,e.name]])]),a("div",R,[$,c(a("input",{type:"email",class:"form-control",placeholder:"Email",id:"email","onUpdate:modelValue":o[1]||(o[1]=l=>e.email=l)},null,512),[[d,e.email]])]),a("div",q,[z,c(a("input",{type:"password",class:"form-control",placeholder:"비밀번호",id:"password","onUpdate:modelValue":o[2]||(o[2]=l=>e.password=l)},null,512),[[d,e.password]])]),i.value?(u(),p("div",F,f(i.value),1)):N("",!0),a("div",G,[a("button",{type:"submit",class:"btn btn-primary mt-4 me-3",disabled:h.value},[I,s(" 확인 ")],8,H),S(g,{class:"btn btn-primary mt-4",to:"/auth/changepassword"},{default:P(()=>[J,s(" 비밀번호 변경 ")]),_:1})])],32)])}}};export{W as default};
