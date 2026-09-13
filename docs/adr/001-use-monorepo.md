# ADR 001: Use a Monorepo

## Status

Accepted

## Context

The platform will contain multiple frontend applications and shared packages,
including a design system, API client, and shared TypeScript types.

Managing these projects in separate repositories would add unnecessary
complexity for local development and shared dependency management.

## Decision

Use a pnpm workspace-based monorepo.

Applications will live under `/apps`.

Reusable packages will live under `/packages`.

## Consequences

### Positive

- Shared tooling and TypeScript configuration
- Easier local development
- Consistent dependency management
- Clear package boundaries
- Easier refactoring across applications

### Negative

- Repository size will grow
- CI workflows need package-aware execution
- Teams would require clear ownership boundaries at larger scale