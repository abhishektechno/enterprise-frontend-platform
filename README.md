# Enterprise Frontend Platform

A production-style **React + TypeScript enterprise frontend platform** built to demonstrate scalable frontend architecture, authentication, authorization, routing, modular package boundaries, and modern engineering practices.

This project is being developed as a portfolio-quality engineering project for senior frontend roles. The focus is on architecture, maintainability, security-aware UI design, testing, accessibility, and production-oriented frontend practices.

 Tech Stack
- **React**
- **TypeScript**
- **React Router**
- **Vite**
- **pnpm Workspaces**
- **Oxlint**
- **Prettier**
- **Git**

### Planned

- Storybook
- Playwright
- Vitest
- React Testing Library
- Design System
- Module Federation
- Micro-frontends
- GitHub Actions
- Docker
- API integration
- Runtime validation

---

## Architecture

```text
                        AuthProvider
                             │
                           Router
                             │
                ┌────────────┴────────────┐
                │                         │
           Public Routes             RequireAuth
                │                         │
            AuthLayout                AppLayout
                │                         │
            LoginPage          ┌──────────┼──────────┐
                               │          │          │
                          Dashboard    Catalog     Orders
                                         │           │
                                  Permission     Component
                                    Guard        Permissions
                                         │
                                    AdminLayout
                                         │
                              ┌──────────┼──────────┐
                              │          │          │
                            Users      Roles     Settings
```

---

## Repository Structure

```text
enterprise-frontend-platform/
│
├── apps/
│   └── shell/
│       └── src/
│           ├── app/
│           ├── auth/
│           ├── components/
│           ├── layouts/
│           ├── navigation/
│           ├── pages/
│           └── main.tsx
│
├── packages/
│   ├── api-client/
│   ├── design-system/
│   └── shared-types/
│
├── docs/
│   ├── adr/
│   ├── architecture/
│   └── ai-assisted-development.md
│
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── README.md
```

---

## Authentication

Authentication state is managed globally through `AuthProvider`.

The application supports three authentication states:

```text
loading
authenticated
unauthenticated
```

Protected application routes are wrapped by `RequireAuth`.

```text
Protected Route
      │
      ▼
 RequireAuth
      │
   ┌──┴──┐
   │     │
  No    Yes
   │     │
/login  App
```

The current authentication flow is intentionally mocked for architecture and portfolio demonstration. A production version would use a backend-managed session.

---

## Authorization / RBAC

The project uses **permission-based Role-Based Access Control**.

### Demo Roles

| Capability | Viewer | Manager | Admin |
|---|:---:|:---:|:---:|
| Dashboard | ✅ | ✅ | ✅ |
| View Orders | ✅ | ✅ | ✅ |
| Edit Orders | ❌ | ✅ | ✅ |
| Catalog | ❌ | ✅ | ✅ |
| Administration | ❌ | ❌ | ✅ |

### Permissions

```text
dashboard:view
catalog:view
orders:view
orders:edit
admin:view
```

Authorization is applied at three frontend levels:

```text
Permissions
    │
    ├── Navigation → hide unavailable menu items
    │
    ├── Routes → block direct URL access
    │
    └── Components → hide restricted actions
```

### Route-Level Authorization

```tsx
<RequirePermission permission="admin:view" />
```

### Component-Level Authorization

```tsx
<Can permission="orders:edit">
  <button type="button">Edit Order</button>
</Can>
```

> Frontend permission checks improve UX and application flow. Real security must still be enforced by the backend.

---

## Routing

The application uses nested layouts and route groups.

```text
/login
/
/catalog
/orders
/admin
├── /users
├── /roles
└── /settings
/forbidden
```

### Layout Strategy

```text
AuthLayout
└── LoginPage

AppLayout
├── Header
├── Sidebar
└── Outlet
    ├── Dashboard
    ├── Catalog
    ├── Orders
    └── AdminLayout
        ├── AdminNavigation
        └── Outlet
```

This avoids duplicating shared UI across pages.

---

## Monorepo Packages

### `@enterprise/shared-types`

Shared application contracts such as:

- User
- Role
- Permission
- Product
- Order

### `@enterprise/api-client`

Shared HTTP communication layer.

Planned responsibilities:

- request handling
- error mapping
- authentication headers
- runtime validation
- cancellation
- telemetry

### `@enterprise/design-system`

Foundation for reusable UI components and design tokens.

Planned:

- Button
- Input
- Modal
- Table
- Typography
- Storybook
- Accessibility documentation

---

## Architecture Principles

### Dependency Direction

Allowed:

```text
apps
 ↓
packages
```

Not allowed:

```text
packages
 ↓
apps
```

Shared packages must remain application-independent.

