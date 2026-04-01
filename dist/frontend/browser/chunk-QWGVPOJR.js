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
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CRHN5OWP.js";

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.number;
var _c0 = (a0) => ["/dashboard", a0];
var _c1 = (a0) => ["/history", a0];
var _c2 = (a0) => ["/group", a0];
var _c3 = (a0) => ["/deposit/new", a0];
function DashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28)(1, "span", 7);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Hist\xF3rico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 28)(6, "span", 7);
    \u0275\u0275text(7, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Grupo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, ctx_r0.activeSheetId));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c2, ctx_r0.activeSheetId));
  }
}
function DashboardComponent_Conditional_31_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sheet_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("selected", sheet_r3.id === ctx_r0.activeSheetId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sheet_r3.name);
  }
}
function DashboardComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 29);
    \u0275\u0275listener("change", function DashboardComponent_Conditional_31_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectSpreadsheet(ctx_r0.spreadsheets()[$event.target.selectedIndex]));
    });
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_31_For_2_Template, 2, 2, "option", 30, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.spreadsheets());
  }
}
function DashboardComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.activeSpreadsheet()) == null ? null : tmp_1_0.name);
  }
}
function DashboardComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando dados...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 34);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_39_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadSpreadsheets());
    });
    \u0275\u0275text(4, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function DashboardComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Nenhuma planilha encontrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Crie uma planilha para come\xE7ar o desafio dos 200 dep\xF3sitos!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_40_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createSpreadsheet());
    });
    \u0275\u0275text(8, " Criar Primeira Planilha ");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_41_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("completed", slot_r6.status === "completed")("available", slot_r6.status === "available");
    \u0275\u0275property("title", slot_r6.status === "completed" ? "Slot #" + slot_r6.number + " - " + ctx_r0.formatCurrency((slot_r6.deposit == null ? null : slot_r6.deposit.amount) || slot_r6.number) : "Slot #" + slot_r6.number + " dispon\xEDvel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slot_r6.number, " ");
  }
}
function DashboardComponent_Conditional_41_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275text(1, "Ver todos \u2192");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, ctx_r0.activeSheetId));
  }
}
function DashboardComponent_Conditional_41_Conditional_58_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 73);
    \u0275\u0275text(1, " Fazer Primeiro Dep\xF3sito ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c3, ctx_r0.activeSheetId));
  }
}
function DashboardComponent_Conditional_41_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "p");
    \u0275\u0275text(2, "Nenhum dep\xF3sito registrado ainda.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DashboardComponent_Conditional_41_Conditional_58_Conditional_3_Template, 2, 3, "a", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, ctx_r0.activeSheetId ? 3 : -1);
  }
}
function DashboardComponent_Conditional_41_Conditional_59_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deposit_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(deposit_r7.note);
  }
}
function DashboardComponent_Conditional_41_Conditional_59_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "span", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 78)(5, "span", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DashboardComponent_Conditional_41_Conditional_59_For_2_Conditional_7_Template, 2, 1, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 81)(9, "span", 82);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 83);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 84);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const deposit_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", deposit_r7.slotNumber, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((deposit_r7.user == null ? null : deposit_r7.user.name) || "Voc\xEA");
    \u0275\u0275advance();
    \u0275\u0275conditional(7, deposit_r7.note ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(deposit_r7.amount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(deposit_r7.createdAt));
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-success", deposit_r7.status === "completed")("badge-warning", deposit_r7.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", deposit_r7.status === "completed" ? "Pago" : "Pendente", " ");
  }
}
function DashboardComponent_Conditional_41_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_41_Conditional_59_For_2_Template, 15, 10, "div", 75, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.recentDeposits());
  }
}
function DashboardComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "span", 41);
    \u0275\u0275text(4, "SALDO ACUMULADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6, "\u{1F4B0}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 45);
    \u0275\u0275element(12, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 47)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 48)(19, "div", 40)(20, "span", 41);
    \u0275\u0275text(21, "TOTAL DEP\xD3SITOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 42);
    \u0275\u0275text(23, "\u2705");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 49);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 44);
    \u0275\u0275text(27, "de 200 slots");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 48)(29, "div", 40)(30, "span", 41);
    \u0275\u0275text(31, "M\xC9DIA MENSAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 42);
    \u0275\u0275text(33, "\u{1F4C8}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 43);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 44);
    \u0275\u0275text(37, "por m\xEAs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 50)(39, "div", 51)(40, "h2", 52);
    \u0275\u0275text(41, "Mapa de Dep\xF3sitos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 53)(43, "span", 54);
    \u0275\u0275element(44, "span", 55);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 54);
    \u0275\u0275element(47, "span", 56);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 57);
    \u0275\u0275repeaterCreate(50, DashboardComponent_Conditional_41_For_51_Template, 2, 6, "div", 58, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 59)(53, "div", 50)(54, "div", 51)(55, "h2", 52);
    \u0275\u0275text(56, "Atividade Recente");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, DashboardComponent_Conditional_41_Conditional_57_Template, 2, 3, "a", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, DashboardComponent_Conditional_41_Conditional_58_Template, 4, 1, "div", 61)(59, DashboardComponent_Conditional_41_Conditional_59_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 50)(61, "div", 51)(62, "h2", 52);
    \u0275\u0275text(63, "Seu Desempenho");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 62)(65, "div", 63)(66, "div", 64);
    \u0275\u0275text(67, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 65);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 66);
    \u0275\u0275text(71, "M\xE9dia Mensal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 63)(73, "div", 64);
    \u0275\u0275text(74, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 65);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 66);
    \u0275\u0275text(78, "Total Dep\xF3sitos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 67)(80, "div", 68)(81, "span");
    \u0275\u0275text(82, "Progresso para Meta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "strong");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 69);
    \u0275\u0275element(86, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 70)(88, "span");
    \u0275\u0275text(89, "R$0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 71);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span");
    \u0275\u0275text(93, "R$20.100");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.totalDeposited()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Meta: ", ctx_r0.formatCurrency(ctx_r0.GOAL), "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressPercent(), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.progressPercent(), "% conclu\xEDdo");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.formatCurrency(ctx_r0.GOAL - ctx_r0.totalDeposited()), " restante");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.completedCount());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.monthlyAverage()));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" Conclu\xEDdo (", ctx_r0.completedCount(), ") ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Dispon\xEDvel (", 200 - ctx_r0.completedCount(), ") ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.slots());
    \u0275\u0275advance(7);
    \u0275\u0275conditional(57, ctx_r0.activeSheetId ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(58, ctx_r0.recentDeposits().length === 0 ? 58 : 59);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.monthlyAverage()));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.completedCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.progressPercent(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressPercent(), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.formatCurrency(ctx_r0.GOAL - ctx_r0.totalDeposited()), " restante");
  }
}
function DashboardComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 85)(1, "span");
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Hist\xF3rico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 86)(6, "span");
    \u0275\u0275text(7, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 85)(9, "span");
    \u0275\u0275text(10, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Grupo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c1, ctx_r0.activeSheetId));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c3, ctx_r0.activeSheetId));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c2, ctx_r0.activeSheetId));
  }
}
function DashboardComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1, " + ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c3, ctx_r0.activeSheetId));
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.spreadsheetService = inject(SpreadsheetService);
    this.depositService = inject(DepositService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.currentUser = this.authService.currentUser;
    this.spreadsheets = signal([]);
    this.activeSpreadsheet = signal(null);
    this.deposits = signal([]);
    this.slots = signal([]);
    this.loading = signal(true);
    this.error = signal("");
    this.GOAL = 20100;
    this.totalDeposited = computed(() => this.deposits().reduce((sum, d) => sum + d.amount, 0));
    this.progressPercent = computed(() => Math.min(100, Math.round(this.totalDeposited() / this.GOAL * 100)));
    this.completedCount = computed(() => this.deposits().filter((d) => d.status === "completed").length);
    this.recentDeposits = computed(() => [...this.deposits()].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5));
    this.monthlyAverage = computed(() => {
      const deps = this.deposits();
      if (!deps.length)
        return 0;
      const sorted = [...deps].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      const first = new Date(sorted[0].createdAt);
      const last = new Date(sorted[sorted.length - 1].createdAt);
      const diffMs = last.getTime() - first.getTime();
      const months = Math.max(1, diffMs / (1e3 * 60 * 60 * 24 * 30));
      return Math.round(this.totalDeposited() / months);
    });
  }
  getUserInitials() {
    const user = this.currentUser();
    if (!user)
      return "?";
    return user.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  }
  getSlotClass(slot) {
    return slot.status;
  }
  ngOnInit() {
    const spreadsheetId = this.route.snapshot.paramMap.get("spreadsheetId");
    this.loadSpreadsheets(spreadsheetId);
  }
  loadSpreadsheets(preselectedId) {
    this.loading.set(true);
    this.spreadsheetService.getAll().subscribe({
      next: (sheets) => {
        this.spreadsheets.set(sheets);
        if (sheets.length > 0) {
          const target = preselectedId ? sheets.find((s) => s.id === preselectedId) || sheets[0] : sheets[0];
          this.selectSpreadsheet(target);
        } else {
          this.loading.set(false);
        }
      },
      error: () => {
        this.error.set("Erro ao carregar planilhas.");
        this.loading.set(false);
      }
    });
  }
  selectSpreadsheet(sheet) {
    this.activeSpreadsheet.set(sheet);
    this.router.navigate(["/dashboard", sheet.id], { replaceUrl: true });
    this.loadDeposits(sheet.id);
  }
  loadDeposits(spreadsheetId) {
    this.loading.set(true);
    this.depositService.getAll(spreadsheetId).subscribe({
      next: (deps) => {
        this.deposits.set(deps);
        this.buildSlots(deps);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Erro ao carregar dep\xF3sitos.");
        this.loading.set(false);
      }
    });
  }
  buildSlots(deposits) {
    const completedSlots = new Set(deposits.filter((d) => d.status === "completed").map((d) => d.slotNumber));
    const depositBySlot = new Map(deposits.map((d) => [d.slotNumber, d]));
    const slots = Array.from({ length: 200 }, (_, i) => {
      const num = i + 1;
      return {
        number: num,
        status: completedSlots.has(num) ? "completed" : "available",
        deposit: depositBySlot.get(num)
      };
    });
    this.slots.set(slots);
  }
  formatCurrency(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
  }
  logout() {
    this.authService.logout();
  }
  get activeSheetId() {
    return this.activeSpreadsheet()?.id || "";
  }
  createSpreadsheet() {
    const name = prompt("Nome da planilha:");
    if (!name)
      return;
    this.spreadsheetService.create({ name }).subscribe({
      next: (sheet) => {
        this.spreadsheets.update((sheets) => [...sheets, sheet]);
        this.selectSpreadsheet(sheet);
      },
      error: () => alert("Erro ao criar planilha.")
    });
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 16, consts: [[1, "dashboard-layout"], [1, "sidebar"], [1, "sidebar-brand"], [1, "brand-icon"], [1, "brand-name"], [1, "sidebar-nav"], [1, "nav-item", "active", 3, "routerLink"], [1, "nav-icon"], [1, "sidebar-footer"], [1, "sidebar-user"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-email"], [1, "logout-btn", 3, "click"], [1, "main-content"], [1, "topbar"], [1, "topbar-left"], [1, "page-title"], [1, "sheet-selector"], [1, "topbar-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "topbar-avatar", 3, "title"], [1, "loading-state"], [1, "mobile-nav"], [1, "mobile-nav-item", "active", 3, "routerLink"], [1, "mobile-nav-item", 3, "click"], ["title", "Novo Dep\xF3sito", 1, "fab-btn", 3, "routerLink"], [1, "nav-item", 3, "routerLink"], [1, "sheet-selector", 3, "change"], [3, "selected"], [1, "sheet-name-badge"], [1, "loading-spinner"], [1, "error-state"], [1, "btn", "btn-primary", 3, "click"], [1, "empty-state"], [1, "empty-icon"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "stats-grid"], [1, "stat-card", "balance-card"], [1, "stat-card-header"], [1, "stat-label"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-sub"], [1, "progress-bar-container", 2, "margin-top", "12px"], [1, "progress-bar-fill"], [1, "progress-info"], [1, "stat-card"], [1, "stat-value", "green"], [1, "section-card"], [1, "section-card-header"], [1, "section-card-title"], [1, "map-legend"], [1, "legend-item"], [1, "legend-dot", "green"], [1, "legend-dot", "gray"], [1, "deposit-grid"], [1, "slot-cell", 3, "completed", "available", "title"], [1, "bottom-grid"], [1, "view-all-link", 3, "routerLink"], [1, "empty-list"], [1, "perf-cards"], [1, "perf-card"], [1, "perf-icon"], [1, "perf-value"], [1, "perf-label"], [1, "goal-progress"], [1, "goal-header"], [1, "progress-bar-container"], [1, "goal-labels"], [1, "goal-remaining"], [1, "slot-cell", 3, "title"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "activity-list"], [1, "activity-item"], [1, "activity-slot"], [1, "slot-badge"], [1, "activity-info"], [1, "activity-user"], [1, "activity-note"], [1, "activity-right"], [1, "activity-amount"], [1, "activity-date"], [1, "badge"], [1, "mobile-nav-item", 3, "routerLink"], [1, "mobile-nav-item", "fab", 3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F4B0}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "200 Deposits");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 5)(8, "a", 6)(9, "span", 7);
        \u0275\u0275text(10, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, DashboardComponent_Conditional_13_Template, 10, 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 11)(19, "span", 12);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 13);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "button", 14);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_23_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "\u{1F6AA}");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "main", 15)(27, "header", 16)(28, "div", 17)(29, "h1", 18);
        \u0275\u0275text(30, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, DashboardComponent_Conditional_31_Template, 3, 0, "select", 19)(32, DashboardComponent_Conditional_32_Template, 2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 20)(34, "button", 21);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_34_listener() {
          return ctx.createSpreadsheet();
        });
        \u0275\u0275text(35, " + Nova Planilha ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 22);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(38, DashboardComponent_Conditional_38_Template, 4, 0, "div", 23)(39, DashboardComponent_Conditional_39_Template, 5, 1)(40, DashboardComponent_Conditional_40_Template, 9, 0)(41, DashboardComponent_Conditional_41_Template, 94, 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "nav", 24)(43, "a", 25)(44, "span");
        \u0275\u0275text(45, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span");
        \u0275\u0275text(47, "In\xEDcio");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(48, DashboardComponent_Conditional_48_Template, 13, 9);
        \u0275\u0275elementStart(49, "button", 26);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_49_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(50, "span");
        \u0275\u0275text(51, "\u{1F6AA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span");
        \u0275\u0275text(53, "Sair");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(54, DashboardComponent_Conditional_54_Template, 2, 3, "a", 27);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_6_0;
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, ctx.activeSheetId));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(13, ctx.activeSheetId ? 13 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.getUserInitials());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_3_0 = ctx.currentUser()) == null ? null : tmp_3_0.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_4_0 = ctx.currentUser()) == null ? null : tmp_4_0.email);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(31, ctx.spreadsheets().length > 1 ? 31 : ctx.activeSpreadsheet() ? 32 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275propertyInterpolate("title", (tmp_6_0 = ctx.currentUser()) == null ? null : tmp_6_0.name);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.getUserInitials(), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(38, ctx.loading() ? 38 : ctx.error() ? 39 : !ctx.activeSpreadsheet() ? 40 : 41);
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, ctx.activeSheetId));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(48, ctx.activeSheetId ? 48 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(54, ctx.activeSheetId ? 54 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ["\n\n.dashboard-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  min-height: 100vh;\n  background: var(--background);\n}\n@media (max-width: 900px) {\n  .dashboard-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding-bottom: 72px;\n  }\n}\n.sidebar[_ngcontent-%COMP%] {\n  background: var(--primary-dark-blue);\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  overflow-y: auto;\n  z-index: 10;\n}\n@media (max-width: 900px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 24px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.sidebar-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.sidebar-brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.65);\n  transition: all 0.2s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: white;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  color: white;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sidebar-user[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  overflow: hidden;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 16px;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: var(--radius-sm);\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: white;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding: 0 0 40px;\n  overflow-x: hidden;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 28px;\n  background: white;\n  border-bottom: 1px solid var(--border-color);\n  gap: 16px;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .topbar[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n}\n.sheet-selector[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1.5px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  color: var(--primary-dark-blue);\n  background: white;\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: 500;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.sheet-selector[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-dark-blue);\n}\n.sheet-name-badge[_ngcontent-%COMP%] {\n  background: var(--light-blue);\n  color: var(--primary-dark-blue);\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-left: auto;\n}\n.topbar-right[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 13px;\n}\n.topbar-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: var(--primary-dark-blue);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 16px;\n  padding: 40px;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 4px solid var(--light-blue);\n  border-top-color: var(--primary-dark-blue);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--primary-dark-blue);\n}\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 13px 28px;\n  font-size: 15px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 20px;\n  padding: 24px 28px;\n}\n@media (max-width: 900px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    padding: 16px;\n  }\n}\n@media (max-width: 500px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  padding: 20px 22px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid rgba(26, 35, 126, 0.06);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.balance-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark-blue),\n      #283593);\n  color: white;\n}\n.balance-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.balance-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: white;\n}\n.balance-card[_ngcontent-%COMP%]   .stat-sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.balance-card[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.balance-card[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n.balance-card[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   .progress-bar-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent-green),\n      #66bb6a);\n}\n.stat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n  line-height: 1.2;\n  margin-bottom: 4px;\n}\n.stat-value.green[_ngcontent-%COMP%] {\n  color: var(--primary-green);\n}\n@media (max-width: 768px) {\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.stat-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: var(--text-secondary);\n  margin-top: 6px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid rgba(26, 35, 126, 0.06);\n  margin: 0 28px 20px;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .section-card[_ngcontent-%COMP%] {\n    margin: 0 16px 16px;\n  }\n}\n.section-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px 14px;\n  border-bottom: 1px solid var(--border-color);\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.section-card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--primary-dark-blue);\n}\n.map-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.map-legend[_ngcontent-%COMP%]   .legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n}\n.map-legend[_ngcontent-%COMP%]   .legend-dot.green[_ngcontent-%COMP%] {\n  background: var(--primary-green);\n}\n.map-legend[_ngcontent-%COMP%]   .legend-dot.gray[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n}\n.view-all-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--primary-dark-blue);\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.view-all-link[_ngcontent-%COMP%]:hover {\n  color: var(--accent-green);\n}\n.deposit-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(20, 1fr);\n  gap: 4px;\n  padding: 18px;\n}\n@media (max-width: 900px) {\n  .deposit-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(10, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .deposit-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(8, 1fr);\n  }\n}\n.slot-cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.15s;\n  border: 1.5px solid transparent;\n}\n.slot-cell.completed[_ngcontent-%COMP%] {\n  background: var(--primary-green);\n  color: white;\n  border-color: var(--primary-green);\n}\n.slot-cell.completed[_ngcontent-%COMP%]:hover {\n  background: var(--accent-green);\n  transform: scale(1.15);\n}\n.slot-cell.available[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: var(--text-muted);\n  border-color: #e0e0e0;\n}\n.slot-cell.available[_ngcontent-%COMP%]:hover {\n  background: var(--light-blue);\n  border-color: var(--primary-dark-blue);\n  color: var(--primary-dark-blue);\n}\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n  margin: 0 28px 20px;\n}\n@media (max-width: 900px) {\n  .bottom-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    margin: 0 16px 16px;\n  }\n}\n.bottom-grid[_ngcontent-%COMP%]   .section-card[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 0;\n  border-right: none;\n}\n.bottom-grid[_ngcontent-%COMP%]   .section-card[_ngcontent-%COMP%]:first-child {\n  border-radius: var(--radius-md) 0 0 var(--radius-md);\n}\n.bottom-grid[_ngcontent-%COMP%]   .section-card[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 var(--radius-md) var(--radius-md) 0;\n  border-right: 1px solid rgba(26, 35, 126, 0.06);\n}\n@media (max-width: 900px) {\n  .bottom-grid[_ngcontent-%COMP%]   .section-card[_ngcontent-%COMP%] {\n    border-right: 1px solid rgba(26, 35, 126, 0.06);\n    border-radius: var(--radius-md) !important;\n    margin-bottom: 16px;\n  }\n}\n.empty-list[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.activity-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 22px;\n  border-bottom: 1px solid var(--border-color);\n  transition: background 0.15s;\n}\n.activity-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.activity-item[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.activity-slot[_ngcontent-%COMP%]   .slot-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  background: var(--light-blue);\n  color: var(--primary-dark-blue);\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.activity-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.activity-info[_ngcontent-%COMP%]   .activity-user[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-dark);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.activity-info[_ngcontent-%COMP%]   .activity-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.activity-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-shrink: 0;\n}\n.activity-right[_ngcontent-%COMP%]   .activity-amount[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--primary-green);\n}\n.activity-right[_ngcontent-%COMP%]   .activity-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.perf-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  padding: 18px 22px 16px;\n}\n.perf-card[_ngcontent-%COMP%] {\n  background: var(--background);\n  border-radius: var(--radius-sm);\n  padding: 16px;\n  text-align: center;\n}\n.perf-card[_ngcontent-%COMP%]   .perf-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 8px;\n}\n.perf-card[_ngcontent-%COMP%]   .perf-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n  margin-bottom: 4px;\n}\n.perf-card[_ngcontent-%COMP%]   .perf-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.goal-progress[_ngcontent-%COMP%] {\n  padding: 0 22px 20px;\n}\n.goal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n.goal-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-dark-blue);\n  font-weight: 700;\n}\n.goal-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 6px;\n}\n.goal-labels[_ngcontent-%COMP%]   .goal-remaining[_ngcontent-%COMP%] {\n  color: var(--primary-dark-blue);\n  font-weight: 600;\n}\n.mobile-nav[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 68px;\n  background: white;\n  border-top: 1px solid var(--border-color);\n  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);\n  z-index: 50;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 8px;\n}\n@media (max-width: 900px) {\n  .mobile-nav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.mobile-nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-muted);\n  background: none;\n  border: none;\n  padding: 6px 10px;\n  border-radius: var(--radius-sm);\n  transition: color 0.2s;\n  cursor: pointer;\n  font-family: inherit;\n}\n.mobile-nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 20px;\n}\n.mobile-nav-item.active[_ngcontent-%COMP%] {\n  color: var(--primary-dark-blue);\n}\n.mobile-nav-item[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark-blue);\n}\n.mobile-nav-item.fab[_ngcontent-%COMP%] {\n  background: var(--primary-dark-blue);\n  color: white;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  font-size: 24px;\n  box-shadow: 0 4px 16px rgba(26, 35, 126, 0.35);\n}\n.mobile-nav-item.fab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 24px;\n}\n.fab-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  width: 56px;\n  height: 56px;\n  background: var(--primary-dark-blue);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 300;\n  box-shadow: 0 6px 24px rgba(26, 35, 126, 0.4);\n  z-index: 40;\n  transition: all 0.2s;\n  text-decoration: none;\n  line-height: 1;\n}\n.fab-btn[_ngcontent-%COMP%]:hover {\n  background: #283593;\n  transform: scale(1.1);\n  box-shadow: 0 8px 32px rgba(26, 35, 126, 0.5);\n}\n@media (max-width: 900px) {\n  .fab-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 24 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-QWGVPOJR.js.map
