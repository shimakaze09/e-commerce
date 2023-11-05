"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[481],{3481:(Z,m,s)=>{s.r(m),s.d(m,{AccountModule:()=>S});var a=s(6895),l=s(9838),o=s(433),t=s(1571),u=s(9479),p=s(4015);let d=(()=>{class e{constructor(r,i,n){this.accountService=r,this.router=i,this.activatedRoute=n,this.loginForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.email]),password:new o.NI("",o.kI.required)}),this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop"}onSubmit(){this.accountService.login(this.loginForm.value).subscribe({next:()=>this.router.navigateByUrl(this.returnUrl)})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(u.B),t.Y36(l.F0),t.Y36(l.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:11,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3"],[3,"formControl","label"],[3,"formControl","label","type"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3",3,"disabled"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Login"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6),t.TgZ(8,"div",7)(9,"button",8),t._uU(10,"Sign in "),t.qZA()()()()()),2&i&&(t.xp6(2),t.Q6J("formGroup",n.loginForm),t.xp6(4),t.Q6J("formControl",n.loginForm.controls.email)("label","Email Address"),t.xp6(1),t.Q6J("formControl",n.loginForm.controls.password)("label","Password")("type","password"),t.xp6(2),t.Q6J("disabled",n.loginForm.invalid))},dependencies:[o._Y,o.JJ,o.JL,o.oH,o.sg,p.t]})}return e})();var g=s(8372),f=s(5698),h=s(3900),v=s(4004),b=s(8746);function y(e,c){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const r=c.$implicit;t.xp6(1),t.hij(" ",r," ")}}function x(e,c){if(1&e&&(t.TgZ(0,"ul",10),t.YNc(1,y,2,1,"li",11),t.qZA()),2&e){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",r.errors)}}const C=[{path:"login",component:d},{path:"register",component:(()=>{class e{constructor(r,i,n){this.fb=r,this.accountService=i,this.router=n,this.errors=null,this.complexPassword="(?=^.{6,10}$)(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*s).*$",this.registerForm=this.fb.group({displayName:["",o.kI.required],email:["",[o.kI.required,o.kI.email],[this.validateEmailNotTaken()]],password:["",[o.kI.required,o.kI.pattern(this.complexPassword)]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe({next:()=>this.router.navigateByUrl("/shop"),error:r=>this.errors=r.errors})}validateEmailNotTaken(){return r=>r.valueChanges.pipe((0,g.b)(1e3),(0,f.q)(1),(0,h.w)(()=>this.accountService.checkEmailExists(r.value).pipe((0,v.U)(i=>i?{emailExists:!0}:null),(0,b.x)(()=>r.markAsTouched()))))}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(o.qu),t.Y36(u.B),t.Y36(l.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:13,vars:10,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3"],[3,"formControl","label"],[3,"formControl","label","type"],["class","text-danger list-unstyled",4,"ngIf"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Sign up"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",5)(8,"app-text-input",6),t.YNc(9,x,2,1,"ul",7),t.TgZ(10,"div",8)(11,"button",9),t._uU(12,"Sign up "),t.qZA()()()()()),2&i&&(t.xp6(2),t.Q6J("formGroup",n.registerForm),t.xp6(4),t.Q6J("formControl",n.registerForm.controls.displayName)("label","Display Name"),t.xp6(1),t.Q6J("formControl",n.registerForm.controls.email)("label","Email Address"),t.xp6(1),t.Q6J("formControl",n.registerForm.controls.password)("label","Password")("type","password"),t.xp6(1),t.Q6J("ngIf",n.errors),t.xp6(2),t.Q6J("disabled",n.registerForm.invalid))},dependencies:[a.sg,a.O5,o._Y,o.JJ,o.JL,o.oH,o.sg,p.t]})}return e})()}];let F=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(C),l.Bz]})}return e})();var J=s(4466);let S=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[a.ez,F,J.m]})}return e})()}}]);