### Separation of Concerns

Examples:

- `RequireAuth` → authentication decision
- `RequirePermission` → authorization decision
- `AppLayout` → application shell
- `Sidebar` → navigation presentation
- navigation config → navigation definition
- pages → route-specific UI

---

## Accessibility

Accessibility is considered during implementation rather than added at the end.

Current practices include:

- semantic HTML
- explicit form labels
- native interactive controls
- navigation landmarks
- accessible route structure
- ARIA labels where appropriate

Automated accessibility testing will be added later.

---

## AI-Assisted Engineering

AI tools may be used for:

- architecture review
- implementation assistance
- refactoring
- debugging
- test generation
- documentation
- code review

AI-generated output is reviewed and validated before acceptance.

```text
Requirement
    ↓
Human specification
    ↓
AI-assisted implementation
    ↓
Human review
    ↓
Type checking
    ↓
Testing
    ↓
Final implementation
```

Architectural decisions remain human-owned.

See `docs/ai-assisted-development.md` for details.

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm
- Git

Check versions:

```bash
node --version
pnpm --version
git --version
```

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
pnpm dev
```

Default local URL:

```text
http://localhost:5173
```

---

## Quality Checks

### Type Checking

```bash
pnpm typecheck
```

### Linting

```bash
pnpm lint
```

### Formatting

```bash
pnpm format
```

### Formatting Check

```bash
pnpm format:check
```

### Production Build

```bash
pnpm build
```

### Run All Validation

```bash
pnpm check
```

---

## Roadmap

### Phase 1 — Platform Foundation

- [x] pnpm monorepo
- [x] React + TypeScript shell
- [x] Shared TypeScript configuration
- [x] Workspace package boundaries
- [x] Shared types package
- [x] API client foundation
- [x] Design system package foundation
- [x] Architecture Decision Records

### Phase 2 — Application Shell

- [x] Routing architecture
- [x] Public and authenticated layouts
- [x] Nested layouts
- [x] Config-driven navigation
- [x] Authentication provider
- [x] Authentication guard
- [x] RBAC permission model
- [x] Permission-aware navigation
- [x] Route-level authorization
- [x] Forbidden page
- [x] Component-level authorization
- [ ] Route error handling
- [ ] React error boundary
- [ ] Responsive shell styling

### Phase 3 — Design System

- [ ] Design tokens
- [ ] Typography
- [ ] Button
- [ ] Input
- [ ] Select
- [ ] Modal
- [ ] Table
- [ ] Storybook
- [ ] Accessibility documentation

### Phase 4 — Catalog

- [ ] Product listing
- [ ] Product filtering
- [ ] Product forms
- [ ] API integration
- [ ] Loading and error states

### Phase 5 — Orders

- [ ] Order listing
- [ ] Order details
- [ ] Status workflow
- [ ] Permission-aware editing
- [ ] High-volume data handling

### Phase 6 — Micro-Frontends

- [ ] Shell federation
- [ ] Catalog remote
- [ ] Orders remote
- [ ] Shared dependency strategy
- [ ] Runtime integration
- [ ] Failure isolation

### Phase 7 — Testing

- [ ] Unit tests
- [ ] React Testing Library
- [ ] Playwright E2E
- [ ] RBAC test matrix
- [ ] Accessibility testing

### Phase 8 — Production Engineering

- [ ] Runtime validation
- [ ] API error strategy
- [ ] Observability
- [ ] Security hardening
- [ ] Performance optimization
- [ ] Bundle analysis

### Phase 9 — Delivery

- [ ] GitHub Actions
- [ ] Automated validation
- [ ] Docker
- [ ] Deployment
- [ ] Live demo

---

## Project Purpose

This repository is intentionally designed to demonstrate more than UI development.

It focuses on:

- frontend architecture
- maintainability
- type safety
- security-aware frontend design
- enterprise routing
- RBAC
- reusable platform packages
- technical decision documentation
- testing strategy
- accessibility
- production readiness

The goal is to demonstrate how a **Senior Frontend Engineer / Technical Lead** approaches the design and evolution of a scalable frontend platform.

---

## Author

**Abhishek Dubey**  
Senior Frontend Engineer / Technical Lead

Core areas:

- React
- TypeScript
- JavaScript
- Frontend Architecture
- Enterprise UI Engineering
- Testing & Automation
- Accessibility
- Technical Leadership
- AI-Assisted Software Development

LinkedIn: https://www.linkedin.com/in/rpabhishekdubey/

---

## Project Status

**Active development**

Current focus:

> Application shell, authentication, authorization, routing, and resilient frontend architecture.

Next milestone:

> Route error handling, React error boundaries, and production-grade failure states.
