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

// src/app/features/auth/register/register.component.ts
function RegisterComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span");
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
function RegisterComponent_Conditional_43_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nome \xE9 obrigat\xF3rio. ");
  }
}
function RegisterComponent_Conditional_43_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nome deve ter pelo menos 2 caracteres. ");
  }
}
function RegisterComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275template(1, RegisterComponent_Conditional_43_Conditional_1_Template, 1, 0)(2, RegisterComponent_Conditional_43_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.nameCtrl.hasError("required") ? 1 : 2);
  }
}
function RegisterComponent_Conditional_48_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " E-mail \xE9 obrigat\xF3rio. ");
  }
}
function RegisterComponent_Conditional_48_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Informe um e-mail v\xE1lido. ");
  }
}
function RegisterComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275template(1, RegisterComponent_Conditional_48_Conditional_1_Template, 1, 0)(2, RegisterComponent_Conditional_48_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.emailCtrl.hasError("required") ? 1 : 2);
  }
}
function RegisterComponent_Conditional_56_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Senha \xE9 obrigat\xF3ria. ");
  }
}
function RegisterComponent_Conditional_56_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " A senha deve ter pelo menos 6 caracteres. ");
  }
}
function RegisterComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275template(1, RegisterComponent_Conditional_56_Conditional_1_Template, 1, 0)(2, RegisterComponent_Conditional_56_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.passwordCtrl.hasError("required") ? 1 : 2);
  }
}
function RegisterComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "As senhas n\xE3o coincidem.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
    \u0275\u0275text(1, " Criando conta... ");
  }
}
function RegisterComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criar Conta Gr\xE1tis ");
  }
}
function passwordMatchValidator(control) {
  const password = control.get("password");
  const confirm = control.get("confirmPassword");
  if (password && confirm && password.value !== confirm.value) {
    return { passwordMismatch: true };
  }
  return null;
}
var RegisterComponent = class _RegisterComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
    }, { validators: passwordMatchValidator });
    this.loading = false;
    this.error = "";
    this.showPassword = false;
    this.showConfirm = false;
  }
  get nameCtrl() {
    return this.form.get("name");
  }
  get emailCtrl() {
    return this.form.get("email");
  }
  get passwordCtrl() {
    return this.form.get("password");
  }
  get confirmCtrl() {
    return this.form.get("confirmPassword");
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = "";
    const { name, email, password } = this.form.value;
    this.authService.register(name, email, password).subscribe({
      next: () => {
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.error = err?.error?.message || "Erro ao criar conta. Tente novamente.";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 76, vars: 12, consts: [[1, "auth-page"], [1, "auth-left"], [1, "auth-brand"], [1, "brand-icon"], [1, "brand-text"], [1, "auth-left-content"], [1, "steps-mini"], [1, "mini-step"], [1, "step-num"], [1, "auth-right"], [1, "auth-card"], [1, "auth-card-header"], [1, "alert", "alert-error"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "Seu nome", "autocomplete", "name"], [1, "error-msg"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "seu@email.com", "autocomplete", "email"], ["for", "password"], [1, "input-wrapper"], ["id", "password", "formControlName", "password", "placeholder", "M\xEDnimo 6 caracteres", "autocomplete", "new-password", 3, "type"], ["type", "button", 1, "toggle-pw", 3, "click"], ["for", "confirmPassword"], ["id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Repita a senha", "autocomplete", "new-password", 3, "type"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/login", 1, "auth-link"], [1, "back-home"], ["routerLink", "/", 1, "back-link"], [1, "spinner"]], template: function RegisterComponent_Template(rf, ctx) {
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
        \u0275\u0275text(11, "Comece sua jornada financeira!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p");
        \u0275\u0275text(13, "Crie sua conta, monte seu grupo e comece o desafio dos 200 dep\xF3sitos rumo a R$20.100,00.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 6)(15, "div", 7)(16, "span", 8);
        \u0275\u0275text(17, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19, "Crie sua conta");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7)(21, "span", 8);
        \u0275\u0275text(22, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24, "Monte seu grupo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "span", 8);
        \u0275\u0275text(27, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span");
        \u0275\u0275text(29, "Alcance R$20.100");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(30, "div", 9)(31, "div", 10)(32, "div", 11)(33, "h1");
        \u0275\u0275text(34, "Criar Conta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p");
        \u0275\u0275text(36, "Preencha os dados para come\xE7ar");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(37, RegisterComponent_Conditional_37_Template, 4, 1, "div", 12);
        \u0275\u0275elementStart(38, "form", 13);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_38_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(39, "div", 14)(40, "label", 15);
        \u0275\u0275text(41, "Nome Completo");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 16);
        \u0275\u0275template(43, RegisterComponent_Conditional_43_Template, 3, 1, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 14)(45, "label", 18);
        \u0275\u0275text(46, "E-mail");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "input", 19);
        \u0275\u0275template(48, RegisterComponent_Conditional_48_Template, 3, 1, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 14)(50, "label", 20);
        \u0275\u0275text(51, "Senha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 21);
        \u0275\u0275element(53, "input", 22);
        \u0275\u0275elementStart(54, "button", 23);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_54_listener() {
          return ctx.showPassword = !ctx.showPassword;
        });
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(56, RegisterComponent_Conditional_56_Template, 3, 1, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 14)(58, "label", 24);
        \u0275\u0275text(59, "Confirmar Senha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 21);
        \u0275\u0275element(61, "input", 25);
        \u0275\u0275elementStart(62, "button", 23);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_62_listener() {
          return ctx.showConfirm = !ctx.showConfirm;
        });
        \u0275\u0275text(63);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(64, RegisterComponent_Conditional_64_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "button", 26);
        \u0275\u0275template(66, RegisterComponent_Conditional_66_Template, 2, 0)(67, RegisterComponent_Conditional_67_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 27)(69, "span");
        \u0275\u0275text(70, "J\xE1 tem uma conta?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "a", 28);
        \u0275\u0275text(72, "Fazer login");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 29)(74, "a", 30);
        \u0275\u0275text(75, "\u2190 Voltar ao in\xEDcio");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(37);
        \u0275\u0275conditional(37, ctx.error ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(43, ctx.nameCtrl.invalid && ctx.nameCtrl.touched ? 43 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(48, ctx.emailCtrl.invalid && ctx.emailCtrl.touched ? 48 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(56, ctx.passwordCtrl.invalid && ctx.passwordCtrl.touched ? 56 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.showConfirm ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.showConfirm ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(64, ctx.confirmCtrl.touched && ctx.form.hasError("passwordMismatch") ? 64 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(66, ctx.loading ? 66 : 67);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 768px) {\n  .auth-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.auth-left[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      160deg,\n      var(--primary-green) 0%,\n      #1b5e20 40%,\n      #2e7d32 100%);\n  display: flex;\n  flex-direction: column;\n  padding: 40px;\n  color: white;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .auth-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-left[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -100px;\n  right: -100px;\n  width: 350px;\n  height: 350px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.auth-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.auth-brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.auth-left-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n}\n.auth-left-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  margin-bottom: 16px;\n  line-height: 1.3;\n}\n.auth-left-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.7;\n  margin-bottom: 36px;\n  max-width: 320px;\n}\n.steps-mini[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.steps-mini[_ngcontent-%COMP%]   .mini-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font-size: 15px;\n  font-weight: 500;\n}\n.steps-mini[_ngcontent-%COMP%]   .mini-step[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.auth-right[_ngcontent-%COMP%] {\n  background: var(--background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  padding: 36px 32px;\n  width: 100%;\n  max-width: 440px;\n  animation: fadeIn 0.4s ease;\n}\n.auth-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.auth-card-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n  margin-bottom: 6px;\n}\n.auth-card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: var(--danger);\n  border: 1px solid #ffcdd2;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 48px;\n  width: 100%;\n}\n.input-wrapper[_ngcontent-%COMP%]   .toggle-pw[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  padding: 4px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  font-size: 16px;\n  border-radius: var(--radius-sm);\n  margin-top: 8px;\n  background: var(--primary-green);\n  border-color: var(--primary-green);\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent-green);\n  border-color: var(--accent-green);\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  font-size: 14px;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.auth-footer[_ngcontent-%COMP%]   .auth-link[_ngcontent-%COMP%] {\n  color: var(--primary-dark-blue);\n  font-weight: 600;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.back-home[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 16px;\n}\n.back-home[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  transition: color 0.2s;\n}\n.back-home[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark-blue);\n}\n/*# sourceMappingURL=register.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 23 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-HR3TGOJE.js.map
