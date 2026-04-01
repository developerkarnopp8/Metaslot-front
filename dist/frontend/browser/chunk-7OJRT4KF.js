import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-CRHN5OWP.js";

// src/app/core/services/deposit.service.ts
var API_URL = "http://localhost:3001/api";
var DepositService = class _DepositService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getAll(spreadsheetId) {
    return this.http.get(`${API_URL}/spreadsheets/${spreadsheetId}/deposits`);
  }
  create(spreadsheetId, data) {
    return this.http.post(`${API_URL}/spreadsheets/${spreadsheetId}/deposits`, data);
  }
  update(spreadsheetId, depositId, data) {
    return this.http.put(`${API_URL}/spreadsheets/${spreadsheetId}/deposits/${depositId}`, data);
  }
  delete(spreadsheetId, depositId) {
    return this.http.delete(`${API_URL}/spreadsheets/${spreadsheetId}/deposits/${depositId}`);
  }
  static {
    this.\u0275fac = function DepositService_Factory(t) {
      return new (t || _DepositService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepositService, factory: _DepositService.\u0275fac, providedIn: "root" });
  }
};

export {
  DepositService
};
//# sourceMappingURL=chunk-7OJRT4KF.js.map
