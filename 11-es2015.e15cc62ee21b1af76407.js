(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{EQUt:function(e,t,i){"use strict";i.r(t);var n,s=i("ofXK"),c=i("3Pt+"),o=i("tyNb"),a=i("THE0"),d=i("C/ya"),r=i("D/9M"),l=i("g+Po"),b=i("fXoL"),m=i("OaWH"),h=i("0IaG"),u=i("BAfr"),f=i("1jcm"),g=i("m6yr"),p=i("47y3");n=$localize`:@@moduleDisconnectedFilterToggle␟d2b2829acb33495ea9d3c6c701dea90fbf1a8114␟1241189559849382820: Only Disconnected `;const _=function(){return{connected:!1,running:!0}},v=function(){return{}},y=function(){return{class:"backoffice-info-with-circle"}},w=function(e){return{id:"about",name:"About",icon:e}},P=function(){return{class:"backoffice-documents"}},O=function(e,t){return{id:"systems",name:"Systems",count:e,icon:t}},C=function(e,t){return[e,t]};let M=(()=>{class e extends d.a{constructor(e,t,i,n){super(e,t,i),this._service=e,this._route=t,this._router=i,this._dialog=n,this.service=this._service.Modules}ngOnInit(){super.ngOnInit(),this._service.title="Modules"}loadValues(){this._service.Systems.query({offset:0,limit:1,module_id:this.item.id}).then(e=>{this.system_count=this._service.Systems.last_total||e.length||0})}newItem(e=!1){this.modal_ref||(this.modal_ref=this._dialog.open(r.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:e?new a.j(Object.assign(Object.assign({},this.item),{id:"",name:`${this.item.name} (1)`})):new a.j,service:this._service.Modules}}),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._router.navigate(["/modules",e.metadata.item.id])})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}editItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(r.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Modules}}),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}deleteItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Delete module",content:"<p>Are you sure you want delete this module?</p><p>Deleting this will module <strong>immediately</strong> remove it from any system associated with it</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.modal_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&(this.modal_ref.componentInstance.loading="Deleting module...",this.item.delete().then(()=>{this._service.notifySuccess(`Successfully deleted module "${this.item.name}".`),this._router.navigate(["/modules"]),this._service.set("BACKOFFICE.removed",this.item.id),this.modal_ref.close()},e=>{this.modal_ref.componentInstance.loading=null,this._service.notifyError(`Error deleting module. Error: ${JSON.stringify(e.response||e.message||e)}`)}))})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(m.a),b.Rb(o.a),b.Rb(o.c),b.Rb(h.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["app-modules"]],features:[b.Ab],decls:8,vars:20,consts:[[1,"container"],[1,"sidebar"],["heading","Modules",3,"module","close","queryParams","event"],[1,"toggle"],["labelPosition","before",3,"ngModel","ngModelChange"],[3,"touchrelease"],["name","module","route","modules",3,"item","tabs","event"]],template:function(e,t){1&e&&(b.Xb(0,"div",0),b.Xb(1,"div",1),b.Xb(2,"sidebar",2),b.mc("event",(function(e){return t.sidebarEvent(e)})),b.Xb(3,"div",3),b.Xb(4,"mat-slide-toggle",4),b.mc("ngModelChange",(function(e){return t.only_disconnected=e})),b.bc(5,n),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(6,"main",5),b.mc("touchrelease",(function(){return t.show_sidebar=!1})),b.Xb(7,"item-display",6),b.mc("event",(function(e){return t.itemEvent(e)})),b.Wb(),b.Wb(),b.Wb()),2&e&&(b.Hb("show",t.show_sidebar),b.Db(2),b.wc("module",t.module)("close",t.show_sidebar)("queryParams",t.only_disconnected?b.xc(8,_):b.xc(9,v)),b.Db(2),b.wc("ngModel",t.only_disconnected),b.Db(3),b.wc("item",t.item)("tabs",b.zc(17,C,b.yc(11,w,b.xc(10,y)),b.zc(14,O,t.system_count,b.xc(13,P)))))},directives:[u.a,f.a,c.l,c.o,g.b,p.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}.toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;padding-right:1em}"]}),e})();var X,W,S,D,I,x,$,L,T,E=i("mrSG"),A=i("5f3J"),z=i("av/m"),R=i("bTqV"),N=i("Xa2L"),q=i("+BlP"),j=i("oIn+");function k(e,t){if(1&e&&(b.Xb(0,"div",5),b.Xb(1,"label"),b.bc(2,D),b.Wb(),b.Xb(3,"div",6),b.Rc(4),b.Wb(),b.Wb()),2&e){const e=b.qc(2);b.Db(4),b.Sc(e.item.notes)}}function F(e,t){if(1&e&&(b.Xb(0,"div",5),b.Xb(1,"label"),b.bc(2,I),b.Wb(),b.Xb(3,"div",6),b.Rc(4),b.Wb(),b.Wb()),2&e){const e=b.qc(2);b.Db(4),b.Sc(e.item.ip)}}function U(e,t){if(1&e&&(b.Xb(0,"div",5),b.Xb(1,"label"),b.bc(2,x),b.Wb(),b.Xb(3,"div",6),b.Rc(4),b.Wb(),b.Wb()),2&e){const e=b.qc(2);b.Db(4),b.Sc(e.item.port)}}function G(e,t){if(1&e&&(b.Xb(0,"div",5),b.Xb(1,"label"),b.bc(2,$),b.Wb(),b.Xb(3,"div",6),b.Rc(4),b.rc(5,"dateFrom"),b.Wb(),b.Wb()),2&e){const e=b.qc(2);b.Db(4),b.Sc(b.sc(5,1,1e3*e.item.created_at))}}function K(e,t){if(1&e&&(b.Xb(0,"div",5),b.Xb(1,"label"),b.bc(2,L),b.Wb(),b.Xb(3,"div",6),b.Rc(4),b.rc(5,"dateFrom"),b.Wb(),b.Wb()),2&e){const e=b.qc(2);b.Db(4),b.Sc(b.sc(5,1,1e3*e.item.updated_at))}}X=$localize`:@moduleTLSLabel␟fc14542d8661d50a55ec617e759b8275266b4084␟6787048658913260060:TLS:`,W=$localize`:@moduleUDPLabel␟45a627302b2be9d4d92e8361c28128b8747a3a76␟9217682045572066115:UDP:`,S=$localize`:@@settingsLabel␟121cc5391cd2a5115bc2b3160379ee5b36cd7716␟4930506384627295710:Settings`,D=$localize`:@moduleNotesLabel␟3b193ba24bd715ed412f5419df3acb59090141d3␟8421971980013015956:Notes:`,I=$localize`:@moduleIPLabel␟8271bb466916303dc1516952bf50e7e6626f7b2c␟253752108238785328:IP:`,x=$localize`:@modulePortLabel␟a2ceedad860954f374fc1ac8bae057292b1cec2e␟6167294183925653141:Port:`,$=$localize`:@@moduleCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`,L=$localize`:@moduleUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`,T=$localize`:@@moduleDetailsDriver␟4651751cdd284b8ab924aec97998a2d8ad46e95f␟7082352451989540643: Driver: ${"\ufffd#2\ufffd"}:START_TAG_SPAN:${"\ufffd#3\ufffd"}:START_LINK:${"\ufffd0\ufffd"}:INTERPOLATION:${"\ufffd/#3\ufffd"}:CLOSE_LINK:${"\ufffd/#2\ufffd"}:CLOSE_TAG_SPAN:`;const V=function(e){return["/drivers",e]};function B(e,t){if(1&e&&(b.Xb(0,"header"),b.hc(1,T),b.Xb(2,"span"),b.Sb(3,"a",13),b.Wb(),b.ec(),b.Wb()),2&e){const e=b.qc(2);b.Db(3),b.wc("routerLink",b.yc(2,V,e.item.driver_id)),b.fc(e.item.driver.name||"<Unnamed>"),b.cc(1)}}var H;H=$localize`:@@moduleDetailsSystem␟8dae01d0cd1bb98b4ac6e2ff6856c38e65d15e71␟6377598301195407213: Logic for system: ${"\ufffd*22:1\ufffd\ufffd#1:1\ufffd"}:START_TAG_SPAN:${"\ufffd#2:1\ufffd"}:START_LINK:${"\ufffd0:1\ufffd"}:INTERPOLATION:${"\ufffd/#2:1\ufffd"}:CLOSE_LINK:${"\ufffd/#1:1\ufffd\ufffd/*22:1\ufffd"}:CLOSE_TAG_SPAN:`;const J=function(e){return["/systems",e]};function Q(e,t){if(1&e&&(b.hc(0,H,1),b.Xb(1,"span"),b.Sb(2,"a",13),b.Wb(),b.ec()),2&e){const e=b.qc(2);b.Db(2),b.wc("routerLink",b.yc(2,J,e.system.id)),b.fc(null==e.system?null:e.system.name),b.cc(0)}}var Y,Z;function ee(e,t){if(1&e&&(b.Xb(0,"div",14),b.bc(1,Z),b.Wb()),2&e){const e=b.qc(2);b.Db(1),b.fc(e.item.connected),b.cc(1)}}function te(e,t){1&e&&b.Sb(0,"mat-spinner",15)}Y=$localize`:␟d3f1ec12a5c78323a377cc950913025bb9b00563␟2537520834646109979:{VAR_SELECT, select, true {Stop Module } false {Start Module }}`,Y=b.gc(Y,{VAR_SELECT:"\ufffd0\ufffd"}),Z=$localize`:@@moduleStateToggle␟49b4380b74eb9765ad09d46fac556b0ddc5bc22c␟6594646568873405470: ${Y}:ICU: `;const ie=function(){return[]};function ne(e,t){if(1&e&&(b.Xb(0,"section"),b.Sb(1,"a-settings-form",16),b.Wb()),2&e){const e=b.qc(2);b.Db(1),b.wc("id",e.item.id)("merge",!0)("settings",e.item.settings)("merge_settings",e.other_settings||b.xc(4,ie))}}function se(e,t){if(1&e){const e=b.Yb();b.Xb(0,"div",2),b.Xb(1,"section",3),b.Pc(2,k,5,1,"div",4),b.Pc(3,F,5,1,"div",4),b.Pc(4,U,5,1,"div",4),b.Xb(5,"div",5),b.Xb(6,"label"),b.bc(7,X),b.Wb(),b.Xb(8,"div",6),b.Rc(9),b.Wb(),b.Wb(),b.Xb(10,"div",5),b.Xb(11,"label"),b.bc(12,W),b.Wb(),b.Xb(13,"div",6),b.Rc(14),b.Wb(),b.Wb(),b.Pc(15,G,6,3,"div",4),b.Pc(16,K,6,3,"div",4),b.Wb(),b.Sb(17,"hr"),b.Xb(18,"div",7),b.Pc(19,B,4,4,"header",8),b.Xb(20,"header"),b.hc(21,H),b.Pc(22,Q,3,4,"span",8),b.ec(),b.Wb(),b.Xb(23,"section"),b.Xb(24,"button",9),b.mc("tapped",(function(){b.Hc(e);const t=b.qc();return t.item.connected?t.stopModule():t.startModule()})),b.Pc(25,ee,2,1,"div",10),b.Pc(26,te,1,0,"mat-spinner",11),b.Wb(),b.Wb(),b.Sb(27,"hr"),b.Xb(28,"header",7),b.bc(29,S),b.Wb(),b.Pc(30,ne,2,5,"section",12),b.Wb(),b.Wb()}if(2&e){const e=b.qc(),t=b.Ec(2);b.Db(2),b.wc("ngIf",e.item.notes),b.Db(1),b.wc("ngIf",e.item.ip),b.Db(1),b.wc("ngIf",e.item.port),b.Db(5),b.Sc(e.item.tls),b.Db(5),b.Sc(e.item.udp),b.Db(1),b.wc("ngIf",e.item.created_at),b.Db(1),b.wc("ngIf",e.item.updated_at),b.Db(3),b.wc("ngIf",e.item.driver),b.Db(3),b.wc("ngIf",e.system),b.Db(2),b.wc("disabled",e.stopping),b.Db(1),b.wc("ngIf",!e.stopping),b.Db(1),b.wc("ngIf",e.stopping),b.Db(4),b.wc("ngIf",!e.loading_settings)("ngIfElse",t)}}var ce;function oe(e,t){1&e&&(b.Xb(0,"div",17),b.Xb(1,"div",18),b.Sb(2,"mat-spinner",19),b.Wb(),b.Xb(3,"div",14),b.bc(4,ce),b.Wb(),b.Wb())}ce=$localize`:@@moduleDetailsLoading␟cb7cffb188a2b0bce758e40f67c29387dd6ccfcf␟3678638452756535871:Loading module settings...`;let ae=(()=>{class e extends A.a{constructor(e,t){super(),this._service=e,this._dialog=t,this.other_settings=[]}get loading_settings(){return this._service.get("loading_settings")}get levels(){const e=this._service.Users.user.getValue(),t=[{id:a.c.NeverDisplay,name:"Merged"},{id:a.c.None,name:"Unencrypted"}];return(e.support||e.sys_admin)&&t.push({id:a.c.Support,name:"Support"}),e.sys_admin&&t.push({id:a.c.Admin,name:"Admin"}),t}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item").subscribe(e=>{this.item=e,this.loadDriver(),this.loadSystem(),this.loadSettings()}))}ngOnChanges(e){e.item&&(this.loadDriver(),this.loadSystem(),this.loadSettings())}loadDriver(){this.item&&this.item.driver_id&&this._service.Drivers.show(this.item.driver_id).then(e=>{this.driver=e})}loadSystem(){this.item&&this.item.system_id&&this._service.Systems.show(this.item.system_id).then(e=>{this.system=e})}loadSettings(){return Object(E.b)(this,void 0,void 0,(function*(){this.item&&(this.other_settings=yield this._service.Modules.settings(this.item.id))}))}stopModule(){this.stopping=!0,this.item.stop().then(()=>{this.stopping=!1,this._service.notifySuccess("Module successfully stopped"),this.item.connected=!1},e=>{this.stopping=!1,"string"==typeof e&&e.length<64?this._service.notifyError(e):this._service.notifyError(`Failed to stop device '${this.item.id}'.\nView Error?`,"View",()=>this.viewDetails(e))})}startModule(){this.stopping=!0,this.item.start().then(()=>{this.stopping=!1,this._service.notifySuccess("Module successfully started"),this.item.connected=!0},e=>{this.stopping=!1,"string"==typeof e&&e.length<64?this._service.notifyError(e):this._service.notifyError(`Failed to start device '${this.item.id}'.\nView Error?`,"View",()=>this.viewDetails(e))})}viewDetails(e){this._dialog.open(z.a,{data:{content:e}})}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(m.a),b.Rb(h.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["module-about"]],inputs:{item:"item"},features:[b.Ab,b.Bb],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["load_state",""],[1,"container"],[1,"details"],["class","field",4,"ngIf"],[1,"field"],[1,"value"],[1,"settings"],[4,"ngIf"],["mat-button","",3,"disabled","tapped"],["class","text",4,"ngIf"],["diameter","32",4,"ngIf"],[4,"ngIf","ngIfElse"],[3,"routerLink"],[1,"text"],["diameter","32"],[3,"id","merge","settings","merge_settings"],[1,"info-block"],[1,"icon"],["diameter","48"]],template:function(e,t){1&e&&(b.Pc(0,se,31,14,"div",0),b.Pc(1,oe,5,0,"ng-template",null,1,b.Qc)),2&e&&b.wc("ngIf",t.item)},directives:[s.m,R.b,g.b,o.f,N.b,q.a],pipes:[j.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:700;font-size:1.1em;margin-bottom:.5em}header.settings[_ngcontent-%COMP%]{position:relative;top:.75em;margin:0}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.7em;opacity:.65;padding:0 1em;font-weight:300;text-decoration:underline;cursor:pointer;transition:color .2s}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.85)}section[_ngcontent-%COMP%]{padding:.5em .25em}.details[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{display:flex;align-items:center;margin:.25em 0}.details[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{padding:0 .5em;-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all}.details[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.8em;font-weight:500}"]}),e})();var de=i("XNiG"),re=i("LRne"),le=i("Kj3r"),be=i("/uUt"),me=i("eIep"),he=i("JIr8"),ue=i("lJxs"),fe=i("kmnG"),ge=i("0njA"),pe=i("qFsG"),_e=i("Qu3c");const ve=["placeholder",$localize`:@@systemTableFilter␟e061b77d73310ee327e60b98974ab6f271bd634c␟6043721849916324447:Filter Systems`];var ye,we,Pe;ye=$localize`:@@systemTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`,we=$localize`:@@systemTablePanelCount␟6c24d3e08bc16576fbd5580dc255a31c4b08c366␟8919524640139321287:No. Modules`,Pe=$localize`:@@systemTableCreated␟1b051734b0ee9021991c91b3ed4e81c244322462␟4207916966377787111:Created`;const Oe=function(e){return["/systems",e]};function Ce(e,t){if(1&e&&(b.Xb(0,"tr"),b.Xb(1,"td",9),b.Xb(2,"a",13),b.Rc(3),b.Wb(),b.Wb(),b.Xb(4,"td",10),b.Rc(5),b.Wb(),b.Xb(6,"td",11),b.Rc(7),b.Wb(),b.Wb()),2&e){const e=t.$implicit;b.Db(2),b.wc("routerLink",b.yc(5,Oe,e.id))("matTooltip",e.id),b.Db(1),b.Tc(" ",e.name," "),b.Db(2),b.Sc(null==e.modules?null:e.modules.length),b.Db(2),b.Sc(null==e.display?null:e.display.created)}}function Me(e,t){if(1&e&&(b.Xb(0,"div",8),b.Xb(1,"table"),b.Xb(2,"thead"),b.Xb(3,"td",9),b.bc(4,ye),b.Wb(),b.Xb(5,"td",10),b.bc(6,we),b.Wb(),b.Xb(7,"td",11),b.bc(8,Pe),b.Wb(),b.Wb(),b.Xb(9,"tbody"),b.Pc(10,Ce,8,7,"tr",12),b.Wb(),b.Wb(),b.Wb()),2&e){const e=b.qc();b.Db(10),b.wc("ngForOf",e.system_list)}}var Xe;function We(e,t){1&e&&(b.Xb(0,"div",14),b.Xb(1,"div",15),b.bc(2,Xe),b.Wb(),b.Wb())}Xe=$localize`:@@systemTableEmpty␟060be2387cae308d13c40744a0d7b04d4662a715␟3180608531475305782:No matching systems found`;const Se=function(){return{class:"backoffice-magnifying-glass"}},De=[{path:":id",component:M,children:[{path:"about",component:ae},{path:"systems",component:(()=>{class e extends A.a{constructor(e){super(),this._service=e,this.search$=new de.a}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item").subscribe(e=>{this.item=e,this.loadSystems()})),this.search_results$=this.search$.pipe(Object(le.a)(400),Object(be.a)(),Object(me.a)(e=>(this.loading=!0,this._service.Systems.query({q:e,module_id:this.item.id,offset:0}))),Object(he.a)(e=>(console.error(e),Object(re.a)([]))),Object(ue.a)(e=>{this.loading=!1;const t=this.search_str.toLowerCase();return e.filter(e=>e.name.toLowerCase().indexOf(t)>=0||(e.email||"").toLowerCase().indexOf(t)>=0)})),this.subscription("search_results",this.search_results$.subscribe(e=>this.system_list=e))}ngOnChanges(e){e.item&&this.loadSystems()}loadSystems(e=0){this.item&&this._service.Systems.query({module_id:this.item.id,offset:e}).then(e=>{this.system_list=e},()=>null)}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(m.a))},e.\u0275cmp=b.Lb({type:e,selectors:[["module-systems"]],inputs:{item:"item"},features:[b.Ab,b.Bb],decls:10,vars:5,consts:[[1,"container"],[1,"btn"],["appearance","outline"],["matPrefix","",1,"prefix"],[3,"icon"],["matInput","","name","search-filter",3,"ngModel","ngModelChange",6,"placeholder"],["class","list",4,"ngIf","ngIfElse"],["empty_state",""],[1,"list"],[1,"flex"],[1,"devices"],[1,"created"],[4,"ngFor","ngForOf"],["routerLinkActive","router-link-active",3,"routerLink","matTooltip"],[1,"info-block"],[1,"text"]],template:function(e,t){if(1&e&&(b.Xb(0,"div",0),b.Xb(1,"div",1),b.Xb(2,"mat-form-field",2),b.Xb(3,"div",3),b.Sb(4,"app-icon",4),b.Wb(),b.Xb(5,"input",5),b.dc(6,ve),b.mc("ngModelChange",(function(e){return t.search_str=e}))("ngModelChange",(function(e){return t.search$.next(e)})),b.Wb(),b.Wb(),b.Wb(),b.Pc(7,Me,11,1,"div",6),b.Wb(),b.Pc(8,We,3,0,"ng-template",null,7,b.Qc)),2&e){const e=b.Ec(9);b.Db(4),b.wc("icon",b.xc(4,Se)),b.Db(1),b.wc("ngModel",t.search_str),b.Db(2),b.wc("ngIf",t.system_list&&t.system_list.length>0)("ngIfElse",e)}},directives:[fe.c,fe.f,ge.a,pe.a,c.b,c.l,c.o,s.m,s.l,o.f,o.e,_e.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.25em}.list[_ngcontent-%COMP%]{margin-top:.5em}.table-row[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .devices[_ngcontent-%COMP%]{width:8em;min-width:8em}"]}),e})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var Ie=i("PCNd");i.d(t,"AppModulesModule",(function(){return xe}));let xe=(()=>{class e{}return e.\u0275mod=b.Pb({type:e}),e.\u0275inj=b.Ob({factory:function(t){return new(t||e)},imports:[[s.c,c.g,o.g.forChild(De),Ie.a]]}),e})()}}]);