(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Gwc7:function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),s=i("3Pt+"),o=i("tyNb"),c=i("THE0"),r=i("C/ya"),a=i("g+Po"),d=i("D/9M"),l=i("fXoL"),m=i("OaWH"),b=i("0IaG"),h=i("BAfr"),u=i("m6yr"),g=i("47y3");const f=function(){return{class:"backoffice-info-with-circle"}},p=function(e){return{id:"about",name:"About",icon:e}},v=function(){return{class:"backoffice-tablet"}},_=function(e,t){return{id:"modules",name:"Modules",count:e,icon:t}},w=function(e,t){return[e,t]};let y=(()=>{class e extends r.a{constructor(e,t,i,n){super(e,t,i),this._service=e,this._route=t,this._router=i,this._dialog=n,this.service=this._service.Drivers}ngOnInit(){super.ngOnInit(),this._service.title="Drivers"}loadValues(){this._service.Modules.query({offset:0,limit:1,driver_id:this.item.id}).then(e=>{this.device_count=this._service.Modules.last_total||e.length||0})}newItem(){this.modal_ref||(this.modal_ref=this._dialog.open(d.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new c.e(this._service.Drivers,{name:"",module_name:""}),service:this._service.Drivers}}),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._router.navigate(["/drivers",e.metadata.item.id])})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}editItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(d.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Drivers}}),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}deleteItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(a.b,Object.assign(Object.assign({},a.a),{data:{title:"Delete driver",content:"<p>Are you sure you want delete this driver?</p><p>All modules that rely on this driver will be <strong>immediately</strong> removed.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&(this.modal_ref.componentInstance.loading="Deleting driver...",this.item.delete().then(()=>{this._service.notifySuccess(`Successfully deleted driver "${this.item.name}".`),this._router.navigate(["/drivers"]),this._service.set("BACKOFFICE.removed",this.item.id),this.modal_ref.close()},e=>{this.modal_ref.componentInstance.loading=null,this._service.notifyError(`Error deleting driver. Error: ${JSON.stringify(e.response||e.message||e)}`)}))})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}}return e.\u0275fac=function(t){return new(t||e)(l.Rb(m.a),l.Rb(o.a),l.Rb(o.c),l.Rb(b.b))},e.\u0275cmp=l.Lb({type:e,selectors:[["app-drivers"]],features:[l.Ab],decls:5,vars:16,consts:[[1,"container"],[1,"sidebar"],["heading","Drivers",3,"module","close","event"],[3,"touchrelease"],["name","module","route","drivers",3,"item","tabs","event"]],template:function(e,t){1&e&&(l.Xb(0,"div",0),l.Xb(1,"div",1),l.Xb(2,"sidebar",2),l.fc("event",(function(e){return t.sidebarEvent(e)})),l.Wb(),l.Wb(),l.Xb(3,"main",3),l.fc("touchrelease",(function(){return t.show_sidebar=!1})),l.Xb(4,"item-display",4),l.fc("event",(function(e){return t.itemEvent(e)})),l.Wb(),l.Wb(),l.Wb()),2&e&&(l.Hb("show",t.show_sidebar),l.Db(2),l.pc("module",t.module)("close",t.show_sidebar),l.Db(2),l.pc("item",t.item)("tabs",l.sc(13,w,l.rc(7,p,l.qc(6,f)),l.sc(10,_,t.device_count,l.qc(9,v)))))},directives:[h.a,u.b,g.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}"]}),e})();var O=i("5f3J"),C=i("bTqV"),M=i("Xa2L"),X=i("+BlP");function W(e,t){1&e&&l.Sb(0,"mat-spinner",9)}function P(e,t){if(1&e&&(l.Xb(0,"section"),l.Sb(1,"a-settings-form",10),l.Wb()),2&e){const e=l.jc(2);l.Db(1),l.pc("merge",!0)("id",e.item.id)("settings",e.item.settings)}}function I(e,t){if(1&e){const e=l.Yb();l.Xb(0,"div",2),l.Xb(1,"section"),l.Xb(2,"div",3),l.Xb(3,"label"),l.Kc(4,"Compiled:"),l.Wb(),l.Xb(5,"div",4),l.Kc(6),l.Wb(),l.Ic(7,W,1,0,"mat-spinner",5),l.Wb(),l.Xb(8,"div",3),l.Xb(9,"label"),l.Kc(10,"Commit:"),l.Wb(),l.Xb(11,"div",4),l.Kc(12),l.Wb(),l.Wb(),l.Xb(13,"div",3),l.Xb(14,"label"),l.Kc(15,"File Name:"),l.Wb(),l.Xb(16,"div",4),l.Kc(17),l.Wb(),l.Wb(),l.Xb(18,"div",3),l.Xb(19,"label"),l.Kc(20,"Module Name:"),l.Wb(),l.Xb(21,"div",4),l.Kc(22),l.Wb(),l.Wb(),l.Wb(),l.Xb(23,"section"),l.Xb(24,"button",6),l.fc("tapped",(function(){return l.Ac(e),l.jc().reloadDriver()})),l.Kc(25,"Reload Modules"),l.Wb(),l.Wb(),l.Sb(26,"hr"),l.Xb(27,"header",7),l.Kc(28,"Settings"),l.Wb(),l.Ic(29,P,2,3,"section",8),l.Wb()}if(2&e){const e=l.jc(),t=l.xc(2);l.Db(6),l.Lc(e.compiled||"false"),l.Db(1),l.pc("ngIf",!e.compiled),l.Db(5),l.Lc(e.item.commit),l.Db(5),l.Lc(e.item.file_name),l.Db(5),l.Lc(null==e.item?null:e.item.module_name),l.Db(7),l.pc("ngIf",!e.loading_settings)("ngIfElse",t)}}function x(e,t){1&e&&(l.Xb(0,"div",11),l.Xb(1,"div",12),l.Sb(2,"mat-spinner",13),l.Wb(),l.Xb(3,"div",14),l.Kc(4,"Loading driver settings..."),l.Wb(),l.Wb())}let D=(()=>{class e extends O.a{constructor(e,t){super(),this._dialog=e,this._service=t}get loading_settings(){return this._service.get("loading_settings")}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e})),this.checkCompiled()}reloadDriver(){if(this.item){const e=this._dialog.open(a.b,Object.assign(Object.assign({},a.a),{data:{title:"Reload Driver",content:"<p>Are you sure you want reload this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>",icon:{type:"icon",class:"backoffice-cycle"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(t=>{"done"===t.reason&&(e.componentInstance.loading="Reloading driver...",this.item.reload().then(()=>{this._service.notifySuccess(`Successfully reloaded driver "${this.item.name}".`),e.close(),this.unsub("delete_confirm")},t=>{e.componentInstance.loading=null,this._service.notifyError(`Error reloading driver. Error: ${JSON.stringify(t.response||t.message||t)}`)}))}))}}checkCompiled(){this._service.Drivers.isCompiled(this.item.id).then(e=>this.compiled=!0,e=>{this.compiled=!1,this.timeout("compiled",()=>this.checkCompiled(),1e3)})}}return e.\u0275fac=function(t){return new(t||e)(l.Rb(b.b),l.Rb(m.a))},e.\u0275cmp=l.Lb({type:e,selectors:[["driver-about"]],inputs:{item:"item"},features:[l.Ab],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["load_state",""],[1,"container"],[1,"field"],[1,"value"],["diameter","32",4,"ngIf"],["mat-button","",3,"tapped"],[1,"settings"],[4,"ngIf","ngIfElse"],["diameter","32"],[3,"merge","id","settings"],[1,"info-block"],[1,"icon"],["diameter","48"],[1,"text"]],template:function(e,t){1&e&&(l.Ic(0,I,30,7,"div",0),l.Ic(1,x,5,0,"ng-template",null,1,l.Jc)),2&e&&l.pc("ngIf",t.item)},directives:[n.m,C.b,u.b,M.b,X.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em;margin-bottom:.5em}header.settings[_ngcontent-%COMP%]{position:relative;top:.75em;margin:0}.table-row[_ngcontent-%COMP%]   .class[_ngcontent-%COMP%]{width:12em;min-width:12em}.field[_ngcontent-%COMP%]{padding:.5em;display:flex;align-items:center}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.9em;font-weight:500;margin-right:1em}.value[_ngcontent-%COMP%]{-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all}section[_ngcontent-%COMP%]{padding:.5em .25em}"]}),e})();var k=i("XNiG"),j=i("LRne"),K=i("Kj3r"),L=i("/uUt"),S=i("eIep"),A=i("JIr8"),E=i("lJxs"),$=i("kmnG"),F=i("0njA"),R=i("qFsG"),N=i("Cvi9"),q=i("Qu3c");const J=function(e){return["/modules",e]},B=function(e){return["/systems",e]};function H(e,t){if(1&e){const e=l.Yb();l.Xb(0,"tr"),l.Xb(1,"td",11),l.Sb(2,"div",15),l.Xb(3,"i",16),l.fc("modelChange",(function(i){return l.Ac(e),t.$implicit.connected=i})),l.Wb(),l.Wb(),l.Xb(4,"td",12),l.Xb(5,"a",17),l.Kc(6),l.Wb(),l.Wb(),l.Xb(7,"td",13),l.Xb(8,"a",18),l.Kc(9),l.Xb(10,"span",19),l.Kc(11),l.Wb(),l.Kc(12,") "),l.Wb(),l.Wb(),l.Xb(13,"td",11),l.Xb(14,"button",20),l.fc("tapped",(function(){l.Ac(e);const i=t.$implicit;return l.jc(3).removeModule(i)})),l.Sb(15,"i",21),l.Wb(),l.Wb(),l.Wb()}if(2&e){const e=t.$implicit;l.Db(2),l.Hb("active",e.running&&e.connected)("inactive",e.running&&!e.connected),l.Db(1),l.pc("model",e.connected)("sys",e.system.id)("mod",e.module_name),l.Db(2),l.pc("routerLink",l.rc(13,J,e.id))("matTooltip",e.id),l.Db(1),l.Lc(e.name),l.Db(2),l.pc("routerLink",l.rc(15,B,e.control_system_id)),l.Db(1),l.Mc(" ",null==e.system?null:e.system.name," ("),l.Db(2),l.Lc(e.control_system_id)}}function T(e,t){if(1&e&&(l.Xb(0,"table"),l.Xb(1,"thead"),l.Xb(2,"td",11),l.Kc(3,"State"),l.Wb(),l.Xb(4,"td",12),l.Kc(5,"Name"),l.Wb(),l.Xb(6,"td",13),l.Kc(7,"System"),l.Wb(),l.Sb(8,"td",11),l.Wb(),l.Xb(9,"tbody"),l.Ic(10,H,16,17,"tr",14),l.Wb(),l.Wb()),2&e){const e=l.jc(2);l.Db(10),l.pc("ngForOf",e.device_list)}}function z(e,t){1&e&&(l.Xb(0,"div",22),l.Xb(1,"div",23),l.Kc(2,"No modules with driver"),l.Wb(),l.Wb())}const G=function(){return{class:"backoffice-magnifying-glass"}};function Y(e,t){if(1&e){const e=l.Yb();l.Xb(0,"div",1),l.Xb(1,"div",2),l.Xb(2,"section",3),l.Xb(3,"mat-form-field",4),l.Xb(4,"div",5),l.Sb(5,"app-icon",6),l.Wb(),l.Xb(6,"input",7),l.fc("ngModelChange",(function(t){return l.Ac(e),l.jc().search_str=t}))("ngModelChange",(function(t){return l.Ac(e),l.jc().search$.next(t)})),l.Wb(),l.Wb(),l.Wb(),l.Xb(7,"section",8),l.Ic(8,T,11,1,"table",9),l.Ic(9,z,3,0,"div",10),l.Wb(),l.Wb(),l.Wb()}if(2&e){const e=l.jc();l.Db(5),l.pc("icon",l.qc(4,G)),l.Db(1),l.pc("ngModel",e.search_str),l.Db(2),l.pc("ngIf",e.device_list&&e.device_list.length>0),l.Db(1),l.pc("ngIf",!e.device_list||e.device_list.length<=0)}}const V=[{path:":id",component:y,children:[{path:"about",component:D},{path:"modules",component:(()=>{class e extends O.a{constructor(e,t){super(),this._service=e,this._dialog=t,this.device_list=[],this.search$=new k.a}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadModules()})),this.search_results$=this.search$.pipe(Object(K.a)(400),Object(L.a)(),Object(S.a)(e=>(this.loading=!0,this._service.Modules.query({q:e,driver_id:this.item.id,complete:!0,offset:0,limit:500}))),Object(A.a)(e=>(console.error(e),Object(j.a)([]))),Object(E.a)(e=>{this.loading=!1;const t=this.search_str.toLowerCase();return e.filter(e=>e.name.toLowerCase().indexOf(t)>=0||(e.email||"").toLowerCase().indexOf(t)>=0)})),this.subscription("search_results",this.search_results$.subscribe(e=>this.device_list=e))}ngOnChanges(e){e.item&&this.loadModules()}loadModules(e=0){this.item&&this._service.Modules.query({driver_id:this.item.id,offset:e,limit:500}).then(e=>this.device_list=e,()=>null)}removeModule(e){if(e){const t=this._dialog.open(a.b,Object.assign(Object.assign({},a.a),{data:{title:"Delete module",content:"<p>Are you sure you want delete this module?</p><p>Deleting this will module <strong>immediately</strong> remove it from any system associated with it</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe(i=>{"done"===i.reason&&(t.componentInstance.loading="Deleting module...",e.delete().then(()=>{this._service.notifySuccess(`Successfully deleted module "${e.name}".`),this.loadModules(),t.close(),this.unsub("delete_confirm")},e=>{t.componentInstance.loading=null,this._service.notifyError(`Error deleting module. Error: ${JSON.stringify(e.response||e.message||e)}`)}))}))}}}return e.\u0275fac=function(t){return new(t||e)(l.Rb(m.a),l.Rb(b.b))},e.\u0275cmp=l.Lb({type:e,selectors:[["driver-devices"]],inputs:{item:"item"},features:[l.Ab,l.Bb],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],[1,"select"],["appearance","outline"],["matPrefix","",1,"prefix"],[3,"icon"],["matInput","","name","search-filter","placeholder","Filter Modules",3,"ngModel","ngModelChange"],[1,"list"],[4,"ngIf"],["class","info-block",4,"ngIf"],[1,"small"],[1,"flex"],[1,"system"],[4,"ngFor","ngForOf"],[1,"state"],["binding","","bind","connected",3,"model","sys","mod","modelChange"],[3,"routerLink","matTooltip"],[3,"routerLink"],[1,"id"],["mat-icon-button","",3,"tapped"],[1,"backoffice-trash"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&l.Ic(0,Y,10,5,"div",0),2&e&&l.pc("ngIf",t.item)},directives:[n.m,$.c,$.f,F.a,R.a,s.b,s.l,s.o,n.l,N.a,o.f,q.a,C.b,u.b],styles:[".container[_ngcontent-%COMP%]{padding:1em}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.25em}.list[_ngcontent-%COMP%]{margin-top:.5em}.table-row[_ngcontent-%COMP%]   .system[_ngcontent-%COMP%]{width:12em;min-width:12em}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:flex;align-items:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#000;border-radius:.8em;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.inactive[_ngcontent-%COMP%]{background-color:#f44336}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.select[_ngcontent-%COMP%]{display:flex;align-items:center}.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex:1}"]}),e})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var Q=i("PCNd");i.d(t,"AppDriversModule",(function(){return U}));let U=(()=>{class e{}return e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({factory:function(t){return new(t||e)},imports:[[n.c,s.g,o.g.forChild(V),Q.a]]}),e})()}}]);