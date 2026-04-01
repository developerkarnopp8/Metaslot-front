import {
  HttpClient,
  Router,
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-CRHN5OWP.js";

// src/app/core/services/auth.service.ts
var API_URL = "http://localhost:3001/api";
var TOKEN_KEY = "deposits_token";
var USER_KEY = "deposits_user";
var AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.router = inject(Router);
    this.currentUser = signal(this.loadStoredUser());
  }
  loadStoredUser() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  login(email, password) {
    return this.http.post(`${API_URL}/auth/login`, { email, password }).pipe(tap((res) => {
      localStorage.setItem(TOKEN_KEY, res.token);
      localStorage.setItem(USER_KEY, JSON.stringify(res.user));
      this.currentUser.set(res.user);
    }));
  }
  register(name, email, password) {
    return this.http.post(`${API_URL}/auth/register`, { name, email, password }).pipe(tap((res) => {
      localStorage.setItem(TOKEN_KEY, res.token);
      localStorage.setItem(USER_KEY, JSON.stringify(res.user));
      this.currentUser.set(res.user);
    }));
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.currentUser.set(null);
    this.router.navigate(["/login"]);
  }
  getMe() {
    return this.http.get(`${API_URL}/auth/me`).pipe(tap((user) => {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      this.currentUser.set(user);
    }));
  }
  isAuthenticated() {
    return !!this.getToken();
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY) || "";
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-65PPVMEG.js.map
