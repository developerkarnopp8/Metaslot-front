# 200 Deposits — Frontend

Interface web do desafio financeiro dos 200 depósitos, construída com Angular 17.

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| Angular | ^17.0 | Framework SPA |
| TypeScript | ~5.2 | Linguagem |
| RxJS | ~7.8 | Programação reativa |
| Angular Router | ^17.0 | Navegação SPA com guards |
| Angular Forms | ^17.0 | Formulários reativos |

---

## Estrutura de Pastas

```
frontend/
└── src/
    └── app/
        ├── app.routes.ts           # Rotas SPA com guards de autenticação
        ├── app.config.ts           # Configuração global Angular
        ├── core/
        │   ├── guards/
        │   │   └── auth.guard.ts           # Protege rotas privadas, preserva returnUrl
        │   ├── interceptors/
        │   │   └── auth.interceptor.ts     # Injeta JWT em todas as requisições
        │   ├── models/
        │   │   ├── user.model.ts
        │   │   ├── spreadsheet.model.ts
        │   │   └── deposit.model.ts
        │   └── services/
        │       ├── auth.service.ts         # Login, registro, token local
        │       ├── spreadsheet.service.ts  # CRUD de planilhas e membros
        │       └── deposit.service.ts      # CRUD de depósitos
        └── features/
            ├── landing/            # Página inicial pública
            ├── auth/
            │   ├── login/          # Formulário de login
            │   └── register/       # Formulário de registro
            ├── dashboard/          # Visualização dos 200 slots + progresso
            ├── deposit/
            │   └── new-deposit/    # Formulário para registrar depósito
            ├── history/            # Histórico de depósitos
            ├── group/              # Gerenciar grupo e membros
            └── join/               # Entrar via link de convite
```

---

## Instalação e Execução

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm start
```

A aplicação abre em `http://localhost:4200`

> O backend precisa estar rodando em `http://localhost:3001`. Consulte o README do backend para configurá-lo.

---

## Configuração da API

A URL base da API está definida diretamente nos serviços. Se o backend rodar em outra porta, altere a constante `API_URL` nos arquivos:

- `src/app/core/services/auth.service.ts`
- `src/app/core/services/spreadsheet.service.ts`
- `src/app/core/services/deposit.service.ts`

```typescript
const API_URL = 'http://localhost:3001/api';
```

---

## Rotas

| Rota | Componente | Protegida |
|---|---|---|
| `/` | LandingComponent | Não |
| `/login` | LoginComponent | Não |
| `/register` | RegisterComponent | Não |
| `/dashboard` | DashboardComponent | Sim |
| `/dashboard/:spreadsheetId` | DashboardComponent | Sim |
| `/deposit/new/:spreadsheetId` | NewDepositComponent | Sim |
| `/history/:spreadsheetId` | HistoryComponent | Sim |
| `/group/:spreadsheetId` | GroupComponent | Sim |
| `/join/:token` | JoinComponent | Sim |

---

## Autenticação

O `authGuard` protege todas as rotas privadas. Quando um usuário não autenticado tenta acessar uma rota protegida:

1. É redirecionado para `/login?returnUrl=<rota-original>`
2. Após login ou registro bem-sucedido, é redirecionado de volta para a rota original

O `auth.interceptor` injeta automaticamente o token JWT no header `Authorization` de todas as requisições HTTP.

---

## Fluxo de Convite

```
1. Owner copia o link de convite em /group/:spreadsheetId
2. Envia o link /join/<shareToken> para o novo membro
3. Novo membro abre o link
   → Se não autenticado: /login?returnUrl=/join/<token>
   → Pode criar conta via "Criar conta grátis" (returnUrl é preservado)
4. Após login/registro: redireciona para /join/<token>
5. JoinComponent chama a API automaticamente e entra no grupo
6. Redireciona para /dashboard/<spreadsheetId>
```

---

## Serviços

### AuthService
- `login(email, password)` — autentica e salva o token
- `register(name, email, password)` — cria conta e autentica
- `logout()` — remove token e redireciona para `/login`
- `isAuthenticated()` — verifica se há token válido
- `currentUser` — signal com os dados do usuário logado

### SpreadsheetService
- `getAll()` — lista planilhas do usuário
- `getById(id)` — retorna uma planilha
- `create(data)` — cria nova planilha
- `update(id, data)` — atualiza planilha
- `delete(id)` — soft-delete
- `join(token)` — entra via shareToken
- `getMembers(id)` — lista membros
- `removeMember(spreadsheetId, userId)` — remove membro

### DepositService
- `getAll(spreadsheetId)` — lista depósitos da planilha
- `create(spreadsheetId, data)` — registra novo depósito
- `update(spreadsheetId, depositId, data)` — atualiza depósito
- `delete(spreadsheetId, depositId)` — remove depósito

---

## Papéis de Usuário

| Papel | Criar depósito | Editar depósito | Remover membro | Editar planilha |
|---|---|---|---|---|
| `owner` | Sim | Sim | Sim | Sim |
| `editor` | Sim | Sim | Não | Não |
| `viewer` | Não | Não | Não | Não |
