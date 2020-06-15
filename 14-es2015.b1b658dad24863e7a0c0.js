(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{wKJ7:function(t,e,i){"use strict";i.r(e);var n=i("ofXK"),o=i("3Pt+"),s=i("tyNb"),c=i("5+WD"),r=i("mrSG"),a=i("THE0"),d=i("C/ya"),m=i("g+Po"),b=i("D/9M"),l=i("fXoL"),g=i("OaWH"),h=i("0IaG"),f=i("BAfr"),p=i("m6yr"),u=i("47y3");const _=function(){return{class:"backoffice-info-with-circle"}},v=function(t){return{id:"about",name:"About",icon:t}},y=function(){return{class:"backoffice-documents"}},w=function(t,e){return{id:"systems",name:"Systems",count:t,icon:e}},O=function(t,e){return[t,e]};let C=(()=>{class t extends d.a{constructor(t,e,i,n){super(t,e,i),this._service=t,this._route=e,this._router=i,this._dialog=n,this.service=this._service.Triggers}ngOnInit(){super.ngOnInit(),this._service.title="Triggers"}loadValues(){this._service.Systems.query({offset:0,limit:1,trigger_id:this.item.id}).then(t=>this.system_count=this._service.Systems.last_total||t.length||0)}newItem(t=!1){this.modal_ref||(this.modal_ref=this._dialog.open(b.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:t?new a.q(Object.assign(Object.assign({},this.item),{id:"",name:`${this.item.name} (1)`})):new a.q,service:this._service.Domains}}),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(t=>{"done"===t.reason&&this._router.navigate(["/triggers",t.metadata.item.id])})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}editItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(b.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Triggers}}),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}deleteItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Delete trigger",content:"<p>Are you sure you want delete this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove it from all associated systems and zones</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(t=>Object(r.b)(this,void 0,void 0,(function*(){"done"===t.reason&&(this.modal_ref.componentInstance.loading="Deleting trigger...",yield this.item.delete().catch(t=>{throw this.modal_ref.componentInstance.loading=null,this._service.notifyError(`Error deleting trigger. Error: ${JSON.stringify(t.response||t.message||t)}`),t}),this._router.navigate(["/triggers"]),this._service.set("BACKOFFICE.removed",this.item.id),this.modal_ref.close())})))),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(g.a),l.Rb(s.a),l.Rb(s.c),l.Rb(h.b))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-triggers"]],features:[l.Ab],decls:5,vars:17,consts:[[1,"container"],[1,"sidebar"],["heading","Triggers",3,"module","close","event"],[3,"touchrelease"],["name","trigger","route","triggers",3,"item","loading","tabs","event"]],template:function(t,e){1&t&&(l.Xb(0,"div",0),l.Xb(1,"div",1),l.Xb(2,"sidebar",2),l.mc("event",(function(t){return e.sidebarEvent(t)})),l.Wb(),l.Wb(),l.Xb(3,"main",3),l.mc("touchrelease",(function(){return e.show_sidebar=!1})),l.Xb(4,"item-display",4),l.mc("event",(function(t){return e.itemEvent(t)})),l.Wb(),l.Wb(),l.Wb()),2&t&&(l.Hb("show",e.show_sidebar),l.Db(2),l.wc("module",e.module)("close",e.show_sidebar),l.Db(2),l.wc("item",e.item)("loading",e.loading_item)("tabs",l.zc(14,O,l.yc(8,v,l.xc(7,_)),l.zc(11,w,e.system_count,l.xc(10,y)))))},directives:[f.a,p.b,u.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}"]}),t})();var P,x,M,W,X,D=i("5f3J"),S=i("xQV9"),I=i("mrP1"),A=i("Qu3c"),$=i("GrRB"),k=i("bTqV"),R=i("0njA"),E=i("8r66");P=$localize`:@@triggerTemplateSystemLabel␟e0756ac7c3aa344be20cf6e324a333ef5ff0466c␟2847369180436747415:Template System: `,x=$localize`:@@triggerConditionsHeader␟986668e81481d0fd0934b4ef56b4236ccb298712␟2079395509894825886:Conditions`,M=$localize`:@@triggerActionsHeader␟030b4423b92167200e39519599f9b863b4f7c62c␟3193976279273491157:Actions`,W=$localize`:@@triggerComparisonLabel␟a5cf036084ee11326617b12304dbeefc6e1bb36a␟6551073590639857317:Variable Comparison Condtions`,X=$localize`:@@triggerTimeLabel␟b8fd6c10ba159a3c30430f63820d801bfb7354f2␟2477713009538214942:Time Dependent Conditions`;const T=function(){return{class:"backoffice-edit"}},q=function(){return{class:"backoffice-trash"}};function L(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",18),l.Sb(1,"div",19),l.Xb(2,"div",20),l.Rc(3),l.rc(4,"json"),l.rc(5,"json"),l.Wb(),l.Xb(6,"button",9),l.mc("tapped",(function(){l.Hc(t);const i=e.$implicit;return l.qc(3).editCondition(i)})),l.Sb(7,"app-icon",10),l.Wb(),l.Xb(8,"button",21),l.mc("tapped",(function(){l.Hc(t);const i=e.$implicit;return l.qc(3).confirmRemoveCondition(i)})),l.Sb(9,"app-icon",10),l.Wb(),l.Wb()}if(2&t){const t=e.$implicit,i=l.qc(3);l.Db(3),l.Vc(" ",l.sc(4,6,t.left)," ",t.operator," ",l.sc(5,8,t.right)," "),l.Db(3),l.wc("disabled",!i.template_system),l.Db(1),l.wc("icon",l.xc(10,T)),l.Db(2),l.wc("icon",l.xc(11,q))}}function N(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",18),l.Sb(1,"div",19),l.Xb(2,"div",20),l.Rc(3),l.Wb(),l.Xb(4,"button",9),l.mc("tapped",(function(){l.Hc(t);const i=e.$implicit;return l.qc(3).editCondition(i)})),l.Sb(5,"app-icon",10),l.Wb(),l.Xb(6,"button",21),l.mc("tapped",(function(){l.Hc(t);const i=e.$implicit;return l.qc(3).confirmRemoveCondition(i)})),l.Sb(7,"app-icon",10),l.Wb(),l.Wb()}if(2&t){const t=e.$implicit,i=l.qc(3);l.Db(3),l.Uc(" ","at"===t.type?"At time":"CRON"," ","at"===t.type?t.time:t.cron," "),l.Db(1),l.wc("disabled",!i.template_system),l.Db(1),l.wc("icon",l.xc(5,T)),l.Db(2),l.wc("icon",l.xc(6,q))}}function z(t,e){if(1&t&&(l.Xb(0,"div",13),l.Xb(1,"div",14),l.bc(2,W),l.Wb(),l.Xb(3,"div",15),l.Pc(4,L,10,12,"div",16),l.Wb(),l.Xb(5,"div",14),l.bc(6,X),l.Wb(),l.Xb(7,"div",17),l.Pc(8,N,8,7,"div",16),l.Wb(),l.Wb()),2&t){const t=l.qc(2);l.Db(4),l.wc("ngForOf",t.comparisons),l.Db(4),l.wc("ngForOf",t.time_dependents)}}var H,j;function F(t,e){1&t&&l.Sb(0,"div",28)}H=$localize`:@@triggerFunctionsLabel␟bcd0d3c23fa6498d39bffabeec346417a572c40b␟3821303502506692310:Function Call Actions`,j=$localize`:@@triggerEmailsLabel␟fd50da1d6809d4560322a924221a854f1d21dc3b␟7098100161332510393:Email Actions`;const J=function(){return{class:"backoffice-select-arrows"}};function B(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",25),l.Xb(1,"div",26),l.Sb(2,"app-icon",10),l.Wb(),l.Xb(3,"div",20),l.Rc(4),l.rc(5,"json"),l.Wb(),l.Xb(6,"button",9),l.mc("tapped",(function(){l.Hc(t);const i=e.$implicit;return l.qc(3).editAction(i)})),l.Sb(7,"app-icon",10),l.Wb(),l.Xb(8,"button",21),l.mc("tapped",(function(){l.Hc(t);const i=e.$implicit;return l.qc(3).confirmRemoveAction(i)})),l.Sb(9,"app-icon",10),l.Wb(),l.Pc(10,F,1,0,"div",27),l.Wb()}if(2&t){const t=e.$implicit,i=l.qc(3);l.Db(2),l.wc("icon",l.xc(9,J)),l.Db(2),l.Vc(" ",t.mod,", ",t.method,"(",l.sc(5,7,t.args),") "),l.Db(2),l.wc("disabled",!i.template_system),l.Db(1),l.wc("icon",l.xc(10,T)),l.Db(2),l.wc("icon",l.xc(11,q))}}var V,K;function Y(t,e){1&t&&l.Sb(0,"div",28)}function Q(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",25),l.Xb(1,"div",26),l.Sb(2,"app-icon",10),l.Wb(),l.Xb(3,"div",20),l.Xb(4,"span",29),l.bc(5,K),l.rc(6,"formatList"),l.Wb(),l.Rc(7),l.Wb(),l.Xb(8,"button",9),l.mc("tapped",(function(){l.Hc(t);const i=e.$implicit;return l.qc(3).editAction(i)})),l.Sb(9,"app-icon",10),l.Wb(),l.Xb(10,"button",21),l.mc("tapped",(function(){l.Hc(t);const i=e.$implicit;return l.qc(3).confirmRemoveAction(i)})),l.Sb(11,"app-icon",10),l.Wb(),l.Pc(12,Y,1,0,"div",27),l.Wb()}if(2&t){const t=e.$implicit,i=l.qc(3);l.Db(2),l.wc("icon",l.xc(10,J)),l.Db(2),l.wc("matTooltip",l.sc(6,8,t.emails)),l.Db(2),l.fc(t.emails.length)(t.emails.length),l.cc(5),l.Db(1),l.Tc(" | Body Length: ",t.content.length," "),l.Db(1),l.wc("disabled",!i.template_system),l.Db(1),l.wc("icon",l.xc(11,T)),l.Db(2),l.wc("icon",l.xc(12,q))}}function U(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",13),l.Xb(1,"div",14),l.bc(2,H),l.Wb(),l.Xb(3,"div",22),l.mc("cdkDropListDropped",(function(e){return l.Hc(t),l.qc(2).confirmReorder("function",e)})),l.Pc(4,B,11,12,"div",23),l.Wb(),l.Xb(5,"div",14),l.bc(6,j),l.Wb(),l.Xb(7,"div",24),l.mc("cdkDropListDropped",(function(e){return l.Hc(t),l.qc(2).confirmReorder("mailer",e)})),l.Pc(8,Q,13,13,"div",23),l.Wb(),l.Wb()}if(2&t){const t=l.qc(2);l.Db(4),l.wc("ngForOf",t.functions),l.Db(4),l.wc("ngForOf",t.mailers)}}V=$localize`:␟6e542484e5a5b97451d8db2f7dfdbb6ae9882409␟3981906223455182500:{VAR_PLURAL, plural, =1 {Address } other {Addresses }}`,V=l.gc(V,{VAR_PLURAL:"\ufffd1\ufffd"}),K=$localize`:@@emailCountDisplay␟0999296882eee5cef69cbe222cf6f242c97a20f5␟468872276403073781:${"\ufffd0\ufffd"}:INTERPOLATION: ${V}:ICU:`;const G=function(){return{class:"backoffice-plus"}};function Z(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",3),l.Xb(1,"div",4),l.Xb(2,"section"),l.Xb(3,"div",5),l.Xb(4,"label",6),l.bc(5,P),l.Wb(),l.Xb(6,"item-search-field",7),l.mc("ngModelChange",(function(e){return l.Hc(t),l.qc().template_system=e})),l.Wb(),l.Wb(),l.Wb(),l.Xb(7,"header"),l.Xb(8,"div",8),l.Xb(9,"button",9),l.mc("tapped",(function(){return l.Hc(t),l.qc().addCondition()})),l.Sb(10,"app-icon",10),l.Wb(),l.Wb(),l.Xb(11,"div",11),l.bc(12,x),l.Wb(),l.Wb(),l.Xb(13,"section"),l.Pc(14,z,9,2,"div",12),l.Wb(),l.Xb(15,"header"),l.Xb(16,"div",8),l.Xb(17,"button",9),l.mc("tapped",(function(){return l.Hc(t),l.qc().addAction()})),l.Sb(18,"app-icon",10),l.Wb(),l.Wb(),l.Xb(19,"div",11),l.bc(20,M),l.Wb(),l.Wb(),l.Xb(21,"section"),l.Pc(22,U,9,2,"div",12),l.Wb(),l.Wb(),l.Wb()}if(2&t){const t=l.qc(),e=l.Ec(2),i=l.Ec(4);l.Db(6),l.wc("service",t.system_service)("ngModel",t.template_system),l.Db(3),l.wc("disabled",!t.template_system),l.Db(1),l.wc("icon",l.xc(10,G)),l.Db(4),l.wc("ngIf",t.comparisons.length||t.time_dependents.length)("ngIfElse",e),l.Db(3),l.wc("disabled",!t.template_system),l.Db(1),l.wc("icon",l.xc(11,G)),l.Db(4),l.wc("ngIf",t.functions.length||t.mailers.length)("ngIfElse",i)}}var tt,et;function it(t,e){1&t&&(l.Xb(0,"div",30),l.Xb(1,"div",11),l.bc(2,tt),l.Wb(),l.Wb())}function nt(t,e){1&t&&(l.Xb(0,"div",30),l.Xb(1,"div",11),l.bc(2,et),l.Wb(),l.Wb())}tt=$localize`:@@triggerConditionsEmpty␟653b5ca90ecf78dcc8c860e03ffb38be6f5c8bee␟1315028183848030960:No condtions for trigger`,et=$localize`:@@triggerActionsEmpty␟71cb74873d6a75ae16e84e75d6249a79bbe1c505␟3814611805731914236:No actions for trigger`;let ot=(()=>{class t extends D.a{constructor(t,e){super(),this._service=t,this._dialog=e,this.comparisons=[],this.time_dependents=[],this.functions=[],this.mailers=[]}get system_service(){return this._service.Systems}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item").subscribe(t=>{this.item=t,this.ngOnChanges({item:new l.K(null,this.item,!1)})}))}ngOnChanges(t){t.item&&(this.item&&this.item.conditions&&(this.comparisons=this.item.conditions.comparisons||[],this.time_dependents=this.item.conditions.time_dependents||[],this.functions=this.item.actions.functions||[],this.mailers=this.item.actions.mailers||[]),this.confirm_ref&&(this.confirm_ref.close(),this.confirm_ref=null,this.unsub("delete_confirm")))}addCondition(){this._dialog.open(I.a,{width:"auto",height:"auto",data:{trigger:this.item,system:this.template_system}})}editCondition(t){this._dialog.open(I.a,{width:"auto",height:"auto",data:{trigger:this.item,condition:JSON.parse(JSON.stringify(t)),system:this.template_system}})}addAction(){this._dialog.open(S.a,{data:{trigger:this.item,system:this.template_system}})}editAction(t){this._dialog.open(S.a,{data:{trigger:this.item,action:t,system:this.template_system}})}confirmRemoveCondition(t){this.confirm_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove trigger condition",content:"<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&(this.confirm_ref.componentInstance.loading="Removing trigger condition...",this.removeCondition(t))}))}removeCondition(t){const e={comparisons:[...this.comparisons],time_dependents:[...this.time_dependents]};if(t.type){const i=this.time_dependents.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.time_dependents.splice(i,1)}else{const i=this.comparisons.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.comparisons.splice(i,1)}this.item.storePendingChange("conditions",e),this.item.save().then(()=>this._service.notifySuccess("Successfully removed trigger condition."),t=>this._service.notifyError(`Error removing trigger condition. Error: ${JSON.stringify(t.response||t.message||t)}`))}confirmRemoveAction(t){this.confirm_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove trigger action",content:"<p>Are you sure you want remove this trigger action?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&(this.confirm_ref.componentInstance.loading="Removing trigger action...",this.removeAction(t))}))}removeAction(t){const e={functions:[...this.item.actions.functions],mailers:[...this.item.actions.mailers]};if(t.emails){const i=this.mailers.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.mailers.splice(i,1)}else{const i=this.functions.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.functions.splice(i,1)}this.item.storePendingChange("actions",e),this.item.save().then(()=>this._service.notifySuccess("Successfully removed trigger action."),t=>this._service.notifyError(`Error removing trigger action. Error: ${JSON.stringify(t.response||t.message||t)}`))}confirmReorder(t,e){this.confirm_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:`Reoreder trigger ${t} action`,content:"<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe(i=>{"done"===i.reason&&(this.confirm_ref.componentInstance.loading=`Reordering trigger ${t} action...`,this.reorderAction(t,e))}))}reorderAction(t,e){const i=[..."function"===t?this.functions:this.mailers];Object(c.f)(i,e.previousIndex,e.currentIndex),this.item.storePendingChange("actions",{functions:"function"===t?i:this.functions,mailers:"function"===t?this.mailers:i}),this.item.save().then(()=>this._service.notifySuccess(`Successfully re-ordered trigger ${t} action.`),e=>this._service.notifyError(`Error re-ordered trigger ${t} action. Error: ${JSON.stringify(e.response||e.message||e)}`))}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(g.a),l.Rb(h.b))},t.\u0275cmp=l.Lb({type:t,selectors:[["trigger-about"]],inputs:{item:"item"},features:[l.Ab,l.Bb],decls:5,vars:1,consts:[["class","container",4,"ngIf"],["no_conditions",""],["no_actions",""],[1,"container"],[1,"settings"],[1,"field"],["for","driver","matTooltip","System to use for available status variables and function calls"],[3,"service","ngModel","ngModelChange"],[1,"action"],["mat-icon-button","",3,"disabled","tapped"],[3,"icon"],[1,"text"],["class","list",4,"ngIf","ngIfElse"],[1,"list"],[1,"header"],[1,"group","comparisons"],["class","item",4,"ngFor","ngForOf"],[1,"group","time-dependents"],[1,"item"],[1,"handle"],[1,"details"],["mat-icon-button","",3,"tapped"],["cdkDropList","",1,"group","functions",3,"cdkDropListDropped"],["class","item","cdkDrag","",4,"ngFor","ngForOf"],["cdkDropList","",1,"group","emails",3,"cdkDropListDropped"],["cdkDrag","",1,"item"],["cdkDragHandle","",1,"handle"],["class","placeholder",4,"cdkDragPlaceholder"],[1,"placeholder"],[3,"matTooltip"],[1,"info-block"]],template:function(t,e){1&t&&(l.Pc(0,Z,23,12,"div",0),l.Pc(1,it,3,0,"ng-template",null,1,l.Qc),l.Pc(3,nt,3,0,"ng-template",null,2,l.Qc)),2&t&&l.wc("ngIf",e.item)},directives:[n.m,A.a,$.a,o.l,o.o,k.b,p.b,R.a,n.l,c.d,c.a,c.b,c.c],pipes:[n.g,E.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.no-item[_ngcontent-%COMP%]{font-size:.75em}.group[_ngcontent-%COMP%]{flex-direction:column}.group[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.item[_ngcontent-%COMP%]{border-radius:4px;margin:2px 0}.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:2.5rem;width:2.5rem}.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{cursor:-webkit-grab;cursor:grab}.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{flex:1;min-width:50%;white-space:nowrap;font-size:.6em;padding:0 .5rem;overflow:hidden;text-overflow:ellipsis}.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Fira Code,monospace}.item[_ngcontent-%COMP%]:nth-child(2n){background-color:#f0f0f0}.item[_ngcontent-%COMP%]:hover{background-color:#ccc}button[_ngcontent-%COMP%]{margin:.25em}header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .5em 0 0;border:1px solid rgba(0,0,0,.85)}header[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{border-color:#ccc}.header[_ngcontent-%COMP%]{padding:1em;font-size:1em;font-weight:500}.cdk-drag-preview[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 0 rgba(0,0,0,.12)}.cdk-drag-preview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none}.placeholder[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);border:4px dashed rgba(0,0,0,.6);height:3em;width:100%;border-radius:4px}"]}),t})();var st,ct,rt=i("Cvi9"),at=i("oIn+");st=$localize`:@@systemTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`,ct=$localize`:@@systemTableAdded␟80e3b490720757978c99a7b5af3885faf202b955␟231679111972850796:Added`;const dt=function(t){return["/systems",t]};function mt(t,e){if(1&t&&(l.Xb(0,"a",12),l.Rc(1),l.Wb()),2&t){const t=l.qc().$implicit;l.wc("routerLink",l.yc(3,dt,t.system_id))("matTooltip",t.system_id),l.Db(1),l.Tc(" ",t.system_name," ")}}const bt=function(){return{class:"backoffice-trash"}};function lt(t,e){if(1&t){const t=l.Yb();l.Xb(0,"tr"),l.Xb(1,"td",5),l.Sb(2,"div",8),l.Wb(),l.Xb(3,"td",6),l.Pc(4,mt,2,5,"a",9),l.Wb(),l.Xb(5,"td"),l.Rc(6),l.rc(7,"dateFrom"),l.Wb(),l.Xb(8,"td",5),l.Xb(9,"button",10),l.mc("tapped",(function(){l.Hc(t);const i=e.$implicit;return l.qc(3).delete(i)})),l.Sb(10,"app-icon",11),l.Wb(),l.Wb(),l.Wb()}if(2&t){const t=e.$implicit;l.Db(2),l.Hb("active",t.enabled),l.Db(2),l.wc("ngIf",t.system_id),l.Db(2),l.Sc(l.sc(7,5,1e3*(t.created_at-0))),l.Db(4),l.wc("icon",l.xc(7,bt))}}function gt(t,e){if(1&t&&(l.Xb(0,"table"),l.Xb(1,"thead"),l.Sb(2,"td",5),l.Xb(3,"td",6),l.bc(4,st),l.Wb(),l.Xb(5,"td",6),l.bc(6,ct),l.Wb(),l.Sb(7,"td",5),l.Wb(),l.Xb(8,"tbody"),l.Pc(9,lt,11,8,"tr",7),l.Wb(),l.Wb()),2&t){const t=l.qc(2);l.Db(9),l.wc("ngForOf",t.system_trigger_list)}}function ht(t,e){if(1&t&&(l.Xb(0,"div",2),l.Xb(1,"div",3),l.Pc(2,gt,10,1,"table",4),l.Wb(),l.Wb()),2&t){const t=l.qc(),e=l.Ec(2);l.Db(2),l.wc("ngIf",t.system_trigger_list.length>0)("ngIfElse",e)}}var ft;function pt(t,e){1&t&&(l.Xb(0,"div",13),l.Xb(1,"div",14),l.bc(2,ft),l.Wb(),l.Wb())}ft=$localize`:@@systemTableEmpty␟edad99e460bba0d0256ef0624907d8d26d84595b␟5399503921552553899:No systems with trigger`;const ut=[{path:":id",component:C,children:[{path:"about",component:ot},{path:"systems",component:(()=>{class t extends D.a{constructor(t,e,i){super(),this._service=t,this._dialog=e,this._composer=i,this.system_trigger_list=[],this.connected={}}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item").subscribe(t=>{this.item=t,this.ngOnChanges({item:new l.K(null,this.item,!1)})}))}ngOnChanges(t){t.item&&this.item&&this.loadSystemTriggers()}loadSystemTriggers(t=0){this._service.Systems.query({trigger_id:this.item.id,offset:t}).then(t=>this.system_trigger_list=t||[],()=>null)}delete(t){if(t){const e=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove trigger",content:`<p>Are you sure you want remove this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove from the system "${t.system_name||""}"</p>`,icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(i=>Object(r.b)(this,void 0,void 0,(function*(){"done"===i.reason&&(e.componentInstance.loading="Removing trigger...",yield this.deleteTrigger(t).catch(t=>{throw e.componentInstance.loading=null,this._service.notifyError(`Error removing trigger. Error: ${JSON.stringify(t.response||t.message||t)}`),t}),this.loadSystemTriggers(),e.close(),this.unsub("delete_confirm"))}))))}}deleteTrigger(t){return new Promise((e,i)=>{this._composer.http.delete(`${this._composer.auth.api_endpoint}/systems/${t.system_id}/triggers/${t.id}`).subscribe(t=>null,t=>i(t),()=>e())})}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(g.a),l.Rb(h.b),l.Rb(rt.c))},t.\u0275cmp=l.Lb({type:t,selectors:[["trigger-systems"]],inputs:{item:"item"},features:[l.Ab,l.Bb],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["empty_state",""],[1,"container"],[1,"settings"],[4,"ngIf","ngIfElse"],[1,"small"],[1,"flex"],[4,"ngFor","ngForOf"],[1,"state"],[3,"routerLink","matTooltip",4,"ngIf"],["mat-icon-button","",3,"tapped"],[3,"icon"],[3,"routerLink","matTooltip"],[1,"info-block"],[1,"text"]],template:function(t,e){1&t&&(l.Pc(0,ht,3,2,"div",0),l.Pc(1,pt,3,0,"ng-template",null,1,l.Qc)),2&t&&l.wc("ngIf",e.item)},directives:[n.m,n.l,k.b,p.b,R.a,s.f,A.a],pipes:[at.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.list[_ngcontent-%COMP%]{margin-top:.5em}tbody[_ngcontent-%COMP%]{font-size:.9em}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap}div[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{width:2em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]{width:4em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:inline-flex}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:flex;align-items:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#d32f2f;border-radius:.8em;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.select[_ngcontent-%COMP%]{display:flex;align-items:center}.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex:1}"]}),t})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var _t=i("PCNd");i.d(e,"AppTriggersModule",(function(){return vt}));let vt=(()=>{class t{}return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(e){return new(e||t)},imports:[[n.c,o.g,s.g.forChild(ut),_t.a,c.e]]}),t})()}}]);