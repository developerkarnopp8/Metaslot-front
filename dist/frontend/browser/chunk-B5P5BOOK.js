import {
  CommonModule,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CRHN5OWP.js";

// src/app/features/landing/landing.component.ts
var _forTrack0 = ($index, $item) => $item.number;
var _forTrack1 = ($index, $item) => $item.title;
function LandingComponent_For_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r1 = ctx.$implicit;
    \u0275\u0275classProp("completed", slot_r1.status === "completed")("available", slot_r1.status === "available");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slot_r1.number, " ");
  }
}
function LandingComponent_For_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 83);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r2.description);
  }
}
function LandingComponent_For_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 85);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 86);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r3.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r3.description);
  }
}
var LandingComponent = class _LandingComponent {
  constructor() {
    this.menuOpen = false;
    this.previewSlots = Array.from({ length: 15 }, (_, i) => ({
      number: i + 1,
      status: i < 9 ? "completed" : "available"
    }));
    this.steps = [
      {
        number: "01",
        title: "Crie sua Planilha",
        description: "Configure seu desafio dos 200 dep\xF3sitos e convide amigos para participar juntos."
      },
      {
        number: "02",
        title: "Escolha o N\xFAmero",
        description: "Selecione um n\xFAmero de 1 a 200. O valor do dep\xF3sito corresponde ao n\xFAmero escolhido."
      },
      {
        number: "03",
        title: "Realize o Dep\xF3sito",
        description: "Confirme seu dep\xF3sito e acompanhe o progresso em tempo real com sua equipe."
      },
      {
        number: "04",
        title: "Alcance a Meta",
        description: "Complete todos os 200 dep\xF3sitos e acumule R$20.100,00 juntos!"
      }
    ];
    this.features = [
      {
        icon: "\u{1F465}",
        title: "Gest\xE3o Colaborativa",
        description: "Convide membros, compartilhe progresso e alcance metas financeiras em grupo de forma organizada."
      },
      {
        icon: "\u{1F4CA}",
        title: "Progresso em Tempo Real",
        description: "Visualize o mapa completo dos 200 slots, acompanhe quem depositou e quanto falta para a meta."
      },
      {
        icon: "\u{1F512}",
        title: "Seguran\xE7a Total",
        description: "Autentica\xE7\xE3o segura, dados criptografados e controle de acesso por pap\xE9is (owner, editor, viewer)."
      }
    ];
  }
  static {
    this.\u0275fac = function LandingComponent_Factory(t) {
      return new (t || _LandingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 162, vars: 2, consts: [[1, "navbar"], [1, "navbar-container"], [1, "navbar-brand"], [1, "brand-icon"], [1, "brand-text"], [1, "navbar-links"], ["href", "#how-it-works", 1, "nav-link"], ["href", "#features", 1, "nav-link"], ["href", "#steps", 1, "nav-link"], ["href", "#cta", 1, "nav-link"], [1, "navbar-actions"], ["routerLink", "/login", 1, "btn", "btn-outline", "btn-sm"], ["routerLink", "/register", 1, "btn", "btn-primary", "btn-sm"], [1, "mobile-menu-btn", 3, "click"], [1, "mobile-menu"], ["href", "#how-it-works", 1, "nav-link", 3, "click"], ["href", "#features", 1, "nav-link", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-outline", 3, "click"], ["routerLink", "/register", 1, "btn", "btn-primary", 3, "click"], [1, "hero"], [1, "hero-container"], [1, "hero-content"], [1, "hero-badge"], [1, "badge-dot"], [1, "hero-title"], [1, "highlight"], [1, "hero-subtitle"], [1, "hero-actions"], ["routerLink", "/register", 1, "btn", "btn-primary", "btn-lg"], ["routerLink", "/login", 1, "btn", "btn-outline", "btn-lg"], [1, "hero-stats"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], [1, "stat-divider"], [1, "hero-visual"], [1, "preview-card"], [1, "preview-header"], [1, "preview-header-left"], [1, "preview-avatar"], [1, "preview-label"], [1, "preview-amount"], [1, "preview-percent"], [1, "preview-progress"], [1, "progress-bar-container"], [1, "progress-bar-fill", 2, "width", "62%"], [1, "progress-labels"], [1, "preview-grid-title"], [1, "preview-grid"], [1, "slot", 3, "completed", "available"], [1, "slot", "slot-dots"], [1, "preview-legend"], [1, "legend-item"], [1, "legend-dot", "completed"], [1, "legend-dot", "available"], [1, "floating-badge", "badge-1"], [1, "floating-badge", "badge-2"], ["id", "features", 1, "features"], [1, "section-container"], [1, "section-header"], [1, "section-title"], [1, "section-subtitle"], [1, "features-grid"], [1, "feature-card"], ["id", "how-it-works", 1, "how-it-works"], [1, "section-title", "light"], [1, "section-subtitle", "light"], ["id", "steps", 1, "steps-grid"], [1, "step-card"], ["id", "cta", 1, "cta-section"], [1, "cta-container"], [1, "cta-title"], [1, "cta-subtitle"], [1, "cta-actions"], ["routerLink", "/register", 1, "btn", "btn-cta-primary", "btn-lg"], ["routerLink", "/login", 1, "btn", "btn-cta-outline", "btn-lg"], [1, "footer"], [1, "footer-container"], [1, "footer-brand"], [1, "footer-text"], [1, "slot"], [1, "feature-icon"], [1, "feature-title"], [1, "feature-description"], [1, "step-number"], [1, "step-title"], [1, "step-description"]], template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F4B0}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "200 ");
        \u0275\u0275elementStart(7, "strong");
        \u0275\u0275text(8, "Deposits");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 5)(10, "a", 6);
        \u0275\u0275text(11, "Como Funciona");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 7);
        \u0275\u0275text(13, "Benef\xEDcios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 8);
        \u0275\u0275text(15, "Desafio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 9);
        \u0275\u0275text(17, "Comunidade");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10)(19, "a", 11);
        \u0275\u0275text(20, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "a", 12);
        \u0275\u0275text(22, "Sign Up");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 13);
        \u0275\u0275listener("click", function LandingComponent_Template_button_click_23_listener() {
          return ctx.menuOpen = !ctx.menuOpen;
        });
        \u0275\u0275element(24, "span")(25, "span")(26, "span");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 14)(28, "a", 15);
        \u0275\u0275listener("click", function LandingComponent_Template_a_click_28_listener() {
          return ctx.menuOpen = false;
        });
        \u0275\u0275text(29, "Como Funciona");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "a", 16);
        \u0275\u0275listener("click", function LandingComponent_Template_a_click_30_listener() {
          return ctx.menuOpen = false;
        });
        \u0275\u0275text(31, "Benef\xEDcios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "a", 17);
        \u0275\u0275listener("click", function LandingComponent_Template_a_click_32_listener() {
          return ctx.menuOpen = false;
        });
        \u0275\u0275text(33, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "a", 18);
        \u0275\u0275listener("click", function LandingComponent_Template_a_click_34_listener() {
          return ctx.menuOpen = false;
        });
        \u0275\u0275text(35, "Sign Up");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "section", 19)(37, "div", 20)(38, "div", 21)(39, "div", 22);
        \u0275\u0275element(40, "span", 23);
        \u0275\u0275text(41, " Desafio Financeiro Colaborativo ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "h1", 24);
        \u0275\u0275text(43, " O Desafio dos");
        \u0275\u0275element(44, "br");
        \u0275\u0275elementStart(45, "span", 25);
        \u0275\u0275text(46, "200 Dep\xF3sitos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "p", 26);
        \u0275\u0275text(48, " Transforme o h\xE1bito de poupar em uma jornada colaborativa. Complete os 200 slots e acumule ");
        \u0275\u0275elementStart(49, "strong");
        \u0275\u0275text(50, "R$20.100,00");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " com sua equipe. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 27)(53, "a", 28)(54, "span");
        \u0275\u0275text(55, "\u{1F680}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " Come\xE7ar Agora ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "a", 29);
        \u0275\u0275text(58, " Fazer Login ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 30)(60, "div", 31)(61, "span", 32);
        \u0275\u0275text(62, "200");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "span", 33);
        \u0275\u0275text(64, "Slots");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(65, "div", 34);
        \u0275\u0275elementStart(66, "div", 31)(67, "span", 32);
        \u0275\u0275text(68, "R$20.100");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "span", 33);
        \u0275\u0275text(70, "Meta Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(71, "div", 34);
        \u0275\u0275elementStart(72, "div", 31)(73, "span", 32);
        \u0275\u0275text(74, "\u221E");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "span", 33);
        \u0275\u0275text(76, "Membros");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "div", 35)(78, "div", 36)(79, "div", 37)(80, "div", 38)(81, "div", 39);
        \u0275\u0275text(82, "G");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div")(84, "div", 40);
        \u0275\u0275text(85, "PROGRESSO DO GRUPO");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 41);
        \u0275\u0275text(87, "R$12.450,00");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "div", 42);
        \u0275\u0275text(89, "62%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 43)(91, "div", 44);
        \u0275\u0275element(92, "div", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 46)(94, "span");
        \u0275\u0275text(95, "R$0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "span");
        \u0275\u0275text(97, "Meta: R$20.100");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "div", 47);
        \u0275\u0275text(99, "Mapa de Dep\xF3sitos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 48);
        \u0275\u0275repeaterCreate(101, LandingComponent_For_102_Template, 2, 5, "div", 49, _forTrack0);
        \u0275\u0275elementStart(103, "div", 50);
        \u0275\u0275text(104, "...");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 51)(106, "span", 52);
        \u0275\u0275element(107, "span", 53);
        \u0275\u0275text(108, " Conclu\xEDdo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "span", 52);
        \u0275\u0275element(110, "span", 54);
        \u0275\u0275text(111, " Dispon\xEDvel");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(112, "div", 55)(113, "span");
        \u0275\u0275text(114, "\u2705");
        \u0275\u0275elementEnd();
        \u0275\u0275text(115, " Slot #47 pago! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 56)(117, "span");
        \u0275\u0275text(118, "\u{1F465}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, " 3 membros ativos ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(120, "section", 57)(121, "div", 58)(122, "div", 59)(123, "h2", 60);
        \u0275\u0275text(124, "Arquitetura de Crescimento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "p", 61);
        \u0275\u0275text(126, "Tudo que voc\xEA precisa para gerenciar seu desafio financeiro em grupo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(127, "div", 62);
        \u0275\u0275repeaterCreate(128, LandingComponent_For_129_Template, 7, 3, "div", 63, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(130, "section", 64)(131, "div", 58)(132, "div", 59)(133, "h2", 65);
        \u0275\u0275text(134, "Como Funciona");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "p", 66);
        \u0275\u0275text(136, "Quatro passos simples para come\xE7ar sua jornada financeira");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "div", 67);
        \u0275\u0275repeaterCreate(138, LandingComponent_For_139_Template, 7, 3, "div", 68, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(140, "section", 69)(141, "div", 70)(142, "h2", 71);
        \u0275\u0275text(143, "Pronto para a meta de R$20k?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "p", 72);
        \u0275\u0275text(145, " Junte-se a milhares de pessoas que j\xE1 est\xE3o transformando suas finan\xE7as com o Desafio dos 200 Dep\xF3sitos. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 73)(147, "a", 74);
        \u0275\u0275text(148, " Criar Conta Gr\xE1tis ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "a", 75);
        \u0275\u0275text(150, " J\xE1 tenho conta ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(151, "footer", 76)(152, "div", 77)(153, "div", 78)(154, "span", 3);
        \u0275\u0275text(155, "\u{1F4B0}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "span", 4);
        \u0275\u0275text(157, "200 ");
        \u0275\u0275elementStart(158, "strong");
        \u0275\u0275text(159, "Deposits");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(160, "p", 79);
        \u0275\u0275text(161, " \xA9 2026 200 Deposits. Transformando h\xE1bitos financeiros colaborativamente. ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(27);
        \u0275\u0275classProp("open", ctx.menuOpen);
        \u0275\u0275advance(74);
        \u0275\u0275repeater(ctx.previewSlots);
        \u0275\u0275advance(27);
        \u0275\u0275repeater(ctx.features);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.steps);
      }
    }, dependencies: [RouterLink, CommonModule], styles: ['\n\n.navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(255, 255, 255, 0.97);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(26, 35, 126, 0.08);\n  box-shadow: 0 2px 8px rgba(26, 35, 126, 0.06);\n}\n.navbar-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 68px;\n  display: flex;\n  align-items: center;\n  gap: 32px;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 20px;\n  color: var(--primary-dark-blue);\n  flex-shrink: 0;\n}\n.navbar-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.navbar-brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  letter-spacing: -0.5px;\n}\n.navbar-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-left: 16px;\n  flex: 1;\n}\n@media (max-width: 768px) {\n  .navbar-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav-link[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  border-radius: var(--radius-sm);\n  transition: color 0.2s, background 0.2s;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark-blue);\n  background: var(--light-blue);\n}\n.navbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-left: auto;\n}\n@media (max-width: 768px) {\n  .navbar-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.navbar-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 13px;\n}\n.mobile-menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 4px;\n  background: none;\n  margin-left: auto;\n  padding: 6px;\n}\n@media (max-width: 768px) {\n  .mobile-menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--primary-dark-blue);\n  border-radius: 2px;\n  transition: 0.2s;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 24px 16px;\n  border-top: 1px solid var(--border-color);\n  background: white;\n}\n.mobile-menu.open[_ngcontent-%COMP%] {\n  display: flex;\n}\n.mobile-menu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.mobile-menu[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4ff 0%,\n      #e8eaf6 50%,\n      #f0f4ff 100%);\n  padding: 80px 24px 100px;\n  overflow: hidden;\n  position: relative;\n}\n.hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -100px;\n  right: -100px;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 35, 126, 0.05) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.hero-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .hero-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  animation: fadeIn 0.6s ease;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--light-blue);\n  color: var(--primary-dark-blue);\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 24px;\n  border: 1px solid rgba(26, 35, 126, 0.15);\n}\n.hero-badge[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--accent-green);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(1.3);\n  }\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 800;\n  line-height: 1.15;\n  color: var(--primary-dark-blue);\n  margin-bottom: 20px;\n  letter-spacing: -1px;\n}\n@media (max-width: 768px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n}\n.hero-title[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-green),\n      var(--primary-green));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  margin-bottom: 36px;\n  max-width: 480px;\n}\n.hero-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-dark-blue);\n  font-weight: 700;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  font-size: 16px;\n  border-radius: 10px;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: var(--border-color);\n}\n.hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  animation: _ngcontent-%COMP%_slideIn 0.7s ease;\n}\n@media (max-width: 900px) {\n  .hero-visual[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.preview-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 28px;\n  box-shadow: 0 20px 60px rgba(26, 35, 126, 0.18);\n  position: relative;\n  z-index: 1;\n}\n.preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.preview-header[_ngcontent-%COMP%]   .preview-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.preview-header[_ngcontent-%COMP%]   .preview-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: var(--primary-dark-blue);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n}\n.preview-header[_ngcontent-%COMP%]   .preview-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.preview-header[_ngcontent-%COMP%]   .preview-amount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n}\n.preview-header[_ngcontent-%COMP%]   .preview-percent[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--accent-green);\n}\n.preview-progress[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.preview-progress[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%] {\n  height: 8px;\n  margin-bottom: 6px;\n}\n.preview-progress[_ngcontent-%COMP%]   .progress-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.preview-grid-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.preview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.preview-grid[_ngcontent-%COMP%]   .slot[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  border: 1.5px solid transparent;\n  transition: all 0.2s;\n}\n.preview-grid[_ngcontent-%COMP%]   .slot.completed[_ngcontent-%COMP%] {\n  background: var(--primary-green);\n  color: white;\n  border-color: var(--primary-green);\n}\n.preview-grid[_ngcontent-%COMP%]   .slot.available[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: var(--text-muted);\n  border-color: #e0e0e0;\n}\n.preview-grid[_ngcontent-%COMP%]   .slot.slot-dots[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--text-muted);\n  font-size: 14px;\n  border-color: transparent;\n}\n.preview-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.preview-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.preview-legend[_ngcontent-%COMP%]   .legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n}\n.preview-legend[_ngcontent-%COMP%]   .legend-dot.completed[_ngcontent-%COMP%] {\n  background: var(--primary-green);\n}\n.preview-legend[_ngcontent-%COMP%]   .legend-dot.available[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n}\n.floating-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  background: white;\n  border-radius: 10px;\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--primary-dark-blue);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  z-index: 2;\n}\n.floating-badge.badge-1[_ngcontent-%COMP%] {\n  top: -12px;\n  right: -16px;\n  animation: _ngcontent-%COMP%_float1 3s ease-in-out infinite;\n}\n.floating-badge.badge-2[_ngcontent-%COMP%] {\n  bottom: -12px;\n  left: -16px;\n  animation: _ngcontent-%COMP%_float2 3s ease-in-out infinite 1.5s;\n}\n@keyframes _ngcontent-%COMP%_float1 {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes _ngcontent-%COMP%_float2 {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 80px 24px;\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 56px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 800;\n  color: var(--primary-dark-blue);\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.section-title.light[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 768px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  max-width: 500px;\n  margin: 0 auto;\n}\n.section-subtitle.light[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.features[_ngcontent-%COMP%] {\n  background: var(--background);\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n@media (max-width: 900px) {\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.feature-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  padding: 32px 28px;\n  box-shadow: var(--shadow-md);\n  transition: transform 0.2s, box-shadow 0.2s;\n  border: 1px solid rgba(26, 35, 126, 0.06);\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg);\n}\n.feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 16px;\n}\n.feature-card[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--primary-dark-blue);\n  margin-bottom: 10px;\n}\n.feature-card[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.how-it-works[_ngcontent-%COMP%] {\n  background: var(--primary-dark-blue);\n}\n.steps-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n@media (max-width: 900px) {\n  .steps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .steps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.step-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: var(--radius-md);\n  padding: 28px 20px;\n  transition: background 0.2s;\n}\n.step-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.step-card[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 800;\n  color: var(--accent-green);\n  margin-bottom: 14px;\n  font-variant-numeric: tabular-nums;\n}\n.step-card[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 8px;\n}\n.step-card[_ngcontent-%COMP%]   .step-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.6;\n}\n.cta-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a237e 0%,\n      #283593 50%,\n      #1565c0 100%);\n  padding: 80px 24px;\n  text-align: center;\n}\n.cta-container[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n.cta-title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 800;\n  color: white;\n  margin-bottom: 16px;\n  letter-spacing: -0.5px;\n}\n@media (max-width: 768px) {\n  .cta-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.cta-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-bottom: 36px;\n  line-height: 1.7;\n}\n.cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-actions[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  font-size: 16px;\n  border-radius: 10px;\n}\n.cta-actions[_ngcontent-%COMP%]   .btn-cta-primary[_ngcontent-%COMP%] {\n  background: var(--accent-green);\n  color: white;\n  border: 2px solid var(--accent-green);\n}\n.cta-actions[_ngcontent-%COMP%]   .btn-cta-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-green);\n  border-color: var(--primary-green);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(56, 142, 60, 0.4);\n}\n.cta-actions[_ngcontent-%COMP%]   .btn-cta-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n}\n.cta-actions[_ngcontent-%COMP%]   .btn-cta-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: white;\n}\n.footer[_ngcontent-%COMP%] {\n  background: #0d1757;\n  padding: 28px 24px;\n}\n.footer-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.footer-container[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: white;\n}\n.footer-container[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.footer-container[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: white;\n  font-size: 17px;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.footer-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=landing.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/features/landing/landing.component.ts", lineNumber: 17 });
})();
export {
  LandingComponent
};
//# sourceMappingURL=chunk-B5P5BOOK.js.map
