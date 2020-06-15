(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9SBB":function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),o=i("3Pt+"),s=i("tyNb"),c=i("mrSG"),a=i("THE0"),r=i("C/ya"),d=i("g+Po"),l=i("D/9M"),b=i("fXoL"),m=i("OaWH"),h=i("0IaG"),f=i("BAfr"),p=i("m6yr"),g=i("47y3");const u=function(){return{class:"backoffice-info-with-circle"}},v=function(e){return{id:"about",name:"About",icon:e}},_=function(e){return[e]},w=function(){return{class:"backoffice-documents"}},y=function(e,t){return{id:"drivers",name:"Drivers",count:e,icon:t}},C=function(e,t){return[e,t]};let O=(()=>{class e extends r.a{constructor(e,t,i,n){super(e,t,i),this._service=e,this._route=t,this._router=i,this._dialog=n,this.service=this._service.Repositories}ngOnInit(){super.ngOnInit(),this._service.title="Repositories"}loadValues(){console.log("Type:",this.item.type),this.item.type===a.m.Driver?this._service.Repositories.listDrivers(this.item.id,{offset:0}).then(e=>this.driver_count=e.length):this.driver_count=-1}newItem(e=!1){this.modal_ref||(this.modal_ref=this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:e?new a.l(Object.assign(Object.assign({},this.item),{id:"",name:`${this.item.name} (1)`})):new a.l,service:this._service.Domains}}),this.subscription("modal_event",this.modal_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._router.navigate(["/repositories",e.metadata.item.id])})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}editItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Repositories}}),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}deleteItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(d.b,Object.assign(Object.assign({},d.a),{data:{title:"Delete repository",content:"<p>Are you sure you want delete this repository?</p><p>Deleting this repository will <strong>immediately</strong> remove it from all associated systems and zones</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(e=>Object(c.b)(this,void 0,void 0,(function*(){"done"===e.reason&&(this.modal_ref.componentInstance.loading="Deleting repository...",yield this.item.delete().catch(e=>{throw this.modal_ref.componentInstance.loading=null,this._service.notifyError(`Error deleting repository. Error: ${JSON.stringify(e.response||e.message||e)}`),e}),this._service.set("BACKOFFICE.removed",this.item.id),this._router.navigate(["/repositories"]),this.modal_ref.close())})))),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(m.a),b.Rb(s.a),b.Rb(s.c),b.Rb(h.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["app-repositories"]],features:[b.Ab],decls:5,vars:22,consts:[[1,"container"],[1,"sidebar"],["heading","Repositories",3,"module","close","event"],[3,"touchrelease"],["name","repository","route","repositories",3,"item","loading","tabs","event"]],template:function(e,t){1&e&&(b.Xb(0,"div",0),b.Xb(1,"div",1),b.Xb(2,"sidebar",2),b.mc("event",(function(e){return t.sidebarEvent(e)})),b.Wb(),b.Wb(),b.Xb(3,"main",3),b.mc("touchrelease",(function(){return t.show_sidebar=!1})),b.Xb(4,"item-display",4),b.mc("event",(function(e){return t.itemEvent(e)})),b.Wb(),b.Wb(),b.Wb()),2&e&&(b.Hb("show",t.show_sidebar),b.Db(2),b.wc("module",t.module)("close",t.show_sidebar),b.Db(2),b.wc("item",t.item)("loading",t.loading_item)("tabs",t.driver_count<0?b.yc(10,_,b.yc(8,v,b.xc(7,u))):b.zc(19,C,b.yc(13,v,b.xc(12,u)),b.zc(16,y,t.driver_count,b.xc(15,w)))))},directives:[f.a,p.b,g.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}"]}),e})();var P,x,W,M,X,I,D,R,E=i("5f3J"),L=i("Wp6s"),z=i("bTqV"),$=i("Xa2L"),A=i("q/DJ");function S(e,t){1&e&&(b.Vb(0),b.bc(1,R),b.Ub())}function F(e,t){if(1&e){const e=b.Yb();b.Xb(0,"div",2),b.Xb(1,"section",3),b.Xb(2,"mat-card"),b.Xb(3,"mat-card-content"),b.hc(4,P),b.Sb(5,"br"),b.ec(),b.Wb(),b.Xb(6,"mat-card-actions"),b.Xb(7,"button",4),b.mc("tapped",(function(){return b.Hc(e),b.qc().pullLatestCommit()})),b.Pc(8,S,2,0,"ng-container",5),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(9,"section",6),b.Xb(10,"div",7),b.Xb(11,"label"),b.bc(12,x),b.Wb(),b.Xb(13,"div",8),b.bc(14,M),b.Wb(),b.Wb(),b.Xb(15,"div",7),b.Xb(16,"label"),b.bc(17,X),b.Wb(),b.Xb(18,"div",8),b.Rc(19),b.Wb(),b.Wb(),b.Xb(20,"div",7),b.Xb(21,"label"),b.bc(22,I),b.Wb(),b.Xb(23,"div",8),b.Xb(24,"a",9),b.rc(25,"safe"),b.Rc(26),b.Wb(),b.Wb(),b.Wb(),b.Xb(27,"div",7),b.Xb(28,"label"),b.bc(29,D),b.Wb(),b.Xb(30,"div",8),b.Rc(31),b.Wb(),b.Wb(),b.Wb(),b.Wb()}if(2&e){const e=b.qc(),t=b.Ec(2);b.Db(7),b.wc("disabled",e.pulling),b.Db(1),b.wc("ngIf",!e.pulling)("ngIfElse",t),b.Db(6),b.fc(e.item.type),b.cc(14),b.Db(5),b.Sc(e.item.folder_name||"No folder set"),b.Db(5),b.wc("href",b.tc(25,8,e.item.uri,"url"),b.Kc),b.Db(2),b.Sc(e.item.uri||"No URI set"),b.Db(5),b.Sc(e.item.description||"No description")}}function H(e,t){1&e&&(b.Xb(0,"div",10),b.Sb(1,"mat-spinner",11),b.Wb())}P=$localize`:@@repoPullActionDetails␟2f16802c7d51feb9ccaba6ba8274bd1224f0cbb5␟1009576334696385050: Pull the latest commit for${"\ufffd#5\ufffd\ufffd/#5\ufffd"}:LINE_BREAK: this repository `,x=$localize`:@@repoTypeLabel␟e78c0d60ac39787f62c9159646fe0b3c1ed55a1d␟2736556170366900089:Type:`,W=$localize`:␟6cca3b072972225f98578c9759aaf0b9ca291b24␟1272258481287673755:{VAR_SELECT, select, Interface {Interface Repository } Driver {Driver Repository }}`,W=b.gc(W,{VAR_SELECT:"\ufffd0\ufffd"}),M=$localize`:@@driverListEmpty␟0077138a2d79997d18841ca13678ed218d438acb␟8792222300507585405:${W}:ICU: `,X=$localize`:@@repoFolderNameLabel␟28e6abdb97b12116fa31c70e842d7b4b37e08fda␟8999240573830223335:Folder name:`,I=$localize`:@@repoUriLabel␟6457460dafb273ccfbc2d68f7ec171f467c6e1c1␟1789506856666851299:Repository URI:`,D=$localize`:@@descriptionLabel␟4a22c6843133f0b0d7dc0d28f864f2f90c1de7ad␟6996799422725544865:Description:`,R=$localize`:@@repoPullAction␟74d3b9d5b6586b4961d0bf8fa1a62047d2448e12␟7593000025262916359:Pull`;let N=(()=>{class e extends E.a{constructor(e){super(),this._service=e}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item").subscribe(e=>{this.item=e}))}pullLatestCommit(){this.pulling=!0,this._service.Repositories.pullCommit(this.item.id).then(()=>this.pulling=!1,e=>{this.pulling=!1,this._service.notifyError(`Error pulling latest commit. Error: ${JSON.stringify(e.response||e.message||e)}`)})}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(m.a))},e.\u0275cmp=b.Lb({type:e,selectors:[["repository-about"]],inputs:{item:"item"},features:[b.Ab],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["spinner",""],[1,"container"],[1,"actions"],["mat-button","",3,"disabled","tapped"],[4,"ngIf","ngIfElse"],[1,"details"],[1,"field"],[1,"value"],[3,"href"],[1,"spinner"],["diameter","32"]],template:function(e,t){1&e&&(b.Pc(0,F,32,11,"div",0),b.Pc(1,H,2,0,"ng-template",null,1,b.Qc)),2&e&&b.wc("ngIf",t.item)},directives:[n.m,L.a,L.c,L.b,z.b,p.b,$.b],pipes:[A.b],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.no-item[_ngcontent-%COMP%]{font-size:.75em}.field[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:.75em 0}label[_ngcontent-%COMP%]{font-size:.8em;font-weight:500;margin-bottom:.4em}.actions[_ngcontent-%COMP%]{padding:.5em;display:flex;flex-wrap:wrap}button[_ngcontent-%COMP%]{min-width:10em;margin:.25em}.spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;margin:.25em 0}mat-card[_ngcontent-%COMP%]{margin:.5em;text-align:center}"]}),e})();var T,k,j=i("0njA"),q=i("ARKa");T=$localize`:@@repoDriverHeader␟0fb2961dd5d0938e459c98921d1effe1d21e759b␟4782277420149557084:Available Drivers`,k=$localize`:@@driverListname␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;const B=function(){return{class:"material-icons",content:"add"}};function K(e,t){if(1&e){const e=b.Yb();b.Xb(0,"tr"),b.Sb(1,"td",9),b.rc(2,"driverFormat"),b.Xb(3,"td",10),b.Xb(4,"button",11),b.mc("tapped",(function(){b.Hc(e);const i=t.$implicit;return b.qc(4).newDriver(i)})),b.Sb(5,"app-icon",12),b.Wb(),b.Wb(),b.Wb()}if(2&e){const e=t.$implicit;b.Db(1),b.wc("innerHTML",b.sc(2,2,e),b.Ic),b.Db(4),b.wc("icon",b.xc(4,B))}}function J(e,t){if(1&e&&(b.Xb(0,"table"),b.Xb(1,"thead"),b.Xb(2,"td",7),b.bc(3,k),b.Wb(),b.Sb(4,"td"),b.Wb(),b.Xb(5,"tbody"),b.Pc(6,K,6,5,"tr",8),b.Wb(),b.Wb()),2&e){const e=b.qc(3);b.Db(6),b.wc("ngForOf",e.driver_list)}}var U,V;function G(e,t){1&e&&(b.Xb(0,"div",13),b.Xb(1,"div",14),b.bc(2,U),b.Wb(),b.Wb())}function Q(e,t){if(1&e&&(b.Xb(0,"div",4),b.Pc(1,J,7,1,"table",5),b.Pc(2,G,3,0,"div",6),b.Wb()),2&e){const e=b.qc(2);b.Db(1),b.wc("ngIf",e.driver_list&&e.driver_list.length>0),b.Db(1),b.wc("ngIf",!e.driver_list||e.driver_list.length<=0)}}function Y(e,t){if(1&e&&(b.Xb(0,"div",2),b.Xb(1,"h3"),b.bc(2,T),b.Wb(),b.Pc(3,Q,3,2,"div",3),b.Wb()),2&e){const e=b.qc(),t=b.Ec(2);b.Db(3),b.wc("ngIf",!e.loading)("ngIfElse",t)}}function Z(e,t){1&e&&(b.Xb(0,"div",15),b.Xb(1,"div",16),b.Sb(2,"mat-spinner",17),b.Wb(),b.Xb(3,"div",14),b.bc(4,V),b.Wb(),b.Wb())}U=$localize`:@@driverListEmpty␟0b0bbe90203a8b9ff0681db976d02fbcd960cb85␟6121742772920538074:No drivers for repository`,V=$localize`:@@driverListLoading␟929bfd86e4829c0b7401762d92f52536a57ca6c0␟4949757592530193773:Loading driver list...`;const ee=[{path:":id",component:O,children:[{path:"about",component:N},{path:"drivers",component:(()=>{class e extends E.a{constructor(e,t){super(),this._service=e,this._dialog=t,this.driver_list=[]}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item").subscribe(e=>{this.item=e,this.load()}))}ngOnChanges(e){e.item&&this.load()}load(e=0){this.item&&(this.loading=!0,this._service.Repositories.listDrivers(this.item.id,{offset:e}).then(e=>{this.loading=!1,this.driver_list=e||[]},()=>this.loading=!1))}newDriver(e){this.item.id&&this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new a.g({name:"",module_name:"",repository_id:this.item.id,file_name:e}),service:this._service.Drivers}})}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(m.a),b.Rb(h.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["repository-drivers"]],inputs:{item:"item"},features:[b.Ab,b.Bb],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["load_state",""],[1,"container"],["class","settings",4,"ngIf","ngIfElse"],[1,"settings"],[4,"ngIf"],["class","info-block",4,"ngIf"],[1,"flex"],[4,"ngFor","ngForOf"],[3,"innerHTML"],[1,"small"],["mat-icon-button","",3,"tapped"],[3,"icon"],[1,"info-block"],[1,"text"],[1,"info-block","center"],[1,"icon"],["diameter","48"]],template:function(e,t){1&e&&(b.Pc(0,Y,4,2,"div",0),b.Pc(1,Z,5,0,"ng-template",null,1,b.Qc)),2&e&&b.wc("ngIf",t.item)},directives:[n.m,n.l,z.b,p.b,j.a,$.b],pipes:[q.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.list[_ngcontent-%COMP%]{margin-top:.5em}tbody[_ngcontent-%COMP%]{font-size:.9em}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap}.small[_ngcontent-%COMP%]{width:2em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]{width:4em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:inline-flex}.select[_ngcontent-%COMP%]{display:flex;align-items:center}.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex:1}"]}),e})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var te=i("PCNd");i.d(t,"AppRepositoriesModule",(function(){return ie}));let ie=(()=>{class e{}return e.\u0275mod=b.Pb({type:e}),e.\u0275inj=b.Ob({factory:function(t){return new(t||e)},imports:[[n.c,o.g,s.g.forChild(ee),te.a]]}),e})()}}]);