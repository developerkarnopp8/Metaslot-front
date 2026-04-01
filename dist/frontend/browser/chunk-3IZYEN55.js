import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-CRHN5OWP.js";

// src/app/core/services/spreadsheet.service.ts
var API_URL = "http://localhost:3001/api";
var SpreadsheetService = class _SpreadsheetService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getAll() {
    return this.http.get(`${API_URL}/spreadsheets`);
  }
  getById(id) {
    return this.http.get(`${API_URL}/spreadsheets/${id}`);
  }
  create(data) {
    return this.http.post(`${API_URL}/spreadsheets`, data);
  }
  update(id, data) {
    return this.http.put(`${API_URL}/spreadsheets/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${API_URL}/spreadsheets/${id}`);
  }
  join(token) {
    return this.http.post(`${API_URL}/spreadsheets/join`, { shareToken: token });
  }
  getMembers(id) {
    return this.http.get(`${API_URL}/spreadsheets/${id}/members`);
  }
  removeMember(spreadsheetId, userId) {
    return this.http.delete(`${API_URL}/spreadsheets/${spreadsheetId}/members/${userId}`);
  }
  static {
    this.\u0275fac = function SpreadsheetService_Factory(t) {
      return new (t || _SpreadsheetService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpreadsheetService, factory: _SpreadsheetService.\u0275fac, providedIn: "root" });
  }
};

export {
  SpreadsheetService
};
//# sourceMappingURL=chunk-3IZYEN55.js.map
