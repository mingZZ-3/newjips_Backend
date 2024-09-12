import{b as w}from"./boardApi-CE0Y89Gm.js";import{h as q}from"./moment-C5S46NFB.js";import{u as x,a as k,c as C,d as V,r as I,m as B,j as f,o as u,e as i,f as t,t as r,F as D,p as L,k as d,l as o,q as c,h as p}from"./index-DYn770XT.js";import"./index-DjN9BD_0.js";const N=t("h1",{class:"mb-3"},[t("i",{class:"fa-solid fa-paste"}),p(" 게시글 목록")],-1),Y={class:"mt-5 text-end"},R={class:"table table-striped"},A=t("thead",null,[t("tr",null,[t("th",{style:{width:"60px"}},"No"),t("th",null,"제목"),t("th",{style:{width:"100px"}},"작성자"),t("th",{style:{width:"120px"}},"작성일")])],-1),F={class:"my-5 d-flex"},M={class:"flex-grow-1 text-center"},P=t("i",{class:"fa-solid fa-backward-fast"},null,-1),T=t("i",{class:"fa-solid fa-caret-left"},null,-1),j=t("i",{class:"fa-solid fa-caret-right"},null,-1),E=t("i",{class:"fa-solid fa-forward-fast"},null,-1),H=t("i",{class:"fa-solid fa-pen-to-square"},null,-1),G={__name:"BoardListPage",setup(K){const e=x(),g=k(),n=C({}),y=V(()=>n.value.list),a=I({page:parseInt(e.query.page)||1,amount:parseInt(e.query.amount)||10}),b=async l=>{console.log("CLICK,,,,"),g.push({query:{page:l,amount:a.amount}})};B(e,async l=>{console.log("WATCH",e.query.page),a.page=parseInt(e.query.page),a.amount=parseInt(e.query.amount),await m(a)});const m=async l=>{try{n.value=await w.getList(l),console.log(n.value)}catch{}};return m(a),(l,_)=>{const h=f("router-link"),v=f("vue-awesome-paginate");return u(),i("div",null,[N,t("div",Y,"(총 "+r(n.value.totalCount)+"건)",1),t("table",R,[A,t("tbody",null,[(u(!0),i(D,null,L(y.value,s=>(u(),i("tr",{key:s.no},[t("td",null,r(s.no),1),t("td",null,[d(h,{to:{name:"board/detail",params:{no:s.no},query:c(e).query}},{default:o(()=>[p(r(s.title),1)]),_:2},1032,["to"])]),t("td",null,r(s.writer),1),t("td",null,r(c(q)(s.regDate).format("YYYY-MM-DD")),1)]))),128))])]),t("div",F,[t("div",M,[d(v,{"total-items":n.value.totalCount,"items-per-page":a.amount,"max-pages-shown":5,"show-ending-buttons":!0,modelValue:a.page,"onUpdate:modelValue":_[0]||(_[0]=s=>a.page=s),onClick:b},{"first-page-button":o(()=>[P]),"prev-button":o(()=>[T]),"next-button":o(()=>[j]),"last-page-button":o(()=>[E]),_:1},8,["total-items","items-per-page","modelValue"])]),t("div",null,[d(h,{to:{name:"board/create",query:c(e).query},class:"btn btn-primary"},{default:o(()=>[H,p(" 글 작성")]),_:1},8,["to"])])])])}}};export{G as default};
