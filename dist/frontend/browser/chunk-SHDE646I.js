import {
  DepositService
} from "./chunk-7OJRT4KF.js";
import {
  AuthService
} from "./chunk-65PPVMEG.js";
import {
  SpreadsheetService
} from "./chunk-3IZYEN55.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
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
  ɵɵtextInterpolate2
} from "./chunk-CRHN5OWP.js";

// src/app/features/history/history.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/dashboard", a0];
var _c1 = (a0) => ["/deposit/new", a0];
function HistoryComponent_Conditional_7_Template(rf, ctx) {
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
function HistoryComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando hist\xF3rico...");
    \u0275\u0275elementEnd()();
  }
}
function HistoryComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function HistoryComponent_Conditional_65_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Fa\xE7a seu primeiro dep\xF3sito para come\xE7ar!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 31);
    \u0275\u0275text(3, " Fazer Dep\xF3sito ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, ctx_r0.spreadsheetId));
  }
}
function HistoryComponent_Conditional_65_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Nenhum dep\xF3sito com esse filtro.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 32);
    \u0275\u0275listener("click", function HistoryComponent_Conditional_65_Conditional_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.statusFilter.set("all"));
    });
    \u0275\u0275text(3, "Ver todos");
    \u0275\u0275elementEnd();
  }
}
function HistoryComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nenhum dep\xF3sito encontrado");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, HistoryComponent_Conditional_65_Conditional_5_Template, 4, 3)(6, HistoryComponent_Conditional_65_Conditional_6_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(5, ctx_r0.statusFilter() === "all" ? 5 : 6);
  }
}
function HistoryComponent_Conditional_66_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 39)(9, "div", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td")(14, "span", 41);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span", 43);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "button", 44);
    \u0275\u0275listener("click", function HistoryComponent_Conditional_66_For_21_Template_button_click_23_listener() {
      const deposit_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteDeposit(deposit_r4));
    });
    \u0275\u0275text(24, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const deposit_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", deposit_r4.slotNumber, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(deposit_r4.amount));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (deposit_r4.user == null ? null : deposit_r4.user.name) ? deposit_r4.user.name[0].toUpperCase() : ctx_r0.getUserInitials(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((deposit_r4.user == null ? null : deposit_r4.user.name) || ((tmp_14_0 = ctx_r0.currentUser()) == null ? null : tmp_14_0.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(deposit_r4.note || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(deposit_r4.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", deposit_r4.status === "completed")("badge-warning", deposit_r4.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", deposit_r4.status === "completed" ? "Pago" : "Pendente", " ");
  }
}
function HistoryComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "table", 35)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Slot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Quem Depositou");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Nota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "A\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, HistoryComponent_Conditional_66_For_21_Template, 25, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 36);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r0.filtered());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Mostrando ", ctx_r0.filtered().length, " de ", ctx_r0.deposits().length, " dep\xF3sitos ");
  }
}
var HistoryComponent = class _HistoryComponent {
  constructor() {
    this.depositService = inject(DepositService);
    this.spreadsheetService = inject(SpreadsheetService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.authService = inject(AuthService);
    this.currentUser = this.authService.currentUser;
    this.spreadsheetId = "";
    this.spreadsheetName = signal("");
    this.deposits = signal([]);
    this.loading = signal(true);
    this.error = signal("");
    this.statusFilter = signal("all");
    this.sortBy = signal("date");
    this.filtered = computed(() => {
      let list = this.deposits();
      const f = this.statusFilter();
      if (f !== "all") {
        list = list.filter((d) => d.status === f);
      }
      const sort = this.sortBy();
      return [...list].sort((a, b) => {
        if (sort === "date")
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        if (sort === "amount")
          return b.amount - a.amount;
        return a.slotNumber - b.slotNumber;
      });
    });
    this.totalCompleted = computed(() => this.deposits().filter((d) => d.status === "completed").reduce((s, d) => s + d.amount, 0));
    this.totalPending = computed(() => this.deposits().filter((d) => d.status === "pending").reduce((s, d) => s + d.amount, 0));
    this.completedCount = computed(() => this.deposits().filter((d) => d.status === "completed").length);
    this.pendingCount = computed(() => this.deposits().filter((d) => d.status === "pending").length);
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
      next: (s) => this.spreadsheetName.set(s.name)
    });
    this.depositService.getAll(this.spreadsheetId).subscribe({
      next: (deps) => {
        this.deposits.set(deps);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Erro ao carregar hist\xF3rico.");
        this.loading.set(false);
      }
    });
  }
  deleteDeposit(deposit) {
    if (!confirm(`Excluir dep\xF3sito #${deposit.slotNumber}?`))
      return;
    this.depositService.delete(this.spreadsheetId, deposit.id).subscribe({
      next: () => {
        this.deposits.update((deps) => deps.filter((d) => d.id !== deposit.id));
      },
      error: () => alert("Erro ao excluir dep\xF3sito.")
    });
  }
  formatCurrency(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getUserInitials() {
    const user = this.currentUser();
    if (!user)
      return "?";
    return user.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  }
  static {
    this.\u0275fac = function HistoryComponent_Factory(t) {
      return new (t || _HistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryComponent, selectors: [["app-history"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 21, consts: [[1, "history-page"], [1, "page-header"], [1, "back-btn", 3, "routerLink"], [1, "header-info"], [1, "sheet-label"], [1, "header-actions"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "history-content"], [1, "summary-grid"], [1, "summary-card", "green"], [1, "summary-icon"], [1, "summary-info"], [1, "summary-label"], [1, "summary-value"], [1, "summary-count"], [1, "summary-card", "yellow"], [1, "summary-card", "blue"], [1, "filters-bar"], [1, "filter-group"], [1, "filter-label"], [1, "filter-btn", 3, "click"], [1, "sort-group"], [1, "sort-select", 3, "change"], ["value", "date"], ["value", "amount"], ["value", "slot"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "empty-state"], [1, "empty-icon"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-outline", 3, "click"], [1, "table-card"], [1, "table-wrapper"], [1, "deposits-table"], [1, "table-footer"], [1, "slot-badge"], [1, "amount-text"], [1, "user-cell"], [1, "user-avatar-sm"], [1, "note-text"], [1, "date-text"], [1, "badge"], ["title", "Excluir", 1, "action-btn", "delete", 3, "click"]], template: function HistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "h1");
        \u0275\u0275text(6, "Hist\xF3rico de Dep\xF3sitos");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, HistoryComponent_Conditional_7_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
        \u0275\u0275text(10, " + Novo Dep\xF3sito ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10);
        \u0275\u0275text(15, "\u2705");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
        \u0275\u0275text(18, "Total Conclu\xEDdo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 13);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 14);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 15)(24, "div", 10);
        \u0275\u0275text(25, "\u23F3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 11)(27, "span", 12);
        \u0275\u0275text(28, "Total Pendente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 13);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 14);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 16)(34, "div", 10);
        \u0275\u0275text(35, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 11)(37, "span", 12);
        \u0275\u0275text(38, "Total Geral");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 13);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "span", 14);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "div", 17)(44, "div", 18)(45, "span", 19);
        \u0275\u0275text(46, "Filtrar:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 20);
        \u0275\u0275listener("click", function HistoryComponent_Template_button_click_47_listener() {
          return ctx.statusFilter.set("all");
        });
        \u0275\u0275text(48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 20);
        \u0275\u0275listener("click", function HistoryComponent_Template_button_click_49_listener() {
          return ctx.statusFilter.set("completed");
        });
        \u0275\u0275text(50, " Conclu\xEDdos ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 20);
        \u0275\u0275listener("click", function HistoryComponent_Template_button_click_51_listener() {
          return ctx.statusFilter.set("pending");
        });
        \u0275\u0275text(52, " Pendentes ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 21)(54, "span", 19);
        \u0275\u0275text(55, "Ordenar:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "select", 22);
        \u0275\u0275listener("change", function HistoryComponent_Template_select_change_56_listener($event) {
          return ctx.sortBy.set($event.target.value);
        });
        \u0275\u0275elementStart(57, "option", 23);
        \u0275\u0275text(58, "Data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "option", 24);
        \u0275\u0275text(60, "Valor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "option", 25);
        \u0275\u0275text(62, "Slot");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(63, HistoryComponent_Conditional_63_Template, 4, 0, "div", 26)(64, HistoryComponent_Conditional_64_Template, 3, 1)(65, HistoryComponent_Conditional_65_Template, 7, 1)(66, HistoryComponent_Conditional_66_Template, 24, 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, ctx.spreadsheetId));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(7, ctx.spreadsheetName() ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c1, ctx.spreadsheetId));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.totalCompleted()));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.completedCount(), " dep\xF3sitos");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.totalPending()));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.pendingCount(), " dep\xF3sitos");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.totalCompleted() + ctx.totalPending()));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.deposits().length, " dep\xF3sitos");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.statusFilter() === "all");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Todos (", ctx.deposits().length, ") ");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.statusFilter() === "completed");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.statusFilter() === "pending");
        \u0275\u0275advance(12);
        \u0275\u0275conditional(63, ctx.loading() ? 63 : ctx.error() ? 64 : ctx.filtered().length === 0 ? 65 : 66);
      }
    }, dependencies: [CommonModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ["\n\n.history-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--background);\n}\n.page-header[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid var(--border-color);\n  padding: 16px 28px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  box-shadow: var(--shadow-sm);\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n.back-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--primary-dark-blue);\n  padding: 7px 13px;\n  border-radius: var(--radius-sm);\n  background: var(--light-blue);\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: #c5cae9;\n}\n.header-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n  margin-bottom: 2px;\n}\n.sheet-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.header-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.header-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 13px;\n}\n.history-content[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .history-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 22px;\n}\n@media (max-width: 700px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid transparent;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n}\n.summary-card[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.summary-card.green[_ngcontent-%COMP%] {\n  border-color: #a5d6a7;\n}\n.summary-card.green[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  color: var(--primary-green);\n}\n.summary-card.yellow[_ngcontent-%COMP%] {\n  border-color: #ffe082;\n}\n.summary-card.yellow[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.summary-card.blue[_ngcontent-%COMP%] {\n  border-color: #90caf9;\n}\n.summary-card.blue[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  color: var(--primary-dark-blue);\n}\n.filters-bar[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n  box-shadow: var(--shadow-sm);\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%], .sort-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  background: transparent;\n  color: var(--text-secondary);\n  border: 1.5px solid var(--border-color);\n  transition: all 0.2s;\n  cursor: pointer;\n  font-family: inherit;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-dark-blue);\n  color: var(--primary-dark-blue);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-dark-blue);\n  color: white;\n  border-color: var(--primary-dark-blue);\n}\n.sort-select[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1.5px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-family: inherit;\n  color: var(--text-dark);\n  background: white;\n  cursor: pointer;\n  outline: none;\n}\n.sort-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-dark-blue);\n}\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  gap: 14px;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--primary-dark-blue);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid var(--light-blue);\n  border-top-color: var(--primary-dark-blue);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.deposits-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.deposits-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--background);\n  border-bottom: 2px solid var(--border-color);\n}\n.deposits-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.deposits-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color);\n  transition: background 0.15s;\n}\n.deposits-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.deposits-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.deposits-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  vertical-align: middle;\n}\n.slot-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 44px;\n  height: 28px;\n  background: var(--light-blue);\n  color: var(--primary-dark-blue);\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 800;\n}\n.amount-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary-green);\n  font-size: 14px;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-avatar-sm[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: var(--primary-dark-blue);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.note-text[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 12px;\n  max-width: 160px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.date-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 12px;\n  white-space: nowrap;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  padding: 6px;\n  border-radius: var(--radius-sm);\n  transition: background 0.15s;\n  opacity: 0.6;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #ffebee;\n  opacity: 1;\n}\n.table-footer[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 12px;\n  color: var(--text-muted);\n  border-top: 1px solid var(--border-color);\n  background: var(--background);\n}\n/*# sourceMappingURL=history.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryComponent, { className: "HistoryComponent", filePath: "src/app/features/history/history.component.ts", lineNumber: 19 });
})();
export {
  HistoryComponent
};
//# sourceMappingURL=chunk-SHDE646I.js.map
