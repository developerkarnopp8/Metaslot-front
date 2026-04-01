import {
  DepositService
} from "./chunk-7OJRT4KF.js";
import {
  SpreadsheetService
} from "./chunk-3IZYEN55.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HRBI7SE6.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CRHN5OWP.js";

// src/app/features/deposit/new-deposit/new-deposit.component.ts
var _forTrack0 = ($index, $item) => $item.number;
var _c0 = (a0) => ["/dashboard", a0];
function NewDepositComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.spreadsheetName());
  }
}
function NewDepositComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Dep\xF3sito Registrado!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("Slot #", (tmp_1_0 = ctx_r0.selectedSlot()) == null ? null : tmp_1_0.number, " - ", ctx_r0.formatCurrency(((tmp_1_0 = ctx_r0.selectedSlot()) == null ? null : tmp_1_0.number) || 0), " confirmado.");
  }
}
function NewDepositComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando slots...");
    \u0275\u0275elementEnd()();
  }
}
function NewDepositComponent_Conditional_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function NewDepositComponent_Conditional_27_For_2_Template_div_click_0_listener() {
      const slot_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectSlot(slot_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("completed", slot_r3.status === "completed")("available", slot_r3.status === "available")("selected", ctx_r0.isSelected(slot_r3));
    \u0275\u0275property("title", slot_r3.status === "completed" ? "Slot ocupado" : "R$" + slot_r3.number + ",00");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slot_r3.number, " ");
  }
}
function NewDepositComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275repeaterCreate(1, NewDepositComponent_Conditional_27_For_2_Template, 2, 8, "div", 40, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.slots());
  }
}
function NewDepositComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error(), "");
  }
}
function NewDepositComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", ctx_r0.selectedSlot().number, "");
  }
}
function NewDepositComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Nenhum");
    \u0275\u0275elementEnd();
  }
}
function NewDepositComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 43);
    \u0275\u0275text(2, "VALOR SELECIONADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.selectedSlot().number));
  }
}
function NewDepositComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
    \u0275\u0275text(1, " Processando... ");
  }
}
function NewDepositComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 Confirmar Dep\xF3sito ");
  }
}
var NewDepositComponent = class _NewDepositComponent {
  constructor() {
    this.depositService = inject(DepositService);
    this.spreadsheetService = inject(SpreadsheetService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.spreadsheetId = "";
    this.spreadsheetName = signal("");
    this.slots = signal([]);
    this.selectedSlot = signal(null);
    this.note = "";
    this.loading = signal(false);
    this.loadingSlots = signal(true);
    this.error = signal("");
    this.success = signal(false);
    this.selectedAmount = computed(() => this.selectedSlot()?.number || 0);
  }
  formatCurrency(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }
  ngOnInit() {
    this.spreadsheetId = this.route.snapshot.paramMap.get("spreadsheetId") || "";
    if (!this.spreadsheetId) {
      this.router.navigate(["/dashboard"]);
      return;
    }
    this.loadData();
  }
  loadData() {
    this.spreadsheetService.getById(this.spreadsheetId).subscribe({
      next: (sheet) => {
        this.spreadsheetName.set(sheet.name);
      }
    });
    this.depositService.getAll(this.spreadsheetId).subscribe({
      next: (deposits) => {
        const completedSlots = new Set(deposits.filter((d) => d.status === "completed").map((d) => d.slotNumber));
        const slots = Array.from({ length: 200 }, (_, i) => {
          const num = i + 1;
          return {
            number: num,
            status: completedSlots.has(num) ? "completed" : "available",
            amount: num
          };
        });
        this.slots.set(slots);
        this.loadingSlots.set(false);
      },
      error: () => {
        this.error.set("Erro ao carregar slots.");
        this.loadingSlots.set(false);
      }
    });
  }
  selectSlot(slot) {
    if (slot.status === "completed")
      return;
    if (this.selectedSlot()?.number === slot.number) {
      this.selectedSlot.set(null);
    } else {
      this.selectedSlot.set(slot);
    }
  }
  isSelected(slot) {
    return this.selectedSlot()?.number === slot.number;
  }
  confirm() {
    const slot = this.selectedSlot();
    if (!slot) {
      this.error.set("Selecione um slot para depositar.");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.depositService.create(this.spreadsheetId, {
      slotNumber: slot.number,
      amount: slot.amount,
      note: this.note || void 0,
      status: "completed"
    }).subscribe({
      next: () => {
        this.success.set(true);
        setTimeout(() => {
          this.router.navigate(["/dashboard", this.spreadsheetId]);
        }, 1500);
      },
      error: (err) => {
        this.error.set(err?.error?.message || "Erro ao registrar dep\xF3sito.");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function NewDepositComponent_Factory(t) {
      return new (t || _NewDepositComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDepositComponent, selectors: [["app-new-deposit"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 14, consts: [[1, "deposit-page"], [1, "deposit-header"], [1, "back-btn", 3, "routerLink"], [1, "header-info"], [1, "sheet-label"], [1, "success-overlay"], [1, "deposit-content"], [1, "slot-panel"], [1, "panel-header"], [1, "panel-subtitle"], [1, "legend"], [1, "legend-item"], [1, "legend-box", "completed"], [1, "legend-box", "available"], [1, "legend-box", "selected"], [1, "loading-slots"], [1, "confirm-panel"], [1, "alert", "alert-error"], [1, "confirm-form"], [1, "form-group"], ["placeholder", "Ex: Poupan\xE7a de janeiro, pr\xEAmio de trabalho...", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "summary-card"], [1, "summary-row"], [1, "summary-label"], [1, "summary-value", "highlight"], [1, "summary-value"], [1, "summary-divider"], [1, "summary-row", "total"], [1, "summary-value", "total-value"], [1, "selected-badge"], [1, "btn", "btn-success", "confirm-btn", 3, "click", "disabled"], [1, "secure-info"], [1, "secure-icon"], [1, "secure-title"], [1, "secure-text"], [1, "success-card"], [1, "success-icon"], [1, "spinner", 2, "margin", "16px auto 0", "border-top-color", "var(--primary-green)", "border-color", "var(--light-green)"], [1, "loading-spinner"], [1, "slots-grid"], [1, "slot", 3, "completed", "available", "selected", "title"], [1, "slot", 3, "click", "title"], [1, "summary-none"], [1, "badge-label"], [1, "badge-amount"], [1, "spinner"]], template: function NewDepositComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275text(3, " \u2190 Voltar ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "h1");
        \u0275\u0275text(6, "Novo Dep\xF3sito");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, NewDepositComponent_Conditional_7_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, NewDepositComponent_Conditional_8_Template, 9, 2, "div", 5);
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "h2");
        \u0275\u0275text(13, "Selecionar N\xFAmero");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 9);
        \u0275\u0275text(15, "Exibindo slots dispon\xEDveis at\xE9 200");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10)(17, "span", 11);
        \u0275\u0275element(18, "span", 12);
        \u0275\u0275text(19, " Conclu\xEDdo ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 11);
        \u0275\u0275element(21, "span", 13);
        \u0275\u0275text(22, " Dispon\xEDvel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 11);
        \u0275\u0275element(24, "span", 14);
        \u0275\u0275text(25, " Selecionado ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(26, NewDepositComponent_Conditional_26_Template, 4, 0, "div", 15)(27, NewDepositComponent_Conditional_27_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 16)(29, "div", 8)(30, "h2");
        \u0275\u0275text(31, "Confirmar Dep\xF3sito");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(32, NewDepositComponent_Conditional_32_Template, 2, 1, "div", 17);
        \u0275\u0275elementStart(33, "div", 18)(34, "div", 19)(35, "label");
        \u0275\u0275text(36, "Nota (Opcional)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "textarea", 20);
        \u0275\u0275twoWayListener("ngModelChange", function NewDepositComponent_Template_textarea_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.note, $event) || (ctx.note = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 21)(39, "div", 22)(40, "span", 23);
        \u0275\u0275text(41, "Slot Selecionado");
        \u0275\u0275elementEnd();
        \u0275\u0275template(42, NewDepositComponent_Conditional_42_Template, 2, 1, "span", 24)(43, NewDepositComponent_Conditional_43_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 22)(45, "span", 23);
        \u0275\u0275text(46, "Valor do Dep\xF3sito");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 25);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 22)(50, "span", 23);
        \u0275\u0275text(51, "Taxa de Transa\xE7\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span", 25);
        \u0275\u0275text(53, "R$0,00");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(54, "div", 26);
        \u0275\u0275elementStart(55, "div", 27)(56, "span", 23);
        \u0275\u0275text(57, "TOTAL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span", 28);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(60, NewDepositComponent_Conditional_60_Template, 5, 1, "div", 29);
        \u0275\u0275elementStart(61, "button", 30);
        \u0275\u0275listener("click", function NewDepositComponent_Template_button_click_61_listener() {
          return ctx.confirm();
        });
        \u0275\u0275template(62, NewDepositComponent_Conditional_62_Template, 2, 0)(63, NewDepositComponent_Conditional_63_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 31)(65, "div", 32);
        \u0275\u0275text(66, "\u{1F512}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div")(68, "div", 33);
        \u0275\u0275text(69, "Transa\xE7\xE3o Segura");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 34);
        \u0275\u0275text(71, "Todos os dados s\xE3o criptografados e protegidos.");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, ctx.spreadsheetId));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(7, ctx.spreadsheetName() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.success() ? 8 : -1);
        \u0275\u0275advance(18);
        \u0275\u0275conditional(26, ctx.loadingSlots() ? 26 : 27);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(32, ctx.error() ? 32 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.note);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(42, ctx.selectedSlot() ? 42 : 43);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.selectedAmount()));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.selectedAmount()));
        \u0275\u0275advance();
        \u0275\u0275conditional(60, ctx.selectedSlot() ? 60 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.selectedSlot() || ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(62, ctx.loading() ? 62 : 63);
      }
    }, dependencies: [CommonModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.deposit-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--background);\n}\n.deposit-header[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid var(--border-color);\n  padding: 16px 28px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  box-shadow: var(--shadow-sm);\n}\n@media (max-width: 768px) {\n  .deposit-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n.back-btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--primary-dark-blue);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: var(--radius-sm);\n  background: var(--light-blue);\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: #c5cae9;\n}\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n  margin-bottom: 2px;\n}\n.sheet-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.success-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  animation: fadeIn 0.3s ease;\n}\n.success-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 48px 40px;\n  text-align: center;\n  max-width: 360px;\n  width: 90%;\n  box-shadow: var(--shadow-lg);\n  animation: fadeIn 0.4s ease;\n}\n.success-card[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  margin-bottom: 20px;\n}\n.success-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--primary-green);\n  margin-bottom: 10px;\n}\n.success-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-secondary);\n}\n.deposit-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 24px;\n  padding: 28px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n@media (max-width: 900px) {\n  .deposit-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 16px;\n  }\n}\n.slot-panel[_ngcontent-%COMP%], .confirm-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-md);\n  overflow: hidden;\n}\n.panel-header[_ngcontent-%COMP%] {\n  padding: 20px 22px 16px;\n  border-bottom: 1px solid var(--border-color);\n}\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--primary-dark-blue);\n  margin-bottom: 4px;\n}\n.panel-header[_ngcontent-%COMP%]   .panel-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 18px;\n  padding: 12px 22px;\n  border-bottom: 1px solid var(--border-color);\n  flex-wrap: wrap;\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.legend[_ngcontent-%COMP%]   .legend-box[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 3px;\n}\n.legend[_ngcontent-%COMP%]   .legend-box.completed[_ngcontent-%COMP%] {\n  background: var(--primary-green);\n}\n.legend[_ngcontent-%COMP%]   .legend-box.available[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border: 1.5px solid #e0e0e0;\n}\n.legend[_ngcontent-%COMP%]   .legend-box.selected[_ngcontent-%COMP%] {\n  background: var(--light-blue);\n  border: 2px dashed var(--primary-dark-blue);\n}\n.loading-slots[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n  gap: 14px;\n}\n.loading-slots[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid var(--light-blue);\n  border-top-color: var(--primary-dark-blue);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.slots-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(20, 1fr);\n  gap: 3px;\n  padding: 16px;\n}\n@media (max-width: 1100px) {\n  .slots-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(15, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .slots-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(10, 1fr);\n  }\n}\n.slot[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9px;\n  font-weight: 700;\n  transition: all 0.15s;\n  border: 2px solid transparent;\n}\n.slot.completed[_ngcontent-%COMP%] {\n  background: var(--primary-green);\n  color: white;\n  border-color: var(--primary-green);\n  cursor: not-allowed;\n  opacity: 0.85;\n}\n.slot.available[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #888;\n  border-color: #e0e0e0;\n  cursor: pointer;\n}\n.slot.available[_ngcontent-%COMP%]:hover {\n  background: var(--light-blue);\n  border-color: var(--primary-dark-blue);\n  color: var(--primary-dark-blue);\n  transform: scale(1.1);\n}\n.slot.selected[_ngcontent-%COMP%] {\n  background: var(--light-blue);\n  color: var(--primary-dark-blue);\n  border: 2px dashed var(--primary-dark-blue);\n  transform: scale(1.1);\n  box-shadow: 0 2px 8px rgba(26, 35, 126, 0.2);\n}\n.confirm-form[_ngcontent-%COMP%] {\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  margin: 16px 22px 0;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: var(--danger);\n  border: 1px solid #ffcdd2;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: var(--background);\n  border-radius: var(--radius-sm);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.summary-row.total[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-dark);\n}\n.summary-value.highlight[_ngcontent-%COMP%] {\n  color: var(--primary-dark-blue);\n  font-size: 16px;\n}\n.summary-value.total-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--primary-green);\n}\n.summary-none[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.summary-divider[_ngcontent-%COMP%] {\n  border-top: 1px dashed var(--border-color);\n}\n.selected-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark-blue),\n      #283593);\n  border-radius: var(--radius-sm);\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  animation: fadeIn 0.3s ease;\n}\n.selected-badge[_ngcontent-%COMP%]   .badge-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.selected-badge[_ngcontent-%COMP%]   .badge-amount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: white;\n}\n.confirm-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  font-size: 16px;\n  border-radius: var(--radius-sm);\n}\n.secure-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--light-green);\n  border-radius: var(--radius-sm);\n  padding: 12px 16px;\n}\n.secure-info[_ngcontent-%COMP%]   .secure-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.secure-info[_ngcontent-%COMP%]   .secure-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary-green);\n  margin-bottom: 2px;\n}\n.secure-info[_ngcontent-%COMP%]   .secure-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--accent-green);\n}\n/*# sourceMappingURL=new-deposit.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDepositComponent, { className: "NewDepositComponent", filePath: "src/app/features/deposit/new-deposit/new-deposit.component.ts", lineNumber: 22 });
})();
export {
  NewDepositComponent
};
//# sourceMappingURL=chunk-STELUERH.js.map
