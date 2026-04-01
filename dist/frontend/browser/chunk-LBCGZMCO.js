import {
  SpreadsheetService
} from "./chunk-3IZYEN55.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CRHN5OWP.js";

// src/app/features/join/join.component.ts
function JoinComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Entrando no grupo...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Processando seu convite, aguarde um momento.");
    \u0275\u0275elementEnd()();
  }
}
function JoinComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Erro ao entrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "a", 8);
    \u0275\u0275text(9, "Ir ao Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 9);
    \u0275\u0275text(11, "Login");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function JoinComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 6);
    \u0275\u0275text(2, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Bem-vindo ao grupo!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Voc\xEA entrou em ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " com sucesso.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 11);
    \u0275\u0275text(11, "Redirecionando para o dashboard...");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.spreadsheetName());
  }
}
var JoinComponent = class _JoinComponent {
  constructor() {
    this.spreadsheetService = inject(SpreadsheetService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.token = "";
    this.loading = signal(true);
    this.error = signal("");
    this.spreadsheetName = signal("");
  }
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token") || "";
    if (!this.token) {
      this.error.set("Token de convite inv\xE1lido.");
      this.loading.set(false);
      return;
    }
    this.joinGroup();
  }
  joinGroup() {
    this.spreadsheetService.join(this.token).subscribe({
      next: (sheet) => {
        this.spreadsheetName.set(sheet.name);
        this.loading.set(false);
        setTimeout(() => {
          this.router.navigate(["/dashboard", sheet.id]);
        }, 2e3);
      },
      error: (err) => {
        const msg = err?.error?.message || "Erro ao entrar no grupo.";
        this.error.set(msg);
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function JoinComponent_Factory(t) {
      return new (t || _JoinComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JoinComponent, selectors: [["app-join"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "join-page"], [1, "join-card"], [1, "join-logo"], [1, "join-state"], [1, "loading-spinner"], [1, "join-state", "error"], [1, "state-icon"], [1, "join-actions"], ["routerLink", "/dashboard", 1, "btn", "btn-primary"], ["routerLink", "/login", 1, "btn", "btn-outline"], [1, "join-state", "success"], [1, "redirect-msg"], [1, "loading-spinner", "success-spin"]], template: function JoinComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        \u0275\u0275text(4, "\u{1F4B0}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "200 Deposits");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, JoinComponent_Conditional_7_Template, 6, 0, "div", 3)(8, JoinComponent_Conditional_8_Template, 12, 1)(9, JoinComponent_Conditional_9_Template, 13, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.loading() ? 7 : ctx.error() ? 8 : 9);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.join-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark-blue) 0%,\n      #283593 50%,\n      #1565c0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.join-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 48px 40px;\n  max-width: 420px;\n  width: 100%;\n  text-align: center;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);\n  animation: fadeIn 0.4s ease;\n}\n@media (max-width: 480px) {\n  .join-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}\n.join-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 36px;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--primary-dark-blue);\n}\n.join-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 28px;\n}\n.join-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.join-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n}\n.join-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.join-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-dark-blue);\n  font-weight: 700;\n}\n.join-state.error[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.join-state.success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--primary-green);\n}\n.state-icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  margin-bottom: 4px;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 4px solid var(--light-blue);\n  border-top-color: var(--primary-dark-blue);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin: 8px auto 0;\n}\n.loading-spinner.success-spin[_ngcontent-%COMP%] {\n  border-color: var(--light-green);\n  border-top-color: var(--primary-green);\n}\n.redirect-msg[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: var(--text-muted) !important;\n  font-style: italic;\n}\n.join-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.join-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=join.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JoinComponent, { className: "JoinComponent", filePath: "src/app/features/join/join.component.ts", lineNumber: 13 });
})();
export {
  JoinComponent
};
//# sourceMappingURL=chunk-LBCGZMCO.js.map
