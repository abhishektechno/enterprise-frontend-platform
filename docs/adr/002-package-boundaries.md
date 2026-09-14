# ADR 002: Establish Explicit Frontend Package Boundaries

## Status

Accepted

## Context

The platform will contain multiple applications and shared libraries.

Without explicit ownership boundaries, shared code can become tightly coupled and
make independent application development difficult.

## Decision

The repository will use three categories:

- applications
- platform packages
- domain contracts

Applications may depend on shared packages.

Shared packages must never depend on applications.

Business-domain logic should remain close to the application or feature that
owns it unless multiple applications genuinely require it.

## Consequences

### Positive

- Clear ownership
- Reduced coupling
- Easier future micro-frontend extraction
- More predictable dependency graph
- Easier testing

### Negative

- Some duplication may initially be accepted
- Developers must actively maintain package boundaries
