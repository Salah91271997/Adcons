"use strict";(self.webpackChunkadcons=self.webpackChunkadcons||[]).push([[145],{5145:(bt,y,i)=>{i.r(y),i.d(y,{NewsModule:()=>ht});var d=i(6895),m=i(8776),a=i(9653),I=i(4466),p=i(7799);const O=(0,a.PH)("[NewsDetail Component] load News detail ",(0,a.Ky)()),N=(0,a.PH)("[NewsDetail Effect] News Detail  Loaded",(0,a.Ky)());(0,a.PH)("[NewsDetail Effect] News Detail  fail",(0,a.Ky)());var w=i(7489);const C=(0,a.ZF)("NewsDetails"),U=(0,w.memoize)(e=>(0,a.P1)(C,n=>n?.newsDetails[e])),$=(0,w.memoize)(e=>(0,a.P1)(C,n=>n?.newsDetails[e]?.loaded)),J=(0,w.memoize)(e=>(0,a.P1)(C,n=>n?.newsDetails[e]?.description?.map(o=>o.list_items.split(/\r?\n/))));var t=i(4650),x=i(8576),E=i(4871),h=i(488),Q=i(1987);function K(e,n){if(1&e&&(t.TgZ(0,"li")(1,"div"),t.O4$(),t.TgZ(2,"svg",16),t._UZ(3,"rect",17),t.qZA()(),t._uU(4),t.qZA()),2&e){const o=n.$implicit;t.xp6(4),t.hij(" ",o," ")}}function Y(e,n){if(1&e&&(t.ynx(0),t.TgZ(1,"ul",15),t.YNc(2,K,5,1,"li",12),t.qZA(),t.BQk()),2&e){const o=n.ngIf;t.xp6(2),t.Q6J("ngForOf",o)}}function H(e,n){if(1&e&&(t.TgZ(0,"div")(1,"div",13)(2,"p"),t._uU(3),t.qZA()(),t.YNc(4,Y,3,1,"ng-container",14),t.ALo(5,"async"),t.qZA()),2&e){const o=n.$implicit,f=t.oxw(2);t.xp6(3),t.hij(" ",o.paragraph," "),t.xp6(1),t.Q6J("ngIf",t.lcZ(5,2,f.listArr))}}const z=function(){return["MENU.HOME","MENU.NEWS","Projects.news"]},G=function(){return["/","/news","/details/{{newsDetails.id}}"]};function k(e,n){if(1&e&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4),t._UZ(4,"navigate",5),t.qZA()()(),t.TgZ(5,"div",6),t._UZ(6,"header-section",7),t.qZA(),t.TgZ(7,"div",8),t._UZ(8,"pattern",9),t.qZA(),t.TgZ(9,"div",2)(10,"div",10)(11,"div",3)(12,"div",4)(13,"div",11)(14,"h2"),t._uU(15),t.qZA()(),t.YNc(16,H,6,4,"div",12),t.qZA()()()()()),2&e){const o=n.ngIf;t.xp6(4),t.Q6J("linksName",t.DdM(8,z))("pathes",t.DdM(9,G)),t.xp6(2),t.Q6J("item",o),t.xp6(2),t.Q6J("rowNumber",1)("patternNumber",20)("opacity",.3),t.xp6(7),t.Oqu(o.title),t.xp6(1),t.Q6J("ngForOf",o.description)}}let j=(()=>{class e{constructor(o,f){this.store=o,this.route=f}ngOnInit(){this.getPageSlug()}getPageSlug(){this.route.params.subscribe(o=>{this.id=o.id,this.store.dispatch(O({id:o.id})),this.newsDetails$=this.store.select(U(this.id)),this.listArr=this.store.select(J(this.id))})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.yh),t.Y36(p.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-news-details"]],decls:2,vars:3,consts:[["class","news-details","setRtl","",4,"ngIf"],["setRtl","",1,"news-details"],[1,"adcons-container"],[1,"row"],[1,"col-12"],[3,"linksName","pathes"],[1,"header-section-img"],[3,"item"],[1,"patt"],[3,"rowNumber","patternNumber","opacity"],[1,"details-container"],[1,"title"],[4,"ngFor","ngForOf"],[1,"sub-title"],[4,"ngIf"],[1,"list"],["xmlns","http://www.w3.org/2000/svg","width","10","height","10","viewBox","0 0 10 10"],["id","Rectangle_117","data-name","Rectangle 117","width","10","height","10","fill","#ff730f"]],template:function(o,f){1&o&&(t.YNc(0,k,17,10,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,f.newsDetails$))},dependencies:[x.A,E.Y,h.u,d.sg,d.O5,Q.p,d.Ov],styles:['@font-face{font-family:promptThin;src:url(Prompt-Thin.ed641cd5141fc19e.eot),url(Prompt-Thin.4f372ba9b5d97cd9.woff2) format("woff2"),url(Prompt-Thin.747478300fef9e52.woff) format("woff"),url(Prompt-Thin.c9928fd51fc53866.ttf) format("truetype")}@font-face{font-family:promptLight;src:url(Prompt-Light.3640e0cb730b0bbc.eot),url(Prompt-Light.ffd8e06db102ee96.woff2) format("woff2"),url(Prompt-Light.202c45d59d8e741a.woff) format("woff"),url(Prompt-Light.94e69cc01abaf0eb.ttf) format("truetype")}@font-face{font-family:promptRegular;src:url(Prompt-Regular.b75782d15ac8508e.eot),url(Prompt-Regular.c25359b130ae8a6a.woff2) format("woff2"),url(Prompt-Regular.56cbb2356f11e7fb.woff) format("woff"),url(Prompt-Regular.f15cf6ff192ed279.ttf) format("truetype")}@font-face{font-family:promptMedium;src:url(Prompt-Medium.a02181b622aeda88.eot),url(Prompt-Medium.e037c47034c3f331.woff2) format("woff2"),url(Prompt-Medium.0ba8abdd048dd32a.woff) format("woff"),url(Prompt-Medium.96b95e97bdfa54bb.ttf) format("truetype")}@font-face{font-family:promptSemiBold;src:url(Prompt-SemiBold.5810ebb8b0d343c0.eot),url(Prompt-SemiBold.9aa753e38fa387df.woff2) format("woff2"),url(Prompt-SemiBold.97514e1a2aef558f.woff) format("woff"),url(Prompt-SemiBold.883eb5e6a1645c92.ttf) format("truetype")}@font-face{font-family:promptBold;src:url(Prompt-Bold.dd164395b01e456d.eot),url(Prompt-Bold.41ca2c6243939326.woff2) format("woff2"),url(Prompt-Bold.c07bb09af1ca6d6f.woff) format("woff"),url(Prompt-Bold.3662af269a6e2cb4.ttf) format("truetype")}@font-face{font-family:cairoLight;src:url(Cairo-Light.91f1c24d3bb9cce7.eot),url(Cairo-Light.b1b22161b01b8a5d.woff2) format("woff2"),url(Cairo-Light.cb9e9de1dba9f1b5.woff) format("woff"),url(Cairo-Light.eadc4dc53f716143.ttf) format("truetype")}@font-face{font-family:cairoRegular;src:url(Cairo-Regular.a1412b49347e2de8.eot),url(Cairo-Regular.2acd8bb2d8bfe0a5.woff2) format("woff2"),url(Cairo-Regular.715b4a8f68a5a037.woff) format("woff"),url(Cairo-Regular.7d1ceeab7e4ea154.ttf) format("truetype")}@font-face{font-family:cairoMedium;src:url(Cairo-Medium.d0855d2020217b20.eot),url(Cairo-Medium.effa77fee7afd1c6.woff2) format("woff2"),url(Cairo-Medium.cede7a4df1f06199.woff) format("woff"),url(Cairo-Medium.e0a35e9e5ca7320b.ttf) format("truetype")}@font-face{font-family:cairoSemiBold;src:url(Cairo-SemiBold.d2d295ce712455f0.eot),url(Cairo-SemiBold.d5381ebe5d66ae26.woff2) format("woff2"),url(Cairo-SemiBold.7f12bd5cc9e620c6.woff) format("woff"),url(Cairo-SemiBold.3f27f94d1d1cde65.ttf) format("truetype")}@font-face{font-family:cairoBold;src:url(Cairo-Bold.d6a9e24adf1bae15.eot),url(Cairo-Bold.5da8bf52d71c211c.woff2) format("woff2"),url(Cairo-Bold.23a51acd2983e83a.woff) format("woff"),url(Cairo-Bold.5e1caff4006b2563.ttf) format("truetype")}.news-details[_ngcontent-%COMP%]{margin-bottom:2rem}.news-details[_ngcontent-%COMP%]   .header-section-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100vw;height:100%;margin-top:-4rem;position:relative;z-index:111}.news-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]{margin-top:-5rem}.news-details[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{margin:2rem 0}.news-details[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{list-style:none;margin-inline-start:3rem!important}@media only screen and (min-width: 320px){.news-details[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{margin-inline-start:0!important}}.news-details[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#092547;white-space:break-spaces;font-family:promptRegular,sans-serif;padding:.5rem;display:flex;align-items:flex-start}.news-details[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:.5rem}.news-details.rtl[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .news-details.rtl[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-family:cairoLight,sans-serif}']}),e})();const B=(0,a.PH)("[newsPageComponent] load news page "),L=(0,a.PH)("[newsPageComponent] news page Loaded",(0,a.Ky)()),Z=(0,a.PH)("[newsPageComponent] load news next",(0,a.Ky)()),T=(0,a.PH)("[effect] news  next  Loaded",(0,a.Ky)()),D=(0,a.PH)("[effect] news page  fail",(0,a.Ky)()),P=(0,a.ZF)("news"),R=(0,a.P1)(P,e=>e[e.currentPage]?.results),q=(0,a.P1)(P,e=>{let n=[],o=e[e.currentPage]?.count;if(o){let f=Math.ceil(o/10);for(let l=0;l<f;l++)n.push(l+1)}return n}),W=(0,a.P1)(P,e=>e.currentPage);var X=i(2340),V=i(2365),tt=i(3416);let et=(()=>{class e{constructor(){this.isArabic=!1,this.imgUrl=X.N.baseUrl}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-news-item"]],inputs:{item:"item"},decls:14,vars:9,consts:[["setRtl","",1,"news-item","card"],[1,"news-hover","card-body"],[1,"img-box"],["alt","",1,"img-news",3,"src"],[1,"my-3"],[1,"description"],[3,"routerLink"],["src","../../../../../assets/imgs/Path 509.svg","alt",""],[1,"px-2"]],template:function(o,f){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"h6",4),t._uU(5),t.qZA(),t.TgZ(6,"span",5),t._uU(7),t.ALo(8,"subText"),t.qZA(),t.TgZ(9,"a",6),t._UZ(10,"img",7),t.TgZ(11,"span",8),t._uU(12),t.ALo(13,"translate"),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("src",f.item.image,t.LSH),t.xp6(2),t.Oqu(f.item.title),t.xp6(2),t.hij(" ",t.lcZ(8,5,f.item.short_description)," "),t.xp6(2),t.MGl("routerLink","details/",f.item.id,""),t.xp6(3),t.Oqu(t.lcZ(13,7,"Home.Read")))},dependencies:[h.u,p.yS,V.u,tt.X$],styles:['@font-face{font-family:promptThin;src:url(Prompt-Thin.ed641cd5141fc19e.eot),url(Prompt-Thin.4f372ba9b5d97cd9.woff2) format("woff2"),url(Prompt-Thin.747478300fef9e52.woff) format("woff"),url(Prompt-Thin.c9928fd51fc53866.ttf) format("truetype")}@font-face{font-family:promptLight;src:url(Prompt-Light.3640e0cb730b0bbc.eot),url(Prompt-Light.ffd8e06db102ee96.woff2) format("woff2"),url(Prompt-Light.202c45d59d8e741a.woff) format("woff"),url(Prompt-Light.94e69cc01abaf0eb.ttf) format("truetype")}@font-face{font-family:promptRegular;src:url(Prompt-Regular.b75782d15ac8508e.eot),url(Prompt-Regular.c25359b130ae8a6a.woff2) format("woff2"),url(Prompt-Regular.56cbb2356f11e7fb.woff) format("woff"),url(Prompt-Regular.f15cf6ff192ed279.ttf) format("truetype")}@font-face{font-family:promptMedium;src:url(Prompt-Medium.a02181b622aeda88.eot),url(Prompt-Medium.e037c47034c3f331.woff2) format("woff2"),url(Prompt-Medium.0ba8abdd048dd32a.woff) format("woff"),url(Prompt-Medium.96b95e97bdfa54bb.ttf) format("truetype")}@font-face{font-family:promptSemiBold;src:url(Prompt-SemiBold.5810ebb8b0d343c0.eot),url(Prompt-SemiBold.9aa753e38fa387df.woff2) format("woff2"),url(Prompt-SemiBold.97514e1a2aef558f.woff) format("woff"),url(Prompt-SemiBold.883eb5e6a1645c92.ttf) format("truetype")}@font-face{font-family:promptBold;src:url(Prompt-Bold.dd164395b01e456d.eot),url(Prompt-Bold.41ca2c6243939326.woff2) format("woff2"),url(Prompt-Bold.c07bb09af1ca6d6f.woff) format("woff"),url(Prompt-Bold.3662af269a6e2cb4.ttf) format("truetype")}@font-face{font-family:cairoLight;src:url(Cairo-Light.91f1c24d3bb9cce7.eot),url(Cairo-Light.b1b22161b01b8a5d.woff2) format("woff2"),url(Cairo-Light.cb9e9de1dba9f1b5.woff) format("woff"),url(Cairo-Light.eadc4dc53f716143.ttf) format("truetype")}@font-face{font-family:cairoRegular;src:url(Cairo-Regular.a1412b49347e2de8.eot),url(Cairo-Regular.2acd8bb2d8bfe0a5.woff2) format("woff2"),url(Cairo-Regular.715b4a8f68a5a037.woff) format("woff"),url(Cairo-Regular.7d1ceeab7e4ea154.ttf) format("truetype")}@font-face{font-family:cairoMedium;src:url(Cairo-Medium.d0855d2020217b20.eot),url(Cairo-Medium.effa77fee7afd1c6.woff2) format("woff2"),url(Cairo-Medium.cede7a4df1f06199.woff) format("woff"),url(Cairo-Medium.e0a35e9e5ca7320b.ttf) format("truetype")}@font-face{font-family:cairoSemiBold;src:url(Cairo-SemiBold.d2d295ce712455f0.eot),url(Cairo-SemiBold.d5381ebe5d66ae26.woff2) format("woff2"),url(Cairo-SemiBold.7f12bd5cc9e620c6.woff) format("woff"),url(Cairo-SemiBold.3f27f94d1d1cde65.ttf) format("truetype")}@font-face{font-family:cairoBold;src:url(Cairo-Bold.d6a9e24adf1bae15.eot),url(Cairo-Bold.5da8bf52d71c211c.woff2) format("woff2"),url(Cairo-Bold.23a51acd2983e83a.woff) format("woff"),url(Cairo-Bold.5e1caff4006b2563.ttf) format("truetype")}.card[_ngcontent-%COMP%]{background-color:transparent;height:100%;border:0}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:1rem 0;position:relative;overflow:hidden;height:100%;display:flex;flex-direction:column;justify-content:space-around}.news-item[_ngcontent-%COMP%]{position:relative;height:100%}.news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]{width:100%}.news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{overflow:hidden}.news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]   .img-news[_ngcontent-%COMP%]{height:20rem;width:100%;transition:all .3s ease-in}.news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#092547}.news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:promptRegular,sans-serif}.news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{display:block}.news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:promptRegular,sans-serif;color:#ff730f;display:block;margin-top:1rem;cursor:pointer}.news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:all .3s ease-in-out;color:#ff730f}.news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]:hover   .img-news[_ngcontent-%COMP%]{transition:all .3s ease-in-out;transform:scale(1.3)}.news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem;transition:all .3s ease-in-out}.news-item[_ngcontent-%COMP%]   .news-hover[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.3);transition:all .3s ease-in-out}.news-item.rtl[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:cairoRegular,sans-serif}.news-item.rtl[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .news-item.rtl[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:cairoLight,sans-serif}']}),e})();function ot(e,n){if(1&e&&(t.TgZ(0,"div",8),t._UZ(1,"app-news-item",9),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Q6J("item",o)}}function nt(e,n){if(1&e&&(t.TgZ(0,"div",2),t.YNc(1,ot,2,1,"div",7),t.qZA()),2&e){const o=n.ngIf;t.xp6(1),t.Q6J("ngForOf",o)}}const rt=function(e){return{active:e}};function at(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"li",13)(1,"a",16),t.NdJ("click",function(){const r=t.CHM(o).$implicit,c=t.oxw(2).ngIf,s=t.oxw(2);return t.KtG(s.paginate(r,c))}),t._uU(2),t.qZA()()}if(2&e){const o=n.$implicit,f=t.oxw(3).ngIf;t.xp6(1),t.Q6J("ngClass",t.VKq(2,rt,o===f)),t.xp6(1),t.Oqu(o)}}const S=function(e){return{blueLight:e}};function ft(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"ul",12)(1,"li",13)(2,"a",14),t.NdJ("click",function(){t.CHM(o);const l=t.oxw().ngIf,r=t.oxw().ngIf,c=t.oxw();return t.KtG(c.paginate(r-1,l))}),t._uU(3," \u22d6 "),t.qZA()(),t.YNc(4,at,3,4,"li",15),t.TgZ(5,"li",13)(6,"a",14),t.NdJ("click",function(){t.CHM(o);const l=t.oxw().ngIf,r=t.oxw().ngIf,c=t.oxw();return t.KtG(c.paginate(r+1,l))}),t._uU(7," \u22d7 "),t.qZA()()()}if(2&e){const o=t.oxw().ngIf,f=t.oxw().ngIf;t.xp6(2),t.Q6J("ngClass",t.VKq(3,S,f<=1)),t.xp6(2),t.Q6J("ngForOf",o),t.xp6(2),t.Q6J("ngClass",t.VKq(5,S,f>=o.length))}}function it(e,n){if(1&e&&(t.TgZ(0,"nav",10),t.YNc(1,ft,8,7,"ul",11),t.qZA()),2&e){const o=n.ngIf;t.xp6(1),t.Q6J("ngIf",o.length)}}const ct=function(){return["MENU.HOME","MENU.NEWS"]},st=function(){return["/","/news"]};function lt(e,n){if(1&e&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3),t._UZ(3,"navigate",4),t.qZA()(),t.YNc(4,nt,2,1,"div",5),t.ALo(5,"async"),t.YNc(6,it,2,1,"nav",6),t.ALo(7,"async"),t.qZA()),2&e){const o=t.oxw();t.xp6(3),t.Q6J("linksName",t.DdM(8,ct))("pathes",t.DdM(9,st)),t.xp6(1),t.Q6J("ngIf",t.lcZ(5,4,o.news$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,6,o.newsPageNumber$))}}const mt=[{path:"",component:(()=>{class e{constructor(o){this.store=o}ngOnInit(){this.store.dispatch(B()),this.news$=this.store.select(R),this.newsPageNumber$=this.store.select(q),this.currentPageNumber$=this.store.select(W)}paginate(o,f){o<1||o>f.length||this.store.dispatch(Z({pagination:o}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-news"]],decls:2,vars:3,consts:[["class","adcons-container news","setRtl","",4,"ngIf"],["setRtl","",1,"adcons-container","news"],[1,"row"],[1,"col-xl-12"],[3,"linksName","pathes"],["class","row",4,"ngIf"],["aria-label","Page navigation example","class","page my-5",4,"ngIf"],["class","col-lg-4 col-md-6 col-12 card",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6","col-12","card"],[1,"news-item",3,"item"],["aria-label","Page navigation example",1,"page","my-5"],["class","pagination d-flex justify-content-center",4,"ngIf"],[1,"pagination","d-flex","justify-content-center"],[1,"page-item"],[1,"page-link",3,"ngClass","click"],["class","page-item",4,"ngFor","ngForOf"],[1,"page-link","orange",3,"ngClass","click"]],template:function(o,f){1&o&&(t.YNc(0,lt,8,10,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,f.currentPageNumber$))},dependencies:[x.A,h.u,d.mk,d.sg,d.O5,et,d.Ov],styles:['@font-face{font-family:promptThin;src:url(Prompt-Thin.ed641cd5141fc19e.eot),url(Prompt-Thin.4f372ba9b5d97cd9.woff2) format("woff2"),url(Prompt-Thin.747478300fef9e52.woff) format("woff"),url(Prompt-Thin.c9928fd51fc53866.ttf) format("truetype")}@font-face{font-family:promptLight;src:url(Prompt-Light.3640e0cb730b0bbc.eot),url(Prompt-Light.ffd8e06db102ee96.woff2) format("woff2"),url(Prompt-Light.202c45d59d8e741a.woff) format("woff"),url(Prompt-Light.94e69cc01abaf0eb.ttf) format("truetype")}@font-face{font-family:promptRegular;src:url(Prompt-Regular.b75782d15ac8508e.eot),url(Prompt-Regular.c25359b130ae8a6a.woff2) format("woff2"),url(Prompt-Regular.56cbb2356f11e7fb.woff) format("woff"),url(Prompt-Regular.f15cf6ff192ed279.ttf) format("truetype")}@font-face{font-family:promptMedium;src:url(Prompt-Medium.a02181b622aeda88.eot),url(Prompt-Medium.e037c47034c3f331.woff2) format("woff2"),url(Prompt-Medium.0ba8abdd048dd32a.woff) format("woff"),url(Prompt-Medium.96b95e97bdfa54bb.ttf) format("truetype")}@font-face{font-family:promptSemiBold;src:url(Prompt-SemiBold.5810ebb8b0d343c0.eot),url(Prompt-SemiBold.9aa753e38fa387df.woff2) format("woff2"),url(Prompt-SemiBold.97514e1a2aef558f.woff) format("woff"),url(Prompt-SemiBold.883eb5e6a1645c92.ttf) format("truetype")}@font-face{font-family:promptBold;src:url(Prompt-Bold.dd164395b01e456d.eot),url(Prompt-Bold.41ca2c6243939326.woff2) format("woff2"),url(Prompt-Bold.c07bb09af1ca6d6f.woff) format("woff"),url(Prompt-Bold.3662af269a6e2cb4.ttf) format("truetype")}@font-face{font-family:cairoLight;src:url(Cairo-Light.91f1c24d3bb9cce7.eot),url(Cairo-Light.b1b22161b01b8a5d.woff2) format("woff2"),url(Cairo-Light.cb9e9de1dba9f1b5.woff) format("woff"),url(Cairo-Light.eadc4dc53f716143.ttf) format("truetype")}@font-face{font-family:cairoRegular;src:url(Cairo-Regular.a1412b49347e2de8.eot),url(Cairo-Regular.2acd8bb2d8bfe0a5.woff2) format("woff2"),url(Cairo-Regular.715b4a8f68a5a037.woff) format("woff"),url(Cairo-Regular.7d1ceeab7e4ea154.ttf) format("truetype")}@font-face{font-family:cairoMedium;src:url(Cairo-Medium.d0855d2020217b20.eot),url(Cairo-Medium.effa77fee7afd1c6.woff2) format("woff2"),url(Cairo-Medium.cede7a4df1f06199.woff) format("woff"),url(Cairo-Medium.e0a35e9e5ca7320b.ttf) format("truetype")}@font-face{font-family:cairoSemiBold;src:url(Cairo-SemiBold.d2d295ce712455f0.eot),url(Cairo-SemiBold.d5381ebe5d66ae26.woff2) format("woff2"),url(Cairo-SemiBold.7f12bd5cc9e620c6.woff) format("woff"),url(Cairo-SemiBold.3f27f94d1d1cde65.ttf) format("truetype")}@font-face{font-family:cairoBold;src:url(Cairo-Bold.d6a9e24adf1bae15.eot),url(Cairo-Bold.5da8bf52d71c211c.woff2) format("woff2"),url(Cairo-Bold.23a51acd2983e83a.woff) format("woff"),url(Cairo-Bold.5e1caff4006b2563.ttf) format("truetype")}.news[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:0;background-color:transparent}.news[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]{height:100%;margin-bottom:1.5rem}.news[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{background-color:#f2f2f2;color:#092547;cursor:pointer;font-family:promptRegular,sans-serif}.news[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%]{color:#ff730f}.news[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#ddd;border:0}.news[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .blueLight[_ngcontent-%COMP%]{color:#09254780}.news.rtl[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{font-family:cairoRegular,sans-serif}']}),e})(),data:{title:"NEWS"}},{path:"details/:id",component:j}];let dt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(mt),p.Bz]}),e})();var A=i(4351),u=i(9646),b=i(1365),g=i(4004),_=i(6129),M=i(262),F=i(7790);let ut=(()=>{class e{constructor(o,f,l){this.actions$=o,this.newsServices=f,this.store=l,this.newsDetailsEffects$=(0,m.GW)(()=>this.actions$.pipe((0,m.l4)(O),(0,A.b)(r=>(0,u.of)(r.id).pipe((0,b.M)(this.store.select($(r.id))),(0,g.U)(([c,s])=>[c,s]))),(0,_.z)(([r,c])=>c?(0,u.of)([r,null]):this.newsServices.get(`/api/news/${r}/`).pipe((0,g.U)(s=>[r,s]),(0,M.K)(s=>(0,u.of)({error:s})))),(0,g.U)(([r,c])=>N({id:r,NewsDetails:c}))))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(m.eX),t.LFG(F.O),t.LFG(a.yh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();const pt=(0,a.Lq)({newsDetails:{}},(0,a.on)(N,(e,n)=>{const o=(0,w.cloneDeep)(e.newsDetails);return o[n.id]={...n.NewsDetails,loaded:!0},n.NewsDetails?{...e,newsDetails:o}:{...e}}));let wt=(()=>{class e{constructor(o,f,l){this.actions$=o,this.productServices=f,this.store=l,this.newsListEffect$=(0,m.GW)(()=>this.actions$.pipe((0,m.l4)(B),(0,b.M)(this.store.select(R)),(0,_.z)(([r,c])=>c?(0,u.of)(null):this.productServices.get("/api/news/").pipe((0,g.U)(s=>({currentPage:1,news:s})),(0,M.K)(s=>(0,u.of)({error:s})))),(0,g.U)(r=>r&&"error"in r?D({error:r.error,errorMessage:""}):L(r)))),this.newsNextEffect$=(0,m.GW)(()=>this.actions$.pipe((0,m.l4)(Z),(0,A.b)(r=>(0,u.of)(r).pipe((0,b.M)(this.store.select(P)),(0,g.U)(([c,s])=>[c,s[r.pagination]?.results]))),(0,_.z)(([r,c])=>{let s=`/api/news/?page=${r.pagination}`;return c?(0,u.of)({currentPage:r.pagination}):this.productServices.get(s).pipe((0,g.U)(v=>({news:v,currentPage:r.pagination})),(0,M.K)(v=>(0,u.of)({error:v})))}),(0,g.U)(r=>r&&"error"in r?D({error:r.error,errorMessage:""}):(r.news||(r={news:null,currentPage:r.currentPage}),T(r)))))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(m.eX),t.LFG(F.O),t.LFG(a.yh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();const Ct=(0,a.Lq)({currentPage:1},(0,a.on)(L,(e,n)=>n.news?{...e,[n.currentPage]:n.news,currentPage:n.currentPage}:e),(0,a.on)(T,(e,n)=>n.news?{...e,[n.currentPage]:n.news,currentPage:n.currentPage}:{...e,currentPage:n.currentPage}));let ht=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[I.m,d.ez,dt,a.Aw.forFeature("news",Ct),a.Aw.forFeature("NewsDetails",pt),m.sQ.forFeature([wt,ut])]}),e})()}}]);