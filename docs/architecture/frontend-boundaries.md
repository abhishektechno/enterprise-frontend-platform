# Frontend Package Boundaries

## Applications

Applications under `/apps` own product-specific features and routes.

Applications may consume packages.

Applications must not import source files directly from another application.

## Shared Packages

### design-system

Owns reusable visual components and design tokens.

Must not contain business-domain logic.

### shared-types

Owns cross-application contracts and shared TypeScript types.

Must not contain React components.

### api-client

Owns shared HTTP communication concerns.

Must not contain UI components.

## Dependency Direction

Allowed:

apps → packages

Not allowed:

packages → apps

Avoid:

app A → app B
