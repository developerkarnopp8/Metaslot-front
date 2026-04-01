import {
  AuthService
} from "./chunk-65PPVMEG.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CRHN5OWP.js";

// src/app/features/group/group.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/dashboard", a0];
function GroupComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.spreadsheet().name);
  }
}
function GroupComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando grupo...");
    \u0275\u0275elementEnd()();
  }
}
function GroupComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function GroupComponent_Conditional_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2705 Copiado! ");
  }
}
function GroupComponent_Conditional_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F4CB} Copiar ");
  }
}
function GroupComponent_Conditional_10_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function GroupComponent_Conditional_10_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editing.set(true));
    });
    \u0275\u0275text(1, " \u270F\uFE0F Editar ");
    \u0275\u0275elementEnd();
  }
}
function GroupComponent_Conditional_10_Conditional_25_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
    \u0275\u0275text(1, " Salvando... ");
  }
}
function GroupComponent_Conditional_10_Conditional_25_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 Salvar ");
  }
}
function GroupComponent_Conditional_10_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 24)(2, "label");
    \u0275\u0275text(3, "Nome da Planilha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function GroupComponent_Conditional_10_Conditional_25_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editName, $event) || (ctx_r0.editName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24)(6, "label");
    \u0275\u0275text(7, "Descri\xE7\xE3o (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 26);
    \u0275\u0275twoWayListener("ngModelChange", function GroupComponent_Conditional_10_Conditional_25_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editDescription, $event) || (ctx_r0.editDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 27)(10, "button", 28);
    \u0275\u0275listener("click", function GroupComponent_Conditional_10_Conditional_25_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveEdit());
    });
    \u0275\u0275template(11, GroupComponent_Conditional_10_Conditional_25_Conditional_11_Template, 2, 0)(12, GroupComponent_Conditional_10_Conditional_25_Conditional_12_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 29);
    \u0275\u0275listener("click", function GroupComponent_Conditional_10_Conditional_25_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editing.set(false));
    });
    \u0275\u0275text(14, "Cancelar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editDescription);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(11, ctx_r0.saving() ? 11 : 12);
  }
}
function GroupComponent_Conditional_10_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "span", 33);
    \u0275\u0275text(3, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "span", 33);
    \u0275\u0275text(8, "Descri\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 32)(12, "span", 33);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 35);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 32)(17, "span", 33);
    \u0275\u0275text(18, "Seu Papel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 36);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.spreadsheet()) == null ? null : tmp_2_0.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r0.spreadsheet()) == null ? null : tmp_3_0.description) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r0.spreadsheet()) == null ? null : tmp_4_0.isActive) ? "Ativo" : "Inativo");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getRoleLabel(((tmp_5_0 = ctx_r0.spreadsheet()) == null ? null : tmp_5_0.memberRole) || "viewer"));
  }
}
function GroupComponent_Conditional_10_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p");
    \u0275\u0275text(2, "Nenhum membro ainda. Compartilhe o link de convite!");
    \u0275\u0275elementEnd()();
  }
}
function GroupComponent_Conditional_10_Conditional_32_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function GroupComponent_Conditional_10_Conditional_32_For_2_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const member_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeMember(member_r6));
    });
    \u0275\u0275text(1, " \u2715 ");
    \u0275\u0275elementEnd();
  }
}
function GroupComponent_Conditional_10_Conditional_32_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 43)(9, "span", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, GroupComponent_Conditional_10_Conditional_32_For_2_Conditional_13_Template, 2, 0, "button", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getMemberInitials(member_r6.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-info", member_r6.role === "owner")("badge-success", member_r6.role === "editor")("badge-warning", member_r6.role === "viewer");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getRoleLabel(member_r6.role), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Desde ", ctx_r0.formatDate(member_r6.joinedAt), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(13, ctx_r0.isOwner() && member_r6.role !== "owner" ? 13 : -1);
  }
}
function GroupComponent_Conditional_10_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275repeaterCreate(1, GroupComponent_Conditional_10_Conditional_32_For_2_Template, 14, 12, "div", 38, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.members());
  }
}
function GroupComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h2");
    \u0275\u0275text(4, "\u{1F517} Convidar Membros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Compartilhe o link abaixo para convidar pessoas para o grupo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11)(8, "div", 12);
    \u0275\u0275element(9, "input", 13);
    \u0275\u0275elementStart(10, "button", 14);
    \u0275\u0275listener("click", function GroupComponent_Conditional_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copyShareLink());
    });
    \u0275\u0275template(11, GroupComponent_Conditional_10_Conditional_11_Template, 1, 0)(12, GroupComponent_Conditional_10_Conditional_12_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 15);
    \u0275\u0275text(14, " Qualquer pessoa com este link pode entrar no grupo como membro. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 16)(16, "span", 17);
    \u0275\u0275text(17, "Token de Acesso:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "code", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 9)(21, "div", 19)(22, "h2");
    \u0275\u0275text(23, "\u{1F4CB} Informa\xE7\xF5es da Planilha");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, GroupComponent_Conditional_10_Conditional_24_Template, 2, 0, "button", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, GroupComponent_Conditional_10_Conditional_25_Template, 15, 4, "div", 21)(26, GroupComponent_Conditional_10_Conditional_26_Template, 21, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 9)(28, "div", 10)(29, "h2");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, GroupComponent_Conditional_10_Conditional_31_Template, 3, 0, "div", 22)(32, GroupComponent_Conditional_10_Conditional_32_Template, 3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r0.shareUrl());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(11, ctx_r0.copied() ? 11 : 12);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.spreadsheet()) == null ? null : tmp_3_0.shareToken);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(24, ctx_r0.isOwner() && !ctx_r0.editing() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(25, ctx_r0.editing() ? 25 : 26);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u{1F465} Membros (", ctx_r0.members().length, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(31, ctx_r0.members().length === 0 ? 31 : 32);
  }
}
var GroupComponent = class _GroupComponent {
  constructor() {
    this.spreadsheetService = inject(SpreadsheetService);
    this.authService = inject(AuthService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.currentUser = this.authService.currentUser;
    this.spreadsheetId = "";
    this.spreadsheet = signal(null);
    this.members = signal([]);
    this.loading = signal(true);
    this.error = signal("");
    this.copied = signal(false);
    this.editing = signal(false);
    this.editName = "";
    this.editDescription = "";
    this.saving = signal(false);
    this.isOwner = computed(() => {
      const user = this.currentUser();
      const sheet = this.spreadsheet();
      return user && sheet && (sheet.ownerId === user.id || sheet.memberRole === "owner");
    });
    this.shareUrl = computed(() => {
      const sheet = this.spreadsheet();
      if (!sheet)
        return "";
      return `${window.location.origin}/join/${sheet.shareToken}`;
    });
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
    this.loading.set(true);
    this.spreadsheetService.getById(this.spreadsheetId).subscribe({
      next: (sheet) => {
        this.spreadsheet.set(sheet);
        this.editName = sheet.name;
        this.editDescription = sheet.description || "";
        this.loadMembers();
      },
      error: () => {
        this.error.set("Erro ao carregar grupo.");
        this.loading.set(false);
      }
    });
  }
  loadMembers() {
    this.spreadsheetService.getMembers(this.spreadsheetId).subscribe({
      next: (members) => {
        this.members.set(members);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  copyShareLink() {
    navigator.clipboard.writeText(this.shareUrl()).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    });
  }
  removeMember(member) {
    if (!confirm(`Remover ${member.name} do grupo?`))
      return;
    this.spreadsheetService.removeMember(this.spreadsheetId, member.id).subscribe({
      next: () => {
        this.members.update((list) => list.filter((m) => m.id !== member.id));
      },
      error: () => alert("Erro ao remover membro.")
    });
  }
  saveEdit() {
    if (!this.editName.trim())
      return;
    this.saving.set(true);
    this.spreadsheetService.update(this.spreadsheetId, {
      name: this.editName,
      description: this.editDescription
    }).subscribe({
      next: (sheet) => {
        this.spreadsheet.set(sheet);
        this.editing.set(false);
        this.saving.set(false);
      },
      error: () => {
        alert("Erro ao salvar.");
        this.saving.set(false);
      }
    });
  }
  getMemberInitials(name) {
    return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  }
  getRoleLabel(role) {
    const map = {
      owner: "Propriet\xE1rio",
      editor: "Editor",
      viewer: "Visualizador"
    };
    return map[role] || role;
  }
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
  }
  static {
    this.\u0275fac = function GroupComponent_Factory(t) {
      return new (t || _GroupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupComponent, selectors: [["app-group"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 5, consts: [[1, "group-page"], [1, "page-header"], [1, "back-btn", 3, "routerLink"], [1, "header-info"], [1, "sheet-label"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "group-content"], [1, "group-card"], [1, "card-header"], [1, "share-block"], [1, "share-url-row"], ["type", "text", "readonly", "", 1, "share-input", 3, "value"], [1, "btn", "btn-primary", "copy-btn", 3, "click"], [1, "share-hint"], [1, "token-display"], [1, "token-label"], [1, "token-value"], [1, "card-header-row"], [1, "btn", "btn-outline", "btn-sm"], [1, "edit-form"], [1, "empty-members"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "form-group"], ["type", "text", "placeholder", "Nome", 3, "ngModelChange", "ngModel"], ["placeholder", "Descri\xE7\xE3o do grupo...", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "edit-actions"], [1, "btn", "btn-success", 3, "click", "disabled"], [1, "btn", "btn-outline", 3, "click"], [1, "spinner"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "badge", "badge-success"], [1, "badge", "badge-info"], [1, "members-list"], [1, "member-row"], [1, "member-avatar"], [1, "member-info"], [1, "member-name"], [1, "member-email"], [1, "member-meta"], [1, "badge"], [1, "member-joined"], ["title", "Remover membro", 1, "remove-btn"], ["title", "Remover membro", 1, "remove-btn", 3, "click"]], template: function GroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "h1");
        \u0275\u0275text(6, "Gerenciar Grupo");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, GroupComponent_Conditional_7_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, GroupComponent_Conditional_8_Template, 4, 0, "div", 5)(9, GroupComponent_Conditional_9_Template, 3, 1)(10, GroupComponent_Conditional_10_Template, 33, 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, ctx.spreadsheetId));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(7, ctx.spreadsheet() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.loading() ? 8 : ctx.error() ? 9 : 10);
      }
    }, dependencies: [CommonModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.group-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--background);\n}\n.page-header[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid var(--border-color);\n  padding: 16px 28px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  box-shadow: var(--shadow-sm);\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n.back-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--primary-dark-blue);\n  padding: 7px 13px;\n  border-radius: var(--radius-sm);\n  background: var(--light-blue);\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: #c5cae9;\n}\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n  margin-bottom: 2px;\n}\n.sheet-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid var(--light-blue);\n  border-top-color: var(--primary-dark-blue);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.group-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n@media (max-width: 768px) {\n  .group-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.group-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  border: 1px solid rgba(26, 35, 126, 0.06);\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid var(--border-color);\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--primary-dark-blue);\n  margin-bottom: 4px;\n}\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.card-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.card-header-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--primary-dark-blue);\n}\n.card-header-row[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 7px 13px;\n  font-size: 13px;\n}\n.share-block[_ngcontent-%COMP%] {\n  padding: 18px 24px 14px;\n}\n.share-url-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n@media (max-width: 600px) {\n  .share-url-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.share-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 14px;\n  border: 2px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  color: var(--text-secondary);\n  background: var(--background);\n  font-family: monospace;\n  outline: none;\n  cursor: text;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  font-size: 14px;\n  flex-shrink: 0;\n  min-width: 110px;\n  transition: all 0.2s;\n}\n.share-hint[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.token-display[_ngcontent-%COMP%] {\n  padding: 10px 24px 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.token-display[_ngcontent-%COMP%]   .token-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.token-display[_ngcontent-%COMP%]   .token-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: monospace;\n  background: var(--background);\n  padding: 4px 10px;\n  border-radius: 4px;\n  color: var(--primary-dark-blue);\n  border: 1px solid var(--border-color);\n  letter-spacing: 1px;\n}\n.info-grid[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n}\n@media (max-width: 500px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-dark);\n  font-weight: 500;\n}\n.edit-form[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 6px;\n}\n.edit-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  font-size: 14px;\n}\n.empty-members[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n}\n.empty-members[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.members-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.member-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 24px;\n  border-bottom: 1px solid var(--border-color);\n  transition: background 0.15s;\n}\n.member-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.member-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.member-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background: var(--primary-dark-blue);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.member-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.member-info[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-dark);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.member-info[_ngcontent-%COMP%]   .member-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.member-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.member-meta[_ngcontent-%COMP%]   .member-joined[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: 1.5px solid var(--border-color);\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-muted);\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  background: #ffebee;\n  border-color: var(--danger);\n  color: var(--danger);\n}\n/*# sourceMappingURL=group.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupComponent, { className: "GroupComponent", filePath: "src/app/features/group/group.component.ts", lineNumber: 16 });
})();
export {
  GroupComponent
};
//# sourceMappingURL=chunk-6FAOAAPN.js.map
