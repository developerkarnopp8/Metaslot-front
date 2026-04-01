import {
  AuthService
} from "./chunk-65PPVMEG.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HRBI7SE6.js";
import {
  CommonModule,
  Router,
  RouterLink,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CRHN5OWP.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span");
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function LoginComponent_Conditional_43_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " E-mail \xE9 obrigat\xF3rio. ");
  }
}
function LoginComponent_Conditional_43_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Informe um e-mail v\xE1lido. ");
  }
}
function LoginComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275template(1, LoginComponent_Conditional_43_Conditional_1_Template, 1, 0)(2, LoginComponent_Conditional_43_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.emailCtrl.hasError("required") ? 1 : 2);
  }
}
function LoginComponent_Conditional_51_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Senha \xE9 obrigat\xF3ria. ");
  }
}
function LoginComponent_Conditional_51_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " A senha deve ter pelo menos 6 caracteres. ");
  }
}
function LoginComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275template(1, LoginComponent_Conditional_51_Conditional_1_Template, 1, 0)(2, LoginComponent_Conditional_51_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.passwordCtrl.hasError("required") ? 1 : 2);
  }
}
function LoginComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
    \u0275\u0275text(1, " Entrando... ");
  }
}
function LoginComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Entrar ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    this.loading = false;
    this.error = "";
    this.showPassword = false;
  }
  get emailCtrl() {
    return this.form.get("email");
  }
  get passwordCtrl() {
    return this.form.get("password");
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = "";
    const { email, password } = this.form.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.error = err?.error?.message || "Email ou senha inv\xE1lidos.";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 8, consts: [[1, "auth-page"], [1, "auth-left"], [1, "auth-brand"], [1, "brand-icon"], [1, "brand-text"], [1, "auth-left-content"], [1, "auth-stats"], [1, "auth-stat"], [1, "stat-num"], [1, "stat-lbl"], [1, "auth-right"], [1, "auth-card"], [1, "auth-card-header"], [1, "alert", "alert-error"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "seu@email.com", "autocomplete", "email"], [1, "error-msg"], ["for", "password"], [1, "input-wrapper"], ["id", "password", "formControlName", "password", "placeholder", "M\xEDnimo 6 caracteres", "autocomplete", "current-password", 3, "type"], ["type", "button", 1, "toggle-pw", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/register", 1, "auth-link"], [1, "back-home"], ["routerLink", "/", 1, "back-link"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F4B0}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "200 ");
        \u0275\u0275elementStart(7, "strong");
        \u0275\u0275text(8, "Deposits");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 5)(10, "h2");
        \u0275\u0275text(11, "Bem-vindo de volta!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p");
        \u0275\u0275text(13, "Acompanhe o progresso do seu desafio dos 200 dep\xF3sitos e alcance sua meta de R$20.100,00.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 6)(15, "div", 7)(16, "span", 8);
        \u0275\u0275text(17, "200");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 9);
        \u0275\u0275text(19, "Slots");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7)(21, "span", 8);
        \u0275\u0275text(22, "R$20k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 9);
        \u0275\u0275text(24, "Meta");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "span", 8);
        \u0275\u0275text(27, "\u221E");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 9);
        \u0275\u0275text(29, "Grupos");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(30, "div", 10)(31, "div", 11)(32, "div", 12)(33, "h1");
        \u0275\u0275text(34, "Entrar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p");
        \u0275\u0275text(36, "Acesse sua conta para continuar");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(37, LoginComponent_Conditional_37_Template, 4, 1, "div", 13);
        \u0275\u0275elementStart(38, "form", 14);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_38_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(39, "div", 15)(40, "label", 16);
        \u0275\u0275text(41, "E-mail");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 17);
        \u0275\u0275template(43, LoginComponent_Conditional_43_Template, 3, 1, "span", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 15)(45, "label", 19);
        \u0275\u0275text(46, "Senha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 20);
        \u0275\u0275element(48, "input", 21);
        \u0275\u0275elementStart(49, "button", 22);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_49_listener() {
          return ctx.showPassword = !ctx.showPassword;
        });
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(51, LoginComponent_Conditional_51_Template, 3, 1, "span", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "button", 23);
        \u0275\u0275template(53, LoginComponent_Conditional_53_Template, 2, 0)(54, LoginComponent_Conditional_54_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 24)(56, "span");
        \u0275\u0275text(57, "N\xE3o tem uma conta?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "a", 25);
        \u0275\u0275text(59, "Criar conta gr\xE1tis");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 26)(61, "a", 27);
        \u0275\u0275text(62, "\u2190 Voltar ao in\xEDcio");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(37);
        \u0275\u0275conditional(37, ctx.error ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(43, ctx.emailCtrl.invalid && ctx.emailCtrl.touched ? 43 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(51, ctx.passwordCtrl.invalid && ctx.passwordCtrl.touched ? 51 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(53, ctx.loading ? 53 : 54);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 768px) {\n  .auth-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.auth-left[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      160deg,\n      var(--primary-dark-blue) 0%,\n      #283593 60%,\n      #1565c0 100%);\n  display: flex;\n  flex-direction: column;\n  padding: 40px;\n  color: white;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .auth-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-left[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -150px;\n  right: -150px;\n  width: 400px;\n  height: 400px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.auth-left[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -100px;\n  left: -100px;\n  width: 300px;\n  height: 300px;\n  background: rgba(56, 142, 60, 0.15);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.auth-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.auth-brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.auth-left-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n}\n.auth-left-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin-bottom: 16px;\n  line-height: 1.3;\n}\n.auth-left-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.7;\n  margin-bottom: 40px;\n  max-width: 320px;\n}\n.auth-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.auth-stats[_ngcontent-%COMP%]   .auth-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: var(--radius-md);\n  padding: 16px 20px;\n  min-width: 80px;\n}\n.auth-stats[_ngcontent-%COMP%]   .auth-stat[_ngcontent-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--accent-green);\n}\n.auth-stats[_ngcontent-%COMP%]   .auth-stat[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.auth-right[_ngcontent-%COMP%] {\n  background: var(--background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  padding: 40px 36px;\n  width: 100%;\n  max-width: 420px;\n  animation: fadeIn 0.4s ease;\n}\n.auth-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.auth-card-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n  margin-bottom: 6px;\n}\n.auth-card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 20px;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: var(--danger);\n  border: 1px solid #ffcdd2;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 48px;\n  width: 100%;\n}\n.input-wrapper[_ngcontent-%COMP%]   .toggle-pw[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  padding: 4px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  font-size: 16px;\n  border-radius: var(--radius-sm);\n  margin-top: 8px;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  font-size: 14px;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.auth-footer[_ngcontent-%COMP%]   .auth-link[_ngcontent-%COMP%] {\n  color: var(--primary-dark-blue);\n  font-weight: 600;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.back-home[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 16px;\n}\n.back-home[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  transition: color 0.2s;\n}\n.back-home[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark-blue);\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-MKGC4VHF.js.map
